var nombre = document.getElementById('nombre'); 
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';
error.style.fontFamily =  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;





function Enviar() {
    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa Tu Nombre ');
    }
    
    if (password.value === null || password.value === '') {
        mensajesError.push('Ingresa Tu password ');
    }


       error.innerHTML = mensajesError.join(',  ')


       setInterval(() => {
           error.remove()
       }, 4222);
        
 
    return false;

}