import { Image } from 'expo-image';
import { ScrollView, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container } from '@/components/Container';
import { Input } from '@/components/Input';
import { IUser } from '@/types/user';
import { Typo } from '@/components/Typograph';
import Avatar from '@/components/Avatar';

interface MyDataContentProps {
    userData: IUser;
}

const MyDataContent = ({ userData }: MyDataContentProps) => {
    return (
        <ScrollView>
            <Container className='gap-6'>
                <View className='items-center'>
                    <View>
                        <Avatar
                            srcImage={userData.profile_image!}
                            title={`${userData.name} ${userData.surname}`}
                        />
                        <View className='absolute bottom-0 right-0'>
                            <View className='rounded-full border-2 border-white bg-secondary-900 p-2'>
                                <MaterialIcons name='edit' size={32} color='white' />
                            </View>
                        </View>
                    </View>
                </View>

                <Input label='Nome' size='small' borderless={false} value={userData.name} />
                <Input label='Sobrenome' size='small' borderless={false} value={userData.surname} />
            </Container>
        </ScrollView>
    );
};

export default MyDataContent;
