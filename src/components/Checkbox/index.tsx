import { View, ViewProps } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { theme } from '@/styles/theme';

interface CheckboxProps extends ViewProps {
    checked: boolean;
}

const Checkbox = ({ checked, className, ...rest }: CheckboxProps) => {
    return (
        <View className={className} {...rest}>
            {checked ? (
                <MaterialIcons name='check-box' size={24} color={theme.colors['primary-500']} />
            ) : (
                <MaterialIcons
                    name='check-box-outline-blank'
                    size={24}
                    color={theme.colors['neutral-300']}
                />
            )}
        </View>
    );
};

export default Checkbox;
