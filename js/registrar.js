const nome = document.getElementById('nome');
let validateNome = false

const senha = document.getElementById('senha');
let validateSenha = false

const confirmarSenha = document.getElementById('confirmar-senha');
let validateConfirmarSenha = false

const menssagem = document.getElementById('mensagem');


async function addUsuario() {
    const usuarioNome = nome.value;
    const usuarioSenha = senha.value;

    const novoUsuario = {
        nome: usuarioNome,
        senha: usuarioSenha
    };

    axios.post("https://apiscrapbook.herokuapp.com/cadastrar", novoUsuario)
    .then(response => {
          
    })
    .catch(error => {
        const data = response.data.mensagem
        mensagem.setAttribute('style', 'display: block')
        menssagem.innerHTML = data   
    })
    
}
