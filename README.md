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

El diseño de sistema presentado anteriormente funciona correctamente para la prueba realizada, el usuario ingresa a la aplicación ToDo la petición se manda
al servidor en donde primero verifica si se encuentra la clave almacenada en redis para hacer la consulta si no es asi, pasa a la base de datos en este 
caso PostGreSQL se guardan los datos en redis y se manda la respuesta correctamente, la ventaja es la siguiente:   

    *  Al tener redis como almacenamiento en cache las peticiones que se realizen despues seran muy rapidas y no tendran que llegar a la base de 
      datos y nos ahorramos el coste asociado que cuando son muchos datos el tiempo de respuesta tiene que ser eficiente.


## Instrucciones de uso por parte del usuario
El usuario podra realizar todas las operaciones necesarias para agregar, actualizar, eliminar, buscar las tareas
pendientes y tambien poder iniciar sesión.

<img width="634" alt="Screen Shot 2025-01-05 at 16 22 32" src="https://github.com/user-attachments/assets/4467fdc2-1cd9-4699-bbb8-238ddc637f63" />

### Cada usuario que ingrese se mostrara su nombre en la parte superior derecha para identificar su uso en la plataforma, al igual que podra registrarse sin problemas:

<img width="634" alt="Screen Shot 2025-01-05 at 16 24 19" src="https://github.com/user-attachments/assets/3f016f71-9fd5-45be-8e38-b14af509d323" />

### Tendra un vista principal con un menu lateral muy intuitivo en el cual tendra dos opciones una para agregar una tarea pendiente o para ver la lista de tareas pendientes como se muestra acontinuación:

<img width="634" alt="Screen Shot 2025-01-05 at 16 25 31" src="https://github.com/user-attachments/assets/497f07a1-c06e-468a-a15a-2e352e29ec6f" />

Al hacer click ya sea en el menu o en el boton agregar nueva tarea lo llevara a la vista de agregar tarea pendiente y realizar las operaciones ya mencionadas como tambien si se requiere marcar tarea pendiente como completada:

<img width="634" alt="Screen Shot 2025-01-05 at 16 26 05" src="https://github.com/user-attachments/assets/e42d948b-59d9-492f-9b87-c943633128b6" />

<img width="634" alt="Screen Shot 2025-01-05 at 16 26 50" src="https://github.com/user-attachments/assets/8db80a47-ca3f-4b07-a760-a59c44b8bde1" />


Por ultimo tenemos la vista de la lista de todas las tareas pendientes que tenemos con sus detalles aqui podra ver
el usuario cuales a completado y cuales no o los dias que tiene para cada una:

<img width="634" alt="Screen Shot 2025-01-05 at 16 39 58" src="https://github.com/user-attachments/assets/adbc4c8b-de9f-4ce0-9292-f12dd242cbf4" />

## Manejo de errores y validación de datos
El manejo de errores es fundamental para prevenir ejecuciones no deseadas, aqui se validan tanto los datos 
que llegan de la API REST con Spring boot y los que se envian desde el frontend empezando por validar los datos
en el formulario antes de realizar cualquier operacion como se muestra aqui:

<img width="1263" alt="Screen Shot 2025-01-05 at 16 50 46" src="https://github.com/user-attachments/assets/48b168af-4b1f-4d73-9567-35441400f8e1" />

<img width="1263" alt="Screen Shot 2025-01-05 at 16 51 42" src="https://github.com/user-attachments/assets/2aade0b1-ab48-440b-bc5c-a0be510b07f5" />


### Si la ruta no se encuentra o no es la correcta se tiene una vista que lo indique y se puede redireccionar a la vista principal: 

<img width="634" alt="Screen Shot 2025-01-05 at 16 42 42" src="https://github.com/user-attachments/assets/cc5027d0-d3ca-467a-8075-2a7217fc1c61" />

### Prevenir el eliminar una tarea pendiente erronea, indispensable cuando presionamos el boton eliminar por equivocación: 

<img width="1263" alt="Screen Shot 2025-01-05 at 16 52 18" src="https://github.com/user-attachments/assets/7bce0449-9864-47b6-88ad-896d40624e3a" />

## Funcionalidades a tomar en cuenta en un futuro
### Lista de tareas segun proceso o proyecto a realizar
* Esta funcionalidad nos permite agregar mas proyectos segun lo requiera ya sea en un equipo de trabajo o cualquier
tarea a realizar.

<img width="401" alt="Screen Shot 2025-01-05 at 16 43 59" src="https://github.com/user-attachments/assets/55dc0833-9ea5-4589-8f2e-3974f85cee1e" />

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
