import { TouchableOpacity, View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Typo } from '../Typograph';
import { theme } from '@/styles/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button } from '../Button';

interface TopBarProps extends ViewProps {
    title: string;
    onBack: () => void;
    onCancel?: () => void;
}

const styles = {
    default: ''
};

export const TopBar = ({ title, onBack, onCancel, className, ...rest }: TopBarProps) => {
    return (
        <View
            className={twMerge(
                'h-16 flex-row items-center justify-between border-b border-b-neutral-100 bg-white p-3',
                styles.default,
                className
            )}
            {...rest}
        >
            <Button variant='icon' className='mr-2 h-12 w-12' onPress={onBack}>
                <AntDesign name='arrowleft' size={24} color={theme.colors['neutral-200']} />
            </Button>
            <Typo.P1 numberOfLines={1} ellipsizeMode='tail' className='flex-1'>
                {title}
            </Typo.P1>
            {onCancel && (
                <Button className='w-16 border-0 px-1 py-3' onPress={onCancel}>
                    <Typo.S2 className='text-white'>Cancelar</Typo.S2>
                </Button>
            )}
        </View>
    );
};
