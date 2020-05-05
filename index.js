// Add your code here
//form data?


//write a method, submitData, that takes two strings arguments
function submitData(name, email){ 


  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify({
      name: name,
      email: email
    })
    
  };

  return fetch("http://localhost:3000/users", configObj) //The tests need access to the fetch() request inside submitData
    .then(function(response) {
      return response.json()
    })

    // Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.
    .then(function(object) {
      document.body.innerHTML = object["id"]
    })


    // expect to receive an object on error with a property, message. Append this message to the DOM
    .catch(function(error) {
      document.body.innerHTML = error.message
    });

}