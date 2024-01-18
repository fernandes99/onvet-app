import { Tabs, usePathname } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { theme } from '@/styles/theme';

export default function TabsLayout() {
    const isHideTab = usePathname() === '/user/main/pet/new';

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 64,
                    display: isHideTab ? 'none' : 'flex'
                },
                tabBarActiveTintColor: theme.colors['primary-500'],
                tabBarInactiveTintColor: theme.colors['neutral-200']
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name='home' size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name='pet'
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name='paw' size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name='schedule'
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name='clipboard-list' size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name='user-alt' size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
