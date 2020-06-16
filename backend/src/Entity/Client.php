<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 */
class Client
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $contact;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $addresse;

    /**
     * @ORM\OneToMany(targetEntity=EtatSante::class, mappedBy="client", orphanRemoval=true)
     */
    private $etatSantes;

    public function __construct()
    {
        $this->etatSantes = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(string $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    public function getAddresse(): ?string
    {
        return $this->addresse;
    }

    public function setAddresse(string $addresse): self
    {
        $this->addresse = $addresse;

        return $this;
    }

    /**
     * @return Collection|EtatSante[]
     */
    public function getEtatSantes(): Collection
    {
        return $this->etatSantes;
    }

    public function addEtatSante(EtatSante $etatSante): self
    {
        if (!$this->etatSantes->contains($etatSante)) {
            $this->etatSantes[] = $etatSante;
            $etatSante->setClient($this);
        }

        return $this;
    }

    public function removeEtatSante(EtatSante $etatSante): self
    {
        if ($this->etatSantes->contains($etatSante)) {
            $this->etatSantes->removeElement($etatSante);
            // set the owning side to null (unless already changed)
            if ($etatSante->getClient() === $this) {
                $etatSante->setClient(null);
            }
        }

        return $this;
    }

    
}
