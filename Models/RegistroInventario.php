<?php
include_once("BaseDeDatos.php");
class RegistroInventario{
    var $producto;
    var $inicio;
    var $entra;
    var $devol;
    var $total;
    var $saldo;
    var $venta;
    var $cajero;
    var $sede;

    public function __construct($producto,$inicio,$entra,$devol,$total,$saldo,$venta,$cajero,$sede){
        $this->producto=$producto;
        $this->inicio=$inicio;
        $this->entra=$entra;
        $this->devol=$devol;
        $this->total=$total;
        $this->saldo=$saldo;
        $this->venta=$venta;
        $this->cajero=$cajero;
        $this->sede=$sede;
    }
    //Ingresar Registro de inventario a la base de datos
    public function IngresarInventario(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into inventarioturno values('$this->producto',$this->inicio,$this->entra,$this->devol,$this->total,$this->saldo,$this->venta,'$this->cajero','$this->sede',to_char(current_timestamp, 'HH24:MI:SS'));";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el inventario");
        }
        //echo json_encode("Inventario registrado con exito");
    }

    public function ConsultarInventarioTotal(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select producto, sum(inicio)+sum(entra)-sum(devol) from inventarioturno group by producto order by 1;";
        $Registros=pg_exec($Sql);
		return($Registros);
    }

    public function consultarInventarioSede(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select producto, sum(inicio)+sum(entra)-sum(devol) from inventarioturno where sede='$this->sede' group by producto order by 1;";
        $result = pg_exec($Sql);
        return($result);
    }
}
?>
