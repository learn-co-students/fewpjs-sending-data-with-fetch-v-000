// Add your code here
function submitData(userName, userEmail){
  let formData = {
    name: userName,
    email: userEmail
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let element = document.createElement("p");
      element.innerHTML = object.id;
      document.getElementsByTagName("body")[0].appendChild(element);
    })
    .catch(function(error) {
      let element = document.createElement("p");
      element.innerHTML = error.message;
      document.getElementsByTagName("body")[0].appendChild(element);
    });
}
