import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.DEV_SERVER_PORT || "3000"),
  },
});
