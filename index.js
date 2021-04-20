// Add your code here
  

function submitData(userName, userEmail) {

  return fetch('http://localhost:3000/users', {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }),
  })

  .then(function(response) {
    return response.json();
  })

  .then(function(object) {
    let div = document.createElement('div')
    div.innerHTML = object['id']
    document.body.appendChild(div)
  })

  .catch(function(error) {
    let div = document.createElement('div')
    div.innerHTML = error.message
    document.body.appendChild(div)
  })

}