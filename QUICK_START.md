# 🚀 Quick Start - Kesherat Landing Page

## ⚡ Inicio Rápido

### 1. Ejecutar Localmente

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5173/**

### 2. Compilar para Producción

```bash
npm run build
```

Esto crea una carpeta `dist/` lista para desplegar.

### 3. Desplegar en Netlify

#### Opción A: Automático (Recomendado)

1. Sube tu código a GitHub
2. Ve a [Netlify.com](https://netlify.com)
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio
5. ¡Listo! Netlify se encargará del resto

#### Opción B: Manual

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 📋 Checklist de Despliegue

- [ ] Crear repositorio en GitHub
- [ ] Hacer push del código a GitHub
- [ ] Conectar GitHub a Netlify
- [ ] Verificar que el build es exitoso
- [ ] Acceder a tu sitio en Netlify

## 🎨 Personalizar

### Cambiar Contenido
Edita los archivos en `src/components/`:
- `Hero.jsx` - Sección principal
- `Problems.jsx` - Problemas
- `Solution.jsx` - Solución
- `Features.jsx` - Características
- `CTA.jsx` - Llamada a la acción
- `Footer.jsx` - Pie de página

### Cambiar Colores
Edita `src/App.css` y busca `:root`:
```css
:root {
  --primary-color: #1e3a5f;      /* Azul oscuro */
  --secondary-color: #2d5a8c;    /* Azul */
  --accent-color: #7ec850;       /* Verde */
}
```

### Cambiar Título
Edita `index.html`:
```html
<title>Kesherat - Agentic Agriculture</title>
```

## 📁 Estructura Importante

```
src/
├── components/          # Componentes de React
├── App.jsx             # Componente principal
├── App.css             # Estilos principales
└── main.jsx            # Punto de entrada
```

## 🔗 Enlaces Útiles

| Recurso | URL |
|---------|-----|
| Desarrollo Local | http://localhost:5173/ |
| GitHub | https://github.com |
| Netlify | https://netlify.com |
| React Docs | https://react.dev |
| Vite Docs | https://vitejs.dev |

## 💡 Tips

- **Hot Reload**: Los cambios se reflejan automáticamente en desarrollo
- **Build Rápido**: Vite es muy rápido, espera menos de 1 segundo
- **Responsive**: La página se adapta automáticamente a cualquier tamaño
- **SEO Ready**: Puedes agregar meta tags en `index.html`

## ❓ Problemas Comunes

### "npm: command not found"
Instala Node.js desde https://nodejs.org/

### "Port 5173 already in use"
```bash
npm run dev -- --port 3000
```

### Build falla en Netlify
Verifica que `npm run build` funciona localmente primero.

## 📞 Soporte

Consulta los archivos:
- `README.md` - Documentación completa
- `DEPLOYMENT.md` - Guía de despliegue detallada
- `SETUP_COMPLETE.md` - Resumen del setup

---

**¡Listo para desplegar! 🎉**

