<?php
include_once("../Models/Gastos.php");
include_once("../Models/Login.php");
include_once("../Models/CuadreCaja.php");
include_once("../Models/GastoTurno.php");
include_once("../Models/RegistroInventario.php");
include_once("../Models/usuario.php");
include_once("../Models/ProduccionTotal.php");
include_once("../Models/IngresarProducto.php");

class controladora{
    public function IngresarGasto($valor,$descripcion,$nit,$numerofactura,$nombreempresa){
        $gasto=new Gastos($valor,$descripcion,$nit,$numerofactura,$nombreempresa);
        $gasto->IngresarGasto();
    }

    public function LoginUsuario($user,$password){
        $login=new usuario("","","","","","",$user,$password);
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

    public function ConsultarInventario($tipo,$sede){
        //echo ($tipo);
        if($tipo=="total"){
            $consulta=new RegistroInventario("","","","",""."","","","");
            $Registros=$consulta->ConsultarInventarioTotal();
            $Filas=pg_num_rows($Registros);
            for($cont=0;$cont<$Filas;$cont++){
                $vec=array("producto"=>"".pg_result($Registros,$cont,0),
					   "total"=>"".pg_result($Registros,$cont,1),);
                $M[$cont]=$vec;
            }
		$vec=$M;
		echo json_encode($vec);

        }elseif($tipo=="sede"){
            $consulta=new RegistroInventario("","","","","","","","",$sede);
            $Registros=$consulta->ConsultarInventarioSede();
            $Filas=pg_num_rows($Registros);
            for($cont=0;$cont<$Filas;$cont++){
                $vec=array("producto"=>"".pg_result($Registros,$cont,0),
					   "total"=>"".pg_result($Registros,$cont,1),);
                $M[$cont]=$vec;
            }
		$vec=$M;
		echo json_encode($vec);
        }
    }

    public function RegistrarInventario($cajero,$producto,$sede,$inicio,$entra,$devol,$saldo,$venta){
        $total=($inicio+$entra)-$devol;
        $saldo=$total-$venta;
        $ECarne=new RegistroInventario($producto,$inicio,$entra,$devol,$total,$saldo,$venta,$cajero,$sede);
        $ECarne->IngresarInventario();
    }
    public function RegistrarEmpleado($nombre,$apellido,$documentoidentidad,$direccion,$telefono,$rol,$usuario,$password){
        $empleado=new usuario($nombre,$apellido,$documentoidentidad,$direccion,$telefono,$rol,$usuario,$password);
        $empleado->IngresarEmpleado();
    }
    public function TotalProduccion($datos){
        $nuevaProduccion=new ProduccionTotal($datos);
        $nuevaProduccion->ingresar();
    }
    public function ConsultarEmpleados(){
        $emp=new usuario("","","","","","","","");
		$Registros=$emp->consultardatosEmpleados();
		$Filas=pg_numrows($Registros);
		for($cont=0;$cont<$Filas;$cont++){
			$vec=array(
				"nombre"=>"".pg_result($Registros,$cont,0),
				"apellido"=>"".pg_result($Registros,$cont,1),
				"documentoidentidad"=>"".pg_result($Registros,$cont,2),
				"direccion"=>"".pg_result($Registros,$cont,3),
				"telefono"=>"".pg_result($Registros,$cont,4),
				"rol"=>"".pg_result($Registros,$cont,5),
                "usuario"=>"".pg_result($Registros,$cont,6),);
			$M[$cont]=$vec;
		}
		pg_FreeResult($Registros);
		$vec=$M;
		echo json_encode($vec);
    }

    public function RegistrarIngresoProducto($producto,$cantidad){
        $ingresoProducto = new IngresarProducto($producto,$cantidad);
        $ingresoProducto->registrarIngresoXProducto();
    }
    public function ActualizarTablaInventario($sede){
        $InventarioTemporal=new RegistroInventario("","","","","","","","",$sede);
        $Registros=$InventarioTemporal->ActualizarTemporalInventario();
        $Filas=pg_numrows($Registros);
        if ($Filas!=0){
            for($cont=0;$cont<$Filas;$cont++){
                $vec=array(
                    "producto"=>"".pg_result($Registros,$cont,0),
                    "total"=>"".pg_result($Registros,$cont,1),);
                $M[$cont]=$vec;
            }
            pg_FreeResult($Registros);
            $vec=$M;
            echo json_encode($vec);
        }else{
            echo ("No existen registros");

        }
    }
}


$controladora=new controladora();
switch($_REQUEST['funcion']){
    case 1:
        //Ingresar gasto
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
    case 6:
        session_start();
		$cajero=$_SESSION['usuario'];
        //Registrar inventario para cada producto
        //Empanadas de carne
        $controladora->RegistrarInventario($cajero,'EmpaCarne',$_REQUEST['sedeInventario'],$_REQUEST['inicioECarne'],$_REQUEST['entraECarne'],$_REQUEST['devolECarne'],$_REQUEST['ventaECarne']);
        //Empanadas de pollo
        $controladora->RegistrarInventario($cajero,'EmpaPollo',$_REQUEST['sedeInventario'],$_REQUEST['inicioEPollo'],$_REQUEST['entraEPollo'],$_REQUEST['devolEPollo'],$_REQUEST['ventaEPollo']);
        //Empanadas de chicharron
        $controladora->RegistrarInventario($cajero,'EmpaChicharron',$_REQUEST['sedeInventario'],$_REQUEST['inicioEChicharron'],$_REQUEST['entraEChicharron'],$_REQUEST['devolEChicharron'],$_REQUEST['ventaEChicharron']);
        //Empanadas de queso
        $controladora->RegistrarInventario($cajero,'EmpaQueso',$_REQUEST['sedeInventario'],$_REQUEST['inicioEQueso'],$_REQUEST['entraEQueso'],$_REQUEST['devolEQueso'],$_REQUEST['ventaEQueso']);
        //Empanadas de champiñones
        $controladora->RegistrarInventario($cajero,'EmpaChampinones',$_REQUEST['sedeInventario'],$_REQUEST['inicioEChampinones'],$_REQUEST['entraEChampinones'],$_REQUEST['devolEChampinones'],$_REQUEST['ventaEChampinones']);
        //Gaseosa 250
        $controladora->RegistrarInventario($cajero,'Gaseosa250',$_REQUEST['sedeInventario'],$_REQUEST['inicioGaseosa250'],$_REQUEST['entraGaseosa250'],$_REQUEST['devolGaseosa250'],$_REQUEST['ventaGaseosa250']);
        //Gaseosa 350
        $controladora->RegistrarInventario($cajero,'Gaseosa350',$_REQUEST['sedeInventario'],$_REQUEST['inicioGaseosa350'],$_REQUEST['entraGaseosa350'],$_REQUEST['devolGaseosa350'],$_REQUEST['ventaGaseosa350']);
        //Jugo hit 250
        $controladora->RegistrarInventario($cajero,'JugoHit250',$_REQUEST['sedeInventario'],$_REQUEST['inicioJugoHit250'],$_REQUEST['entraJugoHit250'],$_REQUEST['devolJugoHit250'],$_REQUEST['ventaJugoHit250']);
        //Jugo Hit 500
        $controladora->RegistrarInventario($cajero,'JugoHit500',$_REQUEST['sedeInventario'],$_REQUEST['inicioJugoHit500'],$_REQUEST['entraJugoHit500'],$_REQUEST['devolJugoHit500'],$_REQUEST['ventaJugoHit500']);
        //H2O
        $controladora->RegistrarInventario($cajero,'H2O',$_REQUEST['sedeInventario'],$_REQUEST['inicioH2O'],$_REQUEST['entraH2O'],$_REQUEST['devolH2O'],$_REQUEST['ventaH2O']);
        //Gaseosa2LT
        $controladora->RegistrarInventario($cajero,'Gaseosa2lt',$_REQUEST['sedeInventario'],$_REQUEST['inicioGaseosa2LT'],$_REQUEST['entraGaseosa2LT'],$_REQUEST['devolGaseosa2LT'],$_REQUEST['ventaGaseosa2LT']);
        //Fuze Tea
        $controladora->RegistrarInventario($cajero,'FuzeTea',$_REQUEST['sedeInventario'],$_REQUEST['inicioFuzetea'],$_REQUEST['entraFuzetea'],$_REQUEST['devolFuzetea'],$_REQUEST['ventaFuzetea']);
        //Flexi Pequeña
        $controladora->RegistrarInventario($cajero,'FlexiPequena',$_REQUEST['sedeInventario'],$_REQUEST['inicioFlexipequena'],$_REQUEST['entraFlexipequena'],$_REQUEST['devolFlexipequena'],$_REQUEST['ventaFlexipequena']);
        //Pony Pet
        $controladora->RegistrarInventario($cajero,'PonyPet',$_REQUEST['sedeInventario'],$_REQUEST['inicioPonypet'],$_REQUEST['entraPonypet'],$_REQUEST['devolPonypet'],$_REQUEST['ventaPonypet']);
        //Pony Mini
        $controladora->RegistrarInventario($cajero,'PonyMini',$_REQUEST['sedeInventario'],$_REQUEST['inicioPonymini'],$_REQUEST['entraPonymini'],$_REQUEST['devolPonymini'],$_REQUEST['ventaPonymini']);
        //Agua
        $controladora->RegistrarInventario($cajero,'Agua',$_REQUEST['sedeInventario'],$_REQUEST['inicioAgua'],$_REQUEST['entraAgua'],$_REQUEST['devolAgua'],$_REQUEST['ventaAgua']);
        //Chiclets
        $controladora->RegistrarInventario($cajero,'Chiclets',$_REQUEST['sedeInventario'],$_REQUEST['inicioChiclets'],$_REQUEST['entraChiclets'],$_REQUEST['devolChiclets'],$_REQUEST['ventaChiclets']);
        //Leche
        $controladora->RegistrarInventario($cajero,'Leche',$_REQUEST['sedeInventario'],$_REQUEST['inicioLeche'],$_REQUEST['entraLeche'],$_REQUEST['devolLeche'],$_REQUEST['ventaLeche']);
        //Pulpas
        $controladora->RegistrarInventario($cajero,'Pulpas',$_REQUEST['sedeInventario'],$_REQUEST['inicioPulpas'],$_REQUEST['entraPulpas'],$_REQUEST['devolPulpas'],$_REQUEST['ventaPulpas']);
        //Avena
        $controladora->RegistrarInventario($cajero,'Avena',$_REQUEST['sedeInventario'],$_REQUEST['inicioAvena'],$_REQUEST['entraAvena'],$_REQUEST['devolAvena'],$_REQUEST['ventaAvena']);
        //Milo Caliente
        $controladora->RegistrarInventario($cajero,'MiloCaliente',$_REQUEST['sedeInventario'],$_REQUEST['inicioMilocaliente'],$_REQUEST['entraMilocaliente'],$_REQUEST['devolMilocaliente'],$_REQUEST['ventaMilocaliente']);
        //Pintado
        $controladora->RegistrarInventario($cajero,'Pintado',$_REQUEST['sedeInventario'],$_REQUEST['inicioPintado'],$_REQUEST['entraPintado'],$_REQUEST['devolPintado'],$_REQUEST['ventaPintado']);
        //Pintadito
        $controladora->RegistrarInventario($cajero,'Pintadito',$_REQUEST['sedeInventario'],$_REQUEST['inicioPintadito'],$_REQUEST['entraPintadito'],$_REQUEST['devolPintadito'],$_REQUEST['ventaPintadito']);
        //Capuccino Original
        $controladora->RegistrarInventario($cajero,'CapuccinoOriginal',$_REQUEST['sedeInventario'],$_REQUEST['inicioCapuccinooriginal'],$_REQUEST['entraCapuccinooriginal'],$_REQUEST['devolCapuccinooriginal'],$_REQUEST['ventaCapuccinooriginal']);
        //Capuccino Vainilla
        $controladora->RegistrarInventario($cajero,'CapuccinoVainilla',$_REQUEST['sedeInventario'],$_REQUEST['inicioCapuccinoVainilla'],$_REQUEST['entraCapuccinoVainilla'],$_REQUEST['devolCapuccinoVainilla'],$_REQUEST['ventaCapuccinoVainilla']);
        //Tinto
        $controladora->RegistrarInventario($cajero,'Tinto',$_REQUEST['sedeInventario'],$_REQUEST['inicioTinto'],$_REQUEST['entraTinto'],$_REQUEST['devolTinto'],$_REQUEST['ventaTinto']);
        //Mokaccino
        $controladora->RegistrarInventario($cajero,'Mokaccino',$_REQUEST['sedeInventario'],$_REQUEST['inicioMokaccino'],$_REQUEST['entraMokaccino'],$_REQUEST['devolMokaccino'],$_REQUEST['ventaMokaccino']);
        break;
    case 7:
        $controladora->TotalProduccion($_REQUEST['datos']);
        break;
    case 8:
        $controladora->RegistrarEmpleado($_REQUEST['nombre'],$_REQUEST['apellidos'],$_REQUEST['documentoidentidad'],$_REQUEST['direccion'],$_REQUEST['telefono'],$_REQUEST['rol'],$_REQUEST['usuario'],$_REQUEST['contrasena']);
        break;
    case 9:
        $controladora->ConsultarEmpleados();
        break;
    case 10:
        $controladora->RegistrarIngresoProducto($_REQUEST['producto'],$_REQUEST['cantidad']);
        break;
    case 11:
        //consultar inventario
        $controladora->ConsultarInventario($_REQUEST['tipo'],$_REQUEST['sede']);
        break;
    case 12:
        $controladora->ActualizarTablaInventario($_REQUEST['sede']);
        break;
}

?>
