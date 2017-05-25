//Loggear usuario
$("#Ingresar").button().on("click",function(event){
    user=$("#user").val();
    password=$("#password").val();
    if(user!="" && password!=""){
        $.post("../Controller/controladora.php",{user:user,password:password,funcion:3},function(respuesta){
            if(respuesta=='1'){
                alert("¡¡BIENVENIDO " + user + "!!");
                parent.window.location='perfilAdministrador.php';
            }else if(respuesta=='2'){
                alert("¡¡BIENVENIDO " + user + "!!");
                parent.window.location='perfilMeseroCocinero.php';
            }else if(respuesta=='3'){
                alert("¡¡BIENVENIDO " + user + "!!");
                parent.window.location='perfilJProduccion.php';
            }else{
                alert(respuesta);
                alert("Usuario o contraseña no encontrado");
            }
        })
    }else{
        alert("Debe ingresar los campos obligatorios");
    }
})
//Cerrar Sesion Administrado
$("#Cerrarsesion").button().on("click",function(event){
    $.post("../Controller/controladora.php",{funcion:4},function(respuesta){
        if(respuesta=='1'){
            parent.window.location='index.html';
        }
    })
})
