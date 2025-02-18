// 1. Seleciona o elemento com o id "container"
const container = document.getElementById('container');

// 2. Cria a div interna - dentro da div id "container"
const divInterna = document.getElementById('div');

//3. Cria dois elementos p com seus respectivos textos
const paragarfo1 = document.getElementById('p');
paragarfo1.textContent = 'Este é o primeiro parágrafo!';

const paragarfo2 = document.getElementById('p');
paragarfo1.textContent = 'Este é o segundo parágrafo!';

//4. Adiciona a classe CSS aos parágrafos - método ClassList.add()
paragarfo1.classList.add('paragrafo-estilizado');
paragarfo2.classList.add('paragrafo-estilizado');

//5. Adiciona os elementos a  div interna - 'div'
divInterna.appendChild(paragarfo1);
divInterna.appendChild(paragarfo2);

// 6. Adiciona a div id='container'
container.appendChild(divInterna);
