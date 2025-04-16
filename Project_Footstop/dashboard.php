<?php
session_start();
require_once 'config/database.php';

// Cek apakah user sudah login
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

// Koneksi ke database
$db = new Database();
$conn = $db->connection;

// Ambil data user berdasarkan ID sesi
$id = $_SESSION['user_id'];
$query = $conn->prepare("SELECT id, nama, no_telepon, email, kelamin, role FROM users WHERE id = ?");
$query->bind_param("i", $id);
$query->execute();
$result = $query->get_result();
$user = $result->fetch_assoc();

// Jika data tidak ditemukan
if (!$user) {
    echo "Data pengguna tidak ditemukan.";
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - Uji Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h4 class="mb-0">Selamat Datang, <?= htmlspecialchars($user['nama']) ?>!</h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <tr>
                    <th>ID</th>
                    <td><?= $user['id'] ?></td>
                </tr>
                <tr>
                    <th>Nama</th>
                    <td><?= htmlspecialchars($user['nama']) ?></td>
                </tr>
                <tr>
                    <th>No. Telepon</th>
                    <td><?= htmlspecialchars($user['no_telepon']) ?></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><?= htmlspecialchars($user['email']) ?></td>
                </tr>
                <tr>
                    <th>Kelamin</th>
                    <td><?= htmlspecialchars($user['kelamin']) ?></td>
                </tr>
                <tr>
                    <th>Role</th>
                    <td><?= htmlspecialchars($user['role']) ?></td>
                </tr>
            </table>
            <a href="logout.php" class="btn btn-danger">Keluar</a>
        </div>
    </div>
</div>
</body>
</html>
