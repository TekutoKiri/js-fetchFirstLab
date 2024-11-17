const fetch = require('node-fetch');

async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });
    
    // Повертаємо статус відповіді сервера після видалення
    return response.status;
  } catch (error) {
    console.error('Error deleting user:', error);
    return null;
  }
}

deleteUser(1).then(status => console.log('Response status:', status));

module.exports = deleteUser;
