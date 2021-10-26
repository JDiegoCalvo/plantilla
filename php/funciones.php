<?php
	function crear ( $table, $data )
	{
		global $mysql;

		$l = count( $data );

		$query = "
			INSERT INTO $table (";

				for ( $i = 0; $i < $l; $i++ )
				{
					if ( $i == 0 )
					{
						$query .= $data[$i][0];
					}else
					{
						$query .= "," . $data[$i][0];
					}
				}

			$query .= ") VALUES (";

				for ( $i = 0; $i < $l; $i++ )
				{
					if ( $i == 0 )
					{
						$query .= "'" . $data[$i][1] . "'";
					}else
					{
						$query .= "," . "'" . $data[$i][1] . "'";
					}
				}

			$query .= ")
		";

		$mysql->query( $query );
	}
?>
