import { ScrollView, View } from 'react-native';

import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import format from '@/utils/scripts/format';
import { theme } from '@/styles/theme';
import ScheduleCard from './components/ScheduleCard';

export default function HomeScreen() {
    return (
        <Container>
            <ScrollView className='bg-white'>
                <Container>
                    <Container className='mb-3 px-6 pt-6'>
                        <Typo.P1 weight='medium'>Seu resumo</Typo.P1>
                    </Container>
                    <ScrollView horizontal className='mb-4'>
                        <Container className='flex-row gap-4'>
                            <View className='ml-6 w-64 rounded-2xl bg-secondary-900 p-6'>
                                <View className='mb-6 size-16 rounded-2xl bg-secondary-100/15' />
                                <View>
                                    <Typo.H3 weight='medium' className='text-white'>
                                        16
                                    </Typo.H3>
                                    <Typo.P1 className='text-white'>consultas</Typo.P1>
                                </View>
                            </View>
                            <View className='mr-6 w-64 rounded-2xl bg-purple-600 p-6'>
                                <View className='mb-6 size-16 rounded-2xl bg-purple-100/15' />
                                <View>
                                    <Typo.H3 weight='medium' className='text-white'>
                                        {format.money(4892.42)}
                                    </Typo.H3>
                                    <Typo.P1 className='text-white'>faturamento</Typo.P1>
                                </View>
                            </View>
                        </Container>
                    </ScrollView>
                    <Container className='gap-3 p-6'>
                        <Typo.P1 weight='medium'>Próximas consultas</Typo.P1>
                        <View className='gap-2'>
                            <ScheduleCard />
                            <ScheduleCard />
                            <ScheduleCard />
                        </View>
                    </Container>
                </Container>
            </ScrollView>
        </Container>
    );
}
