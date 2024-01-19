import { Image } from 'expo-image';
import { View } from 'react-native';
import { Typo } from '../Typograph';

interface AvatarProps {
    srcImage: string;
    title?: string;
    size?: number;
}

const Avatar = ({ srcImage, title, size = 80 }: AvatarProps) => {
    // const [acronym, setAcronym] = useState<string>(title ? format.acronym(title) : '');

    return (
        <View className='h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-secondary-500'>
            {!!srcImage?.length ? (
                <Image source={srcImage} style={{ flex: 1 }} contentFit='cover' transition={500} />
            ) : (
                <Typo.H3
                    weight='medium'
                    className='text-white'
                    style={{ color: 'white', fontSize: 60, lineHeight: 160 }}
                >
                    RF
                </Typo.H3>
            )}
        </View>
    );
};

export default Avatar;
