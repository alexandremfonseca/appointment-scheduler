<?php

function resposta($codigo, $ok, $msg) {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    http_response_code($codigo);
    echo(json_encode([
        'ok' => $ok,
        'msg' => $msg,
        'codigo' => $codigo
    ]));

    die;
}

if($_SERVER['REQUEST_METHOD']=="OPTIONS")
    resposta(200, true, "");

if($_SERVER['REQUEST_METHOD']!="POST")
    resposta(400, false, "Método invalido!");

$conexao = new PDO("mysql:host=localhost;dbname=rolodex", 'root', '150217');

$body = file_get_contents("php://input");

if (!$body)
    resposta(400, false, 'Corpo da requisição não encontrado!');

$body = json_decode($body);
$body->nome = filter_var($body->nome, FILTER_SANITIZE_STRING);
$body->email = filter_var($body->email, FILTER_VALIDATE_EMAIL);
$body->msg = filter_var($body->msg, FILTER_SANITIZE_STRING);

if (!$body->nome || !$body->email || !$body->msg)
    resposta(400, false, 'Dados inválidos!');

$stm = $conexao->prepare('INSERT INTO contacts (name, email, msg) VALUES (:name, :email, :msg)');
$stm->bindParam('nome', $body->nome);
$stm->bindParam('email', $body->email);
$stm->bindParam('msg', $body->msg);
$stm->execute();

resposta(200, true, "Mensagem salva com sucesso!");