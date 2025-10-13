# Estructura de Imágenes

Este directorio contiene todas las imágenes de la aplicación organizadas por categorías.

## 📁 Estructura de carpetas

```
img/
├── nav/                    # Iconos de navegación del menú principal
│   ├── icon-trabajadores.png
│   ├── icon-servicios.png
│   └── icon-antesYDespues.png
│
├── servicios/              # Iconos de servicios dentales
│   ├── icon-limpieza.png
│   ├── icon-blanqueamiento.png
│   ├── icon-ortodoncia.png
│   ├── icon-implantes.png
│   ├── icon-endodoncia.png
│   ├── icon-periodoncia.png
│   ├── icon-protesis.png
│   ├── icon-urgencias.png
│   ├── icon-radiografias.png
│   ├── icon-revisiones.png
│   ├── icon-extracciones.png
│   └── icon-carillas.png
│
├── trabajadores/           # Fotos de trabajadores/doctores
│   ├── doctor1.png
│   ├── doctor2.png
│   └── doctor3.png
│
├── antesydespues/          # Imágenes de casos antes/después
│   ├── antes1.png
│   ├── despues1.png
│   ├── antes2.png
│   ├── despues2.png
│   ├── antes3.png
│   └── despues3.png
│
└── home/                   # Imágenes de la página principal
    └── hero-background.png
```

## 🎯 Uso de las imágenes

### Navegación
```javascript
icon: '/src/assets/img/nav/icon-trabajadores.png'
```

### Servicios
```javascript
icono: '/src/assets/img/servicios/icon-limpieza.png'
```

### Trabajadores
```javascript
imagen: '/src/assets/img/trabajadores/doctor1.png'
```

### Antes y Después
```javascript
antes: '/src/assets/img/antesydespues/antes1.png'
despues: '/src/assets/img/antesydespues/despues1.png'
```

### Hero Section
```scss
background-image: url("/src/assets/img/home/hero-background.png");
```

## 📝 Notas

- Todas las rutas son absolutas desde `/src/assets/img/`
- Las imágenes se organizan por funcionalidad
- Los nombres de archivo deben ser descriptivos y en minúsculas
- Usar formato PNG para iconos y fotos con transparencia
- Usar formato JPG/WebP para fotos de fondo y trabajadores (mejor compresión)

## 🔄 Migración desde la API

Cuando la API devuelve URLs de imágenes, estas se utilizan directamente.
Si la imagen viene como `null` o no está disponible, se usan las imágenes de respaldo de estas carpetas.


