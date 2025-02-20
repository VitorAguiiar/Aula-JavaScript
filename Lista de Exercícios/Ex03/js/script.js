document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const buscarButton = document.getElementById('buscar');
    const resultadoDiv = document.getElementById('resultado');

    buscarButton.addEventListener('click', () => {
        const cep = cepInput.value.trim();
        if (cep) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        resultadoDiv.innerHTML = '<p>CEP não encontrado.</p>';
                    } else {
                        resultadoDiv.innerHTML = `
                            <p><strong>CEP:</strong> ${data.cep}</p>
                            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                            <p><strong>Bairro:</strong> ${data.bairro}</p>
                            <p><strong>Cidade:</strong> ${data.localidade}</p>
                            <p><strong>Estado:</strong> ${data.uf}</p>
                        `;
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar CEP:', error);
                    resultadoDiv.innerHTML = '<p>Erro ao buscar CEP.</p>';
                });
        } else {
            resultadoDiv.innerHTML = '<p>Por favor, digite um CEP.</p>';
        }
    });
});