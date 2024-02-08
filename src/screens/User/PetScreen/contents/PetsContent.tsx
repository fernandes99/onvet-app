import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { IUser, IUserPet } from '@/types/user';
import { theme } from '@/styles/theme';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';
import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';
import CustomModal from '@/components/Modal';
import { Button } from '@/components/Button';

interface IActionModal {
    show: boolean;
    pet: IUserPet | null;
}

interface PetsContentProps {
    pets: IUser['pets'];
    onRemovePet: (petId: IUserPet['id']) => void;
}

export const PetsContent = ({ pets, onRemovePet }: PetsContentProps) => {
    const [actionModal, setActionModal] = useState<IActionModal>({
        show: false,
        pet: null
    });
    const goToPetNewScreen = () => {
        router.push('/user/main/pet/new/');
    };

    const pressActionButton = (pet: IUserPet) => {
        setActionModal({ show: true, pet });
    };

    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    return (
        <>
            <ScrollView>
                <Container className='flex-1 items-center p-6'>
                    <View className='w-full items-center justify-center gap-6'>
                        {pets.map((pet) => (
                            <View
                                className='relative w-full rounded-lg border border-neutral-100 p-4'
                                key={pet.name}
                            >
                                <Button
                                    variant='icon'
                                    className='absolute right-2 top-2 h-12 w-12'
                                    onPress={() => pressActionButton(pet)}
                                >
                                    <Entypo
                                        name='dots-three-vertical'
                                        size={16}
                                        color={theme.colors['neutral-300']}
                                    />
                                </Button>

                                <View className='mb-6 flex-row items-center gap-6'>
                                    {pet.type === 'cat' && <AvatarCatIllustration size={64} />}
                                    {pet.type === 'dog' && <AvatarDogIllustration size={64} />}

                                    <View>
                                        <Typo.H5 weight='medium'>{pet.name}</Typo.H5>
                                        <Typo.P1>{pet.breed}</Typo.P1>
                                    </View>
                                </View>

                                <View className='mb-6'>
                                    <Field
                                        title='Pet'
                                        value={pet.type == 'cat' ? 'Gato' : 'Cachorro'}
                                    />
                                    <Field
                                        title='Sexo'
                                        value={pet.gender === 'female' ? 'Femêa' : 'Macho'}
                                    />
                                    <Field title='Castrado' value={pet.castrated ? 'Sim' : 'Não'} />
                                    <Field
                                        title='Data de nascimento'
                                        value={pet.birth.date || '-'}
                                    />
                                    <Field title='Peso' value={`${pet.weight}kg`} />
                                </View>
                            </View>
                        ))}
                    </View>

                    <TouchableOpacity onPress={goToPetNewScreen} className='my-9 items-center'>
                        <View className='mb-2 h-24 w-24 items-center justify-center rounded-full bg-primary-100'>
                            <AntDesign
                                name='pluscircle'
                                size={32}
                                color={theme.colors['primary-500']}
                            />
                        </View>
                    </TouchableOpacity>
                </Container>
            </ScrollView>

            <CustomModal
                visible={actionModal.show}
                onRequestClose={() => setActionModal({ show: false, pet: null })}
                height=''
            >
                <View>
                    <Typo.P1 weight='medium' className='mb-6'>
                        O que quer fazer?
                    </Typo.P1>
                    <View className='flex-row gap-2'>
                        <Button variant='ghost' className='flex-1 border-red-300'>
                            <AntDesign
                                name='delete'
                                size={20}
                                color={theme.colors['red-500']}
                                className='mb-1'
                            />
                            <Typo.P1 className='text-red-500'>Deletar</Typo.P1>
                        </Button>
                        <Button variant='ghost' className='flex-1 border-primary-500'>
                            <Feather
                                name='edit'
                                size={20}
                                color={theme.colors['primary-500']}
                                className='mb-1'
                            />
                            <Typo.P1 className='text-primary-500'>Editar</Typo.P1>
                        </Button>
                    </View>
                </View>
            </CustomModal>
        </>
    );
};
