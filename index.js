const API_URL = 'https://jsonplaceholder.typicode.com'
const HTMLResponse = document.querySelector('#app')
const ul = document.createElement('ul')

// // Before ES6
// const xhr = new XMLHttpRequest()

// function onRequestHandler() {
//     /* readyState possible values */
//     // 0 = UNSET 
//     // 1 = OPENED
//     // 2 = HEADERS_RECEIVED
//     // 3 = LOADING
//     // 4 = DONE
//     if(this.readyState === 4 && this.status === 200){
//         const data = JSON.parse(this.response)
//         const template = data.map(user => `<li>${user.name} - ${user.email}</li>`)
//         HTMLResponse.innerHTML = `<ul>${template}]</ul>`

//     }
// }

// xhr.addEventListener('load', onRequestHandler)
// xhr.open('GET', `${API_URL}/users`)
// xhr.send()

// After ES6
fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let element = document.createElement('li')
            element.appendChild(document.createTextNode(`${user.name} - ${user.email}`))
            ul.appendChild(element)
        })

        HTMLResponse.appendChild(ul)
    })

