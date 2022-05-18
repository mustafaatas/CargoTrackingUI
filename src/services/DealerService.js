import axios from 'axios'

const DealerService = axios.create({
    baseURL: 'https://localhost:44384/dealer/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
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

    createDealers() {
        return DealerService.post('createDealers')
    },

    updateDealers(id) {
        return DealerService.put('updateDealer/' + id)
    },

    deleteDealer(id) {
        return DealerService.delete('deleteDealer/' + id)
    }
}
