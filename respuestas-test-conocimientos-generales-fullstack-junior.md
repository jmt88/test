# Test de Conocimientos Generales para Desarrollador Fullstack Junior

NOTA: Para ejecutar el proyecto, se debe descargar a la carpeta htdocs de xampp, tener en cuenta que se usó xampp 8, symfony 5.
Una vez descargada la carpeta no hay que hacer mas nada, se incluyo en el git la carpeta con los vendor. Solo ir a la url http://localhost/test/public/hello/Carlos
se utilizo '' y null en caso de que no se quiera enviar nada en esa tarea inicial.
El resto de tareas, casi todas aparecen en la misma página. 
Saludos y que pasen buen día.


## Sección 1: Symfony

1. **Pregunta de Configuración:**
- Describe los pasos básicos para levantar un proyecto en Symfony.
Se debe instalar xampp acorde con la version de php que utilice la version de symfony.
Se debe instalar composer.
Luego, abro consola, voy a la carpeta htdocs de xampp y ejecuto el comando "composer create-project symfony/website-skeleton proyectname".

2. **Pregunta de Código:**
- Crea un controlador en Symfony que maneje una ruta /hello/{name} y devuelva un saludo personalizado. Además, si el nombre no se proporciona, debe devolver un saludo predeterminado "Hello World". (opcional) Implementa también una prueba unitaria para verificar que la ruta devuelve el saludo correcto.

3. **Pregunta Teórica:**
- Explica la arquitectura de Symfony y cómo se organiza un proyecto típico en términos de carpetas y archivos.
bin (tiene un archivo de configuracion de symfony, nunca la he tocado)/
config (se almacenan paquetes a utilizar, las rutas, los servicios, y algunos otros archivos de configuración)
public (se almacenan algunos archivos de la web, el index, se usa para almacenar documentos a utilizar, o para almacenar descargas)
src (contiene los archivos del sistema, controladores, entidades, repositorios, routas, archivos de seguridad, validaciones, eventos, servicios)
en caso de ser necesario templates (se almacenan los templates o vistas de la web)
en caso de ser necesario translations (se almacenan los archivos de traducción)
var (se almacena la cache)
vendor (se almacenan todas las dependencias del sistema)
y otros archivos de configuracion, el mas importante .env, donde se configura el idioma, la ruta a la bd, si la app correrá en produccion o development, un correo en caso de que se use para enviar mails,
ademas se configuran otros servicios externos que se vayan a usar.

4. **Pregunta de Código:**
- Escribe un servicio en Symfony que se inyecta en un controlador y realiza una operación matemática básica (por ejemplo, sumar dos números). ¿Qué configuraciones son necesarias para poder usarlo? (opcional) Implementa también una prueba unitaria para verificar el correcto funcionamiento del servicio.
para crearlo se debe crear un servicio e innyectarlo como dependencia en el controlador, para poder utilizar sus metodos, esta operacion se puede hacer con varios servicios.

5. **Pregunta de Código:**
- Muestra cómo crear un formulario en Symfony para una entidad User con campos username y email.
Sinceramente nunca he trabajado creando los formularios desde el propio symfony, siempre lo hago en las plantillas twig y los envío.

6. **Pregunta Teórica:**
- Explica el concepto de Dependency Injection (DI) en Symfony y cómo se configura.
La inyección de dependencias es una práctica de programación en la que un objecto o función recibe sus dependencias de una fuente externa en lugar de crearlas. 
Esto significa que una clase no debe configurar sus dependencias directamente. En su lugar, se deben pasar a la clase desde el exterior.
En otras palabras, en un caso practico, yo no debo crear metodos que manipulen datos de la bd o simplemente que ejecuten una tarea determinada en mi controlador,
para ello creo un constructor, en el que le paso mi un servicio, que es el que se encargará de ejecutar las tareas necesarias, digase insertar, modificar, eliminar, listar, y demas;
una vez creado en el constructor, puedo hacer referencia a los métodos que contiene.

7. **Pregunta de Código:**
- Escribe una consulta Doctrine en Symfony para obtener todos los registros de una entidad Product donde el precio sea mayor a 100.
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


8. **Pregunta Teórica:**
- ¿Qué es el Event Dispatcher en Symfony y para qué se utiliza?
El componente EventDispatcher permite lanzar eventos de Symfony y crear listeners para recibirlos.

9. **Pregunta de Código:**
- Crea un validador personalizado en Symfony para asegurar que el campo email de una entidad User no pertenece a un dominio específico (por ejemplo, "example.com"). Muestra cómo configurar este validador y cómo sería utilizado en la entidad User.

10. **Pregunta de Código:**
- Implementa un Event Subscriber en Symfony que escuche el evento kernel.request y registre en un archivo de log cada visita a cualquier página de la aplicación. Asegúrate de configurar el servicio correctamente para que el suscriptor se registre con el evento.


## Sección 2: JavaScript

