# Struktur Proyek

Berikut gambaran umum struktur folder yang umum ditemui di repositori berbasis HTML/CSS/JS ini. Sesuaikan jika struktur aktual berbeda.

Root/
- index.html
- README.md
- LICENSE.md
- package.json (opsional — untuk skrip build/tooling)
- /assets atau /public
  - /css
    - style.css (gaya global)
    - components/ (gaya untuk komponen spesifik)
  - /js
    - main.js (entrypoint JS)
    - utils.js (fungsi pembantu)
    - components/ (module JS untuk komponen tertentu)
  - /images
    - logo.png
    - products/
- /docs
  - INSTALLATION.md
  - USAGE.md
  - STRUCTURE.md

File penting
- index.html: halaman utama, include CSS/JS
- assets/css/style.css: gaya utama dan reset
- assets/js/main.js: inisialisasi aplikasi dan event binding

Catatan
- Jika repo menggunakan framework / bundler, Anda mungkin melihat folder seperti src/, dist/, dan konfigurasi bundler (vite.config.js, webpack.config.js).
- Pastikan path relatif di index.html cocok dengan struktur folder saat deploy.