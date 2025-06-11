<?php
// $con = new mysqli("localhost", "hybrid_ 160422151","ubaya","hybrid_ 160422151");

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
// $sql = "SELECT * FROM pastas";
$search = $_GET['search'];
$sql = "SELECT * FROM pastas where name like '%".$search."%'";
$result = $conn->query($sql);
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();

?>