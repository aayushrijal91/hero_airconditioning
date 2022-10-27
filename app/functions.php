<?php
include __DIR__ . '/env.php';

$site = "Hero Air Conditioning";
$phone_number = "02 9137 9699";
$admin_email = 'arijal@aiims.com.au'; // 'info@heroplumbing.com.au ';
// $bcc_email = "";
$facebook = "https://www.facebook.com/HeroPlumbing/";
$instagram = "https://www.instagram.com/hero_plumbing_heating_cooling/";
$youtube = "https://www.youtube.com/channel/UCZ4EV7-LbasioD3ZvtpMfLg/featured";
$gmb = "https://www.google.com/maps/place/Hero+Plumbing+Sydney+%7C+Gas+Heater+Service+%26+Repairs/@-33.8565408,150.9289567,10z/data=!4m5!3m4!1s0x0:0x2566f55e1746096b!8m2!3d-33.8565408!4d150.9289567";
$no_reply_email = 'info@heroairconditioning.com.au';
$recaptcha_client_secret = $client_secret;
$recaptcha_server_secret = $server_secret;

function renderImg($filename, $folder, $classname = "")
{
    $filename_without_ext = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);
    $src = "./assets/images/" . $folder . "/" . $filename;

    if (file_exists("./assets/images/" . $folder . "/" . $filename_without_ext . ".webp")) {
        $src = "./assets/images/" . $folder . "/" . $filename_without_ext . ".webp";
    }

    return "<img src=" . $src . " alt=" . $filename_without_ext . " class='" . $classname . "'>";
}
