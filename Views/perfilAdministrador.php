<!DOCTYPE html>
<html lang="es">
	<head>
		 <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <link rel="stylesheet" href="../Boostrap/css/bootstrap.min.css">
        <link rel="icon" href="../Imagenes/Favicon.ico">
        <link rel="stylesheet" href="../Css/estilos.css">
        <title>Perfil de Usuario</title>
	</head>
	<body class="fondo-autor">
		<section class="jumbotron">
			<div class="container">
				<h1 class="titulo-blog">EasyAdmin</h1>
				<p class="subtitulo-blog">Perfil de Usuario</p>
			</div>
		</section>
		<header>
			<nav class="navbar navbar-inverse navba-static-top Bienvenido-Usuario" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navegacion-fm">
							<span class="sr-only">Desplegar/Ocultar Menú</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
                        <p class="navbar-brand Bienvenido-Usuario">BIENVENIDO <?php session_start();
                        $user=$_SESSION['usuario'];
                        echo $user; ?></p>
                        <p class="navbar-brand"><script type="text/javascript">
							var d=new Date();
							var m=d.getMonth()+1;
							document.write(' '+d.getDate(),'/ '+m,'/ '+d.getFullYear());
							document.write(" "+d. getHours(),':'+d. getMinutes());
						</script></p>
					</div>
					<!--Inicio menu-->
					<div class="collapse navbar-collapse" id="navegacion-fm">
					    <dd class="nav navbar-nav">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Funciones<span class="caret"></span></a>
								<dd class="dropdown-menu" role="menu">
									<li><a href="CU-Gastos-Pedidos.html" target="iframeVistas">Ingresar Gastos por pedidos</a></li>
									<li class="divider"></li>
									<li><a href="CU-Cuadre-Caja.html" target="iframeVistas">Hacer cuadre de caja por turno</a></li>
									<li class="divider"></li>
									<li><a href="CU-Consultar-Cuadre-Sede.html" target="iframeVistas">Consultar cuadre de caja por sede</a></li>
									<li class="divider"></li>
									<li><a href="CU-Consultar-Cuadre-Total.html" target="iframeVistas">Consultar cuadre de caja total</a></li>
									<li class="divider"></li>
									<li><a href="Registrar-Empleado.html" target="iframeVistas">Registrar empleado</a></li>
									<li class="divider"></li>
									<li><a href="Consultar-Empleado.html" target="iframeVistas">Consolidado de empleados</a></li>
                                    <li class="divider"></li>
									<li><a href="CU-Consultar-Inventario-sede.html" target="iframeVistas">Consultar Inventario por Sede</a></li>
                                    <li class="divider"></li>
									<li><a href="CU-Consultar-Inventario-Total.html" target="iframeVistas">Consultar Inventario Total</a></li>
								</dd>
							</li>
						</dd>
						<form action="" class="navbar-form navbar-right" role="search">
							<button type="button" class="btn btn-warning" name="Cerrarsesion" id="Cerrarsesion">Cerrar Sesión
								<span class="glyphicon glyphicon-log-out"></span>
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
		<section class="main container">
			<div class="row">
				<section class="posts col-xs-12 col-md-12 col-lg-12">
                  	<div class="col-xs-12 col-md-12 col-lg-12  body">
                        <form action="../Models/Archivar.php"  method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="container col-xs-12 col-md-12 col-lg-12">
                                <iframe name="iframeVistas"  width="100%" height="650px" class="iframe"></iframe>
                            </div>
                        </form>
					</div>
				</section>
			</div>
		</section>
		<footer>
		</footer>
		<script src="../Jquery/jquery-1.11.1.min.js" ></script>
        <script src="../Jquery/jquery.backstretch.min.js" type="text/javascript"></script>
        <script src="../Boostrap/js/bootstrap.min.js"></script>
        <script src="../Js/Sesiones.js" type="text/javascript" language="javascript1.5"></script>
	</body>
	<link rel="stylesheet" href="../Boostrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="../Css/estilos.css">
	<script>
        $(document).ready(function(){
        $.backstretch([
        "../Imagenes/2.jpg",
        "../Imagenes/3.jpg",
        "../Imagenes/5.jpg",
        "../Imagenes/7.jpg",
        "../Imagenes/8.jpg",
        "../Imagenes/1.jpg",
        "../Imagenes/10.jpg"
        ],{
        fade:750,
        duration:3000
        });
        });
    </script>
</html>
