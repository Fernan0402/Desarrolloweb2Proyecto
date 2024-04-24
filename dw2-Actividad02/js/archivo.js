$(function(){
 var texto = "Santos Méndez";
 maquina("name",texto,100,0);
});

function maquina(contenedor,texto,intervalo,n){
 var i=0,
  timer = setInterval(function() {
  if ( i<texto.length ) {
   $("#"+contenedor).html(texto.substr(0,i++) + "|");
  } else {
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },6000);
   }
  }
 },intervalo);
};

$(function(){
 var texto = "2017-4853";
 maquina("matricula",texto,100,0);
});
function maquina(contenedor,texto,intervalo,n){
 var i=0,
  timer = setInterval(function() {
  if ( i<texto.length ) {
   $("#"+contenedor).html(texto.substr(0,i++) + "|");
  } else {
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },6000);
   }
  }
 },intervalo);
};

$(document).ready(function(){
 
   $('.botomarriba').click(function(){
      $('body, html').animate({
         scrollTop: '0px'
      }, 300);
   });
 
   $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
         $('.botomarriba').slideDown(300);
      } else {
         $('.botomarriba').slideUp(300);
      }
   });
 
});


 $(document).ready(function(){

   $('.vaina').click(function(){
      $('body, html').animate({
         scrollTop: '0px'
      }, 300);
   });
 
   $(window).scroll(function(){
      if( $(this).scrollTop() > 150 ){
         $('.vaina').slideDown(300);
      } else {
         $('.vaina').slideUp(300);
      }
   });
 
});


$(document).ready(function(){
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 100){
            
            $('header').addClass('header2');
        }else{
            $('header').removeClass('header2');
        }
        
    })
    
})
// Obtener el formulario
const form = document.querySelector('form');

// Agregar un evento al formulario para capturar los datos al enviar
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById('validationCustom01').value;
    let apellidos = document.getElementById('validationServer02').value;
    let email = document.getElementById('inputEmail3').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('exampleFormControlTextarea1').value;

    // Crear un objeto con los datos del formulario
    let registro = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    };

    // Mostrar el registro en la consola
    console.log(registro);

    // Limpiar los campos del formulario después de enviar
    form.reset();
});