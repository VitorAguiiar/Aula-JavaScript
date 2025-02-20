document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Telefone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                `;
                lista.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Erro ao buscar usuários:', error));
});