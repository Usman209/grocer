
const { loadEnv, defineConfig, Modules } = require('@medusajs/framework/utils')

loadEnv(process.env.NODE_ENV, process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: "http://203.161.43.125:9006",
      adminCors: "http://203.161.43.125:9006",
      authCors: "http://203.161.43.125:9006",
      host: '0.0.0.0',                  // Add this line to bind to all interfaces

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
              backend_url: 'https://grocer.al-mizan.store'
            },
          },
        ],
      },
    },
  },
});


