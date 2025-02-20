const numerosQuadrado = document.getElementById('numerosOutput');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// vamos criar uma arrow function para filtrar os números pares
const pares = numeros.filter(numero => numero % 2 === 0);

// vamos criar uma arrow function para elevar os números ao quadrado
const quadrados = pares.map(numero => Math.pow(numero, 2));

//Vamos exibir os resultados
quadrados.forEach(numero => {
    const li = document.createElement('li');
    li.textContent = numero;
    numerosQuadrado.appendChild(li);
});