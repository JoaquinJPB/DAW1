<h1 class="site-heading text-center text-white d-none d-lg-block">
	<a class="nav-link" href="index.php"><span class="site-heading-lower">AILA Motors</span></a>
</h1>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
	<div class="container">
		<a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">AILA MOTORS</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item active" style="padding-right:3em">
					<a class="nav-link text-uppercase text-expanded" href="index.php">Home</a>
				</li>
				<li class="nav-item active" style="padding-right:3em">
					<a class="nav-link text-uppercase text-expanded" href="novedades.php">Ofertas</a>
				</li>
				<li class="nav-item active" style="padding-right:3em">
					<a class="nav-link text-uppercase text-expanded" href="anuncios.php">Anuncios</a>
				</li>
				<li class="nav-item active" style="padding-right:3em">
					<a class="nav-link text-uppercase text-expanded" href="nosotros.php">Nosotros</a>
				</li>

				<?php
					if (!isset($_SESSION['loggedin']) || !$_SESSION['loggedin']) {
					$_SESSION['loggedin']=false;
				?>

					<li class="nav-item active" style="padding-right:3em">
						<a class="nav-link text-uppercase text-expanded" href="login.php">Login</a>
					</li>

				<?php } ?>

				<?php if ($_SESSION['loggedin']) {?>
					<li class="nav-item active" style="padding-right:3em">
						<a class="nav-link text-uppercase text-expanded" href="anadir_anuncio.php">Crear Anuncio</a>
					</li>

					<li class="nav-item active" style="padding-right:5em">
						<a class="nav-link text-uppercase text-expanded" href="favoritos.php">Favoritos</a>
					</li>

					<li class="nav-item active">
						<a class="nav-link text-uppercase text-expanded" href="logout.php" style="color: #7a5151">Cerrar sesión</a>
					</li>
				<?php } ?>
			</ul>
		</div>
	</div>
</nav>
