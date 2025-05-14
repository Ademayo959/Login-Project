const form = document.querySelector('.form');
const username = form.username.value
const usernamePattern = /^[a-zA-Z0-9]{6,10}$/
//let formStyle = form.style
//console.log(formStyle)

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let result = usernamePattern.test(username);
    if(result){
        alert('This username is valid');
        //console.log('This username is valid');
    } else {
        alert('This username is not valid');
    }

    const password = form.password.value
    const passwordPattern = /^[a-zA-Z0-9]{6,10}$/
    let result2 = passwordPattern.test(password);
    if(result2){
        alert('This password is valid');
    } else {
        alert('This password is not valid');
    }
});

