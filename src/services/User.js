import ManageFetchClass from "../../classes/ManageFetch";
const apiUrl = import.meta.env.VITE_API_URL
const ManageFetch = new ManageFetchClass();


export async function updateUserAllergy(id, allergy) {
    const endPoint = apiUrl + `/users/allergy/${id}`;
    const option = ManageFetch.configureFetch('put');
    option.body = JSON.stringify(allergy);

    const response = await fetch(endPoint, option);
}
