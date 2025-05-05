// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
// export default defineConfig({
//   base: '/lr6/', 
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import tailwindcss from '@tailwindcss/vite';

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/lr6/',
//   plugins: [react(), tailwindcss()],
// });
// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/lr6/', // Укажите имя вашего репозитория
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/lr6/' : '/',
  plugins: [react()],
})
