let URI = 'http://localhost:5000/api'
export const getUsers = async () => {
    let response = await fetch(`${URI}/getUsers`);
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