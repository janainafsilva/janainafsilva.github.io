<?php

define('HOST', 'localhost');
define('USUARIO',  'root');
define('SENHA', 'root.miranda.2020');
define('BD','systec');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, BD) or die('Não Conectou!!');


?>