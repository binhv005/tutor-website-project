const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tutor Project API Documentation",
      version: "1.0.0",
      description:
        "Tài liệu API tách biệt cấu trúc sạch cho hệ thống trung tâm gia sư",
    },
    servers: [
      {
        url: "http://localhost:5050",
        description: "Local Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/docs/*.docs.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
