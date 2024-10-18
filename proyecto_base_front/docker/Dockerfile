# Etapa 1: Build de desarrollo
FROM node:18-alpine AS development

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json para instalar dependencias
COPY ../package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY ../ .

# Exponer el puerto 3000 para React
EXPOSE 3000

# Comando para ejecutar el servidor de desarrollo de React
CMD ["npm", "start"]
