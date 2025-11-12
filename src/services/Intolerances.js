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
