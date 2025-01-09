fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => users.forEach(user => console.log(`Nom : ${user.name}, Email : ${user.email}`)))
