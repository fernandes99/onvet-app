import { useMemo } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { VET_LIST } from '@/constants/vets';
import VetProfileContent from './contents/VetProfileContent';

const VetProfileScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const vetData = useMemo(() => {
        return VET_LIST.find((vet) => vet.id === id);
    }, [id]);

    if (!vetData) {
        return null;
    }
    return <VetProfileContent vet={vetData} />;
};

export default VetProfileScreen;
