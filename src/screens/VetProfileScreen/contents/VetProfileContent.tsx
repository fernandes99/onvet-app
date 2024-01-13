import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Container } from '@/components/Container';
import Tag from '@/components/Tag';
import { Typo } from '@/components/Typograph';
import { IVeterinary } from '@/types/veterinary';
import { theme } from '@/styles/theme';
import { Button } from '@/components/Button';
import { router } from 'expo-router';
import format from '@/utils/scripts/format';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCheckout } from '@/store/reducers/checkout';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

interface VetProfileContentProps {
    vet: IVeterinary;
}

const VetProfileContent = ({ vet }: VetProfileContentProps) => {
    const dispatch = useDispatch();
    const schedule = useSelector((state: RootState) => state.schedule);

    const goToBack = () => {
        router.back();
    };

    const goToCheckoutScreen = () => {
        router.push('/checkout/');
    };

    useEffect(() => {
        console.log('schedule.userAddress', schedule);
        dispatch(
            setCheckout({
                payment: {
                    method: 'pix'
                },
                schedule: {
                    dateTime: schedule.dateTime!,
                    type: schedule.type ? schedule.type : 'appointment',
                    userAddress: schedule.userAddress!,
                    vaccines: schedule.vaccines
                },
                summary: {
                    totalPrice: vet.price
                },
                veterinary: vet,
                messageToVeterinary: ''
            })
        );
    }, []);

    return (
        <Container>
            <ScrollView className='flex-1 bg-slate-100'>
                <View className='h-40 bg-red-300'>
                    <View className='p-4'>
                        <TouchableOpacity
                            onPress={goToBack}
                            className='h-14 w-14 items-center justify-center rounded-full bg-white'
                        >
                            <AntDesign
                                name='arrowleft'
                                size={24}
                                color={theme.colors['neutral-400']}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='-mt-8 p-4'>
                    <View className='gap-2 rounded-xl bg-white p-4'>
                        <View className='mb-6 flex-1 items-center gap-2'>
                            <View>
                                <View className=' -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white'>
                                    <Image
                                        style={{ flex: 1 }}
                                        source={vet.profileImage}
                                        contentFit='cover'
                                        transition={500}
                                    />
                                </View>
                            </View>
                            <Typo.P1 weight='medium' className='flex-1 flex-wrap text-center'>
                                {vet.name} {vet.surname}
                            </Typo.P1>
                            <View className='mb-3 flex-row flex-wrap justify-center gap-2'>
                                {vet.specialties.map((specialty) => (
                                    <Tag title={specialty.name} key={specialty.slug} />
                                ))}
                            </View>
                        </View>

                        <View className='gap-6'>
                            <View className='items-start'>
                                <View className='item-center mb-1 flex-row gap-1'>
                                    <AntDesign
                                        name='user'
                                        size={18}
                                        color={theme.colors['neutral-700']}
                                    />
                                    <Typo.P1 weight='medium' className='-mt-[1px] flex-1 flex-wrap'>
                                        Sobre {vet.name}
                                    </Typo.P1>
                                </View>

                                <Typo.P2 className='text-neutral-300'>{vet.about}</Typo.P2>
                            </View>

                            <View className='mb-4 items-start'>
                                <View className='item-center mb-1 flex-row gap-2'>
                                    <SimpleLineIcons
                                        name='graduation'
                                        size={18}
                                        color={theme.colors['neutral-700']}
                                    />
                                    <Typo.P1 weight='medium' className='-mt-[1px] flex-1 flex-wrap'>
                                        Formação
                                    </Typo.P1>
                                </View>

                                <Typo.P2 className='text-neutral-300'>
                                    • {vet.graduation.join('\n• ')}
                                </Typo.P2>
                            </View>

                            <View className='items-start'>
                                <View className='item-center mb-1 flex-row gap-2'>
                                    <MaterialIcons
                                        name='work-outline'
                                        size={18}
                                        color={theme.colors['neutral-700']}
                                    />
                                    <Typo.P1 weight='medium' className='-mt-[1px] flex-1 flex-wrap'>
                                        Experiência profissional
                                    </Typo.P1>
                                </View>

                                <Typo.P2 className='text-neutral-300'>
                                    • {vet.experience.join('\n• ')}
                                </Typo.P2>
                            </View>

                            <View className='items-start'>
                                <View className='item-center mb-1 flex-row gap-2'>
                                    <Octicons
                                        name='verified'
                                        size={18}
                                        color={theme.colors['neutral-700']}
                                    />
                                    <Typo.P1 weight='medium' className='-mt-[1px] flex-1 flex-wrap'>
                                        CRMV
                                    </Typo.P1>
                                </View>

                                <Typo.P2 className='text-neutral-300'>{vet.crmv}</Typo.P2>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='flex-row border-t border-t-neutral-100 bg-white p-6'>
                <View className='flex-1 flex-wrap justify-center'>
                    <Typo.P2 className='text-neutral-400'>Total</Typo.P2>
                    <Typo.P1 weight='medium' className='text-green-600'>
                        {format.money(vet.price)}
                    </Typo.P1>
                </View>
                <Button className='flex-1' onPress={goToCheckoutScreen}>
                    <Typo.P1 weight='medium' className='text-primary-500'>
                        Continuar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
};

export default VetProfileContent;
