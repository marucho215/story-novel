import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages는 이 저장소를 https://<user>.github.io/story-novel/ 아래에 올린다.
  // base를 안 맞추면 JS/CSS 경로가 사이트 루트 기준으로 깨진다.
  base: '/story-novel/',
})
