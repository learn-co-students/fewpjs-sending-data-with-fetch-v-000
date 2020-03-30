function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  function appendText(text) {
    let textElement = document.createElement('p');
    textElement.innerHTML = text;

    document.body.appendChild(textElement);
  }

  return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(obj) {
      appendText(obj.id);
    })
    .catch(function(error) {
      appendText(error.message);
    });
}
