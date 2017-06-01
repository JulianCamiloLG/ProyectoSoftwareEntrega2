<?php
include_once("BaseDeDatos.php");
class IngresarProducto
{
    var $producto;
    var $cantidad;

    public function __construct($producto,$cantidad)
    {
        $this->producto=$producto;
        $this->cantidad=$cantidad;
    }

    public function  registrarIngresoXProducto()
    {
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="update producto set cantidadMinima = cantidadMinima + $this->cantidad where nombreP='$this->producto');";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el gasto");
        }
        echo json_encode("Producto ingresado con exito");
    }
}

?>
