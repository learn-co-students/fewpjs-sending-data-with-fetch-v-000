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
		// console.log(response)
		// console.log(response.json())
		return response.json()
	}).then(function(object){
		newSection.innerText = object.id
		pageBody.appendChild(newSection)
		console.log(object)
		return object
	}).catch(function(error){
		newSection.innerText = error.message
		pageBody.appendChild(newSection)
	})
}
