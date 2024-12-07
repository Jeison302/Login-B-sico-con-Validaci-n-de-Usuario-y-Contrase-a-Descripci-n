// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');
  
  // Definimos los usuarios y contraseñas
  const users = {
    admin: '1234',
    estudiante: 'abcd',
    visitante: 'guest'
  };

  // Verificamos si las credenciales coinciden con algún usuario
  if (users[username] && users[username] === password) {
    const role = username.charAt(0).toUpperCase() + username.slice(1); // Capitaliza la primera letra
    message.textContent = `Inicio de sesión exitoso como ${role}`;
    message.className = 'success';
  } else {
    message.textContent = 'Usuario o contraseña incorrectos';
    message.className = 'error';
  }
  
  message.style.display = 'block';
});

// Mostrar/Ocultar contraseña
document.getElementById('togglePassword').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  const icon = this.querySelector('i');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});
