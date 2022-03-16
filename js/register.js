const nameUser = document.getElementById('name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.getElementById('message');

axios.defaults.baseURL = 'https://apiscrapbook.herokuapp.com'

function createUser(event) {
    event.preventDefault()
    let validate = true
    
    const newUser = {
        name: nameUser.value,
        password: password.value
    };

    if(password.value !== confirmPassword.value) {
        validate = false
        message.style.display = 'block';
        message.style.backgroundColor = '#ff282865';
        message.innerHTML = 'senhas não conferem';
    };

    if(validate == true) {
        axios.post('/register', newUser)
        .then(response => {
            message.style.display = 'block';
            message.style.backgroundColor = '#28ff5e65';
            message.innerHTML = response.data.message;
            setTimeout(() => (window.location.href = "./login.html"), 1500);
        })
        .catch(error => {
            message.style.display = 'block';
            message.style.backgroundColor = '#ff282865';
            message.innerHTML = error.response.data.message;
        })
    };
};
