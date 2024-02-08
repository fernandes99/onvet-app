import { Button } from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import { Container } from '@/components/Container';
import { Input } from '@/components/Input';
import { Typo } from '@/components/Typograph';
import { VACCINES } from '@/constants/vaccines';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

const EditVaccineContent = () => {
    const [vaccineApplyPrice, setVaccineApplyPrice] = useState(0);
    const [isAddVaccineBlock, setIsAddVaccineBlock] = useState(true);

    const handleApplyVaccine = (value: string) => {
        setVaccineApplyPrice(Number(value.replace(',', '.')));
    };

    const handleContinueButton = () => {
        if (isAddVaccineBlock) {
            setIsAddVaccineBlock(false);
        }
    };

    return (
        <Container>
            <View className='flex-1 gap-4'>
                {isAddVaccineBlock ? (
                    <>
                        <Typo.P1 weight='medium'>
                            Quanto você cobra por aplicação de vacina?
                        </Typo.P1>
                        <View className='flex-row'>
                            <Typo.H3 className='mr-1 text-neutral-300'>R$</Typo.H3>
                            <View className='-mt-[5px]'>
                                <MaskedTextInput
                                    onChangeText={handleApplyVaccine}
                                    onSubmitEditing={handleContinueButton}
                                    type='currency'
                                    options={{
                                        prefix: '',
                                        decimalSeparator: ',',
                                        precision: 2
                                    }}
                                    autoFocus
                                    placeholder='XX,XX'
                                    keyboardType='numeric'
                                    mask='999,99'
                                    placeholderTextColor={theme.colors['neutral-300']}
                                    style={{
                                        fontSize: 26,
                                        borderRadius: 12
                                    }}
                                />
                            </View>
                        </View>
                    </>
                ) : (
                    <>
                        <Typo.P1 weight='medium'>Quais vacinas você aplica?</Typo.P1>
                        <View className='mb-16 flex-1'>
                            <View>
                                <Input
                                    size='small'
                                    placeholder='Procurar por nome'
                                    borderless={false}
                                />
                                <ScrollView className='-mx-6 py-4'>
                                    {VACCINES.map((vaccine) => (
                                        <TouchableOpacity
                                            key={vaccine.id}
                                            className='flex-row items-center justify-between rounded-lg border-b border-neutral-100 px-6 py-3'
                                        >
                                            <View className='flex-1 flex-row gap-2'>
                                                <Checkbox checked={false} />
                                                <Typo.P1 className='flex-1'>{vaccine.name}</Typo.P1>
                                            </View>
                                            <View>
                                                <Typo.P2>R$ 00,00</Typo.P2>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                    {VACCINES.map((vaccine) => (
                                        <TouchableOpacity
                                            key={vaccine.id}
                                            className='flex-row items-center justify-between rounded-lg border-b border-neutral-100 px-6 py-3'
                                        >
                                            <View className='flex-1 flex-row gap-2'>
                                                <Checkbox checked={false} />
                                                <Typo.P1 className='flex-1'>{vaccine.name}</Typo.P1>
                                            </View>
                                            <View>
                                                <Typo.P2>R$ 00,00</Typo.P2>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </>
                )}
            </View>

            <View className='bg-white pt-6'>
                <Button onPress={handleContinueButton}>
                    <Typo.P1 weight='medium' className='text-white'>
                        Continuar
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
};

export default EditVaccineContent;
