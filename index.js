// Add your code here
/*
write a method, submitData, that takes two strings arguments,
one representing a user's name and the other representing a user's email.

The first two tests mirror the behavior of the JSON server.
As you write your solution, keep the server running to test your code.
Open index.html in a browser to gain access to your submitData function in console.

Note: The tests in this lab need access to the fetch() request inside submitData.
In order to give them access, write you solution so that submitData returns the fetch().
This will not change the behavior of your fetch().
*/

function submitData(name, email) {
  /*
  write a valid POST request to http://localhost:3000/users using fetch().
  This request should include:
    1. The destination URL
    2. Headers for 'Content-Type' and 'Accept' set to 'application/json'
    3. a) A body with the name and email passed in as arguments to submitData.
      b) These should be assigned to name and email keys within an object.
      c) This object should then be stringified.
  */
  // 3b. These should be assigned to name and email keys within an object.
  let formData = {
    name: name,
    email: email
  };
     
  let configObj = {
    method: "POST",
    // 2. Headers for 'Content-Type' and 'Accept' set to 'application/json'
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // 3a. A body with the name and email passed in as arguments to submitData.
    // 3c. This object should then be stringified.
    body: JSON.stringify(formData)
  };
  // 1. The destination URL
  return fetch("http://localhost:3000/users", configObj)
  // Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property.
  .then(response => response.json())
  // Use a second then() to access this newly converted object.
  // From this object, find the new id and append this value to the DOM.
  .then(object => {
    document.body.innerHTML = object.id;
  })
  // When writing the callback function for your catch(),
  // expect to receive an object on error with a property, `message`, containing info about what went wrong.
  // Append this message to the DOM when catch() is called
  .catch(function(error) {
    document.body.innerHTML = error.message;
  });
}
