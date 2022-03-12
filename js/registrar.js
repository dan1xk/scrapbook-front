const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const mensagem = document.getElementById('mensagem');

axios.defaults.baseURL = 'http://localhost:8080'

function criarUsuario(event) {
    event.preventDefault()
    let validate = true
    
    const novoUsuario = {
        nome: nome.value,
        senha: senha.value
    };

    if(senha.value !== confirmarSenha.value) {
        validate = false
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = '#ff282865';
        mensagem.innerHTML = 'Senhas não conferem';
    };

    if(validate == true) {
        axios.post('/cadastrar', novoUsuario)
        .then(response => {
            mensagem.style.display = 'block';
            mensagem.style.backgroundColor = '#28ff5e65';
            mensagem.innerHTML = response.data.mensagem;
            setTimeout(() => (window.location.href = "../logar.html"), 1500);
        })
        .catch(error => {
            mensagem.style.display = 'block';
            mensagem.style.backgroundColor = '#ff282865';
            mensagem.innerHTML = error.response.data.mensagem;
        })
    };
};
