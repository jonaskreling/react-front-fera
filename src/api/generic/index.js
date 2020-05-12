import { api } from 'shared'

const get = ({ url }) => {
  return api.get(`${url}`)
}

const post = ({ url, data }) => {
  return api.post(`${url}`, { data })
}

const put = ({ url, data }) => {
  return api.put(`${url}`, { data })
}

const remove = ({ url, data }) => {
  return api.delete(`${url}`, { data })
}

export default {
  get,
  post,
  put,
  remove
}
