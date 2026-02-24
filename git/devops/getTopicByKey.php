<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "../config/db.php";

$key = $_GET['key'] ?? '';

$stmt = $pdo->prepare("SELECT * FROM topics WHERE topic_key = ?");
$stmt->execute([$key]);

$topic = $stmt->fetch();

if ($topic) {
    echo json_encode($topic);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Topic not found"]);
}
