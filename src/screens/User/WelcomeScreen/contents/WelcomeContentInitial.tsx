import { View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';

const WelcomeContentInitial = () => {
    return (
        <View className='w-full gap-4'>
            <Typo.H3>
                Bem vindo ao On<Typo.H3 weight='bold'>Vet</Typo.H3>
            </Typo.H3>
            <Typo.H5>Conectamos veterinários com donos de pets!</Typo.H5>

            <View className='gap-2'>
                <View className='flex-row items-center gap-2'>
                    <AntDesign name='checkcircleo' size={20} color={theme.colors['cyan-500']} />
                    <Typo.P1>Veja os veterinários perto de você</Typo.P1>
                </View>
                <View className='flex-row items-center gap-2'>
                    <AntDesign name='checkcircleo' size={20} color={theme.colors['cyan-500']} />
                    <Typo.P1>Compare preços</Typo.P1>
                </View>
                <View className='flex-row items-center gap-2'>
                    <AntDesign name='checkcircleo' size={20} color={theme.colors['cyan-500']} />
                    <Typo.P1>Agende uma consulta</Typo.P1>
                </View>
            </View>
        </View>
    );
};
export default WelcomeContentInitial;
