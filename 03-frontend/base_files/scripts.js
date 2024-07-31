/* 
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          async function loginUser(email, password) {
            const response = await fetch('http://localhost:8000/login.html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
              const data = await response.json();
              document.cookie = `token=${data.access_token}; path=/`;
              window.location.href = 'index.html';
          } else {
              alert('Échec de la connexion : ' + response.statusText);
          }
          
        }
        
      });
  }
});
