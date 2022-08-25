
export type ParalelosEntity = {
    _id:{
        $oid:string;
    }
    nombre_docente:string;
    descripcion_materia:string;
    descripcion_ciclo:string;
    paralelo:string;
    student:string[]
}


export type UserEntity = {
    _id: string,
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
    hora_inicio:string
    hora_final:string
    aula:string;
    Lunes:Boolean
    Martes:Boolean
    Miercoles:Boolean
    Jueves:Boolean
    Viernes:Boolean
}

type Id = {
    $oid:string
}

export type CliclosAcademicosEntity = {
    descripcion:string;
    orden:String;
    estado?:Boolean
    _id:Id
}

type Dias = string[]

export type MateriaResponseServer = { 
    _id:{
        $oid:string
    }
    descripcion_: string
    hora_inicio:string
    hora_final:string
    aula:string;
    dias:Dias[]
}


export interface MateriaState {
    materias?: MateriaEntity[],
    error: Error | null
    loading: false
}

export interface CicloAcademico {
    ciclosAcademicos?: CliclosAcademicosEntity[]
    error: Error | null
    loading: false
}

export interface ParaleloResponseServer {
    error:Error | null;
    loading: false
    paralelos: ParalelosEntity[]
}