<?php
include_once("BaseDeDatos.php");
class usuario{
    var $nombre;
    var $apellido;
    var $documentoidentidad;
    var $direccion;
    var $telefono;
    var $rol;
    var $usuario;
    var $password;

    public function __construct($nombre,$apellido,$documentoidentidad,$direccion,$telefono,$rol,$usuario,$password){
        $this->nombre=$nombre;
        $this->apellido=$apellido;
        $this->documentoidentidad=$documentoidentidad;
        $this->direccion=$direccion;
        $this->telefono=$telefono;
        $this->rol=$rol;
        $this->usuario=$usuario;
        $this->password=$password;
    }
    //Loggear usuario
    public function validarLogin(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select rol from usuarios where usuario='$this->usuario' and password='$this->password'";
        $Registro=pg_exec($Sql);
        if(!$Registro){
            echo ("Error de validacion");
        }else{
            $row = pg_fetch_row($Registro);
            return ($row[0]);
        }
    }
    //Registar empleado en la base de datos
    public function IngresarEmpleado(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into usuarios values('$this->nombre','$this->apellido',$this->documentoidentidad,'$this->direccion',$this->telefono,'$this->rol','$this->usuario','$this->password');";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al registrar empleado");
        }else{
            echo json_encode("Empleado registrado con exito");
        }
    }
    //consultar datos de los empleados
    public function consultardatosEmpleados(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select nombre,apellido,documentoidentidad,direccion,telefono,rol,usuario from usuarios;";
        $Registros=pg_exec($Sql);
		return($Registros);
    }
    //eliminar empleado
    public function eliminarEmpleado($documentoIdentidad){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="delete from usuarios where documentoidentidad=$documentoIdentidad;";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al eliminar empleado");
        }else{
            echo json_encode("Empleado eliminado con exito");
        }

    }

}

?>
