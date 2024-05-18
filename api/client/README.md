# Prueba Técnica I+D Team - CRUD de Usuarios en React

### API

Se hace entrega del proyecto con alta, baja y modificacion de usuarios. 

#### Organizacion del proyecto

src

- app `Carpeta destinada a la creacion del store usando @reduxjs/toolkit`

- component `Carpeta destinada a todos los componentes`
-- Button `Se crea un componete boton para manejar el compoentamiento de edicion y eliminacion de usuarios`
-- Layout `Componente reutilizable que renderiza navbar y opciones de filtrado junto al boton de agregar usuario`
-- Modals `Contiene el modalCompoent que maneja la logica de agregar y editar usuario, y tambien modalDelete para eliminar un usuario`
-- navbar `Contiene el compoente NavBar`
-- options `Componente que maneja la logica del filtrado y renderiza el modal de agregar usuario`
-- TableUsers `Tabla para mostrar los datos del usuario`

- features
-- modal `reducer modal create, update y delete user`
-- users `reducer usuarios`

- hooks `Se crea un hook personalizado el cual usa axios para realizar una peticion ya sea get, put, post o delete y guarda el resultado dentro del estado tanto para el try como el catch, ademas se crea una loading para el manejo de la demora`

#### Aclaraciones:
- Se utilizaron las validaciones de formulario proporcionadas por la librería Ant Design para asegurar que los campos cumplan con los requisitos especificados. 
- Para la generación de identificadores únicos de los registros de los usuarios, se utilizó la librería uuid.

### Autor
- [Lisandro Córdoba](https://www.linkedin.com/in/lisandrocordoba/)