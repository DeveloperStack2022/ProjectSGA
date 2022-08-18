export async function LoginRequest(username:string,password:string) {
    let URI = 'http://localhost:5000/api'
    let data = {username,password};
    try {
        
        let response = await fetch(`${URI}/login`,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(response)
        let datos = await response.json()
        return datos;
    } catch (error) {
        return null
    }
}