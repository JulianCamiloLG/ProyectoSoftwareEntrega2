<?php

require_once 'PHPUnit/Autoload.php';
use PHPUnit\Framework\TestCase as TestCase;

final class TestControladora extends TestCase
{
    public function testIngresoGastoCorrecto(){
        $this->assertEquals("Gasto ingresado con exito",controladora::IngresarGasto(4,'hola',34,555,'example'));
    }
    public function testIngresoGastoInCorrecto(){
        $this->assertEquals("Error al ingresar el gasto",controladora::IngresarGasto(4,'hola','34',555,'example'));
    }
}
?>
