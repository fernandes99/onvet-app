import { TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from 'react-native-calendars';
import { Typo } from '@/components/Typograph';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser, IUserPet } from '@/types/user';
import { SCHEDULE_ITEMS } from '@/constants/scheduleVet';

interface IScheduleItem {
    id: string;
    user: {
        id: string;
        name: string;
        surname: string;
        address: IUser['address'];
    };
    pets: IUserPet[];
    dateTime: Date;
    status: 'scheduled' | 'pending' | 'finished';
}

const ScheduleContent = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState<AgendaSchedule>({
        '2024-01-17': SCHEDULE_ITEMS.map((item) => {
            return {
                name: item.user.name,
                height: 40,
                day: ''
            };
        })
    });

    const onLoadItems = (date: DateData) => {
        console.log('Date To Get Schedule', date);
        //TODO: getSchedule
    };

    const ItemSchedule = (item: AgendaEntry, isFirst: boolean) => {
        return (
            <TouchableOpacity className={`${isFirst ? 'bg-red-100' : 'bg-blue-500'}`}>
                <View>
                    <Typo.P1>{item.name}</Typo.P1>
                </View>
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
            renderItem={ItemSchedule}
        />
    );
};

export default ScheduleContent;
