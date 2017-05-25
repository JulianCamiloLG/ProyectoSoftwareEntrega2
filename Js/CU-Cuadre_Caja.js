
$(function(){
$("#CuadreCaja").on("click",function(argument){
    arreglo=["Ganancia: ","Venta total: ","Gastos totales: ","Base: "];
    var cad="";
    var venta=$("#inputVenta").val();
    if(venta !="" && !isNaN(venta) && venta>0){
        $.post("../Controller/controladora.php", {sede: $("#sede").val(), venta:venta, funcion:2},function(respuesta){
            console.log(respuesta);
            var query=jQuery.parseJSON(respuesta);
			for(var i in query){

                cad+="<Label class=control-label col-xs-3>";
                cad+=i;
                cad+="</Label>";
                cad+="<input class=form-control value=";
                cad+=query[i];
                cad+=" readonly>";
                console.log(cad);
            }
            $("#resultado").html(cad);
    });
    }
    else{
        alert("Compruebe que el campo no este vacio y que sea un numero entero");
    }

});
});

$("#consultarCajaTotal").button().on("click",function(event){
    $.post("../Controller/controladora.php",{tipo:"total",sede:"",funcion:5},function(respuesta){
        console.log(respuesta);
        var datos=jQuery.parseJSON(respuesta);
		for (var i in datos){
            console.log("i: " + i);
            var elementotr=document.createElement('tr');
            // creacion primer td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].ingresos);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            // creacion segundo td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].gastos);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].base);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].ganancia);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].fecha);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].sede);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].turno);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var obj=document.getElementById('Contenido');
            obj.appendChild(elementotr);
        }
    })
})

$("#consultarCajaSede").button().on("click",function(event){
    $.post("../Controller/controladora.php",{tipo:"sede",sede: $("#sede").val(),funcion:5},function(respuesta){
        console.log(respuesta);
        var datos=jQuery.parseJSON(respuesta);
		for (var i in datos){
            console.log("i: " + i);
            var elementotr=document.createElement('tr');
            // creacion primer td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].ingresos);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            // creacion segundo td y se lo asigno al padre tr
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].gastos);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].base);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].ganancia);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].fecha);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode($("#sede").val());
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
             var elementotd=document.createElement('td');
            elementotr.appendChild(elementotd);
            var texto=document.createTextNode(datos[i].turno);
            elementotd.appendChild(texto);
            elementotd.setAttribute("align","center");
            var obj=document.getElementById('Contenido');
            obj.appendChild(elementotr);
        }
    })
})

