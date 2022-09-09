let letra = "la paleta malvada";
let final = "";
let caracterfinal= " a ";
let caracteracontar= 6;

/* Invertir la cadena de texto*/
for (let index = letra.length -1 ; index >= 0; index--) {
    final  += letra.charAt(index);
}
console.log("El resultado final es " + letra + " es " + final );

for (let index2 = 0; index2 < letra.length; index2++) {
    let newCharacter= letra.charAt(index2);
    if (caracterfinal==newCharacter) {
        caracteracontar++;
    }
}

console.log("La cadena a contar" + letra + " contiene " + caracteracontar + " de la vocal" + caracterfinal );