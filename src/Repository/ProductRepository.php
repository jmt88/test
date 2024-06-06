<?php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;


class ProductRepository extends EntityRepository
{

    /**
     * ListarProductosPrecio: Lista los productos cuyo precio es mayor a 100
     *
     * @author Javier
     */
    public function ListarProductosPrecio()
    {
        $consulta = $this->createQueryBuilder('p')
            ->andWhere('p.price > 100')
            ->orderBy('p.price', "DESC");

        return $consulta->getQuery()->getResult();
    }

}
