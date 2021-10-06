<!DOCTYPE html>
<html lang="es">

<?php
include("../partials/head.php");
?>

<body>

	<?php
	include("../partials/header.php");
	?>

  <form id='loginForm' class="my-4" name="loginForm" method='post' style="font-family: 'Arial';">
    <label><img src='../Imagenes/LoginForm/usuario.jpg' alt="Imagen de inicio" style="width: 125px; height: 125px;"/></label>
    <section>
      <input id='cuenta' name='cuenta' type='text' placeholder='Usuario' value=''/>
    </section>
    <section>
      <input id='clave' name='clave' type='password' placeholder='Contraseña' value=''/>
    </section>
    <div>
      <input style='margin-right:10%;' type='submit' onclick='iniciarsesion(event)' value='Iniciar sesión'/>
      <input type='button' value='Registrarse' onclick="location.href='registro.php'">
    </div>
  </form>

</body>




</html>