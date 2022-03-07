const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const mensagem = document.getElementById('mensagem');

function addUsuario() {
    let validate = true
    const usuarioNome = nome.value;
    const usuarioSenha = senha.value;

    const novoUsuario = {
        nome: usuarioNome,
        senha: usuarioSenha
    };

    if(senha.value !== confirmarSenha.value) {
        validate = false
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = '#ff282865';
        mensagem.innerHTML = 'Senhas não conferem';
    };

    if(validate == true) {
        axios.post("https://apiscrapbook.herokuapp.com/cadastrar", novoUsuario)
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
