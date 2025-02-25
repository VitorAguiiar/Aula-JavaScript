const imgCachorro = document.getElementById('imagemCachorro');
const btnNovoCachorro = document.getElementById('novoCachorro');

// vamos implementar a função que irá buscar a imagem do cachorro
//no web service dog.ceo

async function fetchImagem() {
    try{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const dado = await response.json();
        imgCachorro.src = dado.message;
    } catch (error) {
        imgCachorro.src = 'img/error.png';
        imgCachorro.alt = 'Desculpe, ocorreu um erro ao carregar a imagem';
    }
}

btnNovoCachorro.addEventListener('click', fetchImagem);
fetchImagem(); // carrega a imagem do cachorro ao carregar a página