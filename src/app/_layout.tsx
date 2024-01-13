import { Slot, SplashScreen } from 'expo-router';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useCallback } from 'react';

import store from '@/store';
import '@/styles/global.css';
import {
    useFonts,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular
} from '@expo-google-fonts/poppins';
import { Loading } from '@/components/Loading';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView onLayout={onLayoutRootView} style={styles.safeArea}>
            <RootSiblingParent>
                <Provider store={store}>
                    <Loading />
                    <Slot />
                </Provider>
            </RootSiblingParent>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
});
