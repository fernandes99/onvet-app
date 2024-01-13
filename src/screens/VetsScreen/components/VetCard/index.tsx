import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Image } from 'expo-image';
import Entypo from '@expo/vector-icons/Entypo';

import Tag from '@/components/Tag';
import { Typo } from '@/components/Typograph';
import { IVeterinary } from '@/types/veterinary';
import { theme } from '@/styles/theme';

const LIMIT_SPECIALITY = 2;

interface VetCardProps extends TouchableOpacityProps {
    vet: IVeterinary;
}

const VetCard = ({ vet, ...rest }: VetCardProps) => {
    return (
        <TouchableOpacity className='flex-1 rounded-lg bg-white p-4' {...rest}>
            <Image source={vet.profileImage} contentFit='cover' />
            <View className='flex-1 flex-row gap-4'>
                <View className='h-16 w-16 overflow-hidden rounded-full'>
                    <Image
                        style={{ flex: 1 }}
                        source={vet.profileImage}
                        contentFit='cover'
                        transition={500}
                    />
                </View>
                <View className='flex-1'>
                    <Typo.P1 weight='medium' className='mb-1'>
                        {vet.name} {vet.surname}
                    </Typo.P1>

                    <View className='mb-3 flex-row flex-wrap gap-2'>
                        {vet.specialties.map((specialty, index, self) => {
                            if (index > LIMIT_SPECIALITY) return null;

                            return index >= LIMIT_SPECIALITY ? (
                                <Tag
                                    title={`+${self.length - LIMIT_SPECIALITY}`}
                                    key={specialty.slug}
                                />
                            ) : (
                                <Tag title={specialty.name} key={specialty.slug} />
                            );
                        })}
                    </View>

                    <View className='flex-row items-center'>
                        <Entypo name='location-pin' size={16} color={theme.colors['neutral-200']} />
                        <Typo.S1 className='text-neutral-300'>0,55 km de distância</Typo.S1>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default VetCard;
