const usersURL = 'http://localhost:3000/users'


function submitData(name, email) {
  return fetch(usersURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({name: name, email: email})
  })
  .then(response => response.json())
  .then(json => appendData(json))
  .catch(error => appendError(error))
}

const appendData = (json) => {
  document.body.append(json.id)
}

const appendError = (error) => {
  document.body.append(error.message)
}