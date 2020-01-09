// Add your code here
function handleJson(userObject) {
  let p = document.createElement("p");
  p.textContent = userObject.id;
  let outputArea = document.getElementById("outputId");
  outputArea.appendChild(p);
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
      let errorElement = document.createElement("p")
      errorElement.textContent = error.message;
      let errorOutputArea = document.getElementById("error");
      errorOutputArea.appendChild(errorElement);
    });
}
