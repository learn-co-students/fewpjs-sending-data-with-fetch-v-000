function submitData(name, email) {

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name, email})
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let idNumber = object.id;
    let h1 = document.createElement('h1');
    h1.innerHTML = idNumber;
    document.body.append(h1);
  })
  .catch(function(error) {
    //let ErrorMessage = error.message;
    let h2 = document.createElement('h2');
    h2.innerHTML = error.message;
    document.body.append(h2);
  })

  }


   //set Timeout(submitData(),2000);
