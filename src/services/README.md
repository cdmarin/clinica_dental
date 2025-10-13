# Servicios API

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con:

```env
# Desarrollo local - por defecto
VITE_API_URL=http://localhost:3000

# Producción (Render) - opcional
# VITE_API_URL=https://back-clinica-dental.onrender.com
```

### Estructura de la API

El servicio espera que la API devuelva los trabajadores en el siguiente formato:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nombre": "Dr. Juan Pérez",
      "especialidad": "Odontología General",
      "descripcion": "Especialista en odontología general con más de 10 años de experiencia",
      "imagen": "url_de_la_imagen.jpg",
      "created_at": "2025-10-13T15:53:08.279Z",
      "updated_at": "2025-10-13T15:53:08.279Z"
    },
    {
      "id": 2,
      "nombre": "Dra. María García",
      "especialidad": "Ortodoncista",
      "descripcion": "Especialista en ortodoncia y corrección de maloclusiones",
      "imagen": null,
      "created_at": "2025-10-13T15:53:08.279Z",
      "updated_at": "2025-10-13T15:53:08.279Z"
    }
  ]
}
```

**Nota:** El servicio extrae automáticamente el array `data` de la respuesta.

### Endpoints disponibles

#### Trabajadores
- **GET /api/trabajadores** - Obtiene todos los trabajadores
- **GET /api/trabajadores/:id** - Obtiene un trabajador específico

#### Servicios
- **GET /api/servicios** - Obtiene todos los servicios
- **GET /api/servicios/:id** - Obtiene un servicio específico

#### Antes y Después
- **GET /api/antes-despues** - Obtiene todos los casos
- **GET /api/antes-despues/:id** - Obtiene un caso específico
- **POST /api/antes-despues** - Crea un nuevo caso (admin)
- **POST /api/antes-despues/:id** - Actualiza un caso (admin)
- **POST /api/antes-despues/:id/delete** - Elimina un caso (admin)

## Uso

### Importar los servicios

```javascript
import trabajadoresService from '@/services/trabajadoresService'
import serviciosService from '@/services/serviciosService'
```

### Obtener datos

```javascript
// Obtener trabajadores
const trabajadores = await trabajadoresService.obtenerTrabajadores()

// Obtener servicios
const servicios = await serviciosService.obtenerServicios()

// Obtener casos de antes y después
const casos = await antesYDespuesService.obtenerCasos()
```

### Estructura esperada de Servicios

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nombre": "Limpieza Dental",
      "descripcion": "Eliminamos placa y sarro para mantener tus dientes saludables",
      "icono": "url_del_icono.png",
      "created_at": "2025-10-13T15:53:08.279Z",
      "updated_at": "2025-10-13T15:53:08.279Z"
    }
  ]
}
```

### Estructura esperada de Antes y Después

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titulo": "Blanqueamiento Dental",
      "descripcion": "Caso de blanqueamiento dental exitoso",
      "imagen_antes": "url_imagen_antes.png",
      "imagen_despues": "url_imagen_despues.png",
      "created_at": "2025-10-13T15:53:08.279Z",
      "updated_at": "2025-10-13T15:53:08.279Z"
    }
  ]
}
```

## Manejo de Errores

Si la API no está disponible o hay un error:
- Se muestra un mensaje de error al usuario
- El componente queda en estado de error hasta que se recargue la página o se reintente la conexión

## Cambiar a Producción

Cuando subas la API a Render:

1. Actualiza el archivo `.env`:
```env
VITE_API_URL=https://tu-api.onrender.com
```

2. Reconstruye el proyecto:
```bash
npm run build
```

La aplicación automáticamente usará la nueva URL de producción.

