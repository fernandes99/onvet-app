import { View } from 'react-native';
import { router } from 'expo-router';

import ScheduleContent from './contents/ScheduleContent';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { TopBar } from '@/components/TopBar';
import { AgendaLocaleConfig } from '@/config/agenda';

AgendaLocaleConfig();

export default function ScheduleScreen() {
    const goToBack = () => {
        router.back();
    };

    return (
        <Container>
            <TopBar title='Agenda' onBack={goToBack} />
            <Container className='bg-white'>
                <ScheduleContent />
            </Container>
        </Container>
    );
}
