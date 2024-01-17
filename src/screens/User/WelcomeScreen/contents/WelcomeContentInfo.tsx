import { View } from 'react-native';

import { Typo } from '@/components/Typograph';

const WelcomeContentInfo = () => {
    return (
        <View className='w-full gap-4'>
            <Typo.H3>Antes de tudo, vamos precisar de algumas informações</Typo.H3>
        </View>
    );
};

export default WelcomeContentInfo;
