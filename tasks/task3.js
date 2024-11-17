const fetch = require('node-fetch');

async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    
    // Повертаємо відповідь від сервера з оновленими даними користувача
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
}

updateUser(1, { name: 'New Name' }).then(response => console.log(response));

module.exports = updateUser;
