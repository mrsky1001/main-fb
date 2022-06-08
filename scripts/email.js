document.getElementById('contactsForm').addEventListener('submit', (e) => {
    const url = "http://localhost:1234/api/email"
    const request = new XMLHttpRequest()

    request.open('POST', url, true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.onload = () => { // request successful
        console.log(request.response)
    }

    request.onerror = (err) => {
        console.log(err)
    }

    const obj = {}

    for (var [key, value] of new FormData(e.target).entries()) {
        obj[key] = value
    }

    request.send(JSON.stringify(obj)) // create FormData from form that triggered event
    e.preventDefault()
})
