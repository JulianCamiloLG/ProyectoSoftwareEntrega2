<?php
include_once("BaseDeDatos.php");
class IngresarProducto
{
    var $producto;
    var $cantidad;

    public function __construct($producto,$descripcion)
    {
        $this->producto=$producto;
        $this->cantidad=$cantidad;
    }

    public function  ingresarProducto()
    {
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into producto values('$this->producto',$this->cantidad);";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el gasto");
        }
        echo json_encode("Producto ingresado con exito");
    }
}

?>
