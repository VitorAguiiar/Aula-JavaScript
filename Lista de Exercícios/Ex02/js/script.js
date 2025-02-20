document.addEventListener('DOMContentLoaded', () => {
    const usuarioDiv = document.getElementById('usuario');

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            usuarioDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
            `;
        })
        .catch(error => console.error('Erro ao buscar usuário:', error));
});