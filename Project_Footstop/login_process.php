<?php
session_start();
require_once 'config/database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $no_telepone = $_POST['no_telepon'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($no_telepone) || empty($password)) {
        die("Email dan Password wajib diisi.");
    }

    $db = new Database();
    $conn = $db->connection;

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE no_telepon = ?");
    $stmt->bind_param("s", $no_telepone);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: dashboard.php");
            exit;
        } else {
            echo "❌ Password salah.";
        }
    } else {
        echo "❌ Nomor tidak ditemukan.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Akses tidak sah.";
}
?>
