var personne = {
    "nom": "Alice",
    "age": 30,
    "adresse": {
        "rue":"",
        "ville": "",
        "codePostal": ""
        },
    "hobbies": ["Lecture", "Natation", "Voyages"]
}
console.log(personne.nom);
console.log(personne.age);
console.log(personne.adresse);
console.log(personne.hobbies);

personne.hobbies.push("Sport")
personne.age = 31
delete personne.adresse.codePostal
