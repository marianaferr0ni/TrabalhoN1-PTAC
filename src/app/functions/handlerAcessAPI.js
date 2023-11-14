'use server'

const url = "https://aula-17-10-henna.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated", 
    {
        method: 'POST',
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(user)
    }); 
    const userAuth = await responseOfApi.json();
    return userAuth;
} 

const getUsers = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/users", {cache:"no-cache"}, {
            next: { revalidate: 10}
        });
        const listUsers = responseOfApi.json()
        return listUsers;
    }
    catch{
        return null
    }
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(user)
        });
        const userSave = await responseOfApi.json();
        console.log(userSave)
        return userSave;
    
    }
    catch{
        return null
    }
}

/*const updateUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(`${url}/user/${id}`, {
            method: 'PUT',

        });
    }
    catch{

    }
}*/
export { getUsers, getUserAuthenticated, postUser };
