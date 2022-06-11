import axios from 'axios'

console.log(localStorage.getItem('jwtToken'))
const DealerService = axios.create({
    baseURL: 'https://localhost:44384/dealer/',
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('jwtToken'), Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getDealers() {
        return DealerService.get('getDealers')
    },

    getDealer(id) {
        return DealerService.get('getDealer/' + id)
    },

    createDealer() {
        return DealerService.post('createDealers')
    },

    updateDealer(id) {
        return DealerService.put('updateDealer/' + id)
    },

    deleteDealer(id) {
        return DealerService.delete('deleteDealer/' + id)
    }
}
