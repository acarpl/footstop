<?php

if (!class_exists('Database')) {
    class Database {
        private $host = "localhost";
        private $user = "root";
        private $pass = "";
        private $namadb = "user_management"; 
        public $connection;

        public function __construct() {
            $this->connection = new mysqli($this->host, $this->user, $this->pass, $this->namadb);
            if ($this->connection->connect_error) {
                die("Koneksi gagal: " . $this->connection->connect_error);
            }
        }
    }
}

// Cara pakainya nanti:
$db = new Database();
$conn = $db->connection;

if ($conn) {
    echo "Koneksi berhasil";
} else {
    echo "Koneksi gagal";
}

?>
