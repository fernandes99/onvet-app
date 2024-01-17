import { View, ViewProps } from 'react-native';
import { Typo } from '../Typograph';
import { twMerge } from 'tailwind-merge';

const styles = {
    default: 'rounded-full border border-neutral-100',
    size: {
        small: 'px-2',
        medium: 'px-6 py-2',
        larger: ''
    }
};

interface TagProps extends ViewProps {
    title: string;
    size?: 'small' | 'medium' | 'larger';
}

const Tag = ({ title, size = 'small', className, ...rest }: TagProps) => {
    return (
        <View className={twMerge(styles.default, styles.size[size], className)} {...rest}>
            {size === 'small' ? (
                <Typo.S1 className='text-neutral-300'>{title}</Typo.S1>
            ) : (
                <Typo.P1 className='text-neutral-300'>{title}</Typo.P1>
            )}
        </View>
    );
};

export default Tag;
