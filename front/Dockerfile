# Etapa 1 - Build do front
FROM node:lts-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências primeiro (melhora cache)
COPY package.json package-lock.json ./
RUN npm i


# Copia o restante do código
COPY . .

# Gera o build (React: npm run build, Vue: npm run build, Angular: npm run build)
RUN npm run build

# Etapa 2 - Servir com Nginx
FROM nginx:alpine

# Remove config default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o build gerado na etapa anterior para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia config customizada
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]