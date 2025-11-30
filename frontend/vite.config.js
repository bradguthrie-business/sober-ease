import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the repo base only when building for production so dev server serves from '/'
  base: command === "build" ? "/sober-ease/" : "/",
}));
