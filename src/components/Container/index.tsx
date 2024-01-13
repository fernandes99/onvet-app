import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface PropsContainer extends ViewProps {
    children: ReactNode;
}

export const Container = ({ children, className, ...rest }: PropsContainer) => {
    return (
        <View className={twMerge('flex-1', className)} {...rest}>
            {children}
        </View>
    );
};
