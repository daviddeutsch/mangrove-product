<?php

function unauthorizedDeploy() { header("HTTP/1.0 401 Unauthorized"); exit; }

if ( !file_exists( __DIR__.'/../config.json' ) ) unauthorizedDeploy();

$json = json_decode( file_get_contents(__DIR__.'/../config.json') );

if ( !isset( $_GET['auth'] ) || !isset( $json->auth ) ) unauthorizedDeploy();

if ( $_GET['auth'] != $json->auth ) unauthorizedDeploy();

shell_exec( 'git pull origin master' );

echo "Ok.";
