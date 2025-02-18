//vamos pegar o elemento de texto h1
const elementoTitulo = document.getElementById('titulo');

//vamos pegar o elemento button
const elementoBotao = document.getElementById('meuBotao')

//vamos adicionar um manipulador de eventos do JS
document.addEventListener('click', function(){
    //vamos mudar o texto do elemento h1 - elementoTitulo
    elementoTitulo.textContent = 'Texto alterado';
});