1. **Pregunta Teórica:**
- Explica la diferencia entre var, let y const en JavaScript.
var define una variable global o local en una función sin importar de que tipo sea la misma ni si se modifica o no.
let permite crear variables limitando su alcance al bloque donde se use.
const son las variables constantes que no cambian su valor.

2. **Pregunta de Código:**
- Escribe una función en JavaScript que invierta una cadena de texto.

3. **Pregunta Teórica:**
- ¿Qué es el Event Loop en JavaScript y cómo funciona?
Es el mecanismo que añade un navegador cuando se ejecuta JavaScript, haciendo que la aplicación no se bloquee esperando una respuesta.
El código javascript funciona dando prioridad al codigo javascript por delante de las tareas webapi y las microtareas de webapi.

4. **Pregunta de Código:**
- Escribe un script en JavaScript que filtre los números pares de un array de números y los muestre en la consola.

5. **Pregunta Teórica:**
- ¿Qué es el DOM y cómo se manipula usando JavaScript?
El DOM le permite a JavaScript acceder, recorrer, crear, reemplazar, editar y eliminar los elementos HTML que conforman nuestra página, 
es un medio de comunicación para acceder a los elementos que forman nuestro sitio web. En JavaScript se manipula usando los ids o clases de los componentes, 
para acceder a ellos y poder manipularlos en vias de obtener el resultado deseado.

6. **Pregunta de Código:**
- Escribe un código en JavaScript que añada un event listener a un botón con el id #myButton para mostrar una alerta con el mensaje "Hello World" al hacer clic.

7. **Pregunta Teórica:**
- Explica qué es una Promesa en JavaScript y proporciona un ejemplo básico.
Las promesas son un concepto para resolver el problema de asincronía.

8. **Pregunta de Código:**
- Escribe una función en JavaScript que haga una petición AJAX (usando fetch) para obtener datos de una API y los muestre en un elemento con el id #result.

9. **Pregunta Teórica:**
- ¿Cuál es la diferencia entre null, undefined y NaN en JavaScript?

10. **Pregunta de Código:**
- Implementa una función en JavaScript que use localStorage para guardar una clave-valor y luego recuperarla.


## Sección 3: Git

1. **Pregunta Teórica:**
- ¿Qué es Git y para qué se utiliza en el desarrollo de software?
Git es un sistema de control de versiones que se utiliza para almacenar online y controlar las versiones de un sistema.

2. **Pregunta de Comandos:**
- ¿Cuál es el comando para clonar un repositorio de Git?
El comando clonar se usa para descargar un proyecto desde el Git hacia la pc.

3. **Pregunta Teórica:**
- Explica qué es un "branch" (rama) en Git y para qué se utiliza.
Las ramas son versiones del codigo del proyecto. Ejemplo digamos que tenemos el codigo principal del proyecto, y necesitamos montar cambios nuevos, pero es encesario probarlos antes, 
se crea una rama nuevo, con el objetivo de poder mantener el codigo principal, y a la vez hacer las pruebas necesarias en la otra rama.

4. **Pregunta de Comandos:**
- Proporciona los comandos necesarios para crear una nueva rama llamada feature-xyz, cambiar a esa rama, y luego fusionarla con la rama main.
git checkout -b feature-xyz
git checkout feature-xyz

git checkout master
git merge feature-xyz


5. **Pregunta Teórica:**
- ¿Qué es un "merge conflict" y cómo se resuelve?
os conflictos de fusión ocurren cuando se hacen cambios contrapuestos en la misma línea de un archivo o cuando una persona edita un archivo y otra persona borra el mismo archivo.
normalmente los conflictos aparecen señalados con 
<<<<<<< HEAD
codigo en conflicto
=======
en lo personal si tengo conflicto habro ambos archivos con phpStorm y voy viendo el codigo de ambos que necesite o considere correcto y los fusiono.

6. **Pregunta de Comandos:**
- ¿Cuál es el comando para visualizar el estado actual del repositorio en Git?
git status

7. **Pregunta Teórica:**
- Explica la diferencia entre git pull y git fetch.
git pull se utiliza para actualizar desde el git hacia la pc local.
git fetch descargará el contenido remoto sin modificar el estado del repositorio local.

8. **Pregunta de Comandos:**
- ¿Cuál es el comando para revertir el último commit en Git?
si aun no se ha hecho push y se quiere mantener los cambios del commit (git reset --soft HEAD~1)
si no se quieren mantener los cambios (git reset --hard HEAD~1)
yo por lo general trabajo esto con phpStorm, que me facilita el trabajo.


9. **Pregunta Teórica:**
- ¿Qué es un "remote repository" y cómo se configura en Git?
Los repositorios remotos son versiones de tu proyecto que están hospedadas en Internet o en cualquier otra red.
Para agregar un repositorio remoto nuevo, use el comando git remote add en el terminal, dentro del directorio donde está almacenado su repositorio.
El comando git remote add toma dos argumentos: Un nombre remoto, por ejemplo, origin.

