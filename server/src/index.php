<?php

require_once __DIR__ . "/../vendor/autoload.php";

$num = $_SERVER['QUERY_STRING'];

$num = (int)$num;


function passwordGenerator($num)
{
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $password = "";
    $symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    while ($num--) {
        $password .= $symbols[random_int(0, strlen($symbols) - 1)];
    }

    http_response_code(200);
    echo json_encode($password);
}


passwordGenerator($num);
