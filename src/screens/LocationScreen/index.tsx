import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { router } from 'expo-router';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import LocationContent from './contents/LocationContent';
import { useEffect, useState } from 'react';
import { IUser } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';

export default function LocationScreen() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState<IUser['address'] | null>(null);
    const goToBack = () => {
        router.back();
    };

    useEffect(() => {
        storage
            .get('user_address')
            .then((res: IUser['address']) => res && setAddress(res))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container>
            <TopBar title='Meu endereço' onBack={goToBack} />
            <Container className='p-6'>
                {loading && <ActivityIndicator animating={true} color='#fff' size='large' />}
                {address && !loading && <LocationContent address={address} />}
            </Container>
            <View className='border-t border-t-neutral-100 bg-white p-6'>
                <Button onPress={() => {}}>
                    <Typo.P1 weight='medium' className='text-primary-500'>
                        Salvar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
}
