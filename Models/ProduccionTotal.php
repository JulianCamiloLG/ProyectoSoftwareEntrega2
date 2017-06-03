<?php
include_once("BaseDeDatos.php");
class ProduccionTotal{
    var $Carne;
    var $Pollo;
    var $Chicharron;
    var $Queso;
    var $Champinones;
    public function __construct($datos){
        extract($datos);
        $this->Carne=$Carne;
        $this->Pollo=$Pollo;
        $this->Chicharron=$Chicharron;
        $this->Queso=$Queso;
        $this->Champinones=$Champinones;
    }
    public function ingresar(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into produccion_total values($this->Carne,$this->Pollo,$this->Chicharron,$this->Queso,$this->Champinones,current_date,to_char(current_timestamp, 'HH24:MI:SS'));";
        $Registro=pg_exec($Sql);
        if(!$Registro){
            echo ("Error al ingresar, intente de nuevo mas tarde");
        }else{
           echo("Produccion ingresada con exito");
        }


    }

}
?>
