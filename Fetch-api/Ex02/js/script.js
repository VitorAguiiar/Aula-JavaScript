const pFatos = document.getElementById('fatos');
const btnTrocarFato = document.getElementById('trocarFato');

// vamos consumir o web service catfat.ninja com uma função assíncrona

async function fetchFatos() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const dados = await response.json();
        pFatos.textContent = dados.fact;
    } catch(error) {
        pFatos.textContent = 'Erro ao buscar um fato!';
        console.log('error ao buscar um fato!')
    }
}

btnTrocarFato.addEventListener('click', fetchFatos);

fetchFatos();