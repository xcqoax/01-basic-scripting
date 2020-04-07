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


/*
function factorialize(num) {
  let factNum = 1;

  for(let i=1; i<=num; i++){
    factNum= i * factNum;
    console.log(factNum);
  }
  return factNum;
}
factorialize(5);

//TODO:crear un div y colocar un texto al colocar el digito btener el factorial y 
marcar si es meno de cero como error.
*/





