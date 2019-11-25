// Add your code here
let formData = {
  name: "Sushi",
  email: "sushi@sushi.com"
};


function submitData(userName, userEmail){
  fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify({
    name: userName,
    email: userEmail
    })
  });
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
