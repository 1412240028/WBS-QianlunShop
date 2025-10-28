# WBS-QianlunShop

Ringkasan:
WBS-QianlunShop adalah repositori front-end berbasis HTML, CSS, dan JavaScript untuk toko / demo e-commerce. Dokumentasi ini berisi petunjuk instalasi, struktur proyek, penggunaan, kontribusi, dan lisensi agar memudahkan pengembang lain untuk menjalankan, mengembangkan, dan menyebarkan proyek.

Fitur utama
- Antarmuka pengguna berbasis HTML/CSS
- Interaksi dan logika frontend dengan JavaScript
- Mudah dijalankan secara lokal menggunakan server statis
- Struktur kode sederhana untuk penyesuaian cepat

Bahasa dan komposisi
- JavaScript: ~53%
- CSS: ~41%
- HTML: ~6%

Prasyarat
- Node.js (opsional untuk tooling, versi LTS direkomendasikan)
- npm atau yarn (opsional)
- Server statis sederhana (mis. live-server, http-server) atau bundler jika tersedia (mis. Vite/Parcel) — lihat dokumentasi instalasi di docs/INSTALLATION.md

Mulai cepat (Quick Start)
1. Clone repositori:
   git clone https://github.com/1412240028/WBS-QianlunShop.git
2. Masuk ke direktori proyek:
   cd WBS-QianlunShop
3. Jika menggunakan server statis sederhana:
   - Dengan npx live-server:
     npx live-server
   - Atau gunakan http-server:
     npx http-server ./ -c-1
4. Buka browser pada http://127.0.0.1:8080 (atau alamat yang ditampilkan oleh server)

Struktur proyek (ringkasan)
- index.html — titik masuk aplikasi (halaman utama)
- script.js — berisi file JavaScript (logika aplikasi)
- style.css — berisi file CSS dan file gaya
Untuk struktur lengkap, lihat docs/STRUCTURE.md

Pengembangan
- Jika ada tooling (package.json tersedia):
  - Install dependencies: npm install
  - Jalankan mode pengembangan: npm run dev
  - Build produksi: npm run build
- Jika tidak ada tooling: jalankan server statis seperti pada langkah quick start.

Linting & Testing
- Jika ada konfigurasi ESLint/Prettier atau testing (Jest), jalankan sesuai skrip di package.json:
  - npm run lint
  - npm test

Deploy
- Aplikasi ini adalah front-end statis sehingga dapat dideploy ke layanan hosting statis seperti:
  - GitHub Pages
  - Netlify
  - Vercel
- Untuk GitHub Pages: pindahkan hasil build (jika ada) ke branch gh-pages atau gunakan action yang rutin mem-publish.

Kontribusi
- Lihat CONTRIBUTING.md untuk panduan kontribusi, konvensi commit, dan alur PR.
- Buat issue untuk mendiskusikan perubahan besar sebelum mengirim PR.

Lisensi
- Proyek ini berlisensi di bawah MIT. Lihat LICENSE.md untuk detail.

Kontak
- Pemilik GitHub: 1412240028
- Jika ingin melaporkan bug atau fitur baru, silakan buka Issue di repositori.

Dokumentasi tambahan:
- docs/INSTALLATION.md — langkah instalasi dan tooling
- docs/USAGE.md — cara menjalankan dan contoh penggunaan
- docs/STRUCTURE.md — struktur folder dan penjelasan file penting