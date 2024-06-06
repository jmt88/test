<?php

namespace App\Controller;


use App\Utils\DefaultService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends BaseController
{
    private $defaultService;

    public function __construct(DefaultService $defaultService)
    {
        $this->defaultService = $defaultService;
    }


    /**
     * Devuelve un saludo
     * @param Request $request
     */
    public function hello(Request $request)
    {
        $nombre = $request->get('name');

       $saludo = $nombre == 'null' || $nombre == "''" || is_numeric($nombre) ? 'Hello World' : 'Hola '. $nombre . ', espero que tengas un bonito día.';

        return $this->render('frontend/default/index.html.twig', array(
            'saludo' => $saludo,
            'calculo' => $this->defaultService->Calcular()['calculo'],
            'url_backend' => $this->getParameter('url_backend')
        ));
    }

    /**
     * metodo Login, no hace nada...
     * @param Request $request
     */
    public function login(Request $request)
    {
        $nombre = $request->get('name');
    }

    /**
     * metodo cantProducts, Devuelve un numero
     * @param Request $request
     */
    public function cantProducts(Request $request)
    {
        try {
            $resultado = $this->defaultService->Calcular();
            if ($resultado['success']) {

                $resultadoJson['success'] = true;
                $resultadoJson['message'] = "La operación se realizó correctamente";
                $resultadoJson['numero'] = $resultado['calculo'];

                return $this->json($resultadoJson);
            }

            $resultadoJson['success'] = $resultado['success'];
            $resultadoJson['error'] = $resultado['error'];

            return $this->json($resultadoJson);

        } catch (\Exception $e) {
            $resultadoJson['success'] = false;
            $resultadoJson['error'] = $e->getMessage();

            return $this->json($resultadoJson);
        }
    }

}
