# Epilef Rodriguez - MobyDev #
**Technical test for MobiDev Job Appliance**
_________________________________________________________________________________

Dado un proyecto previo con templates y un servicio API, usted creará una aplicación web de tipo Blog, utilice las herramientas necesarias (Librerías, Frameworks, etc) que necesite para llevar a cabo el proyecto, usted hará entrega del proyecto en el formato que desee (.zip, Repositorio, etc), adicional a esto tome en cuenta realizar la documentación del mismo.

Basado en el [template](http://startbootstrap.com/template-overviews/clean-blog)
Utilizando el siguiente [API](http://jsonplaceholder.typicode.com)

### **Configuración del Entorno de Desarrollo:** ###

1. Descargar el código fuente del repositorio. Mediante el siguiente comando:

	```bash
	$ git clone https://github.com/Khanos/MobyDev.git
	$ cd MobyDev
	$ git checkout development
	$ git status
	```  
	> **Nota:** Internamente pueden crear los branch necesarios en dependencia de la funcionalidad y luego se hará *merge* hacia la rama **development**. Para reemplazar todo el contenido local con lo ultimo del repositorio gitlab se deben ejecutar el siguiente comando:
	```bash
	$ git fetch --all
	$ git reset --hard origin/development
	```
	
2. Instalar el IDE [Sublime Text](https://www.sublimetext.com/) o algun otro de su preferencia.

	> **Nota:** Para esta instalación se utilizará Sublime Text, asi que instalalo deja la flojera.

3. Luego procedemos a la instalación y configuración del entorno de desarrollo.

#### **FrontEnd** ####

Debemos tener previamente instalado el paquete **NodeJs** en su versión *v5.6.0 Estable*. Para más información de como instalarlo seguir esta [guia](https://nodejs.org/en/download/). 

> **Nota:** Para la instalación del paquete node y las dependencias del proyectos para el sistema operativo Debian Jessie es recomendable descargar el código fuente de NodeJs y configurarlo, compilarlo e instalarlo manualmente.

```bash
$ cd MobyDev/
$ npm install
$ subl .
$ grunt
``` 
Se debe mostrar el mensaje en consola de que el servidor esta corriendo en el puerto 3000 o en algún puerto libre del sistema. Para interactuar con la apiRest del servidor debemos utilizar la herramienta [postman](https://www.getpostman.com/) para hacer peticiones al servidor sin necesidad del navegador.