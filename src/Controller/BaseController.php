<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{

    const MESSAGE_SUCCESS = 'La operación se realizó correctamente';
    const MESSAGE_EXCEPTION = 'Ha ocurrido un error interno, por favor intente de nuevo';

    //escribir error log
    public function writelogerror($txt, $filename = "errorlog.txt")
    {
        global $path_logs;

        $datetime = date("Y-m-d H:i:s", time());
        $txt = $datetime . "\t---\t" . $txt . "\n";

        if ($path_logs != "") {
            $filename = $path_logs . $filename;
        }

        $fp = fopen($filename, "a");
        if ($fp) {
            fputs($fp, $txt, strlen($txt));
            fclose($fp);
        } else {
            die("Error IO: writing file '{$filename}'");
        }
    }
}
