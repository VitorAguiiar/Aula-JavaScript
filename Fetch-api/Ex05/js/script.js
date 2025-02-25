const inputCidade = document.getElementById('cidade');
const btnBuscar = document.getElementById('buscar');
const pInfo = document.getElementById('informacao');

const apiKey = '7f39942496c237f16c4bfa1e12a60083';
// vamos implementar a função que busca a previsão do tempo
// no openweathermap passando o nome da cidade

async function fetchTemperatura() {
    const cidade = inputCidade.value;

    try{


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid={${apiKey}&units=metric`);
         const dados = await response.json();

         if(response.cod === '404'){
             pInfo.textContent = 'Cidade não encontrada...';
         }
         else{
            const temperatura = dados.main.temp;
            const descricao = dados.weather[0].description;
            pInfo.textContent = `A temPO em ${cidade} é de ${temperatura}°C com ${descricao}`;
         }
    } catch (error) {
        console.log(error);
    }
}
btnBuscar.addEventListener('click', fetchTemperatura);