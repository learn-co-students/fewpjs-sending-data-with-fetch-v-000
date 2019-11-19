// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const userObject = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  const response = fetch("http://localhost:3000/users", userObject)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(object) {
      document.getElementsByTagName('body')[0].append(object.id);
    })
    .catch(function(error) {
      document.getElementsByTagName('body')[0].append(error.message);
    })
    ;

  return response;
}
