import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface InputProps extends TextInputProps {
    hasError?: boolean;
    borderless?: boolean;
}

const styles = {
    default: 'w-full rounded-xl text-3xl text-neutral-700 placeholder:text-neutral-300',
    size: {
        small: '',
        medium: '',
        large: ''
    }
};

export const Input = forwardRef<TextInput, InputProps>(({ className, ...rest }, ref) => {
    return <TextInput ref={ref} {...rest} className={twMerge(styles.default, className)} />;
});
