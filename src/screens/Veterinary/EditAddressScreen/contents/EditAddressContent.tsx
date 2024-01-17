import { Container } from '@/components/Container';
import { Input } from '@/components/Input';
import { ScrollView, View } from 'react-native';

const EditAddressContent = () => {
    return (
        <ScrollView className='flex-1'>
            <Container className='gap-6 p-6'>
                <Input label='CEP' size='small' borderless={false} value={'address.cep'} />
                <Input label='Endereço' size='small' borderless={false} value={'address.street'} />
                <Input
                    label='Bairro'
                    size='small'
                    borderless={false}
                    value={'address.neighborhood'}
                />
                <View className='w-full flex-row gap-6'>
                    <View className='flex-1'>
                        <Input
                            className='w-full'
                            label='Cidade'
                            size='small'
                            borderless={false}
                            value={'address.city'}
                        />
                    </View>
                    <View className='flex-1'>
                        <Input
                            className='w-full'
                            label='Estado'
                            size='small'
                            borderless={false}
                            value={'address.uf'}
                        />
                    </View>
                </View>
                <Input label='Número' size='small' borderless={false} value={'address.number'} />
                <Input
                    label='Complemento'
                    size='small'
                    borderless={false}
                    value={'address.complement'}
                />
            </Container>
        </ScrollView>
    );
};

export default EditAddressContent;
