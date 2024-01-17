import { Loading } from '@/components/Loading';
import { Typo } from '@/components/Typograph';
import WelcomeScreen from '@/screens/User/WelcomeScreen';
import { storage } from '@/utils/scripts/storage';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';

export default function WelcomeRoute() {
    const [loading, setLoading] = useState(true);
    const [hasUserAddress, setHasUserAddress] = useState(false);

    useEffect(() => {
        storage
            .get('user_address')
            .then((res) => setHasUserAddress(!!res))
            .catch(() => setHasUserAddress(false))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loading />;
    return hasUserAddress ? <Redirect href='/main/home/' /> : <WelcomeScreen />;
}
