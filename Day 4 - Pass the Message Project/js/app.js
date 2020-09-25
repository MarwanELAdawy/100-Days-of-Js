
(function() {
const form = document.querySelector('#message-form')
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')

    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
        messageContent.textContent = message.value
        message.value = ''
    }
})
})()



