import ManageFetchClass from "../../classes/ManageFetch"
const ManageFetch = new ManageFetchClass()
const apiUrl = import.meta.env.VITE_API_URL

/*
* ¿CÓMO HACEMOS PETICIONES A LA API?
* Esto no es tan complejo como Laravel con Sanctum por suerte,
* así que acá les dejo el paso a paso:
* 1. Tener la API conectada a la DB de la nube
* 2. Tener la API corriendo y escuchando en el puerto que hayan elegido (npm start)
* 3. Tener configurado el CORS (supongo que voy a hacer una pull request para eso)
*
* Con esto ya podemos hacer peticiones al back, puede que cambie algo con el tema
* de JST, pero no creo que haya tanta diferencia
*
* También, podemos usar axios si quieren (como hicimos con ophi), no lo hice solo
* porque a lo mejor alguno quería practicar o saber cómo sería con un fetch normal.
*
* Si quieren implementarlo es superfácil, acá les dejo la documentación:
* https://axios-http.com/es/docs/intro
* */

// TODO: Mover este "prefix" a una variable de entorno
const prefix = apiUrl
const endpoint = prefix + '/users'

/**
 * Obtiene todos los usuarios de la DB
 * @returns {Promise<*>}
 */
export async function getAllUsers() {
    const response = await fetch(endpoint, {})
    const result = await response.json()

    return result.data
}

export async function registerUser(userData) {
    const option = ManageFetch.configureFetch('POST');
    option.body = JSON.stringify(userData);

    const response = await fetch(endpoint, option)
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.msg ?? 'Error al registrar')
    }

    return result;
}