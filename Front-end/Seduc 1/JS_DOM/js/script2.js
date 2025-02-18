// 1. Seleciona o elemento com o id "container"
const container = document.getElementById('container');

// 2. Cria a div interna - dentro da div id "container"
const divInterna = document.createElement('div');

//3. cria o elemento h3 para o nome 
const h3 = document.createElement('h3');
h3Nome.textContent = 'Nome: ';

//4. cria o elemento p para o preço
const pPreco = document.createElement('p');
pPreco.textContent = 'Preço: ';

//5. cria o elemento p para o Disponivel
const pDisponivel = document.createElement('p');
pDisponivel.textContent = 'Disponível: ';

divInterna.appendChild(h3Nome);
divInterna.appendChild(pPreco);
divInterna.appendChild(pDisponivel);
container.appendChild(divInterna);


// segundo exercício
const texto = document.createTextNode('p');
texto.textContent = 'Suiço Brasileira';

const texto2 = document.createTextNode('p');
texto2.textContent = 'Escola Senai';

const texto3 = document.createElement('p');
texto3.textContent = `${texto.textContent} ${texto2.textContent}`;

divInterna.appendChild(texto3);
container.appendChild(divInterna);