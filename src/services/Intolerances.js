import ManageFetchClass from "../../classes/ManageFetch";
const apiUrl = import.meta.env.VITE_API_URL
const ManageFetch = new ManageFetchClass();

export async function getAllIntolerances() {
    const endPoint = apiUrl + `/intolerances`;
    const option = ManageFetch.configureFetch('get');

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener intolerancias')
    }

    return result.data;
}

export async function getIntoleranceById(id) {
    const endPoint = apiUrl + `/intolerances/${id}`;
    const option = ManageFetch.configureFetch('get');

    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener la intolerancia')
    }

    return result.data;
}

export async function postNewIntolerance(formData) {
    const endPoint = apiUrl + '/intolerances/';
    const option = ManageFetch.configureFetch('post', formData);
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al crear la intolerancia')
    }

    return result.data;
}

export async function updateIntolerance(id, formData) {
    const endPoint = apiUrl + `/intolerances/${id}`;
    const option = ManageFetch.configureFetch('put', formData);
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al actualizar la intolerancia')
    }

    return result.data;
}

export async function deleteIntolerance(id) {
    const endPoint = apiUrl + `/intolerances/${id}`;
    const option = ManageFetch.configureFetch('delete');
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al eliminar la intolerancia')
    }

    return result.data;
}