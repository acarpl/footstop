<?php
require_once 'config/database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $db = new Database(); // pastikan ini 'connect()' sesuai dengan class-nya

    $nama = $_POST['nama'];
    $no_telepon = $_POST['no_telepon'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $kelamin = $_POST['kelamin'];
    $role = 'admin';

    // Validasi kolom kosong
    if (empty($nama) || empty($no_telepon) || empty($email) || empty($password) || empty($confirm_password) || empty($kelamin)) {
        die("❌ Harap isi semua kolom.");
    }

    // Validasi kecocokan password
    if ($password !== $confirm_password) {
        die("❌ Password dan konfirmasi tidak cocok.");
    }

    // Cek nomor telepon sudah terdaftar
    $stmt = $conn->prepare("SELECT id FROM users WHERE no_telepon = ?");
    $stmt->execute([$no_telepon]);
    if ($stmt->rowCount() > 0) {
        die("❌ Nomor telepon sudah terdaftar.");
    }

    // Enkripsi password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Simpan data admin
    $insert = $conn->prepare("INSERT INTO users (nama, no_telepon, email, password, kelamin, role) VALUES (?, ?, ?, ?, ?, ?)");
    if ($insert->execute([$nama, $no_telepon, $email, $hashedPassword, $kelamin, $role])) {
        echo "✅ Admin berhasil terdaftar. <a href='login.php'>Login di sini</a>";
    } else {
        echo "❌ Gagal menyimpan data admin.";
    }
}
?>
