<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class ForbiddenDomainZone extends Constraint
{
    public $message = 'Dominio ".com en {{ value }}" no permitido.';

    /**
     * @return string
     */
    public function validatedBy()
    {
        return \get_class($this) . "Validator";
    }
}
