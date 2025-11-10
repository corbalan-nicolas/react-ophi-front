class ManageFetch {

    configureFetch(httpMethod) {
        const option = {
            method: httpMethod,
            headers: {
                'Content-type': 'application/json',
            }
        }
        return option;
    }

}


export default ManageFetch