const fetch = require('node-fetch');

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    // Повертаємо масив з даними користувачів, включаючи тільки id та name
    return data.map(user => ({
      id: user.id,
      name: user.name
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

fetchUsers().then(users => console.log(users));

module.exports = fetchUsers;
