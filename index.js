// Add your code here
function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {

      // To tell fetch() that this is a POST request, we need to add a method
      // key to our configurationObject:
      method: "POST",

      // The second piece we need to include is some metadata about the actual
      // data we want to send. This metadata is in the form of headers.
      // Headers are sent just ahead of the actual data payload of our POST request.
      // They contain information about the data being sent.
      headers: {
        "Content-Type": "application/json",

        // Just like "Content-Type" tells the destination server what type of
        // data we're sending, it is also good practice to tell the server what
        // data format we accept in return.  To do this, we add a second header,
        // "Accept", and assign it to "application/json" as well:
        "Accept": "application/json"
      },

      // Convert Objects to Strings
      body: JSON.stringify( {
        name, // dogName: "Byron",
        email // dogBreed: "Poodle"
      } )
    } )
    /*
    let formData = {
      dogName: "Byron",
      dogBreed: "Poodle"
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/dogs", configObj)
    */
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
