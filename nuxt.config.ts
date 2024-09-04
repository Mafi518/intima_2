// https://nuxt.com/docs/api/configuration/nuxt-config
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

// Определите режим работы (development или production)
const isProduction = process.env.NODE_ENV === "production";

// Определите путь к файлу .env в зависимости от режима
const envFilePath = resolve(
  __dirname,
  isProduction ? ".env.production" : ".env.development"
);

// Загрузите переменные окружения из файла
if (existsSync(envFilePath)) {
  const envConfig = readFileSync(envFilePath, "utf-8");
  envConfig.split("\n").forEach((line) => {
    const [key, value] = line.split("=");

    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    public: {
      api_url: process.env.API_URL,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  build: {
    loaders: {
      scss: {
        additionalData: `@import "~/assets/scss/main.scss";`,
      },
      svg: {
        loader: "nuxt-svgo-loader",
        options: {
          // Ваши настройки SVGO, например:
          plugins: [
            { removeTitle: true },
            { removeDimensions: true },
            // добавьте другие плагины SVGO по мере необходимости
          ],
        },
      },
    },
  },

  components: [{ path: "~/components/global/", extensions: ["vue"] }],

  modules: ["@pinia/nuxt", "nuxt-svgo-loader", "nuxt-swiper", "@vueuse/nuxt"],
  plugins: ["~/plugins/v-maska.js"],
  compatibilityDate: "2024-07-24",
});
