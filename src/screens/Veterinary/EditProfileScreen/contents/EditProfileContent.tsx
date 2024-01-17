import { Image } from 'expo-image';
import { ScrollView, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Container } from '@/components/Container';
import { Input } from '@/components/Input';
import { theme } from '@/styles/theme';

const EditProfileContent = () => {
    return (
        <ScrollView className='flex-1'>
            <Container className='gap-6 p-6'>
                <View>
                    <View className='items-center'>
                        <View className='h-44 w-44'>
                            <Image
                                style={{ flex: 1, borderRadius: 9999 }}
                                source={'https://d2b0sstunfvm0v.cloudfront.net/image-54648-340.jpg'}
                                contentFit='cover'
                                transition={500}
                            />
                            <View className='absolute bottom-0 right-0'>
                                <View className='rounded-full border-2 border-white bg-secondary-900 p-2'>
                                    <MaterialIcons name='edit' size={32} color='white' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Input label='Nome' size='small' borderless={false} value={'João'} />
                <Input label='Sobrenome' size='small' borderless={false} value={'da Silva'} />
                <Input
                    label='Sobre'
                    size='small'
                    borderless={false}
                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.etting, remaining essentially unchanged"
                    multiline
                />
            </Container>
        </ScrollView>
    );
};

export default EditProfileContent;
