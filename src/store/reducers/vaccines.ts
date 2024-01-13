import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IVaccine {
    id: string;
    slug: string;
    name: string;
    petId: string;
}

export interface IVaccineState {
    vaccines: IVaccine[];
    service: {
        dateTime: Date | null;
    };
}

const vaccines = createSlice({
    name: 'vaccines',
    initialState: {
        vaccines: [],
        service: {
            dateTime: null
        }
    } as IVaccineState,
    reducers: {
        setVaccines(state: IVaccineState, action: PayloadAction<IVaccineState['vaccines']>) {
            state.vaccines = action.payload;
        },
        setVaccineService(state: IVaccineState, action: PayloadAction<IVaccineState['service']>) {
            state.service = action.payload;
        }
    }
});

export const { setVaccines, setVaccineService } = vaccines.actions;
export default vaccines.reducer;
