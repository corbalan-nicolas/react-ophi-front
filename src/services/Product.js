import ManageFetchClass from "../../classes/ManageFetch";
const ManageFetch = new ManageFetchClass();
let finishEndPoint = '';


export async function find_by_name(name) {
    console.log(name, 'asf');
    // finishEndPoint = `name/${name}`;
    const endPoint = `http://localhost:5000/api/food/name/${name}`;
    const option = ManageFetch.configureFetch('get');

    console.log(endPoint);
    // Siempre retornar el fetch completo, además de la data en el then.
    return fetch(endPoint, option)
    .then(res => res.json())
    .then(json => {
        const {data} = json;
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error('[services/Product.js] -> find_by_name: error al buscar el producto', error);
    });
}