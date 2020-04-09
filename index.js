// Add your code here
document.addEventListener("DOMContentLoaded", submitData)

// A body with the name and email passed in as arguments to submitData. 
function submitData(name, email) {



let configObj = {
    // valid POST request
    method: "POST",
    // Headers for 'Content-Type' and 'Accept' set to 'application/json'
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    // This object should then be stringified.
    body: JSON.stringify({name, email})
};
    return fetch("http://localhost:3000/users", configObj)

    // Use a then() call to access the Response object and  
    .then(function(response) {
        // use its built in json() method to parse the contents of the body property.
        return response.json();
    })

    // Use a second then() to access this newly converted object.
    .then(function(object) {
        // From this object, find the new id and append this value to the DOM.
        document.body.innerHTML = object.id
    })

    // after the two then() calls on your fetch() request, add a catch().
    .catch(function(error) {
        // expect to receive an object on error with a property, message, containing info about what went wrong.
        alert("Error Alert!");
        // Append this message to the DOM when catch() is called.
        document.body.innerHTML = error.message
      });
}

