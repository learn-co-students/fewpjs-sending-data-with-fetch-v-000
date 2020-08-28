
function submitData(name, email){
  let userData = {
    name: name,
    email: email
  };

  let payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  let div = document.createElement("div")

  return fetch("http://localhost:3000/users", payload)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      //variable moved to outer scope.
      // let div = document.createElement("div")
      div.innerHTML = object.id;
      document.body.appendChild(div);
    })
    .catch(function(error) {
      // variable moved to outer scope.
      // let div = document.createElement("div")
      div.innerHTML = error.message;
      document.body.appendChild(div);
    });
}
