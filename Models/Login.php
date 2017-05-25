<?php
include_once("BaseDeDatos.php");
class Login{
    var $user;
    var $password;
    var $rol;
    public function __construct($user,$password,$rol){
        $this->user=$user;
        $this->password=$password;
        $this->rol=$rol;
    }
    public function validarLogin(){
        $BDD=new BaseDeDatos();
        $temp=$BDD->ConectarBDD();
        $Sql="select rol from login where usuario='$this->user'";
        $Registro=pg_exec($Sql);
        if(!$Registro){
            echo ("Error de validacion");
        }else{
            $row = pg_fetch_row($Registro);
            return ($row[0]);
        }


    }

}
?>
