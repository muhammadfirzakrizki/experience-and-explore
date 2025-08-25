FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json dulu (agar caching lebih bagus)
COPY package*.json ./

# Install dependencies (untuk dev jangan pakai --production)
RUN npm install

# Expose port default vite
EXPOSE 5173

# Default command (bisa di override dari docker-compose)
CMD ["npm", "run", "dev", "--", "--host"]
