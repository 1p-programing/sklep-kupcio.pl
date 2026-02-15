<?php

require_once("bazaconfig.php");

$conn = new mysqli($host, $user, $pass, $baza);

if ($conn->connect_error) {
    die("Program nie działa.");
}