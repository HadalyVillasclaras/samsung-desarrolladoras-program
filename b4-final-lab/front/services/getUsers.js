export async function getUsers() {
  try {
    const response = await fetch('/samsung-final-lab/src/getUsers.php')
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const users = await response.json();
    return users;
  }
  catch(error) {
    console.error('Error:', error);
  }
}