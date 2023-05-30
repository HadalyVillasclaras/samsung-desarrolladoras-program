const userTableBody = document.getElementById('user-table-body');
const userTable = document.getElementById('user-table');

export function showUsersTable(users) {
  userTable.style.display = 'block';

  userTableBody.innerHTML = ''; 

  for (let user of users) {
    let row = document.createElement('tr');
    
    let nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let firstSurnameCell = document.createElement('td');
    firstSurnameCell.textContent = user.first_surname;
    row.appendChild(firstSurnameCell);
    
    let secondSurnameCell = document.createElement('td');
    secondSurnameCell.textContent = user.second_surname;
    row.appendChild(secondSurnameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    userTableBody.appendChild(row);
  }
}