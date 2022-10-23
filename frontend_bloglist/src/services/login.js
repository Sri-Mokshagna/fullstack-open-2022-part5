import axios from 'axios'
const urlBase = '/api/login'
const login = async credentials => {
  const response = await axios.post(urlBase, credentials)
  return response.data
}
export default { login }