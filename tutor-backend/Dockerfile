FROM node:20-alpine

# Cài đặt OpenSSL bản mới chuẩn của Alpine
RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

# Chạy lệnh sinh client dựa trên binaryTargets đã khai báo trong schema.prisma
RUN npx prisma generate

EXPOSE 5050

CMD ["npm", "run", "dev"]