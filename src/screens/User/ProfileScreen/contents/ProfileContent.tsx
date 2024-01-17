import { FlatList, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Typo } from '@/components/Typograph';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { theme } from '@/styles/theme';
import { router } from 'expo-router';
import { Container } from '@/components/Container';

const DATA_LIST = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Ajuda',
        icon: <Feather name='headphones' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => {}
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Meus Dados',
        icon: <AntDesign name='profile' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => {}
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Meus pets',
        icon: <Ionicons name='paw-outline' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => router.push('/main/pet/')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a972f63',
        title: 'Endereço',
        icon: <Feather name='home' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => router.push('/location/')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29742',
        title: 'Agendametos',
        icon: <FontAwesome5 name='calendar-alt' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => router.push('/main/schedule/')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d22',
        title: 'Política de privacidade',
        icon: <Feather name='settings' size={24} color={theme.colors['neutral-700']} />,
        onPress: () => {}
    }
];

interface ItemProps {
    title: string;
    onPress: () => void;
    icon: ReactNode;
}

const Item = ({ icon, title, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress} className='flex-row gap-6 p-4'>
        {icon}
        <Typo.P1>{title}</Typo.P1>
    </TouchableOpacity>
);

const ProfileContent = () => {
    return (
        <Container>
            <FlatList
                data={DATA_LIST}
                renderItem={({ item }) => (
                    <Item
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        onPress={item.onPress}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};

export default ProfileContent;
