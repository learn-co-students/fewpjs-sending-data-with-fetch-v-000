const submitData = (username, userEmail) => {
  let formData = {
    name: username,
    email: userEmail
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(resp => resp.json())
    .then(obj => (document.body.innerHTML = obj.id))
    .catch(error => (document.body.innerHTML = error.message));
};
