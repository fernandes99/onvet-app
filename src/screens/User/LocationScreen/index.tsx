import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import LocationContent from './contents/LocationContent';
import { useEffect, useState } from 'react';
import { IUser } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';

export default function LocationScreen() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState<IUser['address'] | null>(null);
    const { origin } = useLocalSearchParams();

    const goToBack = () => {
        router.push(origin === 'home' ? '/user/main/home/' : '/user/main/profile/');
    };

    useEffect(() => {
        storage
            .get('user_address')
            .then((res: IUser['address']) => setAddress(res))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container className='bg-slate-50'>
            <TopBar title='Meu endereço' onBack={goToBack} />
            <Container className='p-6'>
                {loading && (
                    <ActivityIndicator
                        animating={true}
                        color={theme.colors['primary-500']}
                        size='large'
                        className='flex-1'
                    />
                )}
                {address && !loading && <LocationContent address={address} />}
            </Container>
            <View className='border-t border-t-neutral-100 bg-white p-6'>
                <Button onPress={() => {}}>
                    <Typo.P1 weight='medium' className='text-white'>
                        Salvar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
}
