import axios from 'axios'

const UserService = axios.create({
    baseURL: "https://localhost:44384/Authenticate/"
})

export default {
    login() {
        return UserService.post('login')
    },

    logout() {
        return UserService.post('logout')
    }
}