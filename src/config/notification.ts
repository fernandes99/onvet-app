import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C'
        });
    }

    // if (Device?.isDevice) {
    //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
    //     let finalStatus = existingStatus;
    //     if (existingStatus !== 'granted') {
    //         const { status } = await Notifications.requestPermissionsAsync();
    //         finalStatus = status;
    //     }
    //     if (finalStatus !== 'granted') {
    //         alert('Failed to get push token for push notification!');
    //         return;
    //     }
    //     token = (
    //         await Notifications.getExpoPushTokenAsync({
    //             projectId: '18a12e12-8c69-4224-b4e2-02ee708ac94b'
    //         })
    //     ).data;

    //     console.log('token push notification', token);
    // } else {
    //     alert('Não funciona em Emulador.');
    // }

    return token;
}
