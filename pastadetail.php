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

$id=$_GET['id'];
$sql = "SELECT * FROM pastas where id=$id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
$sql = "SELECT * FROM pasta_instruction where pasta_id=$id";
$result = $conn->query($sql);
$instructions = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $instructions[] = $row;
    }
}
$data['instructions']=$instructions;
echo json_encode($data);
$conn->close();
?>