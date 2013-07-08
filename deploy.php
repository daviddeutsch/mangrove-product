<?php

if ( !file_exists( __DIR__.'/../config.json' ) ) {
	header("HTTP/1.0 401 Unauthorized"); exit;
}

$json = json_decode( file_get_contents(__DIR__.'/../config.json') );

if ( !isset( $_GET['auth'] ) || !isset( $json->auth ) ) {
	header("HTTP/1.0 401 Unauthorized"); exit;
}

if ( $_GET['auth'] != $json->auth ) {
	header("HTTP/1.0 401 Unauthorized"); exit;
}

shell_exec( 'git pull origin master' );

echo "Ok.";
