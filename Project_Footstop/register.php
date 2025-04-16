<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Register | FOOTSTOP</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    body {
      display: flex;
      margin: 0;
      font-family: sans-serif;
    }
    .form-container {
      width: 50%;
      padding: 50px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .form-container h1 {
      font-size: 40px;
      font-weight: bold;
      border-bottom: 3px solid #333;
      margin-bottom: 30px;
    }
    form {
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
    }
    /*Form Pengisian*/
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="password"]
    {
        background-color: #ddd;
        border: 2px solid transparent;
        padding: 15px;
        border-radius: 25px;
        margin: 10px 0;
        font-size: 16px;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    /*Hover Form*/
    input[type="text"]:hover,
    input[type="email"]:hover,
    input[type="tel"]:hover,
    input[type="password"]:hover,
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    input[type="password"]:focus 
    {
        border-color: #555;
        box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
        outline: none;
    }
    .radio-group {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin: 15px 0;
    }
    .radio-group label {
      font-size: 16px;
    }
    button {
      background-color: #ddd;
      border: none;
      border-radius: 25px;
      padding: 15px;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
    }
    .form-container a {
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      color: black;
    }
    .image-container {
      width: 50%;
      background-color: #333;
    }
    .image-container img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    /*Show Password*/
    .input-wrapper 
    {
     position: relative;
    }

    .toggle-password 
    {
     position: absolute;
     top: 50%;
     right: 20px;
     transform: translateY(-50%);
     cursor: pointer;
     color: #444;
    }


  </style>
</head>
<body>

  <div class="form-container">
    <h1>FOOTSTOP</h1>
    <form action="register_process.php" method="POST">
      <input type="text" name="nama" placeholder="Nama Lengkap" required>
      <input type="tel" name="no_telepon" placeholder="Nomor Telepon" required>
      <input type="email" name="email" placeholder="Email" required>
        <div class="input-wrapper">
         <input type="password" id="password" placeholder="Password" name="password">
            <i class="fa fa-eye toggle-password" onclick="togglePassword('password', this)"></i>
        </div>


        <div class="input-wrapper">
            <input type="password" id="confirm_password" placeholder="Confirm Password" name="confirm_password">
            <i class="fa fa-eye toggle-password" onclick="togglePassword('confirm_password', this)"></i>
        </div>


      <div class="radio-group">
        <label><input type="radio" name="kelamin" value="L" required> Male</label>
        <label><input type="radio" name="kelamin" value="P"> Female</label>
      </div>

      <button type="submit">Register</button>
    </form>

    <a href="login.php">Sudah Punya akun? login sini!</a>
  </div>

  <div class="image-container">
    <img src="sepatu_putih.jpg" alt="Sepatu Putih"> <!-- ganti dengan gambar sesuai UI -->
  </div>

</body>
<script>
  function togglePassword(id, el) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    el.classList.remove('fa-eye');
    el.classList.add('fa-eye-slash');
  } else {
    input.type = "password";
    el.classList.remove('fa-eye-slash');
    el.classList.add('fa-eye');
  }
}
</script>
</html>
