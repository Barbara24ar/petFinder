# 🐾 Pet Finder - Plataforma de Adopción

## Índice

* [1. Resumen del Proyecto](#1-resumen-del-proyecto)
* [2. Diseño y Proceso Centrado en la Usuaria](#2-diseño-y-proceso-centrado-en-la-usuaria)
* [3. Funcionalidades Implementadas](#3-funcionalidades-implementadas)
* [4. Generación de Datos con IA](#4-generación-de-datos-con-ia)
* [5. Stack Tecnológico](#5-stack-tecnológico)
* [6. Pruebas Unitarias](#6-pruebas-unitarias)
* [7. Despliegue](#7-despliegue)
* [8. Agradecimientos y Colaboración](#8-agradecimientos-y-colaboración)

---

## 1. Resumen del Proyecto

**Pet Finder** es una página web interactiva diseñada para conectar a perros en busca de un hogar con personas y familias interesadas en adoptar una mascota. Conscientes de la necesidad de facilitar este proceso, nuestra plataforma presenta de manera amigable y accesible la información de cada perrito, permitiendo a los futuros dueños encontrar al compañero ideal según sus preferencias y estilo de vida.

El proyecto busca resolver la brecha informativa en el proceso de adopción, centralizando los perfiles de los animales y ofreciendo herramientas de búsqueda y filtrado que hacen la experiencia más sencilla, eficiente y emotiva.

<div align="center">
  <img src="https://github.com/user-attachments/assets/eb6e61a0-94d4-416d-9a13-8753129455e9" alt="Screenshot del proyecto Adopta un Amigo" width="700"/>
</div>


---

## 2. Diseño y Proceso Centrado en la Usuaria

### Usuaria Objetivo

Nuestra plataforma está pensada para **personas o familias con un interés genuino en la adopción de animales**. Son usuarios que valoran tener información clara y detallada para tomar una decisión responsable. Buscan un proceso transparente y la posibilidad de filtrar candidatos según sus condiciones de vida, como el tamaño de su hogar o la composición de su familia.

### Historias de Usuario

Basamos nuestro desarrollo en las siguientes necesidades clave:

* **Como futura dueña,** quiero poder ver a todos los perritos disponibles en un solo lugar.
* **Como usuaria,** quiero filtrar los perritos por género y tamaño para encontrar uno que se ajuste a mi hogar.
* **Como adoptante,** quiero poder ordenar los resultados alfabéticamente para revisar la lista de manera organizada.
* **Como persona interesada,** quiero una forma fácil de contactar a la organización para iniciar el proceso de adopción.
* **Como simpatizante de la causa,** quiero encontrar una opción para donar y apoyar el cuidado de los animales.

---

## 3. Funcionalidades Implementadas

La interfaz web permite a la usuaria realizar las siguientes acciones:

* **Visualización de Datos:** Los perfiles de los perritos se muestran en formato de tarjetas individuales, cada una con una foto, nombre y descripción para una rápida visualización.
* **Filtrado Múltiple:** En la sección "I want to see...", la usuaria puede filtrar a los perritos por:
    * Género (Macho / Hembra).
    * Tamaño (Pequeño / Mediano / Grande).
* **Ordenamiento:** Se pueden ordenar los resultados de la A-Z y de la Z-A, operando sobre la data ya filtrada.
* **Sobre nosotros:** una pequeña descripción con video para que puedan saber un poco mas acerca de Pet Finder.
* **Limpieza de Filtros:** Un botón "Clear" permite a la usuaria reiniciar su búsqueda y volver a ver todos los perfiles sin recargar la página.
* **Sección de Contacto:** Un botón dedicado que dirige a los usuarios a las vías de comunicación para iniciar el proceso de adopción.
* **Sección de Donación:** Un acceso para que quienes deseen apoyar económicamente a la causa puedan hacerlo.

---

## 4. Generación de Datos con IA

Para nutrir nuestra plataforma, se generó un `dataset` personalizado con perfiles de 24 perritos. Utilizamos **ChatGPT** para crear la información de cada uno, asegurando que cada perfil contara con los siguientes campos: `id`, `name`, `shortDescription`, `description`, `gender` y `size` en formato Json. Usamos un buen prompt para poder obtener un bue output por parte de la IA y reiterando sobre la entrega para poder llegar al resultado esperado del input.

---

## 5. Stack Tecnológico

El proyecto fue desarrollado utilizando tecnologías web fundamentales, sin el uso de librerías o frameworks externos para la lógica principal:

* **HTML5:** Para la estructura semántica del contenido.
* **CSS3:** Para el diseño, la presentación y la responsividad (Flexbox).
* **JavaScript (ES6):** Para toda la lógica, interactividad del DOM, filtrado, ordenamiento y manipulación de datos.

---

## 6. Pruebas Unitarias

Para garantizar la calidad y el correcto funcionamiento de la lógica de negocio (filtrado, ordenamiento), se implementaron **pruebas unitarias** utilizando el framework [Jest](https://jestjs.io/). Esto nos permitió verificar que las funciones del archivo `dataFunctions.js` se comportaran como se esperaba ante distintos escenarios.

---

## 7. Despliegue

La aplicación está completamente funcional y ha sido desplegada a través de **GitHub Pages**.

**Puedes visitar el proyecto en vivo aquí: [Pet Finder](https://barbara24ar.github.io/DEV015-dataverse/)**

---

## 8. Agradecimientos y Colaboración

Este proyecto fue desarrollado en dupla, fomentando el trabajo en equipo, la comunicación y la colaboración remota.

* **Bárbara** - Perú
* **Yesenia** - Colombia

Fue una experiencia de aprendizaje increíble donde pudimos combinar nuestras habilidades para crear un producto del que estamos muy orgullosas.
