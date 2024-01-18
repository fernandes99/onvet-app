import { TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from 'react-native-calendars';
import { Typo } from '@/components/Typograph';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser, IUserPet } from '@/types/user';
import { SCHEDULE_ITEMS } from '@/constants/scheduleVet';
import { theme } from '@/styles/theme';
import { Image } from 'expo-image';

interface IScheduleItem extends AgendaEntry {
    id: string;
    user?: {
        id: string;
        name: string;
        surname: string;
        address: IUser['address'];
        profile_image?: string;
    };
    pets?: IUserPet[];
    dateTime?: Date;
    status?: 'scheduled' | 'pending' | 'finished' | string;
}

const ScheduleContent = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState<{
        [date: string]: IScheduleItem[];
    }>({
        '2024-01-17': SCHEDULE_ITEMS.map((item) => {
            return {
                id: 'teste',
                user: item.user,
                dateTime: item.dateTime,
                status: item.status,
                name: item.user.name,
                height: 0,
                day: ''
            };
        }),
        '2024-01-18': SCHEDULE_ITEMS.map((item) => {
            return {
                id: 'teste',
                user: item.user,
                dateTime: item.dateTime,
                status: item.status,
                name: item.user.name,
                height: 0,
                day: ''
            };
        }),
        '2024-01-20': SCHEDULE_ITEMS.map((item, index) => {
            return {
                id: 'teste',
                user: item.user,
                dateTime: item.dateTime,
                status: item.status,
                name: item.user.name,
                height: 0,
                day: ''
            };
        })
    });

    const onLoadItems = (date: DateData) => {
        console.log('Date To Get Schedule', date);
        //TODO: getSchedule
    };

    const ItemSchedule = (item: IScheduleItem) => {
        return (
            <TouchableOpacity className='mr-4 mt-4 rounded-lg bg-white p-4'>
                <View className='absolute right-4 top-4 h-12 w-12 overflow-hidden rounded-full'>
                    <Image
                        style={{ flex: 1 }}
                        source={
                            'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
                        }
                        contentFit='cover'
                        transition={500}
                    />
                </View>
                <View className='mb-2 flex-row'>
                    <View className='flex-row items-center gap-1 rounded-full bg-green-500/10 px-2'>
                        <View className='h-2 w-2 rounded-full bg-green-500' />
                        <Typo.S1 weight='medium' className='text-neutral-400'>
                            Confirmado
                        </Typo.S1>
                    </View>
                </View>
                <Typo.P1 weight='medium' className='-mb-1'>
                    {item.user?.name} {item.user?.surname}
                </Typo.P1>
                <Typo.P2 className='text-neutral-400'>Vacina</Typo.P2>
                <Typo.P2 className='text-neutral-400'>10:00AM - 10:45AM</Typo.P2>
            </TouchableOpacity>
        );
    };

    const EmptySchedule = () => {
        return (
            <View>
                <Typo.S1>Lista vazia meu consagrado</Typo.S1>
            </View>
        );
    };

    console.log('items', items);

    return (
        <Agenda
            items={items}
            selected={new Date().toISOString().split('T')[0]}
            ListEmptyComponent={EmptySchedule}
            loadItemsForMonth={onLoadItems}
            //@ts-ignore // TODO
            renderItem={ItemSchedule}
        />
    );
};

export default ScheduleContent;
