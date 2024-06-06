<?php

namespace App\EventSubscriber;

use App\Controller\BaseController;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Twig\Environment;

class LogEventSubscriber extends BaseController implements EventSubscriberInterface
{
    public function onKernelRequest(RequestEvent $event): void
    {
        $url = $event->getRequest()->getUri();
        $this->writelogerror($url);

        $event->stopPropagation();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'kernel.request' => 'onKernelRequest',
        ];
    }
}
