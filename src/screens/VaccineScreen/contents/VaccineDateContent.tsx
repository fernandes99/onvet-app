import { useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { setVaccineService } from '@/store/reducers/vaccines';
import { theme } from '@/styles/theme';
import { TouchableOpacity } from 'react-native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Button } from '@/components/Button';
import { useDispatch } from 'react-redux';

const VaccineDateContent = () => {
    const dispatch = useDispatch();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<Date | null>(null);

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowDatePicker(false);

        if (!selectedDate || event.type === 'dismissed') return;

        setDate(() => selectedDate);
        setShowTimePicker(true);
    };

    const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
        setShowDatePicker(false);
        setShowTimePicker(false);

        if (!selectedTime || event.type === 'dismissed') return;

        setTime(selectedTime);

        if (date) {
            const combinedDateTime = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                selectedTime.getHours(),
                selectedTime.getMinutes()
            );

            dispatch(setVaccineService({ dateTime: combinedDateTime }));
        }
    };

    const resetDateTime = () => {
        setDate(null);
        setTime(null);
        setShowDatePicker(true);
    };

    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    return (
        <Container>
            <ScrollView className='flex-1 bg-slate-50'>
                <Container className='p-6'>
                    <Typo.P1 weight='medium'>Para quando?</Typo.P1>
                    <Typo.P2 className='mb-8 text-neutral-400'>Escolha a data e horário</Typo.P2>

                    <View className='gap-4'>
                        {date && <Field title='Data' value={date.toLocaleDateString()} />}
                        {time && <Field title='Horário' value={time.toLocaleTimeString()} />}

                        {time && date && (
                            <Button variant='ghost' className='mt-2' onPress={resetDateTime}>
                                <Typo.P1>Modificar</Typo.P1>
                            </Button>
                        )}
                    </View>

                    {!date && (
                        <TouchableOpacity onPress={openDatePicker} className='mt-8 items-center'>
                            <View className='mb-2 h-24 w-24 items-center justify-center rounded-full bg-primary-100'>
                                <AntDesign
                                    name='pluscircle'
                                    size={32}
                                    color={theme.colors['primary-500']}
                                />
                            </View>
                            <Typo.H5 className='text-primary-500'>Inserir data</Typo.H5>
                        </TouchableOpacity>
                    )}

                    {date && !time && (
                        <TouchableOpacity onPress={openDatePicker} className='mt-8 items-center'>
                            <View className='mb-2 h-24 w-24 items-center justify-center rounded-full bg-primary-100'>
                                <AntDesign
                                    name='pluscircle'
                                    size={32}
                                    color={theme.colors['primary-500']}
                                />
                            </View>
                            <Typo.H5 className='text-primary-500'>Inserir hora</Typo.H5>
                        </TouchableOpacity>
                    )}
                </Container>

                {showDatePicker && (
                    <RNDateTimePicker
                        testID='dateTimePicker'
                        value={date || new Date()}
                        mode='date'
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onDateChange}
                    />
                )}

                {showTimePicker && (
                    <RNDateTimePicker
                        testID='dateTimePicker'
                        value={time || new Date()}
                        mode='time'
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onTimeChange}
                    />
                )}
            </ScrollView>
        </Container>
    );
};

export default VaccineDateContent;
