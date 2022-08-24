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


export type MateriaEntity = {
    descripcion: string
    hora_inicial:string
    hora_final:string
    aula:string;
    Lunes:Boolean
    Martes:Boolean
    Miercoles:Boolean
    Jueves:Boolean
    Viernes:Boolean
}


export interface MateriaState {
    materias?: MateriaEntity[],
    error: Error | null
    loading: false
}
