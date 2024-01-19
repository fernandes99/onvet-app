import { View } from 'react-native';
import { router } from 'expo-router';

import ProfileDataContent from './contents/EditServiceContent';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { TopBar } from '@/components/TopBar';

export default function EditServiceScreen() {
    const goToBack = () => {
        router.push('/vet/main/profile/');
    };

    return (
        <Container>
            <TopBar title='Especializações e serviços' onBack={goToBack} />
            <Container className='bg-white'>
                <ProfileDataContent />
                <View className='gap-4 border-t border-t-neutral-100 p-6'>
                    <Button variant='ghost'>
                        <Typo.H5 className='text-neutral-300'>Salvar</Typo.H5>
                    </Button>
                </View>
            </Container>
        </Container>
    );
}
