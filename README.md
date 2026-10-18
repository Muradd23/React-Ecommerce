# Tienda en línea

Proyecto de comercio electrónico con una interfaz desarrollada en React y una API REST en Node.js y Express. Permite explorar productos, administrar el carrito, elegir opciones de entrega, crear pedidos y consultar su seguimiento.

## Tecnologías

- **Frontend:** React 19, Vite, React Router y Axios.
- **Backend:** Node.js, Express y Sequelize.
- **Base de datos:** SQLite por defecto; también admite configuración para MySQL o PostgreSQL.

## Requisitos

- Node.js 22 o superior.
- npm.

## Instalación y ejecución

El frontend y el backend se ejecutan por separado. Abre dos terminales desde la raíz del proyecto.

### Backend

```bash
cd ecommerce-backend
npm install
npm run dev
```

La API estará disponible en `http://localhost:3000`.

### Frontend

```bash
cd ecommerce-frontend
npm install
npm run dev
```

Abre en el navegador la dirección local que Vite indique en la terminal. Durante el desarrollo, Vite redirige las solicitudes a `/api` y `/images` al backend en el puerto `3000`.

## Funcionalidades

- Catálogo de productos y búsqueda.
- Carrito de compras con edición de cantidades.
- Opciones de entrega por producto.
- Resumen de pago con subtotal, envío, impuestos y total.
- Creación y consulta de pedidos.
- Seguimiento de productos de un pedido.

## API

La API incluye rutas para productos, opciones de entrega, artículos del carrito, pedidos, resumen de pago y restablecimiento de datos. Consulta la documentación de rutas y respuestas en [`ecommerce-backend/documentation.md`](ecommerce-backend/documentation.md).

## Estructura del proyecto

- `ecommerce-frontend/`: aplicación React y páginas de inicio, checkout, pedidos y seguimiento.
- `ecommerce-backend/`: servidor Express, modelos, rutas, imágenes y datos iniciales.

