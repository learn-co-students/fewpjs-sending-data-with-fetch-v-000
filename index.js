// Add your code here

// Add your code here


function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })

  .then(function(response) {
    return response.json();
  })

  .then(function(object) {
    console.log("hi", object.id)
    let objId = object.id
    // document.appendChild(objId)
    document.write(object.id)
  })

  .catch(function(error) {
    alert("error! end of the world!!")
    console.log(error);
    // document.appendChild(error.message);
    document.body.append(error.message)
  })

};
