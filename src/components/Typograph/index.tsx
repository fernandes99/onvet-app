import { Text, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface TypoProps extends TextProps {
    weight?: 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
    align?: 'left' | 'center' | 'right';
}

const styles = {
    default: 'font-Poppins_400Regular text-neutral-700 ',
    align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    },
    weight: {
        extraLight: 'font-Poppins_200ExtraLight',
        light: 'font-Poppins_300Light',
        regular: 'font-Poppins_400Regular',
        medium: 'font-Poppins_500Medium',
        semiBold: 'font-Poppins_600SemiBold',
        bold: 'font-Poppins_700Bold'
    }
};

export const Typo = {
    H1: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-5xl',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    H2: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-4xl',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    H3: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-3xl',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    H4: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-2xl',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    H5: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-xl',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    P1: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-lg',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    P2: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-base',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    S1: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-sm',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    ),
    S2: ({ children, weight = 'regular', align = 'left', className, ...rest }: TypoProps) => (
        <Text
            className={twMerge(
                'text-xs',
                styles.default,
                styles.align[align],
                styles.weight[weight],
                className
            )}
            {...rest}
        >
            {children}
        </Text>
    )
};
