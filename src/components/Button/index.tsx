import { ReactNode, forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends TouchableOpacityProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
}

const styles = {
    default:
        'border flex-row items-center gap-3 justify-center rounded-xl px-6 py-3 pt-[13px] w-full aria-disabled:border-neutral-200 aria-disabled:bg-neutral-100',
    variants: {
        primary: 'border-primary-500 text-primary-500',
        secondary: 'border-neutral-400',
        ghost: 'border-neutral-200',
        icon: 'border-transparent w-20 h-20 p-0'
    }
};

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
    ({ children, variant = 'primary', className, ...rest }, ref) => {
        return (
            <TouchableOpacity
                ref={ref}
                className={twMerge(styles.default, styles.variants[variant], className)}
                {...rest}
            >
                {children}
            </TouchableOpacity>
        );
    }
);
