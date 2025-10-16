# Kesherat Landing Page

Una landing page moderna para Kesherat - "Paving the way into agentic agriculture"

## Descripción

Esta es una landing page profesional que presenta la solución de Kesherat para la agricultura inteligente. Incluye:

- **Hero Section**: Presentación principal con tagline
- **Problems Section**: Tres problemas principales en la agricultura
- **Solution Section**: Presentación de Kesherat-Link como solución
- **Features Section**: Características principales de la plataforma
- **CTA Section**: Llamada a la acción
- **Footer**: Información de contacto y enlaces

## Tecnologías

- **React 18**: Framework de UI
- **Vite**: Build tool y dev server
- **CSS3**: Estilos modernos y responsive

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de la compilación
npm run preview
```

## Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal
├── App.css              # Estilos de la aplicación
├── main.js              # Punto de entrada
├── style.css            # Estilos globales
└── components/
    ├── Hero.jsx         # Sección hero
    ├── Problems.jsx     # Sección de problemas
    ├── Solution.jsx     # Sección de solución
    ├── Features.jsx     # Sección de características
    ├── CTA.jsx          # Llamada a la acción
    └── Footer.jsx       # Pie de página
```

## Despliegue en Netlify

### Opción 1: Conectar desde GitHub

1. Sube el proyecto a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio
5. Netlify detectará automáticamente la configuración de `netlify.toml`
6. Haz clic en "Deploy"

### Opción 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Compilar el proyecto
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## Configuración de GitHub

1. Inicializa un repositorio Git:
```bash
git init
git add .
git commit -m "Initial commit: Kesherat landing page"
```

2. Crea un repositorio en GitHub

3. Conecta tu repositorio local:
```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git branch -M main
git push -u origin main
```

## Personalización

### Colores
Los colores principales están definidos en `src/App.css` en las variables CSS:
- `--primary-color`: #1e3a5f (azul oscuro)
- `--secondary-color`: #2d5a8c (azul)
- `--accent-color`: #7ec850 (verde)

### Contenido
Edita los componentes en `src/components/` para cambiar el contenido de cada sección.

## Responsive Design

La landing page es completamente responsive y se adapta a:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Desktops (1200px+)

## Licencia

MIT

## Contacto

Para más información sobre Kesherat, visita [kesherat.com](https://kesherat.com)

