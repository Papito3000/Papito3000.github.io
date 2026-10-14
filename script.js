function ingresar() {

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if(
        (usuario === "Juan" && clave === "1234")||
        (usuario === "Josmer" && clave === "123") ||
        (usuario === "Elmer" && clave === "12345")
     ) {
  
        window.location.href = "gale.html";

    }else{

        document.getElementById("mensaje").innerHTML =
        "Usuario o contraseña incorrectos";

    }
}

   
