
const body = document.getElementById("body");

function submitData(name, email){
  // console.log(userData)
  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  };
    return fetch("http://localhost:3000/users", configObject)
    .then(function(response){
      return response.json()
    }).then(function(object){
      document.body.innerHTML = object.id;
      // console.log(object)
    }).catch(function(error){
      document.body.innerHTML = error.message;
    })
};
