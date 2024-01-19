import { useSession } from '@/contexts/sessionContext';
import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Layout() {
    const { session, isLoading } = useSession();

    return <Redirect href='/vet/profile-services/' />;

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!session) {
        return <Redirect href='/login/' />;
    }
}
