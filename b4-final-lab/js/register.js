const formFeedback = document.getElementById('form-feedback');
const inputFields = document.querySelectorAll('.input-field');

export function handleSubmit(event) {
  event.preventDefault();

  if (validateFields(inputFields)) {
    submitForm(event);
  }
}

export function validateFields(inputFields) {

  let isValid = true;

  for (let i = 0; i < inputFields.length; i++) {
    let input = inputFields[i];
    let errorMessage = input.nextElementSibling;

    if (!input.value.trim()) {
      isValid = false;
      errorMessage.textContent = 'Este campo es requerido.';
      errorMessage.style.display = 'block';
    } else if (input.name === 'password' && (input.value.length < 4 || input.value.length > 8)) {
      isValid = false;
      errorMessage.textContent = 'La contraseña debe tener entre 4 y 8 caracteres.';
      errorMessage.style.display = 'block';
    } else if (input.name === 'email' && !input.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      isValid = false;
      errorMessage.textContent = 'Introduzca un correo electrónico válido.';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
    }
  }

  return isValid;
}

export function submitForm(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  fetch('./src/register.php', {
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
    showQueryButton();
  })
  .catch((error) => {
    if (error.message == '409') {
      formFeedback.textContent = 'El correo electrónico ya está registrado.';
    } else {
      console.error('Error:', error);
    }
  });
}


function showQueryButton() {
  const consultaButton = document.getElementById('consulta-btn');
  consultaButton.style.display = "inline-block";

}