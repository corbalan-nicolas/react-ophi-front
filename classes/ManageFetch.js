class ManageFetch {

    configureFetch(httpMethod, body = null) {
        const option = {
            method: httpMethod,
            headers: {
                'Content-type': 'application/json',
            }
        };

        // body?
        if (body) {
            option.body = JSON.stringify(body);
        }

        // token en localStorage?
        const token = localStorage.getItem('ophi_token');
        if (token) {
            option.headers['Authorization'] = `Bearer ${token}`;
        }

        return option;
    }

}

export default ManageFetch;