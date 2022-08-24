import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../redux'
import { MateriaState, MateriaEntity } from '../types/types'
import { getMaterias } from '../api/users'



const initalStae: MateriaState = {
    error: null,
    loading: false,
    materias: []
}

export const usersSlice = createSlice({
    name: "Materia",
    initialState: initalStae,
    reducers: {
        addMateria: (state, action: PayloadAction<string>) => {

            // state.apellido = action.payload.apellido;
            // state.nombre = action.payload.nombre;
            // state.imageUrl = action.payload.imageUrl;
            // state.numero_cedula = action.payload.numero_cedula;
            // state.password = action.payload.password;
            // state.username = action.payload.username
        },
        fetchUsersSuccess(state, action: PayloadAction<MateriaEntity[]>) {
            return {
                ...state,
                loading: false,
                error: null,
                materias: action.payload,
            };
        },
        fetchUsersError(state, action: PayloadAction<Error>) {
            return {
                ...state,
                loading: false,
                error: action.payload,
                materias: [],
            };
        },
    }
})

export const GetMaterias = (): AppThunk => {
    return async (dispatch) => {

        try {
            const response = await getMaterias();
            dispatch(fetchUsersSuccess(response))
        } catch (error) {
            dispatch(fetchUsersError(error as Error))
        }
    }
}


export const { addMateria, fetchUsersSuccess, fetchUsersError } = usersSlice.actions;
export const selectSttep = (state: RootState) => state.users
export default usersSlice.reducer