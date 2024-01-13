import { ScrollView, View } from 'react-native';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Container } from '@/components/Container';
import Tag from '@/components/Tag';
import { Typo } from '@/components/Typograph';
import { IVeterinary } from '@/types/veterinary';
import { theme } from '@/styles/theme';

interface VetProfileContentProps {
    vet: IVeterinary;
}

const VetProfileContent = ({ vet }: VetProfileContentProps) => {
    return (
        <Container>
            <ScrollView className='flex-1 bg-slate-100'>
                <View className='h-40 bg-red-300' />
                <View className='-mt-8 p-4'>
                    <View className='gap-2 rounded-xl bg-white p-4'>
                        <View className='mb-4 flex-1 items-center'>
                            <View>
                                <View className=' -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-slate-100'>
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

                        <View className='mb-4 items-start'>
                            <View className='item-center mb-1 flex-row gap-1'>
                                <AntDesign
                                    name='user'
                                    size={18}
                                    color={theme.colors['neutral-700']}
                                />
                                <Typo.P2
                                    weight='medium'
                                    className='-mt-[1px] flex-1 flex-wrap text-center'
                                >
                                    Sobre {vet.name}
                                </Typo.P2>
                            </View>

                            <Typo.S1 className='text-neutral-300'>{vet.about}</Typo.S1>
                        </View>

                        <View className='mb-4 items-start'>
                            <View className='item-center mb-1 flex-row gap-2'>
                                <SimpleLineIcons
                                    name='graduation'
                                    size={18}
                                    color={theme.colors['neutral-700']}
                                />
                                <Typo.P2
                                    weight='medium'
                                    className='-mt-[1px] flex-1 flex-wrap text-center'
                                >
                                    Formação
                                </Typo.P2>
                            </View>

                            <Typo.S1 className='text-neutral-300'>
                                • {vet.graduation.join('\n• ')}
                            </Typo.S1>
                        </View>

                        <View className='items-start'>
                            <View className='item-center mb-1 flex-row gap-2'>
                                <MaterialIcons
                                    name='work-outline'
                                    size={18}
                                    color={theme.colors['neutral-700']}
                                />
                                <Typo.P2
                                    weight='medium'
                                    className='-mt-[1px] flex-1 flex-wrap text-center'
                                >
                                    Experiência profissional
                                </Typo.P2>
                            </View>

                            <Typo.S1 className='text-neutral-300'>
                                • {vet.experience.join('\n• ')}
                            </Typo.S1>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};

export default VetProfileContent;
