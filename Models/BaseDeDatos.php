<?php
class BaseDeDatos{
    var $conexion;
    public function __construct(){
        $this->conexion='';
    }    
    //Realizar la conexion a la base de datos sanjuanitas
    public function ConectarBDD(){
        $this->conexion=pg_connect('dbname=sanjuanitas user=DBA password=12345678');
        if(!$this->conexion){
            echo json_encode("Error al intentar conectar la base de datos");
        }
    }
    public function __destruct(){
        $this->conexion;
    }
        
}
?>
