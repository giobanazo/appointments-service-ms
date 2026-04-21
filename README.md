## Configuración de variables de entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

POSTGRES_DB_USER=usuario
POSTGRES_DB_PASSWORD=mi_password_segura
POSTGRES_DB_PORT=5432
POSTGRES_DB_NAME=appointments-service-db

DB_HOST=db
PORT=3003



# Entrar a la carpeta del proyecto
cd appointments-service-ms



# Construir las imágenes y levantar todos los contenedores
docker compose up --build