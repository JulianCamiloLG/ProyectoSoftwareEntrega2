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
    //Gaseosa 250
    inicioGaseosa250=$('#txtInicioGaseosa250').val();
    entraGaseosa250=$('#txtEntraGaseosa250').val();
    devolGaseosa250=$('#txtDevolGaseosa250').val();
    totalGaseosa250=$('#txtTotalGaseosa250').val();
    saldoGaseosa250=$('#txtSaldoGaseosa250').val();
    ventaGaseosa250=$('#txtVentaGaseosa250').val();
    //Gaseosa 350
    inicioGaseosa350=$('#txtInicioGaseosa350').val();
    entraGaseosa350=$('#txtEntraGaseosa350').val();
    devolGaseosa350=$('#txtDevolGaseosa350').val();
    totalGaseosa350=$('#txtTotalGaseosa350').val();
    saldoGaseosa350=$('#txtSaldoGaseosa350').val();
    ventaGaseosa350=$('#txtVentaGaseosa350').val();
    //Jugo Hit 250
    inicioJugoHit250=$('#txtInicioJugoHit250').val();
    entraJugoHit250=$('#txtEntraJugoHit250').val();
    devolJugoHit250=$('#txtDevolJugoHit250').val();
    totalJugoHit250=$('#txtTotalJugoHit250').val();
    saldoJugoHit250=$('#txtSaldoJugoHit250').val();
    ventaJugoHit250=$('#txtVentaJugoHit250').val();
    //Jugo Hit 500
    inicioJugoHit500=$('#txtInicioJugoHit500').val();
    entraJugoHit500=$('#txtEntraJugoHit500').val();
    devolJugoHit500=$('#txtDevolJugoHit500').val();
    totalJugoHit500=$('#txtTotalJugoHit500').val();
    saldoJugoHit500=$('#txtSaldoJugoHit500').val();
    ventaJugoHit500=$('#txtVentaJugoHit500').val();
    //H2O
    inicioH2O=$('#txtInicioH2O').val();
    entraH2O=$('#txtEntraH2O').val();
    devolH2O=$('#txtDevolH2O').val();
    totalH2O=$('#txtTotalH2O').val();
    saldoH2O=$('#txtSaldoH2O').val();
    ventaH2O=$('#txtVentaH2O').val();
    //Gaseosa 2lt
    inicioGaseosa2LT=$('#txtInicioGaseosa2LT').val();
    entraGaseosa2LT=$('#txtEntraGaseosa2LT').val();
    devolGaseosa2LT=$('#txtDevolGaseosa2LT').val();
    totalGaseosa2LT=$('#txtTotalGaseosa2LT').val();
    saldoGaseosa2LT=$('#txtSaldoGaseosa2LT').val();
    ventaGaseosa2LT=$('#txtVentaGaseosa2LT').val();
    //Fuze tea
    inicioFuzetea=$('#txtInicioFuzetea').val();
    entraFuzetea=$('#txtEntraFuzetea').val();
    devolFuzetea=$('#txtDevolFuzetea').val();
    totalFuzetea=$('#txtTotalFuzetea').val();
    saldoFuzetea=$('#txtSaldoFuzetea').val();
    ventaFuzetea=$('#txtVentaFuzetea').val();
    //Flexi pequeña
    inicioFlexipequena=$('#txtInicioFlexipequena').val();
    entraFlexipequena=$('#txtEntraFlexipequena').val();
    devolFlexipequena=$('#txtDevolFlexipequena').val();
    totalFlexipequena=$('#txtTotalFlexipequena').val();
    saldoFlexipequena=$('#txtSaldoFlexipequena').val();
    ventaFlexipequena=$('#txtVentaFlexipequena').val();
    //Pony pet
    inicioPonypet=$('#txtInicioPonypet').val();
    entraPonypet=$('#txtEntraPonypet').val();
    devolPonypet=$('#txtDevolPonypet').val();
    totalPonypet=$('#txtTotalPonypet').val();
    saldoPonypet=$('#txtSaldoPonypet').val();
    ventaPonypet=$('#txtVentaPonypet').val();
    //Pony mini
    inicioPonymini=$('#txtInicioPonymini').val();
    entraPonymini=$('#txtEntraPonymini').val();
    devolPonymini=$('#txtDevolPonymini').val();
    totalPonymini=$('#txtTotalPonymini').val();
    saldoPonymini=$('#txtSaldoPonymini').val();
    ventaPonymini=$('#txtVentaPonymini').val();
    //Agua
    inicioAgua=$('#txtInicioAgua').val();
    entraAgua=$('#txtEntraAgua').val();
    devolAgua=$('#txtDevolAgua').val();
    totalAgua=$('#txtTotalAgua').val();
    saldoAgua=$('#txtSaldoAgua').val();
    ventaAgua=$('#txtVentaAgua').val();
    //Chiclets
    inicioChiclets=$('#txtInicioChiclets').val();
    entraChiclets=$('#txtEntraChiclets').val();
    devolChiclets=$('#txtDevolChiclets').val();
    totalChiclets=$('#txtTotalChiclets').val();
    saldoChiclets=$('#txtSaldoChiclets').val();
    ventaChiclets=$('#txtVentaChiclets').val();
    //Leche
    inicioLeche=$('#txtInicioLeche').val();
    entraLeche=$('#txtEntraLeche').val();
    devolLeche=$('#txtDevolLeche').val();
    totalLeche=$('#txtTotalLeche').val();
    saldoLeche=$('#txtSaldoLeche').val();
    ventaLeche=$('#txtVentaLeche').val();
    //Pulpas
    inicioPulpas=$('#txtInicioPulpas').val();
    entraPulpas=$('#txtEntraPulpas').val();
    devolPulpas=$('#txtDevolPulpas').val();
    totalPulpas=$('#txtTotalPulpas').val();
    saldoPulpas=$('#txtSaldoPulpas').val();
    ventaPulpas=$('#txtVentaPulpas').val();
    //Avena
    inicioAvena=$('#txtInicioAvena').val();
    entraAvena=$('#txtEntraAvena').val();
    devolAvena=$('#txtDevolAvena').val();
    totalAvena=$('#txtTotalAvena').val();
    saldoAvena=$('#txtSaldoAvena').val();
    ventaAvena=$('#txtVentaAvena').val();
    //Milo caliente
    inicioMilocaliente=$('#txtInicioMilocaliente').val();
    entraMilocaliente=$('#txtEntraMilocaliente').val();
    devolMilocaliente=$('#txtDevolMilocaliente').val();
    totalMilocaliente=$('#txtTotalMilocaliente').val();
    saldoMilocaliente=$('#txtSaldoMilocaliente').val();
    ventaMilocaliente=$('#txtVentaMilocaliente').val();
    //Pintado
    inicioPintado=$('#txtInicioPintado').val();
    entraPintado=$('#txtEntraPintado').val();
    devolPintado=$('#txtDevolPintado').val();
    totalPintado=$('#txtTotalPintado').val();
    saldoPintado=$('#txtSaldoPintado').val();
    ventaPintado=$('#txtVentaPintado').val();
    //Pintadito
    inicioPintadito=$('#txtInicioPintadito').val();
    entraPintadito=$('#txtEntraPintadito').val();
    devolPintadito=$('#txtDevolPintadito').val();
    totalPintadito=$('#txtTotalPintadito').val();
    saldoPintadito=$('#txtSaldoPintadito').val();
    ventaPintadito=$('#txtVentaPintadito').val();
    //Capuccino original
    inicioCapuccinooriginal=$('#txtInicioCapuccinooriginal').val();
    entraCapuccinooriginal=$('#txtEntraCapuccinooriginal').val();
    devolCapuccinooriginal=$('#txtDevolCapuccinooriginal').val();
    totalCapuccinooriginal=$('#txtTotalCapuccinooriginal').val();
    saldoCapuccinooriginal=$('#txtSaldoCapuccinooriginal').val();
    ventaCapuccinooriginal=$('#txtVentaCapuccinooriginal').val();
    //Capuccino Vainilla
    inicioCapuccinoVainilla=$('#txtInicioCapuccinoVainilla').val();
    entraCapuccinoVainilla=$('#txtEntraCapuccinoVainilla').val();
    devolCapuccinoVainilla=$('#txtDevolCapuccinoVainilla').val();
    totalCapuccinoVainilla=$('#txtTotalCapuccinoVainilla').val();
    saldoCapuccinoVainilla=$('#txtSaldoCapuccinoVainilla').val();
    ventaCapuccinoVainilla=$('#txtVentaCapuccinoVainilla').val();
     //Tinto
    inicioTinto=$('#txtInicioTinto').val();
    entraTinto=$('#txtEntraTinto').val();
    devolTinto=$('#txtDevolTinto').val();
    totalTinto=$('#txtTotalTinto').val();
    saldoTinto=$('#txtSaldoTinto').val();
    ventaTinto=$('#txtVentaTinto').val();
     //Mokaccino
    inicioMokaccino=$('#txtInicioMokaccino').val();
    entraMokaccino=$('#txtEntraMokaccino').val();
    devolMokaccino=$('#txtDevolMokaccino').val();
    totalMokaccino=$('#txtTotalMokaccino').val();
    saldoMokaccino=$('#txtSaldoMokaccino').val();
    ventaMokaccino=$('#txtVentaMokaccino').val();
})
