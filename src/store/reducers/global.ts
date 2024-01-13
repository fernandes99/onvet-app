import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGlobalState {
    loading: {
        show: boolean;
        message?: string;
    };
}

const global = createSlice({
    name: 'global',
    initialState: {
        loading: {
            show: false,
            message: ''
        }
    } as IGlobalState,
    reducers: {
        setLoading(state: IGlobalState, action: PayloadAction<IGlobalState['loading']>) {
            action.payload.message = action.payload.message || '';
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = global.actions;
export default global.reducer;
