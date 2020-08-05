// Add your code here
function submitData(name, email) {
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
    	body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
  .then(response => response.json())
  .then(object => {
    document.body.innerHTML = object.id;
  })

    .catch(function(error) {
    document.body.innerHTML = error.message;
  });
}