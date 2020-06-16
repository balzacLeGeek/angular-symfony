<?php

namespace App\Controller;

use App\Entity\Client;
use App\Repository\ClientRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ClientController extends AbstractController
{
    /**
     * @Route("/apip/client", name="index_client",methods={"GET"})
     */
    public function index(ClientRepository $clientRepository)
    {
        return $this->json($clientRepository->findAll(),200);

        // return $this->render('client/index.html.twig', [
        //     'controller_name' => 'ClientController',
        // ]);
    }

    /**
     * @Route("/apip/client", name="store_client")
     */
    public function store(Request $request,ClientRepository $clientRepository,SerializerInterface $serializer,EntityManagerInterface $em,ValidatorInterface $validator)
    {
        $jsonRecu = $request->getContent();

        try {
            $client = $serializer->deserialize($jsonRecu,Client::class,'json');

            $errors = $validator->validate($errors);
            
            // if (count($errors) > 0 ) {
            //     return $this->json($errors,404);
            // }

            $em->persist($client);
            $em->flush();

            return $this->json($client,201,[]);
        } 
        catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'message' => $e->getMessage()
            ],400);
        }
    }
}
