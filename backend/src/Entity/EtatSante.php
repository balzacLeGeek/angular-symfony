<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EtatSanteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=EtatSanteRepository::class)
 */
class EtatSante
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="etatSantes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $temperature;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $frequenceToux;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    public function getTemperature(): ?string
    {
        return $this->temperature;
    }

    public function setTemperature(string $temperature): self
    {
        $this->temperature = $temperature;

        return $this;
    }

    public function getFrequenceToux(): ?string
    {
        return $this->frequenceToux;
    }

    public function setFrequenceToux(string $frequenceToux): self
    {
        $this->frequenceToux = $frequenceToux;

        return $this;
    }
}
