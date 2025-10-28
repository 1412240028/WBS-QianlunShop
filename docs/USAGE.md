# Panduan Penggunaan

Dokumen singkat bagaimana menggunakan dan menyesuaikan aplikasi.

Menjalankan aplikasi
- Gunakan server statis seperti live-server atau http-server:
  npx live-server
  atau
  npx http-server ./ -c-1

Navigasi & komponen penting
- index.html — halaman utama; di sini biasanya di-include file CSS dan JS inti.
- assets/css/ — gaya global dan komponen UI.
- assets/js/ — logika interaksi, event listeners, manipulasi DOM.
- images/ — aset gambar produk / ikon.

Menyesuaikan tampilan
- Ubah variabel CSS (jika menggunakan CSS custom properties) di file utama style.css.
- Untuk perubahan layout, edit file HTML dan class CSS terkait.

Menambahkan produk contoh (jika ada modul produk JS)
- Jika data produk dimuat dari file JSON/array JS, tambahkan entri baru di sumber data tersebut.
- Perbarui rendering produk di file JS yang bertugas menampilkan daftar produk.

Integrasi API
- Jika ingin mengganti data statis dengan API:
  - Buat panggilan fetch di file JS utama (pastikan CORS dan format JSON sesuai).
  - Tangani loading state dan error untuk pengalaman pengguna yang baik.

Pengujian manual
- Cek fungsi penting:
  - Menambah ke keranjang (jika tersedia)
  - Navigasi antar halaman (jika ada routing sederhana)
  - Form input (validasi)
- Gunakan DevTools untuk debugging event, network, dan console logs.

Tips deploy
- Pastikan semua asset (CSS/JS/images) dicopy ke lokasi publik.
- Jika menggunakan base path di hosting, perbarui tag <base> atau path asset di index.html.