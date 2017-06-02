//Guardar los datos ingresados a la tabla inventario
$('#GuardarInventario').button().on("click", function(event){
    sedeInventario=$('#sedeInventario').val();
    //Empanadas de carne
    inicioECarne=$('#txtInicioECarne').val();
    entraECarne=$('#txtEntraECarne').val();
    devolECarne=$('#txtDevolECarne').val();
    totalECarne=$('#txtTotalECarne').val();
    saldoECarne=$('#txtSaldoECarne').val();
    ventaECarne=$('#txtVentaECarne').val();
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
    if (inicioAgua!="" && !isNaN(inicioAgua) && inicioAgua>=0 && inicioAvena!="" && !isNaN(inicioAvena) && inicioAvena>=0 && inicioCapuccinooriginal!="" && !isNaN(inicioCapuccinooriginal) && inicioCapuccinooriginal>=0 && inicioCapuccinoVainilla!="" && !isNaN(inicioCapuccinoVainilla) && inicioCapuccinoVainilla>=0 && inicioChiclets!="" && !isNaN(inicioChiclets) && inicioChiclets>=0 && inicioECarne!="" && !isNaN(inicioECarne) && inicioECarne>=0 && inicioEChampinones!="" && !isNaN(inicioEChampinones) && inicioEChampinones>=0 && inicioEChicharron!="" && !isNaN(inicioEChicharron) && inicioEChicharron>=0 && inicioEPollo!="" && !isNaN(inicioEPollo) && inicioEPollo>=0 && inicioEQueso!="" && !isNaN(inicioEQueso) && inicioEQueso>=0 && inicioFlexipequena!="" && !isNaN(inicioFlexipequena) && inicioFlexipequena>=0 && inicioFuzetea!="" && !isNaN(inicioFuzetea) && inicioFuzetea>=0 && inicioGaseosa250!="" && !isNaN(inicioGaseosa250) && inicioGaseosa250>=0 && inicioGaseosa2LT!="" && !isNaN(inicioGaseosa2LT) && inicioGaseosa2LT>=0 && inicioGaseosa350!="" && !isNaN(inicioGaseosa350) && inicioGaseosa350>=0 && inicioH2O!="" && !isNaN(inicioH2O) && inicioH2O>=0 && inicioJugoHit250!="" && !isNaN(inicioJugoHit250) && inicioJugoHit250>=0 && inicioJugoHit500!="" && !isNaN(inicioJugoHit500) && inicioJugoHit500>=0 &&inicioLeche!="" && !isNaN(inicioLeche) && inicioLeche>=0 && inicioMilocaliente!="" && !isNaN(inicioMilocaliente) && inicioMilocaliente>=0 && inicioMokaccino!="" && !isNaN(inicioMokaccino) && inicioMokaccino>=0 && inicioPintadito!="" && !isNaN(inicioPintadito) && inicioPintadito>=0 && inicioPintado!="" && !isNaN(inicioPintado) && inicioPintado>=0 && inicioPonymini!="" && !isNaN(inicioPonymini) && inicioPonymini>=0 && inicioPonypet!="" && !isNaN(inicioPonypet) && inicioPonypet>=0 && inicioPulpas!="" && !isNaN(inicioPulpas) && inicioPulpas>=0 && inicioTinto!="" && !isNaN(inicioTinto) && inicioTinto>=0 ){
        $.post("../Controller/controladora.php",{sedeInventario:sedeInventario,inicioECarne:inicioECarne,entraECarne:entraECarne,devolECarne:devolECarne,saldoECarne:saldoECarne,ventaECarne:ventaECarne,inicioEPollo:inicioEPollo,entraEPollo:entraEPollo,devolEPollo:devolEPollo,saldoEPollo:saldoEPollo,ventaEPollo:ventaEPollo,inicioEChicharron:inicioEChicharron,entraEChicharron:entraEChicharron,devolEChicharron:devolEChicharron,saldoEChicharron:saldoEChicharron,ventaEChicharron:ventaEChicharron,inicioEQueso:inicioEQueso,entraEQueso:entraEQueso,devolEQueso:devolEQueso,saldoEQueso:saldoEQueso,ventaEQueso:ventaEQueso,inicioEChampinones:inicioEChampinones,entraEChampinones:entraEChampinones,devolEChampinones:devolEChampinones,saldoEChampinones:saldoEChampinones,ventaEChampinones:ventaEChampinones,inicioGaseosa250:inicioGaseosa250,entraGaseosa250:entraGaseosa250,devolGaseosa250:devolGaseosa250,saldoGaseosa250:saldoGaseosa250,ventaGaseosa250:ventaGaseosa250,inicioGaseosa350:inicioGaseosa350,entraGaseosa350:entraGaseosa350,devolGaseosa350:devolGaseosa350,saldoGaseosa350:saldoGaseosa350,ventaGaseosa350:ventaGaseosa350,inicioJugoHit250:inicioJugoHit250,entraJugoHit250:entraJugoHit250,devolJugoHit250:devolJugoHit250,saldoJugoHit250:saldoJugoHit250,ventaJugoHit250:ventaJugoHit250,inicioJugoHit500:inicioJugoHit500,entraJugoHit500:entraJugoHit500,devolJugoHit500:devolJugoHit500,saldoJugoHit500:saldoJugoHit500,ventaJugoHit500:ventaJugoHit500,inicioH2O:inicioH2O,entraH2O:entraH2O,devolH2O:devolH2O,saldoH2O:saldoH2O,ventaH2O:ventaH2O,inicioGaseosa2LT:inicioGaseosa2LT,entraGaseosa2LT:entraGaseosa2LT,devolGaseosa2LT:devolGaseosa2LT,saldoGaseosa2LT:saldoGaseosa2LT,ventaGaseosa2LT:ventaGaseosa2LT,inicioFuzetea:inicioFuzetea,entraFuzetea:entraFuzetea,devolFuzetea:devolFuzetea,saldoFuzetea:saldoFuzetea,ventaFuzetea:ventaFuzetea,inicioFlexipequena:inicioFlexipequena,entraFlexipequena:entraFlexipequena,devolFlexipequena:devolFlexipequena,saldoFlexipequena:saldoFlexipequena,ventaFlexipequena:ventaFlexipequena,inicioPonypet:inicioPonypet,entraPonypet:entraPonypet,devolPonypet:devolPonypet,saldoPonypet:saldoPonypet,ventaPonypet:ventaPonypet,inicioPonymini:inicioPonymini,entraPonymini:entraPonymini,devolPonymini:devolPonymini,saldoPonymini:saldoPonymini,ventaPonymini:ventaPonymini,inicioAgua:inicioAgua,entraAgua:entraAgua,devolAgua:devolAgua,saldoAgua:saldoAgua,ventaAgua:ventaAgua,inicioChiclets:inicioChiclets,entraChiclets:entraChiclets,devolChiclets:devolChiclets,saldoChiclets:saldoChiclets,ventaChiclets:ventaChiclets,inicioLeche:inicioLeche,entraLeche:entraLeche,devolLeche:devolLeche,saldoLeche:saldoLeche,ventaLeche:ventaLeche,inicioPulpas:inicioPulpas,entraPulpas:entraPulpas,devolPulpas:devolPulpas,saldoPulpas:saldoPulpas,ventaPulpas:ventaPulpas,inicioAvena:inicioAvena,entraAvena:entraAvena,devolAvena:devolAvena,saldoAvena:saldoAvena,ventaAvena:ventaAvena,inicioMilocaliente:inicioMilocaliente,entraMilocaliente:entraMilocaliente,devolMilocaliente:devolMilocaliente,saldoMilocaliente:saldoMilocaliente,ventaMilocaliente:ventaMilocaliente,inicioPintado:inicioPintado,entraPintado:entraPintado,devolPintado:devolPintado,saldoPintado:saldoPintado,ventaPintado:ventaPintado,inicioPintadito:inicioPintadito,entraPintadito:entraPintadito,devolPintadito:devolPintadito,saldoPintadito:saldoPintadito,ventaPintadito:ventaPintadito,inicioCapuccinooriginal:inicioCapuccinooriginal,entraCapuccinooriginal:entraCapuccinooriginal,devolCapuccinooriginal:devolCapuccinooriginal,saldoCapuccinooriginal:saldoCapuccinooriginal,ventaCapuccinooriginal:ventaCapuccinooriginal,inicioCapuccinoVainilla:inicioCapuccinoVainilla,entraCapuccinoVainilla:entraCapuccinoVainilla,devolCapuccinoVainilla:devolCapuccinoVainilla,saldoCapuccinoVainilla:saldoCapuccinoVainilla,ventaCapuccinoVainilla:ventaCapuccinoVainilla,inicioTinto:inicioTinto,entraTinto:entraTinto,devolTinto:devolTinto,saldoTinto:saldoTinto,ventaTinto:ventaTinto,inicioMokaccino:inicioMokaccino,entraMokaccino:entraMokaccino,devolMokaccino:devolMokaccino,saldoMokaccino:saldoMokaccino,ventaMokaccino:ventaMokaccino,funcion:6},function(respuesta){
                alert(respuesta);
            })
        }else{
            alert("Campo con dato no numerico o menor o igual a cero(0)");
        }
})

