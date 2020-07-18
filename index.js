// Add your code here
let user = {
  name: "Steve",
  email: "steve@steve.com"
}

function submitData (){
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  }

  let body = document.querySelector("body")
  return fetch("http://localhost:3000/users", configObj)
   .then(response => response.json())
   .then(function(postedUser){
     body.append(postedUser.id);
   })
   .catch(function(error){
     body.append(error.message);
   })
}
