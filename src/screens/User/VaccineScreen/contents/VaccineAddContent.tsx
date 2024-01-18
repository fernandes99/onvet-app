import { useEffect, useMemo, useState } from 'react';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import AddVaccineModal from '../components/AddVaccineModal';
import { IUser, IUserPet } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { theme } from '@/styles/theme';
import { IScheduleVaccine } from '@/store/reducers/schedule';
import { router } from 'expo-router';

interface VaccineAddContentProps {
    vaccines: IScheduleVaccine[];
}

const VaccineAddContent = ({ vaccines }: VaccineAddContentProps) => {
    const [pets, setPets] = useState<IUser['pets']>([]);
    const [vaccineModal, setVaccineModal] = useState({
        show: false,
        petId: ''
    });

    const sortedPets = useMemo(() => {
        return pets?.sort((petA, petB) => {
            const vaccinesSeletedA = vaccines.filter((vaccine) => vaccine.petId === petA.id);
            const vaccinesSeletedB = vaccines.filter((vaccine) => vaccine.petId === petB.id);

            if (vaccinesSeletedA.length === vaccinesSeletedB.length) {
                return 0;
            }

            return vaccinesSeletedB.length > vaccinesSeletedA.length ? 1 : -1;
        });
    }, [vaccines, pets]);

    const getPets = () => {
        storage
            .get('user_pets')
            .then(setPets)
            .catch(() => {
                Alert.alert('Erro ao buscar os pets', 'Tente novamente mais tarde.', [
                    { text: 'Fechar' }
                ]);
            });
    };

    const openAddVaccineModal = (petId: IUserPet['id']) => {
        setVaccineModal({
            show: true,
            petId
        });
    };

    const onCloseAddVaccineModal = () => {
        setVaccineModal({
            ...vaccineModal,
            show: false
        });
    };

    const goToAddPetScreen = () => {
        router.push('/user/main/pet/new/');
    };

    useEffect(getPets, []);
    return (
        <Container>
            <ScrollView className='flex-1 bg-white'>
                <Container className='p-6'>
                    <Typo.P1 weight='medium'>Meus pets</Typo.P1>
                    <Typo.P2 className='mb-4 text-neutral-400'>
                        Escolha um pet para adicionar as vacinas
                    </Typo.P2>

                    {sortedPets?.map((pet) => {
                        const vaccinesSeleted = vaccines.filter(
                            (vaccine) => vaccine.petId === pet.id
                        );

                        console.log(vaccinesSeleted?.length);

                        return (
                            <TouchableOpacity
                                className='mb-6 flex-row items-center gap-6 rounded-xl border border-neutral-100 p-4'
                                onPress={() => openAddVaccineModal(pet.id)}
                                key={pet.id}
                            >
                                {pet.type === 'cat' && <AvatarCatIllustration size={64} />}
                                {pet.type === 'dog' && <AvatarDogIllustration size={64} />}

                                <View>
                                    <Typo.H5 weight='medium'>{pet.name}</Typo.H5>
                                    <Typo.P1 className='text-neutral-400'>{pet.breed}</Typo.P1>

                                    {!!vaccinesSeleted?.length && (
                                        <View className='mb-2 mt-1 rounded-full bg-primary-100 px-3 py-1'>
                                            <Typo.P2 weight='medium' className='text-primary-600'>
                                                {vaccinesSeleted.length}{' '}
                                                {vaccinesSeleted.length === 1
                                                    ? 'Vacina selecionada'
                                                    : 'Vacinas selecionadas'}
                                            </Typo.P2>
                                        </View>
                                    )}
                                </View>

                                <View className='absolute right-4 top-1/2'>
                                    <Entypo
                                        name='chevron-small-right'
                                        size={24}
                                        color={theme.colors['primary-500']}
                                    />
                                </View>
                            </TouchableOpacity>
                        );
                    })}

                    <TouchableOpacity onPress={goToAddPetScreen} className='mt-8 items-center'>
                        <View className='mb-2 h-24 w-24 items-center justify-center rounded-full bg-primary-100'>
                            <AntDesign
                                name='pluscircle'
                                size={32}
                                color={theme.colors['primary-500']}
                            />
                        </View>
                        <Typo.H5 className='text-primary-500'>Cadastrar pet</Typo.H5>
                    </TouchableOpacity>
                </Container>
            </ScrollView>

            {vaccineModal.show && (
                <AddVaccineModal
                    visible={vaccineModal.show}
                    petId={vaccineModal.petId}
                    onClose={onCloseAddVaccineModal}
                    currentVaccines={vaccines}
                />
            )}
        </Container>
    );
};

export default VaccineAddContent;
