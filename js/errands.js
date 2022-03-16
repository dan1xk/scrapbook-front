const errand = document.getElementById('errand')
const userLogged = localStorage.getItem('userLogged')
const tableBody = document.getElementById("table");
const user = document.getElementById("area-usuario");

axios.defaults.baseURL = 'https://apiscrapbook.herokuapp.com'

function logout() {
    localStorage.setItem('userLogged', '')
    window.location.href = './login.html'
}

const refreshPage = () => {
    window.location.href = './errands.html'
}

function checkLogin() {
    const userLogged = localStorage.getItem('userLogged')

    const user = {
        name: userLogged
    }

    axios.post('/errands', user)
    .then(response => {
        response.data
    })
    .catch(error => {
        console.log(error);
        window.location.href = '../login.html'
    })
}

checkLogin();

function addErrand() {
    const errand = document.getElementById('errand');

    const newErrand = {
        errand: errand.value
    }

    axios.post(`/errand/${userLogged}`, newErrand)
    .then(response => {
        response.data
    })
    .catch(error => {
        console.log(error);
    })
    refreshPage()
}

function showMessages() {
    axios.get('/users')
    .then(response => {
    user.innerHTML = userLogged
    tableBody.innerHTML = ''
    const errands = response.data.find(user => user.name === userLogged).errands
    console.log(errands);
    return errands.map(item => {
        const position = errands.indexOf(item);
        tableBody.innerHTML += `
        <td class="td">${position + 1}</td>
        <td class="td">${item.errand}</td>
        <td class="td">
            <input type='submit' class='button' value='Editar' draggable="false" onclick="errandChange(${item.id})"> 
            <input type='submit' class='button button-red' value='Excluir' onclick="errandDelete(${item.id})">
        </td> 
        `
      });

    }).catch(error => {
        console.log(error);
    });
};

function errandDelete(id) {
    axios.delete(`/${userLogged}/errand/${id}`)
    refreshPage()
}

function errandChange(id) {
    let errand = prompt('Editar o Recado')

    let errandEdited = {
        errand: errand
    }

    axios.put(`/${userLogged}/errand/${id}`, errandEdited)
    refreshPage()
}

showMessages()





