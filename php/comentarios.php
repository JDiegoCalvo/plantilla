<?php
	ob_start();

	include 'connection.php';

	if ( isset( $_POST ) )
	{
		if ( isset( $_POST['url'] ) )
		{
			$data = [];

			$query = "SELECT 

				fecha,
				nombre,
				comentario

			FROM comentarios

			WHERE 

			url = '$_POST[url]'

			ORDER BY fecha DESC";

			$result = $mysql->query( $query );

			while ( $row = $result->fetch_assoc() ) 
			{
				array_push( $data, [
					'fecha'      => $row['fecha'],
					'nombre'     => $row['nombre'],
					'comentario' => $row['comentario']
				]);
			}

			echo json_encode( $data );

		}

	}

	ob_end_flush();
?>
