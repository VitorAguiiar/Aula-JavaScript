//vamos pegar o elemento button com id - alterarBotao
const alterarBtn = document.getElementById('alterarBotao');

//vamos pegar o elemento button com id - mensagem
const msg = document.getElementById('mensagem');

//vamos adicionar o ouvinte ao evento click do elemento buttom
alterarBtn.addEventListener('click', function(){
    //verificar se a mensagem está oculta
    if(msg.classList.contains('oculto')){
        //vamos remover a classe oculto para exibir a mensagem
        msg.classList.remove('oculto');
    }
    else{
        //vamos adicionar a classe oculto para ocultar a mensagem
        msg.classList.add('oculto');
    }
});
    