<?php
include_once("usuario.php");
$documentoIdentidad=$_REQUEST['documentoIdentidad'];
$empleado=new usuario("","","","","","","","");
$CRUDeli=$empleado->eliminarEmpleado($documentoIdentidad);
echo ($CRUDeli);
?>
