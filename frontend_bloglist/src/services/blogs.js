import axios from 'axios'
const urlBase = '/api/blogs'
let token = null
let config
const setToken = newToken => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}
const getAll = async () => {
  const response = await axios.get(urlBase, config)
  return response.data
}
const create = async newObject => {
  const response = await axios.post(urlBase, newObject, config)
  return response.data
}
const update = async objectToUpdate => {
  const response = await axios.put(`${urlBase}/${objectToUpdate.id}`, objectToUpdate, config)
  return response.data
}
const remove = async id => {
  const response = await axios.delete(`${urlBase}/${id}`, config)
  return response.data
}
export default { getAll, create, update, setToken, remove }