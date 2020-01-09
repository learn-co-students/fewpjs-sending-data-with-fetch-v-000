// Add your code here
function submitData(username, userEmail) {
  let userData = {
    'name': username,
    'email': userEmail
  };
  let configObject = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST",
    body: JSON.stringify(userData)
  };
  
  return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("oh no!");
      console.log(error.message);
    })
}

submit = document.getElementById("submit")
submit.addEventListener("click", function() {
inputForm = document.getElementById("inputUser");
submitData(inputForm.name.value, inputForm.email.value);
});