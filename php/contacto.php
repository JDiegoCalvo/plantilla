<?php
	ob_start();

	date_default_timezone_set( 'America/Mexico_City' );

	if ( isset( $_POST ) )
	{
		if ( 
			isset( $_POST['to'] )       AND 
			isset( $_POST['url'] )      AND 
			isset( $_POST['nombre'] )   AND 
			isset( $_POST['email'] )    AND 
			isset( $_POST['whatsapp'] ) AND 
			isset( $_POST['mensaje'] ) 
		)
		{
			$message = '
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">URL:</span> '.$_POST['url'].'</p>
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">Fecha:</span> '.date( 'Y-m-d H:i:s' ).'</p>
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">Nombre:</span> '.$_POST['nombre'].'</p>
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">Email:</span> '.$_POST['email'].'</p>
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">whatsapp:</span> '.$_POST['codigo'].' '.$_POST['whatsapp'].'</p>
				<p style="margin-bottom: 0.25rem; margin-top: 0; font-size: 18px;"><span style="font-weight: bold;">Mensaje:</span> '.$_POST['mensaje'].'</p>
			';

			mail( $_POST['to'], 'Te han enviado un mensaje.', $message );

		}

	}

	ob_end_flush();
?>
