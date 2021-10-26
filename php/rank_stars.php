<?php
	ob_start();

	date_default_timezone_set( 'America/Mexico_City' );

	include 'connection.php';

	include 'funciones.php';

	if ( isset( $_POST ) )
	{
		if (
			isset( $_POST['url'] )  AND
			isset( $_POST['rate'] )
		)
		{
			crear(
				'ranking_stars',
				[
					[ 'fecha', date( 'Y-m-d H:i:s' ) ],
					[ 'url', $_POST['url'] ],
					[ 'rate', $_POST['rate'] ]
				]
			);

		}

	}

	ob_end_flush();
?>
