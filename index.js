function submitData(n, e){
  let formData = { name: n, email: e }

  let configurationObject = {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", configurationObject)
  .then(resp =>  resp.json() ).then( function(data) { document.body.textContent = data.id})
  .catch(function(err) { document.body.innerHTML = err.message })
}