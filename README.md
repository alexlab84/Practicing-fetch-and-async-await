# 📝 React User Management App

## 📋 Descripción

Esta es una pequeña aplicación de **React** creada como proyecto de práctica para demostrar el uso de **fetch**, **async/await**, y la interacción con una API REST para realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar). La aplicación utiliza la API de prueba de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener y gestionar datos de usuarios.

## 🚀 Funcionalidades

- **Listar usuarios:** Visualiza una lista de usuarios obtenidos desde la API.
- **Crear usuario:** Permite agregar un nuevo usuario (simulado con la API de prueba).
- **Actualizar usuario:** Edita los datos de un usuario existente.
- **Eliminar usuario:** Elimina un usuario por su ID.

## 🛠️ Tecnologías Utilizadas

- **React** con Vite (creado usando `JavaScript + SWC`).
- **fetch** para realizar solicitudes HTTP a la API.
- **Hooks** de React (`useState` y `useEffect`) para manejar el estado y los efectos secundarios.

## 🧩 Componentes

### 1. `Users.jsx`

Muestra una lista de usuarios obtenidos desde la API. Utiliza `fetch` y `useEffect` para hacer una solicitud GET y actualizar el estado con los datos de los usuarios.

- **Método HTTP:** `GET`

### 2. `CreateUser.jsx`

Formulario para crear un nuevo usuario. Envía los datos del usuario a la API usando una solicitud POST.

- **Método HTTP:** `POST`
- **Datos enviados:** Nombre y correo electrónico

### 3. `UpdateUser.jsx`

Formulario para actualizar los datos de un usuario existente. Realiza una solicitud PUT para modificar los datos del usuario.

- **Método HTTP:** `PUT`
- **Datos enviados:** ID de usuario, nombre y correo electrónico

### 4. `DeleteUser.jsx`

Formulario simple para eliminar un usuario por su ID. Realiza una solicitud DELETE para eliminar el usuario.

- **Método HTTP:** `DELETE`
- **Datos enviados:** ID de usuario

## 🛣️ API Utilizada

Esta aplicación utiliza la API de prueba [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Es una API pública gratuita que simula datos de usuarios para pruebas de desarrollo.

- **URL base:** `https://jsonplaceholder.typicode.com/users`
- **Endpoints utilizados:**
  - `GET /users`: Obtener todos los usuarios
  - `POST /users`: Crear un nuevo usuario
  - `PUT /users/:id`: Actualizar un usuario existente
  - `DELETE /users/:id`: Eliminar un usuario

## 🤔 Posibles Mejoras

- Añadir manejo de errores más robusto y validación de formularios.
- Incluir estilos y diseño utilizando CSS o una librería como TailwindCSS o Bootstrap.
- Implementar funcionalidades adicionales como paginación o búsqueda de usuarios.

## 💬 Comentarios Finales

Este proyecto es una demostración simple pero efectiva del uso de **React** y la interacción con una API REST. Muestra una aplicación práctica con funcionalidades CRUD que pueden ampliarse fácilmente para adaptarse a proyectos más complejos.

