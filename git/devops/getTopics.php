<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "../config/db.php";

$stmt = $pdo->query("SELECT topic_key, title FROM topics ORDER BY id");

echo json_encode($stmt->fetchAll());
