let tab = [30, 111, 212, 983, 404, 785, 36, 799, 81, 910];
moyenne = 0
sum = 0
if (tab.length === 0) {
    console.log("Le tableau est vide")
    
}  else {
    for(var i = 0; i < tab.length; i++) {
        sum = sum + parseInt(tab[i]);
    }
    var moyenne = sum / tab.length;
    console.log(moyenne);
}
