// Add your code here
// const destinationURL = 'http://localhost:3000/dogs';

// const formData = {
//     dogName: 'Lassi',
//     dogBreed: 'Unknown'
// };

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(formData)
// };

// fetch(destinationURL, configurationObject)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(object) {
//         console.log(object)
//     })
//     .catch(function(error) {
//         alert('Bad things! Ragnarők!')
//     });


function submitData(userName, userEmail) {
    const destinationURL = 'http://localhost:3000/users';
    return fetch(destinationURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            document.body.innerHTML = object['id']
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        });
}