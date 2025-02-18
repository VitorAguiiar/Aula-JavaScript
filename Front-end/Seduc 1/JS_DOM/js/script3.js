//segundo exercício diferente


// 1. Seleciona o elemento com o id "container"
const container = document.getElementById('container');

// 2. Cria a div interna - dentro da div id "container"
const divInterna = document.createElement('div');

//3. cria o elemento h3 para o nome 
const pEscola = document.createElement('p');
pEscola.textContent = 'Escola SENAI ';

//4. cria o elemento p para o preço
const pSuico = document.createElement('p');
pSuico.textContent = 'Suiço Brasileira ';

//5. cria o elemento p para o Disponivel
const pSENAI = document.createElement('p');
pSENAI.textContent = 'Escola SENAI Suiço Brasileira ';

divInterna.appendChild(pEscola);
divInterna.appendChild(pSuico);
divInterna.appendChild(pSENAI);
pSENAI.classList.add('paragrafo-estilizado');
container.appendChild(divInterna);




