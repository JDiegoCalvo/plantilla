<?php
	ob_start();

	include 'connection.php';

	if ( isset( $_POST ) )
	{
		if ( isset( $_POST['url'] ) )
		{
			$data  = new stdClass;
			$rates = [];
			$sum   = 0;

			$query = "SELECT 

				rate 

			FROM 

			ranking_stars 

			WHERE 

			url = '$_POST[url]'";

			$result = $mysql->query( $query );

			while ( $row = $result->fetch_assoc() ) 
			{
				array_push( $rates, $row['rate'] );

				$sum += $row['rate'];
			}

			$data->total = count( $rates );

			if ( $data->total == 0 )
			{
				$data->average = 0;
				$rating        = 0;

			}else
			{
				$data->average = round( $sum / $data->total, 1 );
				$rating        = intval( $sum / $data->total );

			}

			if ( $rating == 0 )
			{
				$data->one   = 'normal';
				$data->two   = 'normal';
				$data->three = 'normal';
				$data->four  = 'normal';
				$data->five  = 'normal';

			}else if ( $rating == 1 )
			{
				$data->one   = 'hover';
				$data->two   = 'normal';
				$data->three = 'normal';
				$data->four  = 'normal';
				$data->five  = 'normal';

			}else if ( $rating == 2 )
			{
				$data->one   = 'hover';
				$data->two   = 'hover';
				$data->three = 'normal';
				$data->four  = 'normal';
				$data->five  = 'normal';

			}else if ( $rating == 3 )
			{
				$data->one   = 'hover';
				$data->two   = 'hover';
				$data->three = 'hover';
				$data->four  = 'normal';
				$data->five  = 'normal';

			}else if ( $rating == 4 )
			{
				$data->one   = 'hover';
				$data->two   = 'hover';
				$data->three = 'hover';
				$data->four  = 'hover';
				$data->five  = 'normal';

			}else if ( $rating == 5 )
			{
				$data->one   = 'hover';
				$data->two   = 'hover';
				$data->three = 'hover';
				$data->four  = 'hover';
				$data->five  = 'hover';

			}

			echo json_encode( $data );
			
		}

	}

	ob_end_flush();
?>
