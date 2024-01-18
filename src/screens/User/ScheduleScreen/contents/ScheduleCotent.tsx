import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { SCHEDULE_ITEMS } from '@/constants/scheduleVet';
import { ScrollView, View } from 'react-native';

const ScheduleContent = () => {
    return (
        <Container>
            <ScrollView>
                {SCHEDULE_ITEMS.map((item) => (
                    <View className=''></View>
                ))}
                <Typo.P2></Typo.P2>
            </ScrollView>
        </Container>
    );
};

export default ScheduleContent;
