const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');

function logar() {

    axios.post('http://localhost:8080/login', {
        nome: nome.value,
        senha: senha.value
    })
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
