import { View, ViewProps } from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';
import { theme } from '@/styles/theme';

interface RadioButtonProps extends ViewProps {
    selected: boolean;
}

export const RadioButton = ({ selected, className, ...rest }: RadioButtonProps) => {
    return (
        <View className={className} {...rest}>
            {selected ? (
                <Fontisto name='radio-btn-active' size={24} color={theme.colors['primary-500']} />
            ) : (
                <Fontisto name='radio-btn-passive' size={24} color={theme.colors['neutral-300']} />
            )}
        </View>
    );
};
