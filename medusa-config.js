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
              file_url: "http://203.161.43.125:9000/grocery", // Use your domain name
              access_key_id:  "IUebtKcJBIpge7meMsaJ", // Replace with your MinIO access key
              secret_access_key: "E3KrCb4BrC30dc9I5sDTgz0UH4mMvX02odlDt63F", // Replace with your MinIO secret key
              region: "us-east-1", // You can set this as needed
              bucket: "grocery", // Replace with your bucket name
              endpoint:  "http://203.161.43.125:9000", // Use your domain name with port
              // other options...
            },
          },

        ],

      },

    },

  },
});



