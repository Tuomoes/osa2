import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const createObj = (newPersonObject) => {
    return axios.post(baseUrl, newPersonObject)
}

const deleteObj = (id) => {
    return axios.delete(baseUrl + '/' + id)
}

export default { getAll, createObj, deleteObj }