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

export async function getAllProducts() {
    const endPoint = apiUrl + `/food/`;
    const option = ManageFetch.configureFetch('get');
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener los alimentos')
    }

    return result.data
}

export async function postNewFood(formData) {
    const endPoint = apiUrl + '/food/'
    const option = ManageFetch.configureFetch('post', formData)
    const response = await fetch(endPoint, option)
    const result = await response.json()

    if(!response.ok) {
        throw new Error(result.msg ?? 'Error al obtener los alimentos')
    }

    return result.data
}

export async function getProductById(id) {
    const endPoint = apiUrl + `/food/${id}`;        // GET /api/food/:id
    const option = ManageFetch.configureFetch("get");
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al obtener el alimento");
    }

    return result.data;
}

export async function updateFood(id, formData) {
    const endPoint = apiUrl + `/food/${id}`;        // PUT /api/food/:id
    const option = ManageFetch.configureFetch("put", formData);
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al actualizar el alimento");
    }

    return result.data;
}

export async function deleteFood(id) {
    const endPoint = apiUrl + `/food/${id}`;        // DELETE /api/food/:id
    const option = ManageFetch.configureFetch("delete");
    const response = await fetch(endPoint, option);
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.msg ?? "Error al eliminar el alimento");
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