import { IUser } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IScheduleVaccine {
    id: string;
    slug: string;
    name: string;
    petId: string;
}

export interface IScheduleState {
    vaccines: IScheduleVaccine[];
    type: 'vaccine' | 'appointment' | '';
    dateTime: Date | null;
    userAddress: IUser['address'] | null;
}

const schedule = createSlice({
    name: 'schedule',
    initialState: {
        vaccines: [],
        dateTime: null,
        type: '',
        userAddress: null
    } as IScheduleState,
    reducers: {
        setSchedule(state: IScheduleState, action: PayloadAction<IScheduleState>) {
            return action.payload;
        },
        setScheduleVaccines(
            state: IScheduleState,
            action: PayloadAction<IScheduleState['vaccines']>
        ) {
            state.vaccines = action.payload;
        },
        setScheduleDateTime(
            state: IScheduleState,
            action: PayloadAction<IScheduleState['dateTime']>
        ) {
            state.dateTime = action.payload;
        }
    }
});

export const { setScheduleVaccines, setScheduleDateTime, setSchedule } = schedule.actions;
export default schedule.reducer;
