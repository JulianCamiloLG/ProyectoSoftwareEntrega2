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
            $.post("../Controller/controladora.php",{nombre:nombre,apellidos:apellidos,documentoidentidad:documentoidentidad,direccion:direccion,telefono:telefono,rol:rol,usuario:usuario,contrasena:contrasena,funcion:8},function(respuesta){
                alert(respuesta);
            })
        }else{
            alert("Debe ingresar campos obligatorios");
        }}else{
            alert("Contraseñas no coinciden");
        }
})
// Consultar de informacion de los empleados
$("#verEmpleados").button().on("click",function(event){
    $.post("../Controller/controladora.php",{funcion:9},function(respuesta){
        var datos= jQuery.parseJSON(respuesta);
            for (var i in datos){
                //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);
                var elementotr=document.createElement('tr');
				elementotr.setAttribute("class","tablaConsolidado");
				// creacion primer td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].nombre);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
				// creacion segundo td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].apellido);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
				// creacion tercer td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].documentoidentidad);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
                // creacion cuarto td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].direccion);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
                // creacion quinto td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].telefono);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
                // creacion sexto td y se lo asigno al padre tr
				var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].rol);
				elementotd.appendChild(texto);
				elementotd.setAttribute("align","center");
                // creacion septimo td y se lo asigno al padre tr
                var elementotd=document.createElement('td');
				elementotd.setAttribute("class","tablaConsolidado");
				elementotr.appendChild(elementotd);
				var texto=document.createTextNode(datos[i].usuario);
				elementotd.appendChild(texto);
                //pruebas
                var elementotd=document.createElement('td');
				elementotr.appendChild(elementotd);
				var elemtoa=document.createElement('a');				elemtoa.setAttribute('href',"../Models/EliminarEmpleado.php?"+'documentoIdentidad='+datos[i].documentoidentidad);
				var createAText = document.createTextNode('Aplicar');
				elemtoa.appendChild(createAText);
				elementotd.appendChild(elemtoa);
                //
				var obj=document.getElementById('Contenido');
				obj.appendChild(elementotr);
            }
    })
})
