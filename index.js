// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

function submitData(name, email){
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object[ "id" ];
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    });
}

   