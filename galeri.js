 function ingresar() {

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if(usuario === "juan" && clave === "1234"){
        window.location.href = "galeria.html";
    }else{
        document.getElementById("mensaje").innerHTML =
        "Usuario o contraseña incorrectos";
    }
    function comprar(producto){
    alert("Has comprado: " + producto);
}
}