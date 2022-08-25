let URI = 'http://localhost:5000/api'

type DatosParams = {
    id_docente:string;
    id_ciclo:string;
    id_materia:string;
    ids_users:string[]
}

export const  CreateAssignParalelo = async (datos:DatosParams) => {
    console.log(datos)
    let response =  await fetch(`${URI}/assignParalelo`,{
        method:"POST",
        body:JSON.stringify(datos),
        headers:{
            "Content-Type":"application/json"
        }
    })
    return await response.json()
}

export const getUsers = async () => {
    let response = await fetch(`${URI}/getUsers`);
    return await response.json()
}

export const  getUsersStudents = async  () => {
    let response = await fetch(`${URI}/getUsersEstudiantes`)
    return await response.json()
}

export const getUsersDocentes = async () => {
    let response = await fetch(`${URI}/getUsersDocentes`)
    return await response.json()
}

export const getMaterias = async () => {
    let response = await fetch(`${URI}/getMaterias`);
    return await response.json()
}
export const getCiclosAcademicos = async () => {
    let response = await fetch(`${URI}/getCicloAcademicos`);
    return await response.json()
}

export const CreateUser = async (formData: any) => {
    let response = await fetch(`${URI}/createUser`, {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.json();
}

export const DeleteUser = async (username: string) => {
    let data = {
        username: username
    }
    let response = await fetch(`${URI}/deleteUser`, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "Application/json"
        }
    })

    return await response.json()
}


export const getParalelos = async () => {
    let response = await fetch(`${URI}/getParalelos`);
    return await response.json()
}


export const deleteAssignParalelo = async (id:string) => {
    let response = await fetch(`${URI}/deleteParalelo/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })

    return await response.json();
}