import { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Typo } from '../Typograph';

interface InputProps extends TextInputProps {
    hasError?: boolean;
    borderless?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
}

const styles = {
    default:
        'w-full rounded-xl text-neutral-700 placeholder:text-neutral-300 font-Poppins_400Regular',
    size: {
        small: 'text-lg px-5 py-3 pb-2',
        medium: 'text-3xl',
        large: ''
    },
    borderless: 'border border-neutral-100'
};

export const Input = forwardRef<TextInput, InputProps>(
    ({ className, size = 'medium', borderless = true, label, ...rest }, ref) => {
        return (
            <View>
                {label && (
                    <Typo.P2 weight='semiBold' className='mb-1'>
                        {label}
                    </Typo.P2>
                )}
                <TextInput
                    ref={ref}
                    {...rest}
                    className={twMerge(
                        '',
                        styles.default,
                        styles.size[size],
                        styles.borderless && styles.borderless,
                        className
                    )}
                />
            </View>
        );
    }
);
