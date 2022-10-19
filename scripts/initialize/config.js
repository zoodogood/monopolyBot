
export default {
  i18n: {
    path: "./scripts/initialize/languages",
    defaultLocale: "ru"
  },

  refreshCommands: {
    stdout: true,
    command: "npm run refresh-discord-slash"
  },

  envConfig: {
    envList: [
      {
        key: "CLIENT_TOKEN",
        description: "clientToken",
        regex: /[\w-]{24}\.[\w-]{6}\.[\w-]{27}|mfa\.[\w-]{84}/
      },
      {
        key: "SUPABASE_HOST",
        description: "supabaseHost",
        regex: /https:.+?\.supabase\.co/
      },
      {
        key: "SUPABASE_SECRET",
        description: "supabaseSecret",
        regex: /.{20,}/
      }
    ]
  },

  database: {
    stdout: true,
    command: "npm run init-database"
  }
}
