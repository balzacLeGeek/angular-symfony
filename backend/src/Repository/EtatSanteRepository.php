<?php

namespace App\Repository;

use App\Entity\EtatSante;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EtatSante|null find($id, $lockMode = null, $lockVersion = null)
 * @method EtatSante|null findOneBy(array $criteria, array $orderBy = null)
 * @method EtatSante[]    findAll()
 * @method EtatSante[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtatSanteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EtatSante::class);
    }

    // /**
    //  * @return EtatSante[] Returns an array of EtatSante objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EtatSante
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
