import { IUser } from '@/types/user';
import { IVaccine } from '@/types/vaccine';
import { IVeterinary } from '@/types/veterinary';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICheckoutVaccine {
    id: string;
    slug: string;
    name: string;
    petId: string;
}

interface ISummaryVaccine extends IVaccine {
    price: number;
    quantity: number;
}

interface ICheckoutData {
    schedule: {
        type: 'vaccine' | 'appointment';
        vaccines: ICheckoutVaccine[];
        dateTime: Date;
        userAddress: IUser['address'];
    };
    summary: {
        totalPrice: number;
        totalPerVaccines: ISummaryVaccine[];
    };
    payment: {
        method: 'pix';
    };
    veterinary: {
        id: IVeterinary['id'];
    };
    messageToVeterinary: string;
}

export interface ICheckoutState {
    data: ICheckoutData | null;
}

const checkout = createSlice({
    name: 'checkout',
    initialState: {
        data: null
    } as ICheckoutState,
    reducers: {
        setCheckout(state: ICheckoutState, action: PayloadAction<ICheckoutData>) {
            state.data = action.payload;
        }
    }
});

export const { setCheckout } = checkout.actions;
export default checkout.reducer;
