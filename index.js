// Add your code here
function submitData(name, email){
  const url = 'http://localhost:3000/users'
  
  let userData = {
    name: name,
    email: email
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch(url, configObj)
  .then(resp => resp.json())
  .then(object => document.body.innerHTML = object["id"])
  .catch(errors => document.body.innerHTML = errors.message)
}
