const BASE_URL = '/api/lists';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(list) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(list)
    }).then(res => res.json());
  }