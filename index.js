// Add your code here
let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };
   
  let submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/users", submitData)
    .then(function(response) {
      return response.json();
    //   return fetch();
    })
    .then(function(object) {
      console.log(object);
    });
    // .catch(function(error) {
    //     alert("Bad things! Ragnarők!");
    //     console.log(error.message);
    // });