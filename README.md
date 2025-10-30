💡 GitHub detecta el bloque de código y lo muestra con formato tipo árbol, **respetando los saltos y símbolos**.

---

### Opción 2: usar una lista Markdown

Si preferís texto más descriptivo:

```markdown
## Estructura del proyecto

- **package.json** → configuración de dependencias y scripts
- **index.js** → instancia de Express y carga de rutas
- **src/**
  - **config/** → configuración general (DB, variables, etc.)
  - **controllers/** → lógica de control (maneja req/res)
  - **models/** → estructura de datos o conexión BD (JSON)
  - **routes/** → rutas organizadas por módulo
  - **services/** → lógica de negocio (procesos)
  - **middlewares/** → validaciones, autenticación, etc.
  - **utils/** → helpers o funciones reutilizables
```
