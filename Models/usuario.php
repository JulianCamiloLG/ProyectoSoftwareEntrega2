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
        $this->telefono=$telefono;
        $this->rol=$rol;
        $this->usuario=$usuario;
        $this->password=$password;
    }
    //Registar empleado en la base de datos
    public function IngresarEmpleado(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="insert into usuarios values('$this->nombre','$this-apellido',$this->documentoidentidad,'$this->direccion',$this->telefono,'$this->rol','$this->usuario','$this->password');";
        $result=pg_exec($Sql);
        if (!$result){
            echo ("Error al registrar empleado");
        }
        //echo json_encode("Gasto ingresado con exito");
    }
}

?>
