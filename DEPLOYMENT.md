# Guía de Despliegue: GitHub + Netlify

## Paso 1: Crear un Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en el icono "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Completa los detalles:
   - **Repository name**: `laningpage-kesherat` (o el nombre que prefieras)
   - **Description**: "Landing page for Kesherat - Agentic Agriculture"
   - **Visibility**: Public (para que Netlify pueda acceder)
   - **Initialize this repository with**: No selecciones nada (ya tenemos archivos locales)
5. Haz clic en "Create repository"

## Paso 2: Conectar tu Repositorio Local a GitHub

En tu terminal, ejecuta los siguientes comandos:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USUARIO/laningpage-kesherat.git

# Cambiar el nombre de la rama a 'main' (si es necesario)
git branch -M main

# Hacer push del código a GitHub
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

## Paso 3: Desplegar en Netlify

### Opción A: Despliegue Automático (Recomendado)

1. Ve a [Netlify.com](https://netlify.com)
2. Haz clic en "Sign up" o "Log in"
3. Selecciona "GitHub" como proveedor de autenticación
4. Autoriza a Netlify para acceder a tus repositorios
5. Haz clic en "New site from Git"
6. Selecciona tu repositorio `laningpage-kesherat`
7. Netlify detectará automáticamente:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Estos valores están configurados en `netlify.toml`
8. Haz clic en "Deploy site"

### Opción B: Despliegue Manual

Si prefieres desplegar manualmente:

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Compilar el proyecto
npm run build

# Desplegar
netlify deploy --prod --dir=dist
```

## Paso 4: Configurar Dominio Personalizado (Opcional)

1. En el panel de Netlify, ve a "Site settings"
2. Haz clic en "Domain management"
3. Haz clic en "Add custom domain"
4. Ingresa tu dominio personalizado
5. Sigue las instrucciones para configurar los DNS

## Paso 5: Configurar Variables de Entorno (Si es necesario)

1. En el panel de Netlify, ve a "Site settings"
2. Haz clic en "Build & deploy"
3. Haz clic en "Environment"
4. Agrega las variables de entorno necesarias

## Flujo de Trabajo Continuo

Después de configurar todo, el flujo es muy simple:

1. Haz cambios en tu código local
2. Haz commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. Netlify detectará automáticamente los cambios y desplegará la nueva versión

## Verificar el Despliegue

- Tu sitio estará disponible en: `https://[nombre-del-sitio].netlify.app`
- Puedes cambiar el nombre del sitio en Netlify > Site settings > General > Site details

## Solución de Problemas

### El build falla en Netlify
- Verifica que `npm run build` funciona localmente
- Revisa los logs en Netlify > Deploys > [último deploy] > Deploy log

### La página no se carga correctamente
- Asegúrate de que `netlify.toml` está configurado correctamente
- Verifica que el archivo `dist/index.html` existe después de compilar

### Los cambios no se reflejan
- Espera a que Netlify termine de desplegar (puedes ver el estado en el panel)
- Limpia el caché del navegador (Ctrl+Shift+Delete)

## Comandos Útiles

```bash
# Ver el estado del repositorio
git status

# Ver el historial de commits
git log

# Ver las ramas disponibles
git branch -a

# Cambiar a una rama diferente
git checkout nombre-rama

# Crear una nueva rama
git checkout -b nombre-nueva-rama
```

## Recursos Útiles

- [Documentación de Netlify](https://docs.netlify.com/)
- [Documentación de GitHub](https://docs.github.com/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)

¡Tu landing page está lista para ser desplegada! 🚀

