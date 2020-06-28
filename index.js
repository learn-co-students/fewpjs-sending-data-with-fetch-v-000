function submitData(username, email) {
  const formData = {
    name: username,
    email: email
  }
  const configurationObj = {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)

  }
  return fetch("http://localhost:3000/users", configurationObj)
  .then((response)=>response.json())
  .then((json)=>{
    document.body.innerHTML = json[ "id" ]
  })
  .catch((error)=>document.body.innerHTML = error.message)
}
