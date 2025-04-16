<?php
require_once 'config/database.php'; // Sesuaikan path-nya

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Amankan input dengan trim dan htmlspecialchars
    $nama = htmlspecialchars(trim($_POST['nama']));
    $no_telepon = htmlspecialchars(trim($_POST['no_telepon']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';
    $kelamin = $_POST['kelamin'] ?? '';

    // Validasi input wajib
    if (empty($nama) || empty($no_telepon) || empty($email) || empty($password) || empty($confirm_password) || empty($kelamin)) {
        echo "⚠️ Harap isi semua kolom."; exit;
    }

    // Validasi konfirmasi password
    if ($password !== $confirm_password) {
        echo "⚠️ Password dan konfirmasi tidak cocok."; exit;
    }

    // Cek apakah no_telepon sudah digunakan
    $check = $conn->prepare("SELECT id FROM users WHERE no_telepon = ?");
    $check->bind_param("s", $no_telepon);
    $check->execute();
    $check->store_result();
    if ($check->num_rows > 0) {
        echo "⚠️ Nomor telepon sudah terdaftar."; exit;
    }
    $check->close();

    // Enkripsi password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Simpan data ke database
    $stmt = $conn->prepare("INSERT INTO users (nama, no_telepon, email, password, kelamin, role) VALUES (?, ?, ?, ?, ?, 'pelanggan')");
    $stmt->bind_param("sssss", $nama, $no_telepon, $email, $hashedPassword, $kelamin);

    if ($stmt->execute()) {
        echo "✅ Pendaftaran berhasil! Silakan <a href='login.php'>login di sini</a>.";
    } else {
        echo "❌ Terjadi kesalahan: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "🚫 Akses tidak sah.";
}
?>
