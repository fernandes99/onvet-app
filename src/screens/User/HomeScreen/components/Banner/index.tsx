import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { Image } from 'expo-image';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface BannerProps extends TouchableOpacityProps {
    title: string;
    text: string;
    cta: string;
    color?: 'default' | 'cyan' | 'purple';
    imageSrc?: string;
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Banner = ({ title, text, cta, color = 'default', imageSrc, ...rest }: BannerProps) => {
    const bgColor = {
        cyan: 'bg-cyan-500',
        purple: 'bg-purple-500',
        default: 'bg-secondary-500'
    };

    const textColor = {
        cyan: 'text-cyan-500',
        purple: 'text-purple-500',
        default: 'text-secondary-500'
    };

    return (
        <TouchableOpacity className={`${bgColor[color]} rounded-xl p-6`} {...rest}>
            <View className='gap-2'>
                <Typo.H4 className='color-white'>{title}</Typo.H4>
                <Typo.P1 className='mb-4 color-white'>{text}</Typo.P1>
                <Button className='bg-white' onPress={rest.onPress}>
                    <Typo.P1 weight='medium' className={textColor[color]}>
                        {cta}
                    </Typo.P1>
                </Button>
            </View>
            {imageSrc && (
                <View>
                    <Image
                        source={imageSrc}
                        placeholder={blurhash}
                        contentFit='cover'
                        transition={1000}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
};
