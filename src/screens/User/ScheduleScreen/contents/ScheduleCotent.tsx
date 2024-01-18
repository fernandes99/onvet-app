import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { SCHEDULE_ITEMS } from '@/constants/scheduleVet';
import { ScrollView, View } from 'react-native';

const ScheduleContent = () => {
    return (
        <Container className='bg-white'>
            <ScrollView>
                <Container className='p-6'>
                    <Typo.P1 weight='medium'>Sua agenda</Typo.P1>
                    <Typo.P2 className='mb-4 text-neutral-400'>
                        Visualize seus agendamentos de vacina, consulta ou castração.
                    </Typo.P2>

                    <View className='gap-4'>
                        {SCHEDULE_ITEMS.map((schedule) => (
                            <View
                                key={schedule.id}
                                className='rounded-lg border border-neutral-100 p-4 pb-2'
                            >
                                <View>
                                    <View className='mb-4 flex-row gap-4'>
                                        <View className='h-16 w-16 rounded-full bg-red-100' />

                                        <View className='gap-2'>
                                            <View>
                                                <Typo.P2 className='text-neutral-400'>
                                                    Veterinário:
                                                </Typo.P2>
                                                <Typo.P2 weight='medium'>Douglas Cabrito</Typo.P2>
                                            </View>

                                            <View>
                                                <Typo.P2 className='text-neutral-400'>
                                                    Dia e hora marcada:
                                                </Typo.P2>
                                                <Typo.P2 weight='medium'>
                                                    Quinta, 17 de janeiro, às 8h30
                                                </Typo.P2>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View className='absolute right-2 top-2 flex-row'>
                                    <View className='flex-row items-center gap-1 rounded-full bg-green-500/10 px-2'>
                                        <View className='h-2 w-2 rounded-full bg-green-500' />
                                        <Typo.S1 weight='medium' className='text-neutral-400'>
                                            Confirmado
                                        </Typo.S1>
                                    </View>
                                </View>

                                <View className='mt-2 flex-row'>
                                    <Button className='w-[null] flex-1 border-0'>
                                        <Typo.P1 weight='medium' className='text-neutral-400'>
                                            Ajuda
                                        </Typo.P1>
                                    </Button>
                                    <Button className='w-[null] flex-1 border-0'>
                                        <Typo.P1 weight='medium' className='text-neutral-400'>
                                            Detalhes
                                        </Typo.P1>
                                    </Button>
                                </View>
                            </View>
                        ))}
                    </View>
                </Container>
            </ScrollView>
        </Container>
    );
};

export default ScheduleContent;
