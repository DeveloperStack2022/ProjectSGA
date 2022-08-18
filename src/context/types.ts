export interface IUser{
    username?:string;
    password?:string;
}

export interface IContext extends IUser {
    authenticate: (username:string,password:string) => Promise<void>;
    logout : () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}