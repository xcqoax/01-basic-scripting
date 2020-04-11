let p = document.getElementById('temp-convertida');

let btn = document.getElementById('convertir');

btn.addEventListener('click', () =>{
    let temp = document.getElementById('temperatura').value;
    let escala = document.getElementById('temp-escala').value;
    
    if(escala == 1){
        p.innerHTML = parseFloat((temp * 9/5) + 32).toFixed(2) + "°  Fahrenheit";
    }else if(escala == 2){
        p.innerHTML = parseFloat((temp -32 ) - 5/9).toFixed(2) + "°  Celsius";;
    }
})

/****************** reverse Sting ********************* */

let pReversa = document.getElementById('cadenareversa');
let txt = document.getElementById('cadena');

txt.addEventListener('keyup',(event)=>{
    let string = (event.target.value);

    let reverse = string.split('');
    let cadena=[];
  
    for(let i=0; i< reverse.length; i++){
      cadena.unshift(reverse[i]);
    }
    pReversa.innerHTML = cadena.join('');
    
})

/********************** factorial ***************************** */


   let nfactorial = document.getElementById('numFactorial'),
      btnF = document.getElementById('factorizar');
   

    btnF.addEventListener('click', ()=>{
      let num = document.getElementById('numeroF').value;
    
      if(num <= 0){
        nfactorial.innerHTML = ("Favor de colocar un numero mayor a cero"); 
      } else {
        let factNum = 1;

        for(let i=1; i<=num; i++){
          factNum= i * factNum;
         
        }
        nfactorial.innerHTML = factNum;
        
      }
 
    })


///////////////////////////////////////////////////////////

// 4.- Find the longest word in a string (encontrar la palabra mas largar en una cadena)


function findLongestWordLength(str) {
  let cadena = str.split(' '); // se divide el argunmento por palabras mediante la funcion split y usando un espacio separador
   let cadenaN=[];

/*
Con el ciclo for se obtiene los tamaños de las palabras y se agregan en el nuevo arreglo
*/
 for(let i=0; i < cadena.length; i++){ 
    cadenaN.push((cadena[i].length));
 }
  return (Math.max(...cadenaN)); // la función Math.max() regresa el valor más alto  de un arreglo
}


///////////////////////////////////////////////////

 //return largest numbers in arrays
 
 
  function largestOfFour(arr) {
  let newArr =[]; // se crea elñ nuevo arreglo que contendra los valores más alto del arreglo original
  for(let i = 0; i <arr.length; i++){ // se recorre cada 
     newArr.push((Math.max.apply(null,arr[i])));  // una variante del math.max  determianr el mayor de cada arreglo y lo agregar al nuevo arreglo
  }
  return newArr;
}



   ////////////////////////////////////////////////////
  //confirm the ending
  
function confirmEnding(str, target) {

return str.slice(str.length - target.length) == target;
 
}

confirmEnding("Bastian", "n");
  

////////////////////////////////////////////////////////
//Repeat a string

function repeatStringNumTimes(str, num) {
  let cadena =[];
  for(let i=0; i<num; i++){
     cadena.push(str);
  }
  return (cadena.join(''));
}

repeatStringNumTimes("*", 3);


////////////////////////////////////////////////////////

//truncate a string

function truncateString(str, num) {

if(str.length > num){
  return (str.substring(0,num)+'...');
  } else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);


///////////////////////////////////////////////////////////

//Finders Keepers

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      return (arr[i]);
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//////////////////////////////////////////////////////////

//Boo who

function booWho(bool) {
  return typeof bool ==='boolean';
}

booWho(true);

///////////////////////////////////////////////////////////

//Title Case a Sentence

function titleCase(str) {
  let newCadena=[]
  let cadena = str.toLowerCase().split(' ');
  for( let i in cadena){
    newCadena[i] = cadena[i].replace(cadena[i].charAt(0),cadena[i].charAt(0).toUpperCase());
    
  }
  return newCadena.join(' ');
}

titleCase("I'm a little tea pot");

///////////////////////////////////////////////////////////

//slice and splice

function frankenSplice(arr1, arr2, n) {
let nArray = arr2.slice();
nArray.splice(n, 0, ...arr1);
return nArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//////////////////////////////////////////////////////////

//Falsy Bounce

function bouncer(arr) {
  
 return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
 

//////////////////////////////////////////////////////////
// Mutation

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
///////////////////////////////////////////////////////////

//Chunkey Monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}



 





