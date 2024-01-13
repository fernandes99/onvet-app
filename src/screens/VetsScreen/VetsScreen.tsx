import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { VET_LIST } from '@/constants/vets';
import { router } from 'expo-router';
import VetCard from './components/VetCard';
import { ScrollView, View } from 'react-native';
import FilterBlock from './components/FilterBlock';
import { IVeterinary } from '@/types/veterinary';

export const VetsScreen = () => {
    const goToHomeScreen = () => {
        router.push('/main/home/');
    };

    const goToVetProfileScreen = (vetId: IVeterinary['id']) => {
        router.push(`/vets/${vetId}`);
    };

    const onFilter = () => {};

    return (
        <Container>
            <TopBar title='Veterinários' onBack={goToHomeScreen} />
            <ScrollView className='flex-1 bg-slate-50'>
                <FilterBlock onFilter={onFilter} />
                <View className='flex-1 gap-2 p-6'>
                    {VET_LIST.map((vet) => (
                        <VetCard
                            vet={vet}
                            key={vet.id}
                            onPress={() => goToVetProfileScreen(vet.id)}
                        />
                    ))}
                    {VET_LIST.map((vet) => (
                        <VetCard
                            vet={vet}
                            key={vet.id}
                            onPress={() => goToVetProfileScreen(vet.id)}
                        />
                    ))}
                </View>
            </ScrollView>
        </Container>
    );
};
