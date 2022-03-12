axios.defaults.baseURL = 'http://localhost:8080'
const usuarioLogado = localStorage.getItem('usuarioLogado')

function verificarLogin() {

    const usuario = {
        nome: usuarioLogado
    }

    axios.post('/recados', usuario)
    .then(response => {
        response.data
    })
    .catch(error => {
        console.log(error);
        window.location.href = '../logar.html'
    })
}
verificarLogin();

