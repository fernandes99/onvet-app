import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { AddPetContent } from './contents/AddPetContent';
import { storage } from '@/utils/scripts/storage';
import { IUser, IUserPet } from '@/types/user';
import { PetsContent } from './contents/PetsContent';
import { setLoading } from '@/store/reducers/global';
import { useDispatch } from 'react-redux';
import { theme } from '@/styles/theme';

function PetScreen() {
    const [pets, setPets] = useState<IUser['pets']>([]);
    const [loadingContent, setLoadingContent] = useState(true);
    const dispatch = useDispatch();

    const onRemovePet = (petId: IUserPet['id']) => {
        dispatch(setLoading({ show: true }));

        storage
            .set(
                'user_pets',
                pets?.filter((pet) => pet.id !== petId)
            )
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
        <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
            {!!pets?.length ? (
                <PetsContent pets={pets} onRemovePet={onRemovePet} />
            ) : (
                <AddPetContent />
            )}
        </ScrollView>
    );
}

export default PetScreen;
