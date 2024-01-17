import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Typo } from '@/components/Typograph';
import Entypo from '@expo/vector-icons/Entypo';

const LocationBar = ({ ...rest }: TouchableOpacityProps) => {
    return (
        <TouchableOpacity
            className='items-center justify-center border-b border-b-neutral-100 bg-white py-4'
            {...rest}
        >
            <Typo.S1 className='text-gray-500'>Você está em</Typo.S1>
            <View className='flex-row items-center justify-center'>
                <Typo.P2 weight='medium'>R. Conêgo Valois de Castro, 274 </Typo.P2>
                <Entypo name='chevron-small-down' size={24} color='black' />
            </View>
        </TouchableOpacity>
    );
};

export default LocationBar;
