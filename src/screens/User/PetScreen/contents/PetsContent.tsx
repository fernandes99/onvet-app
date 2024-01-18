import { ScrollView, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { IUser, IUserPet } from '@/types/user';
import { theme } from '@/styles/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';
import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';

interface PetsContentProps {
    pets: IUser['pets'];
    onRemovePet: (petId: IUserPet['id']) => void;
}

export const PetsContent = ({ pets, onRemovePet }: PetsContentProps) => {
    const goToPetNewScreen = () => {
        router.push('/main/pet/new/');
    };

    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    return (
        <ScrollView>
            <Container className='flex-1 items-center p-6'>
                <View className='w-full items-center justify-center gap-6'>
                    {pets.map((pet) => (
                        <View
                            className='w-full rounded-lg border border-neutral-100 p-4'
                            key={pet.name}
                        >
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
                                <Field title='Data de nascimento' value={pet.birth.date || '-'} />
                                <Field title='Peso' value={`${pet.weight}kg`} />
                            </View>

                            <View className='gap-2'>
                                <Button variant='secondary'>
                                    <Typo.P1>Alterar cadastro</Typo.P1>
                                </Button>
                                <Button
                                    variant='secondary'
                                    className='border-0 py-4'
                                    onPress={() => onRemovePet(pet.id)}
                                >
                                    <Typo.P1 className='text-red-500'>Excluir cadastro</Typo.P1>
                                </Button>
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
    );
};
