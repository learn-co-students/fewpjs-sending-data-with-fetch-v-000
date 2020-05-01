// Add your code here

function displayMessage(message) {
  const messageElement = document.createElement('p');

  messageElement.textContent = message;
  document.body.append(messageElement);
}

// function displayUserId(json) {
//   displayMessage(`User id: ${json.id}`);
// }

// function displayError(error) {
//   displayMessage(error.message);
// }

function submitData(userName, userEmail) {
  const destinationUrl = "http://localhost:3000/users";

  let userData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch(destinationUrl, configObj)
           .then(response => response.json())
           .then(function(json) {
             displayMessage(`User id: ${json.id}`);
           })
           .catch(function(error) {
             displayMessage(error.message);
           });
}

/* Example code:

  configurationObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle"
    })
  };

  let formData = {
    dogName: "Soda",
    dogBreed: "Goldendoodle"
  };

  let configObj = {
    // method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarok!");
      console.log(error.message);
    });

*/