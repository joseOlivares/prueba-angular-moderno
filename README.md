# Prueba práctica de Angular

Pequeña aplicación hecha con Angular 22. Muestra una lista de recetas obtenida de [dummyjson](https://dummyjson.com/recipes?limit=20&select=name,caloriesPerServing), permite buscarlas por nombre, marcarlas como favoritas y añadirlas a un menú que muestra el número de recetas y las calorías totales.

## Requisitos

- Node.js 22.22 o superior (o 24.15 o superior)
- npm

## Cómo arrancar

```bash
npm install
npm start
```

Abre la URL que muestra la terminal (por defecto `http://localhost:4200`).

## Estructura

```
src/app/
  app.ts, app.html, app.scss          Componente raíz
  models/recipe.ts                    Tipos de datos
  services/recipe-api.ts              Acceso a la API de recetas
  services/menu-store.ts              Estado del menú
  recipes/recipe-list/                Buscador y lista de recetas
  recipes/recipe-card/                Tarjeta de una receta
  menu/menu-summary/                  Resumen del menú
```

## Antes de la entrevista

Ten el proyecto instalado y arrancado antes de que empiece la sesión, con el editor y las herramientas de desarrollo del navegador a mano.

## Durante la entrevista

Se te pedirá revisar y mejorar el código de `src/app`, explicando en voz alta lo que haces. Las instrucciones concretas se darán al inicio de la sesión.
