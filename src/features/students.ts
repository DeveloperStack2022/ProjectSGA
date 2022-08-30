import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../redux'
import { Students, UserEntity } from '../types/types'
import { getUsersParalelos } from '../api/users'



const initalStae: Students = {
    error: null,
    loading: false,
    students: []
}

export const studentSlice = createSlice({
    name: "Students",
    initialState: initalStae,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {

            // state.apellido = action.payload.apellido;
            // state.nombre = action.payload.nombre;
            // state.imageUrl = action.payload.imageUrl;
            // state.numero_cedula = action.payload.numero_cedula;
            // state.password = action.payload.password;
            // state.username = action.payload.username
        },

        fetchUsersStudentSuccess(state, action: PayloadAction<UserEntity[]>) {
            return {
                ...state,
                loading: false,
                error: null,
                students: action.payload,
            };
        },
        fetchUsersStudentError(state, action: PayloadAction<Error>) {
            return {
                ...state,
                loading: false,
                error: action.payload,
                students: [],
            };
        },
    }
})

export const GetUsers = (paralelo:string): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await getUsersParalelos(paralelo);
            dispatch(fetchUsersStudentSuccess(response))
        } catch (error) {
            dispatch(fetchUsersStudentError(error as Error))
        }
    }
}


export const { addUser, fetchUsersStudentSuccess, fetchUsersStudentError } = studentSlice.actions;
export const selectSttep = (state: RootState) => state.users
export default studentSlice.reducer