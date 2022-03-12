const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');

axios.defaults.baseURL = 'http://localhost:8080'

function criarLocalStorage(nome) {
    localStorage.setItem('usuarioLogado', nome)
}

function logar(event) {
    criarLocalStorage(nome.value)
    event.preventDefault();

    const usuario = {
        nome: nome.value,
        senha: senha.value
    };

    axios.post('/login', usuario)
    .then(response => {
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = '#28ff5e65';
        mensagem.innerHTML = response.data.mensagem;
        setTimeout(() => (window.location.href = "../recados.html"), 1500);
    })
    .catch(error => {
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = '#ff282865';
        mensagem.innerHTML = error.response.data.mensagem;
    })
}
