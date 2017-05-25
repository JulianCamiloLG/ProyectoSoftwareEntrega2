//Agregar un nuevo campo de  descripcion valor en el formulario de inventario
$('#btnNuevoDV').button().on("click",function(event){
    tablaRegistros=$('#Tabla-inventario');
    tablaRegistros.append($('<tr><td><input type="text" placeholder="Descripción" class="txtDescripcionGastosCentro" id="txtDescripcionGastosCentro"></td><td><input type="text" placeholder="valor" class="txtValorGastosCentro" id="txtValorGastosCentro"></td><td><input type="text" placeholder="Descripción" class="txtDescripcionGastosCentro" id="txtDescripcionGastosCentro"></td><td><input type="text" placeholder="valor" class="txtValorGastosCentro" id="txtValorGastosCentro"></td><td><input type="text" placeholder="Descripción" class="txtDescripcionGastosCentro" id="txtDescripcionGastosCentro"></td><td><input type="text" placeholder="valor" class="txtValorGastosCentro" id="txtValorGastosCentro"></td></tr>'));   
})
