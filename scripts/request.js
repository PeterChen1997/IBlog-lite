import axios from 'axios'
import axiosConfig from '@/scripts/config'

const config = {
    BASE_URL:"https://api.peterchen.club/api"
}

const service = axios.create(axiosConfig)

const requests = {
    delete: url =>
      service
        .delete(`${config.BASE_URL}${url}`)
        .catch(handleErrors),
    get: url =>
      service
        .get(`${config.BASE_URL}${url}`)
        .catch(handleErrors),
    put: (url, body) =>
      service
        .put(`${config.BASE_URL}${url}`, body)
        .catch(handleErrors),
    post: (url, body) =>
      service
        .post(`${config.BASE_URL}${url}`, body)
        .catch(handleErrors),
  };
  
  export default requests