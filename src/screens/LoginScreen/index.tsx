import { View } from 'react-native';
import { router } from 'expo-router';
import { BrandGoogle } from '@/assets/svgs/BrandGoogle';
import { BrandFacebook } from '@/assets/svgs/BrandFacebook';
import { Logotype } from '@/assets/svgs/Logotype';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';

export default function LoginScreen() {
    const goToWelcomeScreen = () => {
        router.push('/welcome/');
    };

    return (
        <Container className='bg-secondary-900'>
            <View className='flex-1 items-center justify-center'>
                <Logotype />
            </View>
            <View className='w-full items-center gap-4 bg-white p-6'>
                <Typo.H5 className='mb-2'>Entre com sua rede social</Typo.H5>

                <Button variant='ghost' onPress={goToWelcomeScreen}>
                    <BrandGoogle />
                    <Typo.P1>Google</Typo.P1>
                </Button>

                <Button variant='ghost' onPress={goToWelcomeScreen}>
                    <BrandFacebook />
                    <Typo.P1>Facebook</Typo.P1>
                </Button>
            </View>
        </Container>
    );
}
