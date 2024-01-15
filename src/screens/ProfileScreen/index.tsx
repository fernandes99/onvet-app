import { Container } from '@/components/Container';
import ProfileContent from './contents/ProfileContent';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '@/styles/theme';

export default function ProfileScreen() {
    return (
        <Container className='bg-white p-6'>
            <ProfileContent />
            <Button variant='ghost'>
                <Typo.H5 className='text-neutral-300'>Sair</Typo.H5>
                <AntDesign name='logout' size={16} color={theme.colors['neutral-300']} />
            </Button>
        </Container>
    );
}
