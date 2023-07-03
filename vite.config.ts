import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


import env from "./env";


console.log("Env Config,", env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
