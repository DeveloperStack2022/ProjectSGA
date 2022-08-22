import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import UsersSlice from '../features/users'
// import SttepSlice from '../features/stteps'
// import equipoSlice from '../features/equipo'
// import PartesEquipo from '../features/partes'

export const store = configureStore({
    reducer: {
        // cliente:
        users: UsersSlice,
        // equipo: equipoSlice,
        // partesEquipo: PartesEquipo
    },
    devTools: true
})
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type AppDispatch = typeof store.dispatch;