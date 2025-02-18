//vamos pegar o elemento ul com id - lista
const lista = document.getElementById('lista');

//vamos pegar o elemento input com id = novoItem
const novoItemLista = document.getElementById('novoItem');

//vamos pegar o elemento button com id = BotaoAdicionar
const btnAdicionar = document.getElementById('botaoAdicionar');

//vamos Adicionar um ouvinte de evento do tipo click
btnAdicionar.addEventListener('click', function (){
    //vamos ler o texto do novo produto a ser adicionado na lista
    const novoItemTexto = novoItemLista.value;

    if(novoItemTexto !== ""){
        //vamos criar um novo elemento li
        const novoItemElemento = document.createElement('li');
        //Vamos adicionar um texto ao novo elemento li
        novoItemElemento.textContent = novoItemTexto;
        //Vamos adicionar o li com texto ao elemento
        lista.appendChild(novoItemElemento);
        //Vamos limpar o elemento input
        novoItemLista.value = "";
    }
});
