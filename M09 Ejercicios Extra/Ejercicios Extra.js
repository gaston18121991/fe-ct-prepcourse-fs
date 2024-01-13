/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   for(var key in objeto){
      arreglo.push([`${key}`,objeto[key]]);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contador = {};
   for(var i = 0; i < string.length; i++){
      var letra = string[i];
      if(contador[letra]){
         contador[letra]++;
      } else {
         contador[letra] = 1;
      }
   }
   return contador;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letterOfString = string.split('');//Separamos cada letra del string y la guardamos en este array.
   var nuevoArray = [];
   //Iteramos cada letra para buscar .toUpperCase() === "true". En caso de ser true la quitaremos de este array
   //y pushearemos a un nuevo array. Primero la llevaremos a ese array y luego la quitaremos. No nos hará falta que estén en el viejo array(este).
   for(var i = 0; i < letterOfString.length;i++){
      if(letterOfString[i] === letterOfString[i].toUpperCase()){//Comparamos si la letra que se itera es máyuscula. Caso verdadero la guardaremos en el nuevoArray
         nuevoArray.push(letterOfString[i]);//Añadimos al nuevoArray.
         letterOfString.splice(i, 1);//Retiramos las mayúscula de letterOfString.
         i--;
      }
   }
   return nuevoArray.join('') + letterOfString.join(''); //Convertimos nuevoArray y letterOfString a strings uniendo los elementos y concatenamos los resultados.
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabrasInvertidas = [];//Acá irán las palabras invertidas en cada iteración. Luego las uniremos.
   var arrayDePalabras = frase.split(' ');//Separamos las palabras llevándolas a una variable de tipo Array.
   var palabra;//Cada palabra de análisis la guardaremos en esta variable.
   for(var i = 0; i < arrayDePalabras.length;i++){
      palabra = arrayDePalabras[i];
      var palabraInvertida = palabra.split('').reverse().join('');
      palabrasInvertidas.push(palabraInvertida);
   }
   var arrayATexto = palabrasInvertidas.join(' ');
   return arrayATexto;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroACadena = numero.toString();
   var cadenaInvertida = numeroACadena.split('').reverse().join('');
   return cadenaInvertida == numeroACadena ? 'Es capicua' : 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letrasDeString = string.split('');
   var stringSinABC = letrasDeString.filter((character) =>{
      return character !== 'a' && character !== 'b' && character !== 'c';
   })
   return stringSinABC.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var palabrasOrdenadas = arrayOfStrings.sort((stringA, stringB)=>{
      return stringA.length - stringB.length;
   })
   return palabrasOrdenadas;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let numEnComun = array1.filter((numero) => {
      return array2.includes(numero) === true;
   })
   return numEnComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