10. **Pregunta de Comandos:**
- Proporciona los comandos para añadir todos los cambios en los archivos al staging area y luego realizar un commit con el mensaje "Initial commit".
git add .
git commit -m "first commit"


## Sección 4: MySQL

1. **Pregunta de Código:**
- Escribe una consulta SQL para crear una base de datos llamada company y una tabla llamada employees con las siguientes columnas: id (INT, auto-increment, primary key), name (VARCHAR(100)), position (VARCHAR(50)), salary (DECIMAL(10, 2)), y hire_date (DATE).
create DATABASE company;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `position` varchar(50) NOT NULL,
  `salary` decimal(10,2) NOT NULL,
  `hire_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

2. **Pregunta Teórica:**
- Explica la diferencia entre una clave primaria (Primary Key) y una clave foránea (Foreign Key) en MySQL. ¿Cuándo y por qué se utilizan?
Llave primaria es el identificador unico que deberia tener cada tabla en la bd, y la llave foranea son las dependencias que usa esa tabla, por ejemplo tenemos un 
usuario que tiene un cargo, tenemos las tablas usuario y cargo, en este caso usuario tendra como llave foranea el id(llave primaria) de cargo, de esa forman
en el codigo se puede acceder a todos los datos del cargo desde el usuario.

3. **Pregunta de Código:**
- Escribe una consulta SQL para insertar tres registros en la tabla employees creada en la pregunta 2.
INSERT INTO `employees` (`id`, `name`, `position`, `salary`, `hire_date`) VALUES (NULL, 'Pepe Perez', 'Director', '100000.00', '2020-06-06');
INSERT INTO `employees` (`id`, `name`, `position`, `salary`, `hire_date`) VALUES (NULL, 'Maria Acosta', 'Secretaria', '30000.00', '2022-03-07');
INSERT INTO `employees` (`id`, `name`, `position`, `salary`, `hire_date`) VALUES (NULL, 'Juan Gonzalez', 'Vicedirector', '50000.00', '2021-05-03');

4. **Pregunta de Código:**
- Muestra cómo actualizar el salario de un empleado específico en la tabla employees. Por ejemplo, actualiza el salario del empleado con id = 1 a 60000.00.
UPDATE `employees` SET `salary`= 60000.00 where id = 1;

5. **Pregunta de Código:**
- Escribe una consulta SQL para seleccionar todos los empleados cuyo salario sea mayor a 50000.00 y ordenarlos por el campo hire_date en orden descendente.
SELECT * FROM `employees` WHERE `salary` > 50000 order by `hire_date` desc

6. **Pregunta Teórica:**
- ¿Qué es una transacción en MySQL y cómo se utiliza? Proporciona un ejemplo de uso.
Conjunto de instrucciones SQL, agrupadas lógicamente, que o bien se ejecutan todas sobre la base de datos o bien no se ejecuta ninguna.

CREATE TABLE innotest (campo INT NOT NULL PRIMARY KEY) TYPE = InnoDB;
Query OK, 0 rows affected (0.10 sec)

mysql> INSERT INTO innotest VALUES(1);
Query OK, 1 row affected (0.08 sec)

mysql> INSERT INTO innotest VALUES(2);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO innotest VALUES(3);
Query OK, 1 row affected (0.04 sec)

mysql> SELECT * FROM innotest;

BEGIN;
Query OK, 0 rows affected (0.01 sec)

mysql> INSERT INTO innotest VALUES(4);
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM innotest;
+-------+
| campo |
+-------+
|     1 |
|     2 |
|     3 |
|     4 |
+-------+
4 rows in set (0.00 sec)

ROLLBACK;
Query OK, 0 rows affected (0.06 sec)

mysql> SELECT * FROM innotest;

Esto es un ejemplo que encontre online, lo entiendo, pero nunca he trabajado con el, asi que pongo el ejemplo encontrado. Prefiero ser honesto y no mentir o especular.

7. **Pregunta de Código:**
- Crea una vista en MySQL llamada high_earning_employees que seleccione todas las columnas de los empleados cuyo salario sea mayor a 70000.00.
Create or REPLACE view high_earning_employees AS Select * from employees emp where emp.salary > 70000.00

---


## Instrucciones para el Candidato:

- Responde cada pregunta de manera clara y concisa.
- Para las preguntas de código, asegúrate de que el código sea funcional, esté bien comentado y siga las buenas prácticas, patrones de diseño y PSR-12 de PHP.
- Estructura tu respuesta como si se tratara de un proyecto real.
- Crea un repositorio en GitHub con visibilidad pública y sube todas tus respuestas al repositorio.
- Incluye un archivo README.md en el repositorio que explique cómo ejecutar el proyecto y cualquier otra información relevante.
- Puedes utilizar cualquier recurso en línea para ayudarte a responder las preguntas, pero las respuestas deben ser comprensibles y reflejar tu propio conocimiento y habilidades.
- Envía el enlace al repositorio de GitHub antes de la fecha límite especificada.

¡Buena suerte!
