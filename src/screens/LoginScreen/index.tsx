import { router } from 'expo-router';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

import { setLoading } from '@/store/reducers/global';
import { BrandGoogle } from '@/assets/svgs/BrandGoogle';
import { BrandFacebook } from '@/assets/svgs/BrandFacebook';
import { Logotype } from '@/assets/svgs/Logotype';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { Image } from 'expo-image';
import { storage } from '@/utils/scripts/storage';
import Toast from 'react-native-root-toast';

export default function LoginScreen() {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState<User | null>(null);

    const goToWelcomeScreen = () => {
        router.push('/user/welcome/');
    };

    const signInGoogle = async () => {
        try {
            dispatch(setLoading({ show: true }));
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();

            storage.set('user_data', {
                id: user.user.id,
                name: user.user.name,
                surname: user.user.familyName
            });
        } catch (e) {
            Toast.show('Erro ao se autenticar', {
                shadow: true,
                animation: true
            });
            console.log('Error', e);
        } finally {
            dispatch(setLoading({ show: false }));
        }
    };

    const logout = () => {
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();

        setUserInfo(null);
    };

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '937027356400-u8c5lk1apllqc7a2nob8d3sf1kr3b180.apps.googleusercontent.com',
            iosClientId: '937027356400-mbd0qdo51agtlkl5lbosfratgenc3nra.apps.googleusercontent.com'
        });
    }, []);

    return (
        <Container className='bg-secondary-900'>
            <View className='flex-1 items-center justify-center'>
                <Logotype />
            </View>
            <View className='w-full items-center gap-4 bg-white p-6'>
                <Typo.H5 className='mb-2'>Entre com sua rede social</Typo.H5>

                {userInfo ? (
                    <Button onPress={logout}>
                        <View className='h-8 w-8'>
                            <Image
                                style={{ flex: 1, borderRadius: 9999 }}
                                source={userInfo.user.photo}
                                contentFit='cover'
                                transition={500}
                            />
                        </View>
                        <Typo.H5>Logout</Typo.H5>
                    </Button>
                ) : (
                    <Button variant='ghost' onPress={signInGoogle}>
                        <BrandGoogle />
                        <Typo.P1>Google</Typo.P1>
                    </Button>
                )}

                <Button variant='ghost' onPress={goToWelcomeScreen}>
                    <BrandFacebook />
                    <Typo.P1>Facebook</Typo.P1>
                </Button>
            </View>
        </Container>
    );
}
