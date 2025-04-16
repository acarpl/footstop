<!-- register_admin.php -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Register Admin</title>
    <link rel="stylesheet" href="style.css"> <!-- Jika pakai CSS -->
</head>
<body>
    <h2>Form Registrasi Admin</h2>
    <form action="register_admin_process.php" method="POST">
        <label>Nama:</label><br>
        <input type="text" name="nama" required><br>

        <label>No. Telepon:</label><br>
        <input type="text" name="no_telepon" required><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br>

        <label>Password:</label><br>
        <input type="password" name="password" required><br>

        <label>Konfirmasi Password:</label><br>
        <input type="password" name="confirm_password" required><br>

        <label>Kelamin:</label><br>
        <select name="kelamin" required>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
        </select><br><br>

        <button type="submit">Daftarkan Admin</button>
    </form>
</body>
</html>
