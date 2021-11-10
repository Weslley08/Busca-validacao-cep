
let form = document.getElementById('formulario');
let pegarCep = document.getElementById('numero');
let alerta = document.getElementById('alerta').style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var cep = pegarCep.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then((resposta) => resposta.json())
        .then((data) => {
            let endereco = data;

            let enderecoCompleto =
                `CEP: ${endereco.cep}, ${endereco.logradouro}, ${endereco.complemento},
                Cidade: ${endereco.localidade}, Bairro: ${endereco.bairro}`;

            if (endereco.erro != true) {
                alert(enderecoCompleto)
            }
            else if (endereco.erro == true) {
                alerta = document.getElementById('alerta').style.display = 'block';
            }

        })
        .catch((error) => console.log(error));
    document.getElementById("numero").value = "";
});
