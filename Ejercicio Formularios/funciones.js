
wFORMS.behaviors['validation'].errMsg_required = "Este campo es obligatorio";
wFORMS.behaviors['validation'].errMsg_custom = "Los datos introducidos no corresponden con el formato establecido"
wFORMS.behaviors['validation'].errMsg_integer = "Este campo es numérico"
wFORMS.behaviors['validation'].errMsg_email = "Este campo no cumple con el formato Ej: email@email.com"
wFORMS.showAlertOnError = false;


function Comprobar()
{
    var validado = false;
    var pass = document.getElementById("contrasegna").value;
    var pass2 = document.getElementById("contrasegna2").value;
    
    if (pass == pass2) {
        validado = true;
    }
    
    return validado;
}

function Aceptar()
{
    var span = document.getElementById("contrasegna2-E");
    var error = document.createElement('p');
    
    error.innerText = "Las contraseñas no coinciden"
    
    if (Comprobar()) {
        
        error.removeChild(span.children[0])
    }
    else{
        span.appendChild(error);
    }
}