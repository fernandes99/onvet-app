import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { Typo } from '@/components/Typograph';
import { VET_LIST } from '@/constants/vets';
import { Link, router } from 'expo-router';
import VetCard from './components/VetCard';
import { ScrollView, View } from 'react-native';
import FilterBlock from './components/FilterBlock';
import { IVeterinary } from '@/types/veterinary';

const VetListScreen = () => {
    const goToHomeScreen = () => {
        router.push('/user/main/home/');
    };

    const goToVetProfileScreen = (vetId: IVeterinary['id']) => {
        // @ts-ignore (bug: beta expo typedRoutes)
        router.push(`/user/vets/${vetId}`);
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

export default VetListScreen;
