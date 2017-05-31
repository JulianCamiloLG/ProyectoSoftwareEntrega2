$(function(){

  $("#guardartotal").on("click",function(event){
      if($("#totalCarne").val() > 0 && $("#totalCarne").val() !=" "&& $("#totalPollo").val() > 0 && $("#totalPollo").val() !=" "&& $("#totalChicha").val() > 0 && $("#totalChicha").val() !=" "&& $("#totalQueso").val() > 0 && $("#totalQueso").val() !=" "&& $("#totalChamp").val() > 0 && $("#totalChamp").val() !=" "){
    var arregloTotales={Carne: $("#totalCarne").val(),Pollo: $("#totalPollo").val(),Chicharron:$("#totalChicha").val(),Queso:$("#totalQueso").val(),Champinones:$("#totalChamp").val()};
      $.post('../Controller/controladora.php', {datos:arregloTotales,funcion:7}, function(respuesta){
          alert(respuesta);
      });
      }
      else
      alert("Los datos deben ser numeros mayores a 0");
    });

  });
