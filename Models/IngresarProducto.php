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
        $Sql="UPDATE producto SET cantidadminima=cantidadminima+$this->cantidad WHERE nombreproducto='$this->producto'";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el gasto");
        }else{
            echo json_encode("Producto ingresado con exito");
        }
    }
}

?>
