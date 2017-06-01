//Pruebas unitarias de las validaciones del caso de uso Registrar inventario inicio fin de turno

QUnit.module ("numericos");
QUnit.test("Valores ingresados validos",function(assert){
    var temporal=1;
    var result=isNaN(temporal)
    assert.equal(result,false);
})
QUnit.test("Valores ingresados invalidos",function(assert){
    var temporal='casa';
    var result=isNaN(temporal)
    assert.equal(result,true);
})
QUnit.module("no nulos");
QUnit.test("Valores ingresados validos",function(assert){
    var temporal=10;   assert.equal(temporal,10);
})
QUnit.test("Valores ingresados invalidos",function(assert){
    var temporal;
    assert.equal(temporal,assert.NULL);
})
QUnit.module("Mayores a cero");
QUnit.test("Valores ingresados validos",function(assert){
    var temporal=10;
    if (temporal>=0){
        temporal="valido";
    }else{
        temporal="invalido"
    }
    assert.equal(temporal,"valido");
})
QUnit.test("Valores ingresados invalidos",function(assert){
     var temporal=-10;
    if (temporal>=0){
        temporal="valido";
    }else{
        temporal="invalido"
    }
    assert.equal(temporal,"invalido");
})
//Fin pruebas unitarias caso de uso registrar inventario inicio fin de turno
