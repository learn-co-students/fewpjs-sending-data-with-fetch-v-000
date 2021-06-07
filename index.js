// Add your code here

   
  // method: "POST" is missing from the object below
  
   function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

      fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        console.log(object)
      renderUser(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);   
    });
   // return fetch();
   }
   function renderUser(user) {
    const main = document.querySelector('body');
       // {dogName: "Byron", dogBreed: "Poodle", id: 6} 
    const p = document.createElement('p');
    p.innerHTML = user.id;
    main.appendChild(p)


   }

   document.addEventListener('DOMContentLoaded', function() {
    submitData();
  });
  