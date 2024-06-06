<?php

namespace App\Utils;


class DefaultService
{

    /**
     * Calcular
     * @return array
     */
    public function Calcular()
    {
        $resultado = [];

        $calculo = 5 + 5;

        $resultado['success'] = true;
        $resultado['calculo'] = $calculo;

        return $resultado;
    }
}