$("#consultarInventarioTotal").button().on("click",function(event){
    $.post("../Controller/controladora.php",{tipo:"total",sede:"",funcion:11},function(respuesta){
        console.log(respuesta);
        var datos=jQuery.parseJSON(respuesta);
		for (var i in datos){
            console.log("i: " + i);
            var elementotr=document.createElement('tr');
            // creacion primer td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].producto);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            // creacion segundo td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].total);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var obj=document.getElementById('Contenido');
            obj.appendChild(elementotr);
        }
    })
})

$("#consultarInventarioSede").button().on("click",function(event){
    $.post("../Controller/controladora.php",{tipo:"sede",sede: $("#sede").val(),funcion:11},function(respuesta){
        console.log(respuesta);
        var datos=jQuery.parseJSON(respuesta);
		for (var i in datos){
            console.log("i: " + i);
            var elementotr=document.createElement('tr');
            // creacion primer td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].producto);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            // creacion segundo td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].total);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var obj=document.getElementById('Contenido');
            obj.appendChild(elementotr);
        }
    })
})
$('#IniciarInventario').button().on("click",function(){
    sedeInventario=$('#sedeInventario').val();
    $.post("../Controller/controladora.php",{sede:sedeInventario,funcion:12},function(respuesta){
        if (respuesta.length>20){
        var datos= jQuery.parseJSON(respuesta);
                if(datos[0].producto==="EmpaCarne"){
                    $("#txtInicioECarne").val(datos[0].total);
                }
                if(datos[1].producto==="EmpaPollo"){
                    $("#txtInicioEPollo").val(datos[1].total);
                }
                if(datos[2].producto==="EmpaChicharron"){
                    $("#txtInicioEChicharron").val(datos[2].total);
                }
                if(datos[3].producto==="EmpaQueso"){
                    $("#txtInicioEQueso").val(datos[3].total);
                }
                if(datos[4].producto==="EmpaChampinones"){
                    $("#txtInicioEChampinones").val(datos[4].total);
                }
                if(datos[5].producto==="Gaseosa250"){
                    $("#txtInicioGaseosa250").val(datos[5].total);
                }
                if(datos[6].producto==="Gaseosa350"){
                    $("#txtInicioGaseosa350").val(datos[6].total);
                }
                if(datos[7].producto==="JugoHit250"){
                    $("#txtInicioJugoHit250").val(datos[7].total);
                }
                if(datos[8].producto==="JugoHit500"){
                    $("#txtInicioJugoHit500").val(datos[8].total);
                }
                if(datos[9].producto==="H2O"){
                    $("#txtInicioH2O").val(datos[9].total);
                }
                if(datos[10].producto==="Gaseosa2lt"){
                    $("#txtInicioGaseosa2LT").val(datos[10].total);
                }
                if(datos[11].producto==="FuzeTea"){
                    $("#txtInicioFuzetea").val(datos[11].total);
                }
                if(datos[12].producto==="FlexiPequena"){
                    $("#txtInicioFlexipequena").val(datos[12].total);
                }
                if(datos[13].producto==="PonyPet"){
                    $("#txtInicioPonypet").val(datos[13].total);
                }
                if(datos[14].producto==="PonyMini"){
                    $("#txtInicioPonymini").val(datos[14].total);
                }
                if(datos[15].producto==="Agua"){
                    $("#txtInicioAgua").val(datos[15].total);
                }
                if(datos[16].producto==="Chiclets"){
                    $("#txtInicioChiclets").val(datos[16].total);
                }
                if(datos[17].producto==="Leche"){
                    $("#txtInicioLeche").val(datos[17].total);
                }
                if(datos[18].producto==="Pulpas"){
                    $("#txtInicioPulpas").val(datos[18].total);
                }
                if(datos[19].producto==="Avena"){
                    $("#txtInicioAvena").val(datos[19].total);
                }
                if(datos[20].producto==="MiloCaliente"){
                    $("#txtInicioMilocaliente").val(datos[20].total);
                }
                if(datos[21].producto==="Pintado"){
                    $("#txtInicioPintado").val(datos[21].total);
                }
                if(datos[22].producto==="Pintadito"){
                    $("#txtInicioPintadito").val(datos[22].total);
                }
                if(datos[23].producto==="CapuccinoOriginal"){
                    $("#txtInicioCapuccinooriginal").val(datos[23].total);
                }
                if(datos[24].producto==="CapuccinoVainilla"){
                    $("#txtInicioCapuccinoVainilla").val(datos[24].total);
                }
                if(datos[25].producto==="Tinto"){
                    $("#txtInicioTinto").val(datos[25].total);
                }
                if(datos[26].producto==="Mokaccino"){
                    $("#txtInicioMokaccino").val(datos[26].total);
                }
            }else{
                alert("No existen registros");
            }

    })
})
