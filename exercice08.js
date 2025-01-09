chaine = "Bonjour a tous"
spli_chaine = chaine.split(" ")
compteur = 0
for (let i = 0; i < spli_chaine.length; i++) {
    compteur += 1
    console.log(spli_chaine[i]);
}

console.log(compteur)