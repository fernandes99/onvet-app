import { View } from 'react-native';

import { Typo } from '@/components/Typograph';
import { Input } from '@/components/Input';

interface WelcomeContentAddressComplementProps {
    updateComplementAddress: (complementAddress: string) => void;
}

const WelcomeContentAddressComplement = ({
    updateComplementAddress
}: WelcomeContentAddressComplementProps) => {
    return (
        <View className='mb-8 w-full gap-8'>
            <Typo.H3>Algum complemento?</Typo.H3>
            <Input
                placeholder='Insira o complemento aqui'
                maxLength={32}
                onChangeText={updateComplementAddress}
            />
        </View>
    );
};

export default WelcomeContentAddressComplement;
