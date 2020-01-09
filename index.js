// Add your code here
function handleJson(userObject) {
  li = document.createElement(li)
  li.textContent = userObject.id.value
  outputArea = document.getElementById("outputId");
  outputArea.appendChild(li)
  
  
}
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
      handleJson(object);
    })
    .catch(function(error) {
      alert("oh no!");
      console.log(error.message);
    })
}

