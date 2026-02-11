# Panduan Mengatur Foto

## 1. Cara Mengubah/Menambah Foto

Cukup buka folder proyek Anda di file manager: `src/assets/gallery/`

Di dalamnya ada 3 folder:

- `class-x`
- `class-xi`
- `class-xii`

**Caranya:**

- **Hapus** foto yang tidak diinginkan.
- **Copy-Paste** foto baru yang ingin dimasukkan ke folder yang sesuai.
- Refresh website, foto akan otomatis muncul!

## 2. Mengatur Posisi Foto (Cropping)

Jika foto terlihat "terlalu ke atas" atau "kepotong", Anda bisa mengatur posisi
fokusnya menggunakan CSS `object-position`.

**File yang diedit:**

- Untuk halaman depan: `src/components/ExhibitSection.jsx`
- Untuk halaman galeri: `src/pages/GalleryPage.jsx`

**Caranya:** Cari kode `<img ... className="..." />` dan ubah `object-center`
menjadi:

- `object-top`: Jika ingin fokus ke bagian **ATAS** foto (misal: kepala
  terpotong).
- `object-bottom`: Jika ingin fokus ke bagian **BAWAH** foto (misal: kaki
  terpotong).
- `object-center`: Fokus ke **TENGAH** (default).

**Contoh:**

```jsx
// Sebelum (Default Tengah)
className = "... object-cover object-center ...";

// Sesudah (Fokus Atas - agar kepala tidak kepotong)
className = "... object-cover object-top ...";
```

**Tips:** Karena sistem ini "Auto-Load", perubahan ini akan berlaku untuk
**SEMUA** foto di komponen tersebut. Gunakan foto dengan rasio aspek yang mirip
agar hasilnya konsisten!
