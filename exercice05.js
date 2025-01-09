text = "Bonjour tout le monde Bonjour !"
text_modifier = text.replace("Bonjour","Au revoir")
console.log(text_modifier)
texte_modifie_partout = text.replace(/Bonjour/g, "Au revoir");
console.log(texte_modifie_partout)