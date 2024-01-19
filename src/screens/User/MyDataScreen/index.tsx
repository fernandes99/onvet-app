import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { router } from 'expo-router';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useEffect, useState } from 'react';
import { IUser } from '@/types/user';
import { storage } from '@/utils/scripts/storage';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';
import MyDataContent from './contents/MyDataContent';

export default function MyDataScreen() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<IUser | null>(null);
    const goToBack = () => {
        router.back();
    };

    useEffect(() => {
        storage
            .get('user_data')
            .then((res: IUser) => setUserData(res))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Container className='bg-slate-50'>
            <TopBar title='Meus dados' onBack={goToBack} />
            <Container className='p-6'>
                {loading && (
                    <ActivityIndicator
                        animating={true}
                        color={theme.colors['primary-500']}
                        size='large'
                        className='flex-1'
                    />
                )}
                {userData && !loading && <MyDataContent userData={userData} />}
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
