// Add your code here
// A body with the name and email passed in as arguments to submitData. 

let submitData = {
    // These should be assigned to name and email keys within an object. 
    userName: "Scott",
    userEmail: "swakeman@ca.rr.com"
};

let configObj = {
    // valid POST request
    method: "POST",
    // Headers for 'Content-Type' and 'Accept' set to 'application/json'
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    // This object should then be stringified.
    body: JSON.stringify(submitData)
};
//     // using fetch() The destination URL http://localhost:3000/users
     return fetch("http://localhost:3000/users", configObj)

        .then(function(response) {
            return response.json();
        })

        .then(function(object) {
            console.log(object);
          })

          .catch(function(error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
          });
