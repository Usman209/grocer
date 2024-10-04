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
      port: 9000, // Ensure this is a number
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    [Modules.FILE]: {
      resolve: "@medusajs/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/file-local-next",
            id: "local",
            options: {
              upload_dir: "uploads",
              backend_url: 'https://grocer.al-mizan.store',
            },
          },
        ],
      },
    },
  },
});
