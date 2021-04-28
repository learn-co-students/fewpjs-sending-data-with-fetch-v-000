// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};

const newDog = (name, breed, url) => {
    const formData = {
        dogname: name,
        dogBreed: breed
    } ;

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch(url, configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            console.log(object);
        })
        .catch(function(error){
            alert("Bad thinngs! Ragnarok!");
            console.log(error.message);
        });
};

// const formData = {
//     dogName: "Rufus",
//     dogBreed: "Big-guy"
// };

// const configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// const url = "http://localhost:3000/dogs";
// fetch(url, configObj);

const submitData = (name, email, url="http://localhost:3000/users") => {
    const formData = {
        name: name,
        email: email
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch(url, configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            document.body.innerHTML = object["id"];
        })
        .catch(function(error){
            alert("Bad things! Ragnarok!");
            document.body.innerHTML = error.message;
        });
};
