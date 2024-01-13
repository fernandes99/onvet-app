import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { router } from 'expo-router';
import { ScrollView } from 'react-native';

export default function LocationScreen() {
    return (
        <Container>
            <TopBar title='Meu endereço' onBack={() => router.back()} />
            <ScrollView className='bg-slate-50'></ScrollView>
        </Container>
    );
}
