function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  function appendNewPElement(param) {
    let element = document.createElement("p");
    element.innerHTML = param;
    document.body.appendChild(element);
  };

  return fetch("http://localhost:3000/users", obj)
    .then(resp => resp.json())
    .then(user => fetchHelper(user.id))
    .catch(error => fetchHelper(error.message));
};
