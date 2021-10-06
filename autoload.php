<?php
    function getEnviroment ($name) {
        $file = file_get_contents(__DIR__ . "/env.json");
        $json = json_decode($file, true);
        return $json[$name];
    }
?>