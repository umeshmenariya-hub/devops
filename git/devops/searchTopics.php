<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "../config/db.php";

$search = $_GET['q'] ?? '';

$sql = "SELECT topic_key, title 
        FROM topics 
        WHERE title LIKE :search 
           OR content LIKE :search
        ORDER BY title";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':search' => '%' . $search . '%'
]);

echo json_encode($stmt->fetchAll());
