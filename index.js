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

// it boxes the (  ) and { } if its closed. REMEMBER THIS BECAUSE THERE ARE SO MANY

function submitData(name,email) {
    let formData = { //When sending data using fetch(), we often send multiple pieces of information in one request. In our code, we often organize this information using objects. Consider the following object, for instance:
        name: name,
        email: email
    }; //this goes to fetch, like params hash in sinatra
    //console.log(formData, "formData")

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
    

    return fetch("http://localhost:3000/users",configObj) //posting data to database
    //it wanted you to return fetch, always try returning to debug
    
    //.then(function(response) {return response.json();})

    .then(function(response) {
      return response.json();
    }) //pass back the json, turning into object. 

     //we fixed the the indentation, ".then isn't a part of fetch but a different method
     //.then(function(object) {console.log(object);}) <- more visually appealing
    
    .then(function(object) {
    console.log(object);
    document.body.innerHTML = object["id"] //found from indexTest.js
    //const userId = document.createElement('user-id')
    //userId.innerHTML = Object.id
    //body.appendChild(userId)
    //console.log(body)
    debugger
    
    
    }) //console logging the object

    /*
    .catch(function(error) {alert("An Error has occured."); 
    console.log(error.message);}
    );
*/

.catch(function(error) {
  console.log(error); 
  document.body.innerHTML = error.message
  }) 
}

//submitData({name: "Steve", email: "steve@steve.com"})
//submitData("Steve", "steve@steve.com") //used this to debug

/* fetchError: request to http://localhost:3000/users failed, reason: Unauthorized Access
    at OverriddenClientRequest.<anonymous> (/Users/benitolsantos/Javascript/fewpjs-sending-data-with-fetch-v-000/node_modules/node-fetch/lib/index.js:1444:11)
    at OverriddenClientRequest.emit (events.js:196:13)
    at /Users/benitolsantos/Javascript/fewpjs-sending-data-with-fetch-v-000/node_modules/nock/lib/request_overrider.js:221:11
    at processTicksAndRejections (internal/process/task_queues.js:82:9) {
  message: 'request to http://localhost:3000/users failed, reason: Unauthorized Access', <- this is where I got the errors attributes
  type: 'system',
  errno: '401',
  code: '401'
  */