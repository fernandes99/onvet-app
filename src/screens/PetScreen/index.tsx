import { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { AddPetContent } from './contents/AddPetContent';
import { storage } from '@/utils/scripts/storage';
import { IUser, IUserPet } from '@/types/user';
import { PetsContent } from './contents/PetsContent';
import { setLoading } from '@/store/reducers/global';
import { useDispatch } from 'react-redux';

function PetScreen() {
    const [pets, setPets] = useState<IUser['pets']>([]);
    const dispatch = useDispatch();

    const onRemovePet = (petId: IUserPet['id']) => {
        dispatch(setLoading({ show: true }));

        storage
            .set('user_pets', pets?.filter((pet) => pet.id !== petId))
            .then(() => {
                Alert.alert('Pet removido', 'O pet foi removido.', [{ text: 'Fechar' }]);
                getPets();
            })
            .catch(() => {
                Alert.alert('Erro ao remover o pet', 'Tente novamente mais tarde.', [
                    { text: 'Fechar' }
                ]);
            })
            .finally(() => dispatch(setLoading({ show: false })));
    };

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

    useEffect(() => {
        getPets();
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
            {pets?.length ? (
                <PetsContent pets={pets} onRemovePet={onRemovePet} />
            ) : (
                <AddPetContent />
            )}
        </ScrollView>
    );
}

export default PetScreen;
