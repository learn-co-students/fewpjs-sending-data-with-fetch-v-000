function submitData(username, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: username,
      email: userEmail
    })
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      document.body.innerHTML = obj.id
    })
    .catch(function (error) {
      console.log(error)
      document.body.innerHTML = error.message
    })
}