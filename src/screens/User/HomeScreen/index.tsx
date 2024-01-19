import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { Banner } from './components/Banner';
import { ScrollView } from 'react-native';
import LocationBar from './components/LocationBar';
import { router } from 'expo-router';

export default function HomeScreen() {
    const goToLocationScreen = () => {
        // @ts-ignore
        router.push(`/user/location/?origin=home`);
    };

    const goToVaccineScreen = () => {
        router.push('/user/vaccines/');
    };

    return (
        <Container>
            <LocationBar onPress={goToLocationScreen} />
            <ScrollView className='bg-slate-50'>
                <Container className='flex-1 gap-4 p-6'>
                    <Typo.H4>Qual serviço deseja?</Typo.H4>
                    <Banner
                        title='Vacinas'
                        text='Agende uma aplicação de vacina em domicílio ou presencial'
                        cta='Escolher vacinas'
                        onPress={goToVaccineScreen}
                    />
                    <Banner
                        title='Consultas'
                        text='Agende uma consulta com um veterinário em domicílio ou presencial'
                        cta='Escolher consulta'
                        color='purple'
                    />
                    <Banner
                        title='Castração'
                        text='Agende uma consulta com um veterinário em domicílio ou presencial'
                        cta='Escolher pets'
                        color='cyan'
                    />
                </Container>
            </ScrollView>
        </Container>
    );
}
