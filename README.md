# Proyecto-electiva-be
 
Proyecto final 1er 50% Electiva II -Desarrollo web por parte de:
- Diego Alejandro Corredor Rojas - 202114825
- Freddy Esteban Ojeda Cogua - 201911519

## Descripción de la actividad

Tomar como base el proyecto realizado en EJS y convertirlo en un API Resful. Todos los requisitos funcionales se mantienen de forma estática, solamente que ahora se va a realizar
todas las peticiones a un servidor corriendo en un equipo y el cliente será otro equipo y el acceso se realizará via internet.

## Herramientas y tecnologias utilizadas

- NodeJS
- Angular
- Cors
- Path
- Express
- Nodemon
- Ngrok

## Instalación del servidor Backend
Una vez realizada la clonación del repositorio, lo primero será instalar todas las dependencias, para ello inicie una terminal y escriba
```
npm i express path cors
```
En seguida, instalaremos Nodemon para mantener persistente el servidor
```
npm i --save-dev nodemon
```

Dirijase a _Package.json_ y en la linea 6 reemplaze "Scripts" por lo siguiente
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index"
  }
```

Terminados estos 2 pasos, podemos inicar el servidor
```
npm start
```

## Puertos y sockets usados

Para acceder se debe primero hacer uso de Ngrok. Descargar la herramienta y en la consola de la misma escribir lo siguiente luego de haber iniciado el servidor con el ultimo comando mencionado
```
ngrok.exe http 4000
```

en seguida la herramienta entregara un link como el siguiente _https://af97-132-255-20-66.ngrok.io_ que cambia cada vez que se realiza un despliegue, debe cambiarlo en la URL del frontend en donde hace las peticiones de API.

Para descargar Ngrok vaya a (https://ngrok.com/download)