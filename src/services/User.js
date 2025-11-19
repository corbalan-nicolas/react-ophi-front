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