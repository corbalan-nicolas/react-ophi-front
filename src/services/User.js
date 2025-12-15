import ManageFetchClass from "../../classes/ManageFetch";
const apiUrl = import.meta.env.VITE_API_URL
const ManageFetch = new ManageFetchClass();


export async function updateUserAllergy(id, allergy) {
    const endPoint = apiUrl + `/users/allergy/${id}`;
    const option = ManageFetch.configureFetch('put');
    option.body = JSON.stringify(allergy);

    const response = await fetch(endPoint, option);
    const result = await response.json();



    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener alergia');
    }

    return result.data
}

export async function getUserAllergy(id) {
    const endPoint = apiUrl + `/intolerances/${id}`;
    const option =  ManageFetch.configureFetch('get');
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener alergia');
    }

    return result.data;
}

export async function getAllUsers() {
    const endPoint = apiUrl + `/users`;
    const option =  ManageFetch.configureFetch('get');

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener alergia');
    }

    return result.data;
}

export async function deleteUser(id) {
    const endPoint = apiUrl + `/users/${id}`;        // DELETE /api/food/:id
    const option = ManageFetch.configureFetch("delete");
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al eliminar el usuario");
    }

    return result.data;
}

export async function getUser(id) {
    const endPoint = apiUrl + `/users/${id}`; 
    const option = ManageFetch.configureFetch("get");

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al obtener el usuario");
    }

    return result.data;
}

export async function updateUser(id, data) {
    const endPoint = apiUrl + `/users/${id}`; 
    const option = ManageFetch.configureFetch("put", data);

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al actualizar el usuario");
    }

    return result.data;
}

export async function addUser(data) {
    const endPoint = apiUrl + `/users`; 
    const option = ManageFetch.configureFetch("post", data);

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al crear el usuario");
    }

    return result.data;
}