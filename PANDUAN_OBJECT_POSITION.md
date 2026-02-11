# Panduan Object Position

## Cara Kerja object-position

Format: `"horizontal vertical"`

### Contoh yang BENAR:

- `"center center"` - Tengah sempurna
- `"center top"` - Horizontal tengah, vertikal atas
- `"center bottom"` - Horizontal tengah, vertikal bawah
- `"center 0%"` - Horizontal tengah, vertical paling atas (0%)
- `"center 25%"` - Horizontal tengah, vertical 25% dari atas
- `"center 50%"` - Horizontal tengah, vertical tengah (sama dengan center
  center)
- `"center 75%"` - Horizontal tengah, vertical 75% dari atas (agak bawah)
- `"center 100%"` - Horizontal tengah, vertical paling bawah (100%)

### Contoh yang SALAH (jangan pakai):

- ❌ `"bottom 10%"` - Salah! "bottom" bukan horizontal position
- ❌ `"top 50%"` - Salah! "top" bukan horizontal position

### Tips Praktis untuk Foto yang Terpotong:

**Jika kepala/bagian atas terpotong:**

- Gunakan `"center 0%"` atau `"center 10%"` atau `"center 20%"`
- Semakin kecil angkanya, semakin fokus ke atas

**Jika kaki/bagian bawah terpotong:**

- Gunakan `"center 80%"` atau `"center 90%"` atau `"center 100%"`
- Semakin besar angkanya, semakin fokus ke bawah

**Untuk posisi tengah normal:**

- Gunakan `"center 50%"` atau `"center center"`

## Testing:

Ubah angka sedikit-sedikit (10% per step) sampai pas. Misalnya:

- Coba `"center 40%"` → refresh → lihat hasil
- Kalau masih kurang, coba `"center 50%"` → refresh → lihat hasil
- Kalau kebanyakan, coba `"center 30%"` → refresh → lihat hasil
