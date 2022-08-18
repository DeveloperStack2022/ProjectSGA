import {createContext, useState} from 'react'
import { IContext, IUser } from './types'
import {LoginRequest} from './util'

export const AuthContext =  createContext<IContext>({} as IContext)

export const AuthProvider = ({children}:{children:JSX.Element}) => {
    const [user,setUser] = useState<IUser | null>();

    async function authenticate(username:string,password:string){
        await LoginRequest(username,password);
    }
    function logout(){
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{...user,authenticate,logout}}>
            {children}
        </AuthContext.Provider>
    )
}