import { Slot, Stack } from 'expo-router';

export default function VaccineLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    );
}
