import { RootState } from '@/store';
import { theme } from '@/styles/theme';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const styles = {
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)' // Fundo opaco
    },
    activityIndicatorWrapper: {
        backgroundColor: 'rgba(0,0,0,0.7)', // Fundo do spinner
        borderRadius: 10,
        padding: 20
    }
};

export const Loading = () => {
    const { loading } = useSelector((state: RootState) => state.global);

    return loading.show ? (
        <Modal transparent animationType='none' visible={true}>
            <View className='flex-1 items-center justify-center bg-secondary-500/70'>
                <ActivityIndicator animating={true} color='#fff' size='large' />
            </View>
        </Modal>
    ) : null;
};
