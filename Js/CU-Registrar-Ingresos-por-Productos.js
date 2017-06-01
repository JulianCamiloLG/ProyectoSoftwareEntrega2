//Ingresar Productos
$("#IngresarProducto").button().on("click", function(event){
    producto=$("#idProducto").val()
    cantidad=$("#txtCantidadProducto").val()
    if (!NaN(cantidad) && cantidad!="" && cantidad>=0){
    $.post("../Controller/controladora.php", {producto:producto, cantidad:cantidad, funcion:10}, function(respuesta){
        alert(respuesta);
    })
}
})
