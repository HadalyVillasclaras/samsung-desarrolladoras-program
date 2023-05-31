const formFeedback = document.getElementById('form-feedback');

export function signUp(event) {
  event.preventDefault();
  let formErrorMsg = '';

  let formData = new FormData(event.target);

  fetch('/samsung-desarrolladoras-program/b4-final-lab/src/registerUser.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.text();
  })
  .then(data => {
    formFeedback.style.color = 'green';
    formFeedback.textContent = data;
    showTableButton();
  })
  .catch((error) => {
    if (error.message == '409') {
      formFeedback.textContent = 'El correo electrónico ya está registrado.';
    } else {
      console.error('Error:', error);
    }
  });
}


function showTableButton() {
  const consultaButton = document.getElementById('consulta-btn');
  consultaButton.style.display = "inline-block";
}