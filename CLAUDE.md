@AGENTS.md

## Comentarios

- Por defecto, sin comentarios.
- Excepción: un porqué no evidente.
- Formato: JSDoc en español (`#` en YAML).

## Convenciones

### Estructura

- Features: `features/<feature>/`, nombradas por la lógica de negocio que resuelven.
- Carpetas de una feature: `hooks/`, `actions/` (mutaciones), `queries/` (lecturas), `components/`, `types/`, `constants/`.
- Compartido: `components/ui/` (shadcn) y `lib/` (utilidades).
- `app/`: solo rutas; las páginas componen lo que exponen las features.
- Imports entre features: solo mediante `features/<feature>/index.ts`.

### Nombres

- Idioma: código en inglés; texto visible para el usuario en español.
- Archivos y carpetas: `kebab-case`, sin sufijos con punto (`use-cart.ts`, no `cart.hook.ts`).
- Archivo igual a su export: `create-sale.ts` exporta `createSale`.
- Funciones: `camelCase`, empiezan con verbo (`calculateTotal`).
- Variables: `camelCase`.
- Booleanos: prefijo `is`, `has` o `can` (`isPaid`).
- Hooks: prefijo `use` (`useCart`).
- Handlers: `handle` en la función, `on` en la prop (`handleSubmit`, `onSubmit`).
- Tipos y componentes React: `PascalCase`.
- Constantes de módulo: `UPPER_SNAKE_CASE`; las locales van en `camelCase`.
- Sin abreviaturas: `quantity`, no `qty`.

### Código

- Exports con nombre, salvo donde Next.js exige `default` (`page.tsx`, `layout.tsx`).
- Tipos: `type` por defecto, sin prefijos (`Product`, no `IProduct`).
- Dinero: centavos enteros (`totalInCents`); formatear solo al mostrar.
- Componentes: Server Components por defecto; `"use client"` solo en archivos con interactividad o APIs del navegador.

### Glosario

- Venta: `sale`.
- Corte de caja: `cashClosing`.

### Commits

- Mensajes en español.
- Un commit por contexto: incluye solo los archivos de ese contexto, aunque sea uno.
- Cada feature nueva se agrega a `scopes` en `commitlint.config.ts`.
