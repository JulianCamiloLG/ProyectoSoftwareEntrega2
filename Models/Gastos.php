<?php
include_once("BaseDeDatos.php");
class Gastos{
    var $valor;
    var $descripcion;
    var $nit;
    var $numerofactura;
    var $nombreempresa;
    var $BDD;
    
    public function __construct($valor,$descripcion,$nit,$numerofactura,$nombreempresa){
        $this->valor=$valor;
        $this->descripcion=$descripcion;
        $this->nit=$nit;
        $this->numerofactura=$numerofactura;
        $this->nombreempresa=$nombreempresa;
    }
    //Ingresar gasto a la base de datos
    public function IngresarGasto(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into gastos values($this->valor,'$this->descripcion',$this->numerofactura,'$this->nombreempresa',current_date,$this->nit);";
        $Sql1="update gastostotalesturno set gastostotales=gastostotales+$this->valor";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el gasto");
        }
        pg_exec($Sql1);
        echo json_encode("Gasto ingresado con exito");
    }
}
?>
