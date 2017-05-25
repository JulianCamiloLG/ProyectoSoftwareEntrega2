<?php

include_once("BaseDeDatos.php");
class GastoTurno{
    var $gastosTurno;

    public function __construct(){

    }
    //obtenerlosgastos
    public function obtenerGastos(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select gastostotales from gastostotalesturno;";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el gasto");
        }
       $row = pg_fetch_row($result);
       return ($row[0]);
    }
    public function reiniciar(){
     $BDD=new BaseDeDatos();
     $temp=$BDD->ConectarBDD();
     $Sql="update gastostotalesturno set gastostotales=0";
     $result=pg_exec($Sql);
    }
}

?>
