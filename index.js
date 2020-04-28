// Add your code here

/*
function submitData() {
    let formData = {
        dogName: "Byron",
        dogBreed: "Poodle"
      };
       
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          alert("Bad things! Ragnarők!"); Catches an error. 
          console.log(error.message);
        });
}
*/

//reminder; JSON is javascript object notation. And will turn strings into objects
//remember to open lab only in text editor not whole javascript folder as it will cause issues when running live server

function submitData(name,email) {
    let formData = { //When sending data using fetch(), we often send multiple pieces of information in one request. In our code, we often organize this information using objects. Consider the following object, for instance:
        name: name,
        email: email
    }; //this goes to fetch, like params hash in sinatra
    console.log(formData, "formData")

    let configObj = { //parameters for post, html stuff
        method: "POST",
        //post to the database db.json
        headers: {  //This is the metadata, the headers..
            "Content-Type": "application/json",  //data output

            //One very common header is "Content-Type". "Content-Type" is used to indicate what format the data being sent is in
            
            "Accept": "application/json" //data input

            //it is also good practice to tell the server what data format we accept in return.
            //To do this, we add a second header, "Accept", and assign it to "application/json" as well:
        },
        body: JSON.stringify(formData) //Data being sent in fetch() must be stored in the body of the configurationObject:
    };
    

    fetch("http://localhost:3000/users",configObj) //posting data to database
    
    //.then(function(response) {return response.json();})

    .then(function(response) {return response.json();}) //pass back the json, turning into object.

     //we fixed the the indentation, ".then isn't a part of fetch but a different method
     //.then(function(object) {console.log(object);}) <- more visually appealing
    
    .then(function(object) {console.log(object);

    const body = document.querySelector('body');
    //const userId = document.createElement('user-id')
    //userId.innerHTML = Object.id
    //body.appendChild(userId)
    //console.log(body)
    debugger
    body.innerHTML = object[`id`] //found from indexTest.js
    
    }) //console logging the object

    /*
    .catch(function(error) {alert("An Error has occured."); 
    console.log(error.message);}
    );
*/

.catch(function(error) { 
    console.log(error);}
    );
    
  
}

//submitData({name: "Steve", email: "steve@steve.com"})
submitData("Steve", "steve@steve.com") //used this to debug