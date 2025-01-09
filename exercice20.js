fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: 'Mon nouveau post', body: 'Contenu', userId: 1 })
})
.then(response => response.json())
.then(post => { console.log(post); return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') })
.then(response => response.json())
.then(posts => posts.forEach(post => console.log(post.title, post.body)))
  