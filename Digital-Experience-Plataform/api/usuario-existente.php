<?php

$json = file_get_contents('php://input'); 
$data = json_decode($json); 


include_once('../config.php');
$email = $data->email;
$senha = $data->senha;


$query = "SELECT * FROM usuarios WHERE email = '$email' and senha = '$senha'";
$result = $conexao->query($query);

if ($result) {
    $resposta = json_encode($result->fetch_object());
    echo $resposta;
    $result->close();
} else {
    echo "Error: " . $conexao->error;
}