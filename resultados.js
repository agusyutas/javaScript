document.addEventListener('DOMContentLoaded', function () {
    
    const resultContainer = document.getElementById('resultContainer');
    const usersString = localStorage.getItem('users');

    if (usersString) {
        const users = JSON.parse(usersString);
        displayUsers(users);
    } else {
        resultContainer.innerHTML = 'No hay resultados disponibles.';
    }

    function displayUsers(users) {
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            resultContainer.appendChild(userElement);
        });
    }
});