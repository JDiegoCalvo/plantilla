<?php
	ob_start();

	date_default_timezone_set( 'America/Mexico_City' );

	include 'connection.php';

	include 'funciones.php';

	if ( isset( $_POST ) )
	{
		if ( 
			isset( $_POST['url'] )        AND 
			isset( $_POST['nombre'] )     AND 
			isset( $_POST['email'] )      AND 
			isset( $_POST['comentario'] ) 
		)
		{
			crear(
				'comentarios',
				[
					[ 'fecha', date( 'Y-m-d H:i:s' ) ],
					[ 'url', $_POST['url'] ],
					[ 'nombre', $_POST['nombre'] ],
					[ 'email', $_POST['email'] ],
					[ 'comentario', $_POST['comentario'] ]
				]
			);

		}

	}

	ob_end_flush();
?>
