import ManageFetchClass from "../../classes/ManageFetch";
const apiUrl = import.meta.env.VITE_API_URL
const ManageFetch = new ManageFetchClass();



export async function findByName(name) {
    const endPoint = apiUrl + `/food/name/${name}`;
    const option = ManageFetch.configureFetch('get');

    const response = await fetch(endPoint, option);
   
    const result = await response.json();

    if(!response.ok) {
       throw new Error(result.msg ?? 'Error al buscar alimentos')
    }

    return result.data;
}

export async function getAllSafeFood(id) {
    const endPoint = apiUrl + `/food/allergen/${id}`;
    const option = ManageFetch.configureFetch('get');

    const response = await fetch(endPoint, option);
    const result = await response.json();


    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al buscar alimentos')
    }

    return result.data;
}


// export async function getAllSafeFood(allergen) {
//     const endPoint = apiUrl + `/food/ingredient/${allergen}`;
//     const option = ManageFetch.configureFetch('get');

//     const response = await fetch(endPoint, option);
//     const result = await response.json();

//     console.log(result);
//     if(!response.ok) {
//         throw new Error(result.msg ?? 'Error al buscar alimentos')
//     }

//     return result.data;
// }