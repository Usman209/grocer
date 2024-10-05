const { loadEnv, defineConfig, Modules } = require('@medusajs/framework/utils');

loadEnv(process.env.NODE_ENV, process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: "*", // Allow all origins
      adminCors: "http://203.161.43.125:9000", // Allow all origins
      authCors: "http://203.161.43.125:9000",  // Allow all origins
      host: '0.0.0.0', // Bind to all interfaces
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },

  admin: {

    backendUrl:  "https://grocer.al-mizan.store"



  },
  modules: {

    // ...

    [Modules.FILE]: {

      resolve: "@medusajs/medusa/file",

      options: {

        providers: [

          {

            resolve: "@medusajs/medusa/file-s3",

            id: "s3",

            options: {
              file_url: process.env.S3_FILE_URL || "http://pizza.al-mizan.store", // Use your domain name
              access_key_id: process.env.S3_ACCESS_KEY_ID || "minioadmin", // Replace with your MinIO access key
              secret_access_key: process.env.S3_SECRET_ACCESS_KEY || "minioadmin", // Replace with your MinIO secret key
              region: process.env.S3_REGION || "us-east-1", // You can set this as needed
              bucket: process.env.S3_BUCKET || "grocery", // Replace with your bucket name
              endpoint: process.env.S3_ENDPOINT || "http://pizza.al-mizan.store:9000", // Use your domain name with port
              // other options...
            },
          },

        ],

      },

    },

  },
});
