import { get } from './helpers/ApiRequestsHelper'

function getAll () {
  return get('/users/myrestaurants')
}

function getDetail (id) {
  return get('/restaurants/' + id)
}

export { getAll, getDetail }
