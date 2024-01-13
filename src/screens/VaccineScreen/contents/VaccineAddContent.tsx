import { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import AddVaccineModal from '../components/AddVaccineModal';
import { IVaccine } from '@/store/reducers/vaccines';
import { IUser, IUserPet } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { theme } from '@/styles/theme';

interface VaccineAddContentProps {
    vaccines: IVaccine[];
}

const VaccineAddContent = ({ vaccines }: VaccineAddContentProps) => {
    const [pets, setPets] = useState<IUser['pets']>([]);
    const [vaccineModal, setVaccineModal] = useState({
        show: false,
        petId: ''
    });

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

    useEffect(getPets, []);

    return (
        <Container>
            <ScrollView className='flex-1 bg-slate-50'>
                <Container className='p-6'>
                    <Typo.P1 weight='medium'>Meus pets</Typo.P1>
                    <Typo.P2 className='mb-4 text-neutral-400'>
                        Escolha um pet para adicionar as vacinas
                    </Typo.P2>

                    {pets.map((pet) => {
                        const vaccinesSeleted = vaccines.filter(
                            (vaccine) => vaccine.petId === pet.id
                        );

                        return (
                            <View className='mb-6 flex-row gap-6' key={pet.id}>
                                {pet.type === 'cat' && <AvatarCatIllustration size={64} />}
                                {pet.type === 'dog' && <AvatarDogIllustration size={64} />}

                                <View className='flex-1'>
                                    <Typo.H5 weight='medium'>{pet.name}</Typo.H5>

                                    {vaccinesSeleted?.length ? (
                                        <View className='mt-2'>
                                            {vaccinesSeleted.map((vaccine) => (
                                                <View
                                                    className='mb-1 flex-row gap-2'
                                                    key={vaccine.id}
                                                >
                                                    <FontAwesome5
                                                        name='syringe'
                                                        size={14}
                                                        color={theme.colors['neutral-700']}
                                                    />
                                                    <Typo.P1 className='-mt-[4px] flex-1 flex-wrap'>
                                                        {vaccine.name}
                                                    </Typo.P1>
                                                </View>
                                            ))}
                                            <Button
                                                className='mt-1 items-center justify-start border-0 p-0 py-1'
                                                onPress={() => openAddVaccineModal(pet.id)}
                                            >
                                                <FontAwesome5
                                                    name='edit'
                                                    size={18}
                                                    color={theme.colors['neutral-400']}
                                                />
                                                <Typo.P1 className='-ml-1 mt-[2px] text-neutral-400'>
                                                    Editar vacina
                                                </Typo.P1>
                                            </Button>
                                        </View>
                                    ) : (
                                        <Button
                                            className='items-center justify-start border-0 p-0 py-1'
                                            onPress={() => openAddVaccineModal(pet.id)}
                                        >
                                            <AntDesign
                                                name='pluscircleo'
                                                size={18}
                                                color={theme.colors['primary-500']}
                                            />
                                            <Typo.P1 className='-ml-1 mt-[2px] text-primary-500'>
                                                Adicionar vacina
                                            </Typo.P1>
                                        </Button>
                                    )}
                                </View>
                            </View>
                        );
                    })}
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
