// Add your code here

function submitData(name, email){
	let formData = {
		name: name,
		email: email
	}

	let configObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(formData)
	}

	let pageBody = document.querySelector("body")
	let newSection = document.createElement("div")

	return fetch("http://localhost:3000/users", configObj)
	.then(function(response){
		return response.json()
	}).then(function(object){
		newSection.innerHTML = object.id
		pageBody.appendChild(newSection)
		return object
	}).catch(function(error){
		newSection.innerHTML = error.message
		pageBody.appendChild(newSection)
	})
}
