//Guardar los datos ingresados a la tabla inventario
$('#GuardarInventario').button().on("click", function(event){
    sedeInventario=$('#sedeInventario').val();
    //Empanadas de carne
    inicioECarne=$('#txtInicioECarne').val();
    entraECarne=$('#txtEntraECarne').val();
    devolECarne=$('#txtDevolECarne').val();
    totalECarne=$('#txtTotalECarne').val();
    saldoECarne=$('#txtSaldoECarne').val();
    ventaECArne=$('#txtVentaECarne').val();
    //Empanadas de pollo
    inicioEPollo=$('#txtInicioEPollo').val();
    entraEPollo=$('#txtEntraEPollo').val();
    devolEPollo=$('#txtDevolEPollo').val();
    totalEPollo=$('#txtTotalEPollo').val();
    saldoEPollo=$('#txtSaldoEPollo').val();
    ventaEPollo=$('#txtVentaEPollo').val();
    //Empanadas de chicharron
    inicioEChicharron=$('#txtInicioEChicharron').val();
    entraEChicharron=$('#txtEntraEChicharron').val();
    devolEChicharron=$('#txtDevolEChicharron').val();
    totalEChicharron=$('#txtTotalEChicharron').val();
    saldoEChicharron=$('#txtSaldoEChicharron').val();
    ventaEChicharron=$('#txtVentaEChicharron').val();
    //Empanadas de queso
    inicioEQueso=$('#txtInicioEQueso').val();
    entraEQueso=$('#txtEntraEQueso').val();
    devolEQueso=$('#txtDevolEQueso').val();
    totalEQueso=$('#txtTotalEQueso').val();
    saldoEQueso=$('#txtSaldoEQueso').val();
    ventaEQueso=$('#txtVentaEQueso').val();
    //Empanadas de champiñones
    inicioEChampinones=$('#txtInicioEChampinones').val();
    entraEChampinones=$('#txtEntraEChampinones').val();
    devolEChampinones=$('#txtDevolEChampinones').val();
    totalEChampinones=$('#txtTotalEChampinones').val();
    saldoEChampinones=$('#txtSaldoEChampinones').val();
    ventaEChampinones=$('#txtVentaEChampinones').val();
})
