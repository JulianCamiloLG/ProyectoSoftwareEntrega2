//Ingresar Productos
$("#IngresarProducto").button().on("click", function(event){
    producto=$("#idProducto").val()
    cantidad=$("#txtCantidadIngreso").val()
    if (!isNaN(cantidad) && cantidad != "" && cantidad>=0){
    $.post("../Controller/controladora.php", {producto:producto, cantidad:cantidad, funcion:10}, function(respuesta){
        alert(respuesta);
    })
    }else{
        alert("Error en el ingreso");
    }
})
