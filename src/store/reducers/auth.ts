import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
    session?: string | null;
}

const global = createSlice({
    name: 'global',
    initialState: {
        session: null
    } as IAuthState,
    reducers: {
        signIn(state: IAuthState, action: PayloadAction<IAuthState['session']>) {
            state.session = action.payload;
        },
        signOut(state: IAuthState, action: PayloadAction<IAuthState['session']>) {
            state.session = null;
        }
    }
});

export const { signIn, signOut } = global.actions;
export default global.reducer;
