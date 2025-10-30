/tarea-tienda
│
├── package.json
├── index.js →instancia de Express y carga de rutas
│
├── /src
│ ├── /config → configuración general (DB, variables, etc.)
│ ├── /controllers → lógica de control, recibe req/res
│ ├── /models → estructura de datos o conexión BD en este caso no se usa por que es json
│ ├── /routes → rutas organizadas por módulo
│ ├── /services → lógica de negocio (procesos)
│ ├── /middlewares → validaciones, autenticación, etc.
│ ├── /utils → helpers o funciones reutilizables
