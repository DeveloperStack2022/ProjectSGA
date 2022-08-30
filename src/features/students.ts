import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {RootState, AppThunk} from '../redux'
import { getUsersStudents } from '../api/users'
import { Students,UserEntity } from '../types/types'


const initalState:Students = {
    error:null,
    loading:false,
    students:[]
}

export const studentSlice = createSlice({
    name:"Students",
    initialState:initalState,
    reducers:{
        fetchStudentsSucces(state,action: PayloadAction<UserEntity[]>){
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