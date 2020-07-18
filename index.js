// Add your code here


function submitData(name, email) {
  
  let userData = {
    name: name,
    email: email
  };  
  
  let configObject = {
  method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch('http://localhost:3000/users', configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let header = document.createElement("H1");
    let text = document.createTextNode(object.id);
    header.appendChild(text);
    document.body.appendChild(header);
  })
  .catch(function(error) {
    let header = document.createElement("H1");
    let text = document.createTextNode(error.message);
    header.appendChild(text);
    document.body.appendChild(header);
  });
}