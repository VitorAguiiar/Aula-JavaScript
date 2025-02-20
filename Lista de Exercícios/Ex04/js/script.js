document.addEventListener('DOMContentLoaded', () => {
    const previsaoDiv = document.getElementById('previsao');

    fetch('https://wttr.in/Sao%20Paulo?format=j1')
        .then(response => response.json())
        .then(data => {
            const currentCondition = data.current_condition[0];
            previsaoDiv.innerHTML = `
                <p><strong>Temperatura:</strong> ${currentCondition.temp_C} °C</p>
                <p><strong>Descrição:</strong> ${currentCondition.weatherDesc[0].value}</p>
                <p><strong>Umidade:</strong> ${currentCondition.humidity}%</p>
                <p><strong>Vento:</strong> ${currentCondition.windspeedKmph} km/h</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar a previsão do tempo:', error);
            previsaoDiv.innerHTML = '<p>Erro ao buscar a previsão do tempo.</p>';
        });
});