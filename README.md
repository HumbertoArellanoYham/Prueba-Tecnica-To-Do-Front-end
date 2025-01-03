 <h1 align="center"> Aplicación ToDo que permite a los usuarios crear y administrar tareas pendientes </h1>

 ## Frontend basado en componentes: Tecnologías utilizadas
  * Angular 17
  * TypeScript
  * Material Design
  * Html y Css

## ¿Por qué basado en componentes?
Por la escalabilidad, al estructurar el desarrollo en componentes o en funcionalidades nos permite seguir 
con el desarrollo de manera que si despues que es una gran idea agregar las tareas seleccionando la categoria
se podria hacer sin problema.
  Estructura:
  
    * app
      * user
          * administrar-tarea
          * crear-tarea
          * dialog-confirm
          * pagina404
          * login
      * core
          * interfaces
              * tareas
              * user-login
          * services
              * task-service
              * user-session
              * user-login
    
## Resolución de una problematica
Esta prueba fue fundamental para no solo demostrar habilidades tecnicas si no tambien para resolver la
necesidad que se tiene cuando se quiere estructurar una serie de tareas para lograr un objetivo en especifico.

En mi caso siempre me he encontrado con la problematica de que cuando quiero realizar un proyecto de software
las aplicaciones siempre son o muy complejas o no me sirven para lo que nesesito, que es de manera simple
dividir mi proyecto en una serie de pasos y lo mas importante establecer la fecha que inicio, la fecha de fin
y establecer los dias que tengo para esa funcionalidad en especifico.

  * Tarea Activa: 27/12/24
  * Finalizar Tarea: 28/12/24
  * Tiempo para completar la tarea: 1 dia

## Diseño de sistema: proceso para definir la arquitectura

<img width="890" alt="Screen Shot 2025-01-03 at 19 11 39" src="https://github.com/user-attachments/assets/d5f055cd-f1c8-40bb-89a7-23883471877c" />


## Instrucciones de uso por parte del usuario
El usuario podra realizar todas las operaciones necesarias para agregar, actualizar, eliminar, buscar las tareas
pendientes y tambien poder iniciar sesión.

<img width="1262" alt="Screen Shot 2024-12-29 at 3 05 55" src="https://github.com/user-attachments/assets/92598ecd-3dc2-4926-a39a-5928717ee239" />

Cada usuario que ingrese se mostrara su nombre en la parte superior derecha para identificar su uso en la plataforma:

<img width="1264" alt="Screen Shot 2024-12-29 at 17 14 21" src="https://github.com/user-attachments/assets/9d9a05f8-51a5-461e-8159-a82fb304cbf2" />

Tendra un vista principal con un menu lateral muy intuitivo en el cual tendra dos opciones una para agregar una 
tarea pendiente o para ver la lista de tareas pendientes como se muestra acontinuación:

<img width="1266" alt="Screen Shot 2024-12-27 at 2 22 14" src="https://github.com/user-attachments/assets/02b630f8-0e38-4754-9412-c086bc851e6e" />

Al hacer click ya sea en el menu o en el boton agregar nueva tarea lo llevara a la vista de agregar tarea pendiente 
y realizar las operaciones ya mencionadas como tambien si se requiere marcar tarea pendiente como completada:

<img width="1266" alt="Screen Shot 2024-12-27 at 2 25 08" src="https://github.com/user-attachments/assets/25bcc34e-666e-4951-8e2e-d4c71f14fe30" />

<img width="1266" alt="Screen Shot 2024-12-27 at 2 26 41" src="https://github.com/user-attachments/assets/17cc7141-2faa-4d65-9646-a847f3840a3c" />

Por ultimo tenemos la vista de la lista de todas las tareas pendientes que tenemos con sus detalles aqui podra ver
el usuario cuales a completado y cuales no o los dias que tiene para cada una:

<img width="1266" alt="Screen Shot 2024-12-27 at 2 30 48" src="https://github.com/user-attachments/assets/392585e9-7db0-4b52-bf58-fa82504a3ec1" />

## Manejo de errores y validación de datos
El manejo de errores es fundamental para prevenir ejecuciones no deseadas, aqui se validan tanto los datos 
que llegan de la API REST con Spring boot y los que se envian desde el frontend empezando por validar los datos
en el formulario antes de realizar cualquier operacion como se muestra aqui:

<img width="762" alt="Screen Shot 2024-12-27 at 2 37 10" src="https://github.com/user-attachments/assets/7fbe52dd-5781-466a-9ff8-9126f94d5d3a" />

<img width="762" alt="Screen Shot 2024-12-27 at 2 37 38" src="https://github.com/user-attachments/assets/392c2b9e-efb2-4f58-be67-2eabe4a1de72" />

Si la ruta no se encuentra o no es la correcta se tiene una vista que lo indique y se puede redireccionar a la vista principal: 

<img width="1262" alt="Screen Shot 2024-12-29 at 1 29 26" src="https://github.com/user-attachments/assets/803c7ade-0897-49e0-aed9-0e9784b8c075" />

Prevenir el eliminar una tarea pendiente erronea, indispensable cuando presionamos el boton eliminar por equivocación: 

<img width="1262" alt="Screen Shot 2024-12-29 at 3 11 51" src="https://github.com/user-attachments/assets/0ddd90c9-dd5a-4682-b9f4-5d3222926be4" />


## Funcionalidades a tomar en cuenta en un futuro
## Lista de tareas segun proceso o proyecto a realizar
* Esta funcionalidad nos permite agregar mas proyectos segun lo requiera ya sea en un equipo de trabajo o cualquier
tarea a realizar.

## Despliegue en AWS
* Dentro de la nube de amazon web services nos proporciona diferentes servicios para desplegar como lo son:
     * Bucket S3: para Angular
     * Elastic BeanStalk: Java - Spring boot - API REST
     * RDS: para la base de datos
  
Sin embargo se tiene que tomar en cuenta el costo asociado

## Diagrama casos de uso inicial

![Screen Shot 2024-12-27 at 2 49 25](https://github.com/user-attachments/assets/f19fdf2a-5552-4e2b-b453-8a8cdf29822b)

## Borrador vista inicial

![Screen Shot 2024-12-27 at 2 50 13](https://github.com/user-attachments/assets/285f4489-57a9-4850-a5ad-4a4c40598b88)

## Modelo de datos simple

![Screen Shot 2024-12-27 at 2 50 46](https://github.com/user-attachments/assets/590c161a-a580-4afa-b8ae-09b06ccdd181)

## Instrucciones sobre cómo ejecutar el frontend localmente
1.- Clonar el desarrollo
  * git clone https://github.com/HumbertoArellanoYham/Prueba-Tecnica-To-Do-Front-end

  Clonara el proyecto en una carpeta

2.- Abrir la carpeta en visual studio code se requiere instalar:
  * Node
  * Angular
  * TypeScript

  Node si se tiene que instalar desde la terminal es realmente sencillo.
  Angular y TypeScript solo buscando las extensiones en visual studio code

3.- Para terminar abrir terminal en el proyecto y ejecutar el comando:
  *  ng serve

Listo ahora se esta ejecutando el proyecto localmente en el puerto 4200, pero esto es solo el frontend, 
para el backend se ocupa el IDE Intellij idea se puede descargar desde la pagina oficial de manera community(se detallara mas 
en profundidad en el readme de la API REST de Spring Boot).
