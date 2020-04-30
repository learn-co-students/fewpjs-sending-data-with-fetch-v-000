// Add your code here

// Example code:

// configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// };

let formData = {
  dogName: "Soda",
  dogBreed: "Goldendoodle"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarok!");
    console.log(error.message);
  });