import { View } from 'react-native';

import { Typo } from '@/components/Typograph';
import { Input } from '@/components/Input';

interface WelcomeContentAddressNumberProps {
    updateNumberAddress: (numberAddress: string) => void;
}

const WelcomeContentAddressNumber = ({ updateNumberAddress }: WelcomeContentAddressNumberProps) => {
    return (
        <View className='mb-8 w-full gap-8'>
            <Typo.H3>Qual o número do endereço?</Typo.H3>
            <Input
                placeholder='Insira o número aqui'
                maxLength={20}
                onChangeText={updateNumberAddress}
            />
        </View>
    );
};

export default WelcomeContentAddressNumber;
