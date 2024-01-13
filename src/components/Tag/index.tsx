import { View, ViewProps } from 'react-native';
import { Typo } from '../Typograph';
import { twMerge } from 'tailwind-merge';

const styles = {
    default: ''
};

interface TagProps extends ViewProps {
    title: string;
}

const Tag = ({ title, className, ...rest }: TagProps) => {
    return (
        <View
            className={twMerge(
                'rounded-full border border-neutral-100 px-2',
                styles.default,
                className
            )}
        >
            <Typo.S1 className='text-neutral-300'>{title}</Typo.S1>
        </View>
    );
};

export default Tag;
