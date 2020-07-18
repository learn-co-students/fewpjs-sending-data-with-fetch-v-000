// Add your code here
// let formData = {
//   name: "Sushi",
//   email: "sushi@sushi.com"
// };

let h1 = document.getElementById('response');


function submitData(userName, userEmail){
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify({
    name: userName,
    email: userEmail
    })
  })
  .then(response => response.json())
  .then(object =>
    h1.innerHTML = object.id)
  .catch(error =>
  document.body.innerHTML = error.message);  
}



// let configObj = {
//   //method: 'post',
//   headers: {
//     "Content-type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };



// fetch("http://localhost:3000/dogs", configObj)
//   .then(response => response.json())
//   .then(object => console.log(object))
//   .catch(error => console.log(error.message));


  // fetch("http://localhost:3000/dogs", configObj)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(object) {
  //     console.log(object);
  //   });
