import { TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';
import AntDesign from '@expo/vector-icons/AntDesign';

export const AddPetContent = () => {
    const goToPetNewScreen = () => {
        router.push('/(routes)/main/(tabs)/pet/new');
    };

    return (
        <Container className='items-center justify-center p-6'>
            <View className='w-80 items-center justify-center gap-6 rounded-xl bg-white p-6'>
                <Typo.H4 align='center'>Você não cadastrou nenhum pet</Typo.H4>
                <TouchableOpacity onPress={goToPetNewScreen} className='items-center'>
                    <View className='mb-2 h-24 w-24 items-center justify-center rounded-full bg-primary-100'>
                        <AntDesign
                            name='pluscircle'
                            size={32}
                            color={theme.colors['primary-500']}
                        />
                    </View>
                    <Typo.H5 className='text-primary-500'>Cadastrar</Typo.H5>
                </TouchableOpacity>
            </View>
        </Container>
    );
};
