export type UserEntity = {
    numero_cedula: string,
    nombre: string,
    apellido: string,
    username: string,
    password: string,
    imageUrl: string
}

export interface UserState {
    users?: UserEntity[],
    error: Error | null;
    loading: false
}