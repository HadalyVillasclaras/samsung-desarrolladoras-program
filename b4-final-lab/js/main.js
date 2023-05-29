import { handleSubmit} from './signUp.js';
import { getUsers} from './showUserTable.js';

const form = document.querySelector('form');
const consultaButton = document.getElementById('consulta-btn');

form.addEventListener("submit", event => handleSubmit(event));
consultaButton.addEventListener('click', getUsers);

