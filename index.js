console.log("-----------------------------------------------------------------------------")

console.log("Bienvenidos a Javascript")
//console.log(location.href)
let ubicacion = location.href
//var numero;
let numero;


function myFunction(p1, p2) {
       return p1 * p2;
                            }

if (location.href=="file:///C:/Users/Daniel/Formularios/Form_v1/index.html"){
       
       console.log("Estas en la Pagina principal")
       console.log(ubicacion)
       
       document.getElementById("enviar").addEventListener("click",function(){
       
              console.log("Ingresando al evento")
             
              numero = document.getElementById("age").value;
       
              console.log("Número ingresado = "+numero)
                    
             //Cambio el elemento parrafo del index.html
             document.getElementById("prueba").innerHTML = "Hola JavaScript!";
       
       });



}

if (location.href=="file:///C:/Users/Daniel/Formularios/Form_v1/secondary.html"){
       
       console.log("Estas en la Pagina secundaria")
       console.log(ubicacion)
       console.log("Número ingresado = "+numero)
       console.log("Multiplico dos números")

       console.log(myFunction(3,3));





}


if (location.href=="file:///C:/Users/Daniel/Formularios/Form_v1/about.html"){
       
       console.log("Estas en la Pagina acerca de")
       console.log(ubicacion)
       console.log("Número ingresado = "+numero)
}




