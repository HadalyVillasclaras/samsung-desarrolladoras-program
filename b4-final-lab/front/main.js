import { handleSubmit } from './services/register.js';
import { getUsers } from './services/showUserTable.js';

const form = document.querySelector('form');
const consultaButton = document.getElementById('consulta-btn');

form.addEventListener("submit", event => handleSubmit(event));
consultaButton.addEventListener('click', getUsers);handleSubmit