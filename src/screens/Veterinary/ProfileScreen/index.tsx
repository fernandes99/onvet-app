import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@/styles/theme';
import ProfileContent from './contents/ProfileContent';
import { View } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
    const logout = () => {
        router.replace('/login/');
    };

    const goToHomeUserScreen = () => {
        router.push('/user/main/home/');
    };

    return (
        <Container className='bg-white p-6'>
            <ProfileContent />
            <View className='gap-4'>
                <Button variant='ghost' className='border-0' onPress={logout}>
                    <Typo.H5 className='text-neutral-300'>Sair</Typo.H5>
                    <AntDesign name='logout' size={16} color={theme.colors['neutral-300']} />
                </Button>
                <Button variant='ghost' onPress={goToHomeUserScreen}>
                    <Typo.H5 className='text-neutral-300'>Acessar como usuário</Typo.H5>
                    <AntDesign name='user' size={16} color={theme.colors['neutral-300']} />
                </Button>
            </View>
        </Container>
    );
}
