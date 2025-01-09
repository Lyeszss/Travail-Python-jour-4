etudiants = [
    { nom: "Alice", age: 20, note: 18 },
    { nom: "Bob", age: 22, note: 15 },
    { nom: "Charlie", age: 19, note: 12 },
    { nom: "Diane", age: 21, note: 17 },
    { nom: "Eve", age: 23, note: 14 }
]
console.log(etudiant)
const etudiantsSupérieurs = etudiants.filter(etudiant => etudiant.note >=
    15)
console.log(etudiantsSupérieurs)
