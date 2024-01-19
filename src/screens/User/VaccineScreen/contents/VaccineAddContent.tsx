import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import AddVaccineModal from '../components/AddVaccineModal';
import { IUser, IUserPet } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { theme } from '@/styles/theme';
import { IScheduleVaccine } from '@/store/reducers/schedule';
import { PetCard } from '../components/PetCard';

interface VaccineAddContentProps {
    vaccines: IScheduleVaccine[];
}

const VaccineAddContent = ({ vaccines }: VaccineAddContentProps) => {
    const [pets, setPets] = useState<IUser['pets']>([]);
    const [loadingContent, setLoadingContent] = useState(true);
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
        setLoadingContent(true);
        storage
            .get('user_pets')
            .then(setPets)
            .catch(() => {
                Alert.alert('Erro ao buscar os pets', 'Tente novamente mais tarde.', [
                    { text: 'Fechar' }
                ]);
            })
            .finally(() => setLoadingContent(false));
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
        //@ts-ignore
        router.push('/user/main/pet/new/?origin=vaccines');
    };

    useEffect(getPets, []);

    if (loadingContent) {
        return (
            <ActivityIndicator
                className='flex-1 bg-white'
                color={theme.colors['primary-500']}
                size='large'
            />
        );
    }

    return (
        <Container>
            <ScrollView className='flex-1 bg-white'>
                <Container className='p-6'>
                    <Typo.P1 weight='medium'>Meus pets</Typo.P1>
                    <Typo.P2 className='mb-4 text-neutral-400'>
                        Escolha um pet para adicionar as vacinas
                    </Typo.P2>

                    <Container>
                        {sortedPets?.map((pet) => (
                            <PetCard
                                key={pet.id}
                                onPress={() => openAddVaccineModal(pet.id)}
                                vaccines={vaccines}
                                pet={pet}
                            />
                        ))}

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
