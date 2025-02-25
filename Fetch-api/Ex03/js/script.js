const lstUsuarios = document.getElementById('listaUsuarios');

// Função para buscar os usuários
async function buscarUsuarios() {
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await resposta.json();
        

        // vamos usar o método map() para percorrer a lista de usuários
        // e criar o elemento li para este usuario
        const ListaItens = usuarios.map(usuario => {
            const listaItem = document.createElement('li');
            listaItem.textContent = usuario.name;
            return listaItem;
        });

        lstUsuarios.append(...ListaItens);
}

catch(error) {
        lstUsuaios.textContent = 'Ocorreu um erro ao buscar os usuários';
        console.error(error);
    }
}


// chamada da função para buscar os usuários
buscarUsuarios();