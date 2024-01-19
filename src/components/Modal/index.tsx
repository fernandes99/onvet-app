import { ReactNode } from 'react';
import { Modal, ModalBaseProps, View } from 'react-native';

interface CustomModalProps extends ModalBaseProps {
    children: ReactNode;
    height?: string;
}

const CustomModal = ({ children, height = 'h-4/5', ...rest }: CustomModalProps) => {
    return (
        <Modal animationType='slide' transparent {...rest}>
            <View className='flex-1 justify-end bg-neutral-900/50'>
                <View className={`${height} bg-white p-6`}>{children}</View>
            </View>
        </Modal>
    );
};

export default CustomModal;
