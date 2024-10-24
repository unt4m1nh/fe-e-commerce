import axios from "axios";

const api = axios.create({
    baseURL: "",
    timeout: 3000, 
    headers: {
        "Content-Type": "application/json"
    }
})

// Add authorization token
api.interceptors.request.use((config) => {
    // Logic get session token
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error)
})


// Handle unauthorized request
api.interceptors.response.use((response) => {
    return response
}, (error) => {
    // Logic handle 401 status code
    if (error.response && error.response.status === 401) {
        console.error('Unauthorized request')
        // Logout or redirect
    }
    return Promise.reject(error)
})

export default api