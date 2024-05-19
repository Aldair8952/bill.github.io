document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Array de objetos con usuarios y contraseñas válidas
    const validCredentials = [
        { username: 'usuario1', password: 'contraseña1' },
        { username: 'bill', password: '102030' },
        { username: 'usuario3', password: 'contraseña' }
    ];

    // Verificar si las credenciales ingresadas son válidas
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

    if (isValid) {
        // Redirigir a la página principal
        window.location.href = 'carga.html'; // Cambia 'pagina-principal.html' por la URL de tu página principal
    } else {
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
});
