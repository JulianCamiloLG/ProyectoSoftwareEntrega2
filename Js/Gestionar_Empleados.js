//Registrar Empleado
$("#RegistrarEmpleado").button().on("click",function(event){
    usuario=$("#inputUsuario").val();
    contrasena=$("#inputPassword").val();
    ccontrasena=$("#CinputPassword").val();
    nombre=$("#inputNombre").val();
    apellidos=$("#inputApellidos").val();
    documentoidentidad=$("#inputDocumento").val();
    direccion=$("#inputDireccion").val();
    telefono=$("#inputTelefono").val();
    rol=$("#inputRol").val();

    if(contrasena==ccontrasena){
        if(usuario!="" && contrasena!="" && nombre!="" && documentoidentidad!="" && !isNaN(documentoidentidad) && rol!=""){
            $.post("../Controller/controladora.php",{nombre:nombre,apellidos:apellidos,documentoidentidad:documentoidentidad,direccion:direccion,telefono:telefono,rol:rol,usuario:usuario,contrasena:contrasena,funcion:7},function(respuesta){
                alert(respuesta);
            })
        }else{
            alert("Debe ingresar campos obligatorios");
        }}else{
            alert("Contraseñas no coinciden");
        }
})
