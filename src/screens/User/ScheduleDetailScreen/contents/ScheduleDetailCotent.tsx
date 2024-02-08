import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { Typo } from '@/components/Typograph';
import { SCHEDULE_ITEMS } from '@/constants/scheduleVet';
import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';

const SCHEDULE = SCHEDULE_ITEMS[0];

const ScheduleDetailContent = () => {
    const goToBack = () => {
        router.back();
    };

    return (
        <Container className='bg-white'>
            <TopBar title='Detalhes da consulta' onBack={goToBack} />
            <ScrollView>
                <Container className='p-6'>
                    <View className='gap-6 border-b border-b-neutral-100 pb-6'>
                        <View className='flex-row items-center gap-4'>
                            <View className='h-16 w-16 rounded-full bg-red-100' />
                            <View>
                                <Typo.P1 className='text-neutral-400'>Veterinário:</Typo.P1>
                                <Typo.H5 weight='medium'>Douglas Cabrito</Typo.H5>
                            </View>
                        </View>

                        <View className='rounded-lg bg-green-100 p-4'>
                            <View className='flex-row items-center gap-2 rounded-full'>
                                <View className='h-2 w-2 rounded-full bg-green-500' />
                                <Typo.S1 weight='medium' className='text-green-900'>
                                    Consulta confirmada pelo veterinário
                                </Typo.S1>
                            </View>
                        </View>
                    </View>

                    <View className='gap-4 border-b border-b-neutral-100 py-6'>
                        <View className='flex-row items-center gap-4'>
                            <View className='h-16 w-16 rounded-full bg-blue-100' />
                            <View>
                                <Typo.H5 weight='medium'>Mel</Typo.H5>
                                <Typo.P1 className='text-neutral-400'>1 Vacina Antirrábica</Typo.P1>
                            </View>
                        </View>

                        <View className='flex-row items-center gap-4'>
                            <View className='h-16 w-16 rounded-full bg-blue-100' />
                            <View>
                                <Typo.H5 weight='medium'>Chevette</Typo.H5>
                                <Typo.P1 className='text-neutral-400'>1 Vacina V8</Typo.P1>
                            </View>
                        </View>
                    </View>

                    <View className='border-b border-b-neutral-100 py-6'>
                        <Typo.P1 weight='medium' className='mb-2'>
                            Resumo de valores
                        </Typo.P1>
                        <View>
                            <View className='flex-row items-center justify-between'>
                                <Typo.P1 className='text-neutral-400'>
                                    2 Aplicações de Vacinas
                                </Typo.P1>
                                <Typo.P1 weight='medium'>R$ 20,00</Typo.P1>
                            </View>
                            <View className='flex-row items-center justify-between'>
                                <Typo.P1 className='text-neutral-400'>1 Vacina Antirrábica</Typo.P1>
                                <Typo.P1 weight='medium'>R$ 20,00</Typo.P1>
                            </View>
                            <View className='flex-row items-center justify-between'>
                                <Typo.P1 className='text-neutral-400'>1 Vacina V8</Typo.P1>
                                <Typo.P1 weight='medium'>R$ 25,00</Typo.P1>
                            </View>
                            <View className='mt-2 flex-row items-center justify-between'>
                                <Typo.P1 weight='semiBold'>Total</Typo.P1>
                                <Typo.P1 weight='semiBold'>R$ 75,00</Typo.P1>
                            </View>
                        </View>
                    </View>

                    <View className='border-b border-b-neutral-100 py-6'>
                        <View className='flex-row items-center justify-between'>
                            <Typo.P1 className='text-neutral-400'>Pago pelo app</Typo.P1>
                            <Typo.P1 weight='medium'>PIX</Typo.P1>
                        </View>
                    </View>

                    <View className='border-b border-b-neutral-100 py-6'>
                        <Typo.P1 className='mb-2 text-neutral-400'>Endereço da consulta</Typo.P1>
                        <Typo.P1 weight='medium'>R. Edson Falconi de Melo, 712 - Apt 205</Typo.P1>
                        <Typo.P1 weight='medium'>Aeroclube - João Pessoa - PB</Typo.P1>
                    </View>
                </Container>
            </ScrollView>
            <View className='gap-2 bg-white p-6'>
                <Button variant='ghost' className='border-0'>
                    <Typo.P1 weight='medium' className='text-primary-500'>
                        Preciso de ajuda
                    </Typo.P1>
                </Button>
                <Button onPress={() => {}}>
                    <Typo.P1 weight='medium' className='text-white'>
                        Voltar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
};

export default ScheduleDetailContent;
