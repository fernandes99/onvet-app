import { View } from 'react-native';
import { router } from 'expo-router';

import EditAddressContent from './contents/EditAddressContent';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { Button } from '@/components/Button';
import { TopBar } from '@/components/TopBar';

export default function EditAddressScreen() {
    const goToBack = () => {
        router.push('/vet/main/profile/');
    };

    return (
        <Container>
            <TopBar title='Endereço de atendimento' onBack={goToBack} />
            <Container className='bg-white'>
                <EditAddressContent />
                <View className='gap-4 border-t border-t-neutral-100 p-6'>
                    <Button variant='ghost'>
                        <Typo.H5 className='text-white'>Salvar</Typo.H5>
                    </Button>
                </View>
            </Container>
        </Container>
    );
}
