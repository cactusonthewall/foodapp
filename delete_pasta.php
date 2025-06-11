<?php  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "hybrid_160422151";
$password = "ubaya";
$dbname = "hybrid_160422151";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

extract($_POST);
$stmt = $conn->prepare("DELETE FROM pastas WHERE id=?");

$stmt->bind_param("i", $id);
if ($stmt->execute()) {
  $arr=["result"=>"success"];
} else {
  $arr= ["result"=>"error","message"=>"Gagal menghapus data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();