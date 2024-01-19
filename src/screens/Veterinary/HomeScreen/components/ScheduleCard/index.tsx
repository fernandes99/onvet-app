import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';

const ScheduleCard = () => {
    return (
        <View className='rounded-xl border border-neutral-100 p-4'>
            <View className='flex-row items-center gap-4'>
                <View className='size-16 rounded-full bg-neutral-100' />
                <View>
                    <Typo.P1 weight='medium'>Shikamaru Nara</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>19 de janeiro, 11h30</Typo.P2>
                </View>
            </View>
            <View className='absolute right-4 top-1/2'>
                <Entypo
                    name='chevron-small-right'
                    size={24}
                    color={theme.colors['secondary-500']}
                />
            </View>
        </View>
    );
};

export default ScheduleCard;
