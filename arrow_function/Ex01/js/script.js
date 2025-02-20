const textoSaudacao = document.getElementById('nomeSaudacao');
const btnSaudar = document.getElementById('botaoSaudar');
const pSaudacao = document.getElementById('saudacaoOutput');

//Vamos impletar a arrow function criarSaudacao
const criarSaudacao = (nome) => `Olá, ${nome}! Bem-vindo(a)!`;

btnSaudar.addEventListener('click', () => {
    const nome = textoSaudacao.value;
    const saudacao = criarSaudacao(nome);
    pSaudacao.textContent = saudacao;
    
});