# Dev Dockerfile for React + Vite + TypeScript
FROM node:20-alpine

WORKDIR /app

# Install deps first (cached layer, only reinstalls when package*.json changes)
#COPY package*.json ./
#RUN npm install

# Copy the rest of the source (overwritten anyway by the bind mount at runtime,
# but useful so `docker build` alone produces a runnable image)
#COPY . .

EXPOSE 5173

# --host exposes the server on 0.0.0.0 so it's reachable from outside the container
#CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
