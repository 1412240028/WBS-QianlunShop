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
    script.js (seluruh fungsi yang ada di web)
- /docs
  - INSTALLATION.md
  - USAGE.md
  - STRUCTURE.md

File penting
- index.html: halaman utama, include CSS/JS
- style.css: gaya utama dan reset
- script.js: inisialisasi aplikasi dan event binding

Catatan
- Jika repo menggunakan framework / bundler, Anda mungkin melihat folder seperti src/, dist/, dan konfigurasi bundler (vite.config.js, webpack.config.js).
- Pastikan path relatif di index.html cocok dengan struktur folder saat deploy.