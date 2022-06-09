
const msgEl = document.getElementById('infoMsg')
const msgContainerEl = document.getElementById('infoMsgContainer')

const resetInfoOpacity = () => setTimeout(() => {
    msgContainerEl.classList.add('info-msg-container__hide')

    setTimeout(() => {
        msgContainerEl.classList.remove('info-msg-container__show')
    }, 500)
}, 3000)

function captchaSubmit(token) {
    const url = "https://foma-blog:8081/api/email"
    const request = new XMLHttpRequest()

    request.open('POST', url, true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.onload = () => {
        const res = JSON.parse(request.response)
        msgEl.innerText = res.message ? res.message : res

        msgContainerEl.classList.remove('info-msg-container__hide')
        msgContainerEl.classList.add('info-msg-container__show')

        resetInfoOpacity()
    }

    request.onerror = (err) => {
        msgEl.innerText = err ?? 'Ошибка отправки заявки! Повторите попытку позже :)'
        msgContainerEl.classList.add('info-msg-container__show')

        resetInfoOpacity()
    }

    const obj = {responseKey: token}

    for (var [key, value] of new FormData(document.getElementById('contactsForm')).entries()) {
        obj[key] = value
    }

    request.send(JSON.stringify(obj)) // create FormData from form that triggered event
}


document.getElementById('contactsForm').addEventListener('submit', (e) => {
    grecaptcha.execute().then().catch(err => {
        msgEl.innerText = err ?? 'Ошибка отправки заявки! Повторите попытку позже :)'
        msgContainerEl.classList.add('info-msg-container__show')

        resetInfoOpacity()
    })

    e.preventDefault()
})


