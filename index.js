// Add your code here
const submitData = (name, email) => {
  let data = {
    name: name,
    email: email
  }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };
  
  return fetch("http://localhost:3000/users", configObj)
            .then(response => response.json())
            .then((result) => {
              document.body.innerHTML = result.id
            })
            .catch((error) => {
              document.body.innerHTML = error.message
            })

}