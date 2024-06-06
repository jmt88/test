<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Validator as NewAssert;

/**
 * Usuario
 *
 * @ORM\Table(name="usuario")
// * @ORM\Entity(repositoryClass="App\Repository\UsuarioRepository")
 */
class Usuario
{

    /**
     * @var integer
     *
     * @ORM\Column(name="usuario_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $usuarioId;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=50, nullable=false)
     *
     * @NewAssert\ForbiddenDomainZone
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255, nullable=false)
     */
    private $password;

    /**
     * Set email
     *
     * @param string $username
     * @return Usuario
     */
    public function setUsername(string $username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set password
     *
     * @param string $password
     * @return Usuario
     */
    public function setContrasenna($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getContrasenna()
    {
        return $this->password;
    }
}
