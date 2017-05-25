<?php
include_once("../Models/Gastos.php");
include_once("../Models/Login.php");
include_once("../Models/CuadreCaja.php");
include_once("../Models/GastoTurno.php");
//include_once("../Models/Base.php");

class controladora{
    public function IngresarGasto($valor,$descripcion,$nit,$numerofactura,$nombreempresa){
        $gasto=new Gastos($valor,$descripcion,$nit,$numerofactura,$nombreempresa);
        $gasto->IngresarGasto();
    }

    public function LoginUsuario($user,$password){
        $login=new Login($user,$password,"");
        $Registros=$login->validarLogin();
        if($Registros=='ADMINISTRADOR'){
            session_start();
			$_SESSION['usuario'] = $Registros;
            echo json_encode(1);
        }elseif($Registros=='MESERO'){
            session_start();
			$_SESSION['usuario'] = $Registros;
            echo json_encode(2);
        }elseif($Registros=='COCINERO'){
            session_start();
			$_SESSION['usuario'] = $Registros;
            echo json_encode(2);
        }elseif($Registros=='JPRODUCCION'){
            session_start();
			$_SESSION['usuario'] = $Registros;
            echo json_encode(3);
        }else{
            echo json_encode(0);
        }
    }
    public function CerrarSesion(){
        session_start();
		session_unset();
		session_destroy();
		echo json_encode(1);
    }

    public function CuadreCaja($sede,$venta){
        $gastosTurno=new GastoTurno();
        $gastos=$gastosTurno->obtenerGastos();
        $utilidades=$venta-$gastos;
        //$base= new Base();
        //$base->getBase();
        $base=300000;
        $ganancia=$utilidades-$base;
        $cuadre = new CuadreCaja($ganancia,$venta,$gastos,$base,$sede);
        $cuadre->IngresarCuadre();
        $respuesta=["Ganancia:" => $ganancia, "Venta:" =>$venta, "Gastos:"=>$gastos,"Base:"=>$base];
        $gastosTurno->reiniciar();
        echo json_encode($respuesta);

    }

    public function ConsultarCuadreDeCaja($tipo,$sede){
        //echo ($tipo);
        if($tipo=="total"){
            $consulta=new CuadreCaja("","","","","");
            $Registros=$consulta->ConsultarCuadreTotal();
            $Filas=pg_num_rows($Registros);
            for($cont=0;$cont<$Filas;$cont++){
                $vec=array("ingresos"=>"".pg_result($Registros,$cont,0),
					   "gastos"=>"".pg_result($Registros,$cont,1),
					   "base"=>"".pg_result($Registros,$cont,2),
					   "ganancia"=>"".pg_result($Registros,$cont,3),
                       "fecha"=>"".pg_result($Registros,$cont,4),
                       "sede"=>"".pg_result($Registros,$cont,5),
                       "turno"=>"".pg_result($Registros,$cont,6),);
                $M[$cont]=$vec;
            }
		$vec=$M;
		echo json_encode($vec);

        }elseif($tipo=="sede"){
            $consulta=new CuadreCaja("","","","",$sede);
            $Registros=$consulta->ConsultarCuadreSede();
            $Filas=pg_num_rows($Registros);
            for($cont=0;$cont<$Filas;$cont++){
                $vec=array("ingresos"=>"".pg_result($Registros,$cont,0),
					   "gastos"=>"".pg_result($Registros,$cont,1),
					   "base"=>"".pg_result($Registros,$cont,2),
					   "ganancia"=>"".pg_result($Registros,$cont,3),
                       "fecha"=>"".pg_result($Registros,$cont,4),
                       "sede"=>"".pg_result($Registros,$cont,5),
                       "turno"=>"".pg_result($Registros,$cont,6),);
                $M[$cont]=$vec;
            }
		$vec=$M;
		echo json_encode($vec);
        }
    }
}


$controladora=new controladora();
switch($_REQUEST['funcion']){
    case 1:
        //Ingresar gastos
        $controladora->IngresarGasto($_REQUEST['costo'],$_REQUEST['descripcion'],$_REQUEST['nit'],$_REQUEST['numerofactura'],$_REQUEST['nombreempresa']);
        break;
     case 2:
        //Cuadre de caja
        $controladora->CuadreCaja($_REQUEST['sede'],$_REQUEST['venta']);
        break;
    case 3:
        //Loggear usuario
        $controladora->LoginUsuario($_REQUEST['user'],$_REQUEST['password']);
        break;
    case 4:
        //Cerrar sesion
        $controladora->CerrarSesion();
        break;
    case 5:
        //Consultar cuadre de caja
        $controladora->ConsultarCuadreDeCaja($_REQUEST['tipo'],$_REQUEST['sede']);
        break;


}

?>
