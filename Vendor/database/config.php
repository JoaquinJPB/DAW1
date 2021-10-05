<?php

include __DIR__ . '/../../autoload.php';

class DB {

    private static $conn = null;

    private static function connect () {

        if(self::$conn === null){
            
            $host = getEnviroment("DB_HOST");
            $name = getEnviroment("DB_NAME");
            $username = getEnviroment("DB_USERNAME");
            $password = getEnviroment("DB_PASSWORD");
            $port = getEnviroment("DB_PORT");

            //$host = "localhost";
            //$name = "mda_bd";
            //$username = "mda";
            //$password = "mda";
            //$port = 3306;

            self::$conn = new PDO("mysql:host=$host;dbname=$name", $username, $password);
            self::$conn->exec('PRAGMA foreign_keys = ON;');
            self::$conn->exec('PRAGMA encoding="UTF-8";');
            self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        }

    }

    private static function disconnect () {
        //self::$conn->close();
        self::$conn = null;
    }

    public static function executeSQL ($SQL, $params=null) {

        if (self::$conn === null) {
            self::connect();
        }

        $query = null;
        $exec = self::$conn->prepare($SQL);

        if ($exec) {
            if ($exec->execute($params)) {
                if (stripos($SQL, "SELECT ") !== false){
                    $exec->setFetchMode(PDO::FETCH_NAMED);
                    $query = $exec->fetchAll();
                    if ($exec->rowCount() == 0){
                        $query = null;
                    }
                }else{
                    if ($exec->rowCount() == 0){
                        $query = null;
                    }else{
                        $query = $exec->rowCount();
                    }
                }
            }
        }
        self::disconnect();
        return $query;
    }

}
