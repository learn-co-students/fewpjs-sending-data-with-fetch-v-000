let configObject = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body: JSON.stringify( {
	name: 'Steve',
	email: 'steve@steve.com'
	})
};

function addIdToPage(obj) {
console.log(obj);
	const el = document.querySelector('body');
	let idElement = document.createElement('p');
	idElement.innerHTML = obj.id;
	el.appendChild(idElement);
}

function addErrorToDOM(error) {
	const el = document.querySelector('body');
	let errorMessage = document.createElement('p');
	errorMessage.innerHTML = error;
	el.appendChild(errorMessage);
}

function submitData(name, email) {
	return fetch('http://localhost:3000/users', configObject)
	.then(resp => resp.json())
	.then(json => addIdToPage(json))
	.catch(error =>
		addErrorToDOM(error))
}
