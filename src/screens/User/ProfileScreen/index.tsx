import { Container } from '@/components/Container';
import ProfileContent from './contents/ProfileContent';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@/styles/theme';
import { View } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
    const goToHomeVetScreen = () => {
        router.push('/vet/main/home/');
    };

    return (
        <Container className='bg-white p-6'>
            <ProfileContent />
            <View className='gap-4'>
                <Button variant='ghost' className='border-0'>
                    <Typo.H5 className='text-neutral-300'>Sair</Typo.H5>
                    <AntDesign name='logout' size={16} color={theme.colors['neutral-300']} />
                </Button>
                <Button variant='ghost' onPress={goToHomeVetScreen}>
                    <Typo.H5 className='text-neutral-300'>Acessar como veterinário</Typo.H5>
                    <AntDesign name='user' size={16} color={theme.colors['neutral-300']} />
                </Button>
            </View>
        </Container>
    );
}
