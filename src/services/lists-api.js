import tokenService from '../services/tokenService'
const BASE_URL = '/api/lists';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(list) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
      body: JSON.stringify(list)
    }, { mode: 'cors' })
    .then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())
}