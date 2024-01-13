import { ActivityIndicator, Modal, View } from 'react-native';

export const Loading = () => (
    <Modal transparent animationType='fade' visible={true}>
        <View className='flex-1 items-center justify-center bg-secondary-500/70'>
            <ActivityIndicator animating={true} color='#fff' size='large' />
        </View>
    </Modal>
);
