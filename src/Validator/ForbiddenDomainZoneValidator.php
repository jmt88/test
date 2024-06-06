<?php

namespace App\Validator;

use Symfony\Component\Form\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ForbiddenDomainZoneValidator extends ConstraintValidator
{
   const DOMAIN_ZONE_COM = '.com';

   public function validate($value, Constraint $constraint)
   {
       if(null === $value || "" === $value) {
           return;
       }
       if(!is_string($value)) {
           throw new UnexpectedTypeException($value, "string");
       }
       if(!strpos($value, false === self::DOMAIN_ZONE_COM)) {
           $this->context->buildViolation($constraint->message)
               ->setParameter('{{ string }}', $value)
               ->addViolation();
       }
   }
}
