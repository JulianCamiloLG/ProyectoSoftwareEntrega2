<?php
include_once("BaseDeDatos.php");
class CuadreCaja{
    var $ganancia;
    var $ventaTotal;
    var $gastosTurno;
    var $base;
    var $sede;

    public function __construct($ganancia,$ventaTotal,$gastosTurno,$base,$sede){
        $this->ganancia=$ganancia;
        $this->ventaTotal=$ventaTotal;
        $this->gastosTurno=$gastosTurno;
        $this->base=$base;
        $this->sede=$sede;
    }
    //Ingresar cuadre de caja a la base de datos
    public function IngresarCuadre(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into cuadrecaja values($this->ventaTotal,$this->gastosTurno,$this->base,$this->ganancia ,current_date,'$this->sede',to_char(current_timestamp, 'HH24:MI:SS'));";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al ingresar el cuadrecaja");
        }
        //echo json_encode("Gasto ingresado con exito");
    }
    //Consultar cuadre de caja total
    public function ConsultarCuadreTotal(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select ingresos,gastos,base,ganancia,fecha,sede,turno from cuadrecaja;";
        $Registros=pg_exec($Sql);
		return($Registros);
    }
    public function ConsultarCuadreSede(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select ingresos,gastos,base,ganancia,fecha,sede,turno from cuadrecaja where sede='$this->sede';";
        $Registros=pg_exec($Sql);
		return($Registros);
    }
}
?>
