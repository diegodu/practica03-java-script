var cedula = document.getElementById("cedula")
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var fecha = document.getElementById("fecha")
var correo = document.getElementById("correo")
var contrasena = document.getElementById("contrasena")
var boton = document.getElementById("boton")
eventos()
function eventos(){
    console.log(cedula)
    cedula.addEventListener('keypress', e=>{
        validarNumeros(e)
    })
}
function validarNumeros(e) {
    let letra = event.which || event.keyCode;

    if (letra >= 40 && letra <= 57 || letra == 8) {

        
    } else {
        let text = e.target.value
        console.log(text)
        text = text.substring(0, text.length -1 )
        console.log(text)
        
    }
}


function validar() {
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    if(cad == ""){
        document.getElementById("salida").innerHTML = ("Cedula Vacia");
    }

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
        document.getElementById("salida").innerHTML = ("Cedula Válida");
      }else{
        document.getElementById("salida").innerHTML = ("Cedula Inválida");
      }
    }
}