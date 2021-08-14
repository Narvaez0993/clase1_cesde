//var Numero1 = 0; no es recomendable utilizarlo

'use strict'

/*numero2=3;
let variable= 5; 
let suma;
if (numero2 > 5) 
{
 suma=0;
}

console.log(suma);*/

/* operadores logicos */
// && ||

// operadores relacionales
// <>(igualdad entre dos terminos) =(igual) !(negacion)
/*let num1 = prompt("ingrese numero 1:");

let num2 = prompt("ingrese numero 2:");

let num3 = prompt("ingrese numero 3:");

if (num1 > num2 && num1 > num3){
    console.log("el numero mayor es:"+ num1);

}else {
    if(num2 > num1 && num2 > num3){

        console.log("el numero mayor es:" + num2);
    
    }else{
    
     console.log("el numero mayor es:" + num3);
    
    }   
}*/

// vamos a trabajar con json

//correo profe: Jcarmonavan@gmail.com


let objetoJson =
{
    Campo1:"Texto1",
    Campo2: 23,
    EstadoCivil: ["soltero(a)" ,"Viudo", "separado"],
    EstadoCivil:{
        Colegio: "",
        Ano:"",

    }
}

console.log(objetoJson);
console.log(objetoJson.Campo1);
console.log(objetoJson.Campo2);
console.log(objetoJson.EstadoCivil);


