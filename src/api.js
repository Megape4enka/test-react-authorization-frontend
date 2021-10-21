const request = async (url, data) => {
    const response = await fetch(`http://localhost:8082${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const api = {
    getData: () => request('/data', {id: localStorage.getItem('userId')}),
    login: (data) => request('/login-user', data)
}