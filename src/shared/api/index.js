import axios from 'axios'

const url =
  process.env.NODE_ENV === 'development'
    ? 'https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/'
    : 'https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/'

const api = axios.create({
  baseURL: url
})

export default api
