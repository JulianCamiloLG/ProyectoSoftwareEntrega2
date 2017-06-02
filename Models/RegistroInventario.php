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
        $Sql="insert into inventarioturno values('$this->producto',$this->inicio,$this->entra,$this->devol,$this->total,$this->saldo,$this->venta,'$this->cajero','$this->sede',current_timestamp(2));";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el inventario");
        }
        echo("Inventario registrado con exito");
    }
    //Consultar inventario turno anterior al actual
    public function ActualizarTemporalInventario(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select producto,total
              from inventarioturno
              where turno in(
                            select MAX(turno)
                            from inventarioturno)
                     and lower(sede)='$this->sede';";
        $Sql2="delete from producto;";
        $Registros=pg_exec($Sql);
        $reiniciar=pg_exec($Sql2);
		return($Registros);
    }

    public function ConsultarInventarioTotal(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select producto,total
              from inventarioturno
              where turno in(
                            select MAX(turno)
                            from inventarioturno);";
        $Registros=pg_exec($Sql);
		return($Registros);
    }

    public function consultarInventarioSede(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select producto,total
              from inventarioturno
              where turno in(
                            select MAX(turno)
                            from inventarioturno)
                     and lower(sede)='$this->sede';";
        $result = pg_exec($Sql);
        return($result);
    }
}
?>
