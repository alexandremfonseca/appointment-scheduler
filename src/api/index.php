<!-- Preparação de API para conexão do Front-End com banco de dados -->

<?php

// Função para retornar Status HTTP para identificar possíveis erros
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

// Checagem de realização do método HTTP OPTIONS
if($_SERVER['REQUEST_METHOD']=="OPTIONS")
    resposta(200, true, "");

// Checagem de realização do método HTTP POST
if($_SERVER['REQUEST_METHOD']!="POST")
    resposta(400, false, "Método invalido!");

// Conexão do PHP com o MySQL através do PDO
$conexao = new PDO("mysql:host=localhost;dbname=rolodex", 'root', '150217');

// Direcionamento do conteúdo fornecido pelo Front-End
$body = file_get_contents("php://input");

// Checagem de presença de corpo de requisição
if (!$body)
    resposta(400, false, 'Corpo da requisição não encontrado!');

// Transformação de resultados em valores PHP e filtro de dados
$body = json_decode($body);
$body->nome = filter_var($body->nome, FILTER_SANITIZE_STRING);
$body->email = filter_var($body->email, FILTER_VALIDATE_EMAIL);
$body->msg = filter_var($body->msg, FILTER_SANITIZE_STRING);

// Checagem de presença de dados após filtragem
if (!$body->nome || !$body->email || !$body->msg)
    resposta(400, false, 'Dados inválidos!');

// Conexão dos resultados com o banco de dados
$stm = $conexao->prepare('INSERT INTO contacts (name, email, msg) VALUES (:name, :email, :msg)');
$stm->bindParam('nome', $body->nome);
$stm->bindParam('email', $body->email);
$stm->bindParam('msg', $body->msg);
$stm->execute();

// Mensagem de conexão bem-sucedida
resposta(200, true, "Mensagem salva com sucesso!");