# Panduan Kontribusi

Terima kasih telah berkeinginan untuk membantu proyek ini! Berikut langkah dan aturan kontribusi agar alur kolaborasi rapi.

Aturan umum
- Buat issue terlebih dahulu untuk fitur besar atau perubahan arsitektur.
- Baca dokumentasi yang ada sebelum memulai perubahan.
- Gunakan bahasa Indonesia atau Inggris pada deskripsi issue/PR agar lebih mudah dipahami.

Alur kontribusi
1. Fork repositori dan buat branch baru:
   - git checkout -b feat/nama-fitur
2. Lakukan perubahan pada branch tersebut.
3. Pastikan perubahan sudah dites secara manual.
4. Commit dengan pesan yang jelas:
   - feat: menambahkan fitur X
   - fix: memperbaiki bug Y
   - docs: memperbarui dokumentasi
5. Push branch ke fork dan buat Pull Request ke branch utama repositori ini.

Standar kode
- JavaScript:
  - Gunakan sintaks ES6+ bila memungkinkan.
  - Hindari var; prefer const/let.
  - Tambahkan komentar singkat pada fungsi publik.
- CSS:
  - Konsisten penggunaan penamaan class (BEM direkomendasikan, tapi bukan wajib).
  - Hindari !important kecuali benar-benar diperlukan.

Review & Merging
- PR akan direview oleh pemilik atau maintainer.
- Jangan melakukan merge sendiri kecuali Anda adalah maintainer.
- Perubahan besar dapat memerlukan diskusi di issue terlebih dahulu.

Terima kasih atas kontribusinya!