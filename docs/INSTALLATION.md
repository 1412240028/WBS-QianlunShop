# Panduan Instalasi

Dokumen ini menjelaskan cara menyiapkan lingkungan pengembangan untuk WBS-QianlunShop.

1. Persyaratan dasar
- Node.js (direkomendasikan, tetapi tidak wajib jika hanya ingin menjalankan HTML statis)
- npm atau yarn (jika menggunakan skrip/build)
- Git (untuk clone repositori)

2. Clone repositori
git clone https://github.com/1412240028/WBS-QianlunShop.git
cd WBS-QianlunShop

3. Menjalankan tanpa tooling (server statis)
- Metode sederhana menggunakan npx:
  - live-server:
    npx live-server
  - http-server:
    npx http-server ./ -c-1
Buka browser ke alamat yang ditampilkan (mis. http://127.0.0.1:8080)

4. Menjalankan dengan Node tooling (jika package.json tersedia)
- Install dependencies:
  npm install
  atau
  yarn install
- Jalankan mode development (jika ada skrip):
  npm run dev
- Build produksi:
  npm run build

5. Troubleshooting
- Halaman putih / tidak ada styling:
  - Periksa console devtools untuk error JS.
  - Pastikan path CSS/JS di index.html sesuai struktur folder.
- Modul tidak ditemukan saat menjalankan build:
  - Pastikan dependencies terinstal.
  - Periksa versi Node.js yang kompatibel.

6. Menambahkan tooling (opsional)
- Jika ingin menambahkan bundler modern (Vite/Parcel/webpack), buat branch baru, tambahkan konfig dan perbarui README agar konsisten.