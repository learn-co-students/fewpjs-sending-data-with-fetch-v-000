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
   
  function submitData() {
    fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      renderData(object);
    })
    .catch(function(error) {
      document.body.innerHTML = `<h1>${error.message}</h1>`;
        return fetch("http://localhost:3000/users");
    });
  }

  function renderData(object) {
    document.body.innerHTML = `<h2>${object.id}</h2>`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    submitData()
  })