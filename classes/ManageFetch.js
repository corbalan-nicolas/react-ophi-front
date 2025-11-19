class ManageFetch {

    configureFetch(httpMethod) {
        const option = {
            method: httpMethod,
            headers: {
                'Content-type': 'application/json',
            }
        };

        // token en localStorage?
        const token = localStorage.getItem('ophi_token');
        if (token) {
            option.headers['Authorization'] = `Bearer ${token}`;
        }

        return option;
    }

}

export default ManageFetch;