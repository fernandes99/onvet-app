import { ScrollView, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { Typo } from '@/components/Typograph';
import { Button } from '@/components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useMemo } from 'react';
import Toast from 'react-native-root-toast';

const CheckoutScreen = () => {
    const { data: checkoutData } = useSelector((state: RootState) => state.checkout);

    if (!checkoutData) {
        Toast.show('Erro ao acessar ao acessar o checkout', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true
        });

        return <Redirect href='/main/home/' />;
    }

    const scheduleType = useMemo(() => {
        if (checkoutData?.schedule.type === 'vaccine') return 'Vacina';
        return 'Consulta';
    }, [checkoutData]);

    const goToBack = () => {
        router.back();
    };

    const goToVetListScreen = () => {
        router.push('/vets/');
    };

    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    console.log(checkoutData.schedule.userAddress);

    return (
        <Container>
            <TopBar title='Confirme os dados' onBack={goToBack} onCancel={goToVetListScreen} />
            <ScrollView className='flex-1 bg-slate-50'>
                <Container className='p-6'>
                    <View className='mb-8'>
                        <Typo.P1 weight='medium' className='mb-4'>
                            Resumo do agendamento
                        </Typo.P1>
                        <Field title='Serviço' value={scheduleType} />
                        <Field
                            title='Data'
                            value={checkoutData.schedule.dateTime.toLocaleDateString() || ''}
                        />
                        <Field
                            title='Hora'
                            value={checkoutData.schedule.dateTime.toLocaleTimeString() || ''}
                        />
                        <Field title='Endereço' value={'TODO'} />
                        <Field title='Método de pagamento' value='PIX' />
                    </View>

                    <View className='mb-8'>
                        <Typo.P1 weight='medium' className='mb-4'>
                            Resumo de valores
                        </Typo.P1>
                        <Field
                            title={`${checkoutData.schedule.vaccines.length} ${checkoutData.schedule.vaccines.length > 1 ? 'Aplicações de vacinas' : 'Aplicação de vacina'}`}
                            value='R$ XX'
                        />
                        <Field title='Método de pagamento' value='PIX' />
                    </View>
                </Container>
            </ScrollView>
            <View className='flex-row border-t border-t-neutral-100 bg-white p-6'>
                <View className='flex-1 flex-wrap justify-center'>
                    <Typo.P2 className='text-neutral-400'>Total</Typo.P2>
                    <Typo.P1 weight='medium' className='text-green-600'>
                        {checkoutData.summary.totalPrice}
                    </Typo.P1>
                </View>
                <Button className='flex-1' onPress={() => {}}>
                    <Typo.P1 weight='medium' className='text-primary-500'>
                        Agendar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
};

export default CheckoutScreen;
