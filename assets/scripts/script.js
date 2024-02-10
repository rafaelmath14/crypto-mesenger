
// Esconde primeiro o paragrafo onde aparecerá o texto resultante.

let paragrafo = document.getElementById('texto-resultante');
paragrafo.style.display = 'none';

let btnCopiar = document.getElementById('btnCopiar');
btnCopiar.style.display = 'none';

//Função para exibir mensagem

function exibirMensagem(texto) {
    document.getElementById('texto-resultante').innerHTML = texto;
}

// função para criptografar a mensagem

function criptografarMensagem() {

    let msg = document.getElementById('mensagem').value;
    let imagem = document.getElementById('imagem');
    let msgCript = "";

    if (!msg.trim()) {
        paragrafo.style.height = "43px";
        paragrafo.style.width = '350px';
        paragrafo.style.display = 'block';
        imagem.style.display = "block";
        exibirMensagem("Por favor, escreva alguma mensagem para criptografá-la.");
    
    } else {

        imagem.style.display = "none";
        paragrafo.style.display = 'block';
        paragrafo.style.height = "400px";
        paragrafo.style.width = '350px';
        btnCopiar.style.display = 'block';

        [...msg].forEach(element => {
            if (element === 'a') {
                msgCript += 'ai';
            } else if (element === 'e') {
                msgCript += 'enter';
            } else if (element === 'i') {
                msgCript += 'imes';
            } else if (element === 'o') {
                msgCript += 'ober';
            } else if (element === 'u') {
                msgCript += 'ufat';
            } else {
                msgCript += element;
            }
        });

        exibirMensagem(msgCript.toUpperCase());
    }
}

// função para descriptografar

function descriptografarMensagem() {
    let msg = document.getElementById('texto-resultante').innerText;
    msg = msg.replace(/ai/ig, "a").replace(/enter/ig, "e").replace(/imes/ig, "i").replace(/ober/ig, "o").replace(/ufat/ig, "u").toUpperCase();

    document.getElementById('texto-resultante').innerHTML = msg;
}

function copiar() {
    let copia = document.getElementById('texto-resultante');
    let texto = copia.textContent;

    navigator.clipboard.writeText(texto).then(
        () => alert("Mensagem copiada")
    ).catch((erro) => console.error("Erro ao copiar mensagem", erro))

}