const inputNovaTarefa = document.getElementById('novaTarefa');
const btnAdicionarTarefa = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listarTarefas');
 
btnAdicionarTarefa.addEventListener('click', function(){
    //vamos pegar o texto que foi digitado no elemento input
    const textoTarefa = inputNovaTarefa.value.trim();
    //o método trim remove espaços em branco antes e depois da string
 
    if(textoTarefa !== ''){
        adicionarTarefa(textoTarefa);
        inputNovaTarefa.value = '';
        inputNovaTarefa.focus(); //coloca o foco no elemento input
    }
});
 
function adicionarTarefa(texto){
    const itemLista = document.createElement('li');
    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = texto;
    itemLista.appendChild(spanTarefa);
 
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    itemLista.appendChild(botaoRemover);
 
    //vamos manipular o evento click para marcar a tarefa como completa ou não
    spanTarefa.addEventListener('click', function(){
        itemLista.classList.toggle('completa');
    });
 
    //vamos manipular um evento para remover a tarefa
    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(itemLista);
    });
 
    listaTarefas.appendChild(itemLista);
}