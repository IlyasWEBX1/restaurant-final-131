# Dokumentasi Tugas 2: Membuat Website Restoran dengan ReactJS
### Nama Kelompok: \<xyz\>
### Anggota Kelompok
### 1. L200220131 ILYAS WAHYU BHARATA


#### Alamat Website yang dibuat
- Frontend:
    </> Halaman Menu Utama Restoran
    </FAQ> Halaman Tanya Jawab
    </about> Halaman Profil Restauran
    </openings> Halaman Jadwal Kerja Restoran
- Backend: \<Jika ada, tuliskan alamat website Anda\>

Silahkan anda tuliskan dokumentasi tugas anda di sini!
# **Website Documentation**

# **Dokumentasi Website**

## **Ikhtisar**
Dokumen ini memberikan panduan komprehensif tentang pengembangan website dinamis menggunakan Django untuk backend dan React untuk frontend. Website ini memiliki fitur render konten berbasis API, desain responsif, dan pengalaman pengguna modern.

---

## **1. Pengembangan Backend (Django)**

### **1.1 Model**
Model utama dibuat untuk menyusun basis data dan mengelola fitur inti:
- **Menu**: Menyimpan item menu.
- **Profile**: Berisi informasi tentang organisasi, termasuk tautan media sosial.
- **FAQ**: Menyimpan pertanyaan yang sering diajukan.
- **OpeningHour**: Mewakili jam operasional.

### **1.2 Endpoint API**
Django REST Framework (DRF) digunakan untuk menyediakan endpoint API berikut:
- `/api/menus/`: Mengambil item menu.
- `/api/profile/`: Mengambil detail profil.
- `/api/opening-hour/`: Mengambil jam operasional.
- `/api/faq/`: Mengambil FAQ.
- `/api/search/`: Melakukan pencarian di seluruh halaman.

### **1.3 Panel Admin**
Antarmuka admin Django dikonfigurasi untuk mengelola semua konten dengan efektif. Model didaftarkan untuk operasi CRUD yang mudah.

### **1.4 Dokumentasi API**
Swagger dan ReDoc diintegrasikan untuk dokumentasi API:
- Swagger: Dapat diakses di `/swagger-ui/`.
- ReDoc: Dapat diakses di `/redoc/`.

Skema OpenAPI tersedia di `/openapi`.

---

## **2. Pengembangan Frontend (React)**

### **2.1 Komponen**
Komponen React yang dapat digunakan kembali dibuat sebagai berikut:
- **Header**: Menyertakan navigasi dan kolom pencarian.
- **Menu**: Menampilkan item menu dinamis yang diambil dari backend.
- **FAQ**: Menampilkan FAQ secara dinamis.
- **About**: Menampilkan informasi profil dan tautan media sosial.
- **Footer**: Footer yang digunakan di seluruh situs.
- **Hour**: Menampilkan jam operasional secara dinamis.

### **2.2 Routing**
`react-router-dom` digunakan untuk routing sisi klien:
- `/menu`: Menampilkan item menu.
- `/faq`: Menampilkan FAQ.
- `/about`: Menampilkan informasi tentang kami.
- `/hours`: Menampilkan jam operasional.

### **2.3 Kolom Pencarian**
Kolom pencarian di komponen `Header`:
- Mengirim kueri pencarian ke backend (`/api/search/`). (Masih Dalam Progress)
- Menampilkan hasil dalam dropdown. (Masih Dalam Progress)
- Menavigasi ke halaman yang dipilih ketika hasil diklik. (Selesai)

### **2.4 Manajemen State**
React `useState` dan `useEffect` digunakan untuk mengelola state komponen dan mengambil data secara dinamis dari backend.

### **2.5 Styling**
TailwindCSS digunakan untuk:
- Desain UI modern dan responsif.
- Prototyping cepat untuk tata letak dan komponen.

---

## **3. Deployment**

### **3.1 Integrasi**
- Django dan React dihubungkan untuk aliran data yang lancar.
- API diuji untuk memastikan pengambilan dan render data yang benar.

### **3.2 Penanganan Error**
Error handling diterapkan untuk:
- Permintaan API yang gagal.
- Hasil pencarian kosong.
- UI fallback untuk state pemuatan.

### **3.3 Pengujian**
- Endpoint backend diuji menggunakan alat seperti Postman.
- Komponen frontend diuji untuk responsivitas dan fungsionalitas.

---

## **4. Petunjuk Penggunaan**

### **4.1 Menjalankan Backend**
1. Navigasikan ke direktori proyek Django.
2. Jalankan migrasi: `python manage.py migrate`.
3. Mulai server: `python manage.py runserver`.

### **4.2 Menjalankan Frontend**
1. Navigasikan ke direktori proyek React.
2. Instal dependensi: `npm install`.
3. Mulai server pengembangan: `npm start`.

### **4.3 Mengakses Website**
- Buka browser web dan navigasikan ke `http://localhost:3000/`.

---

## **5. Pengembangan di Masa Depan**
- Menambahkan autentikasi pengguna untuk fitur yang dipersonalisasi.
- Menerapkan filter pencarian lanjutan.
- Mengoptimalkan panggilan API untuk kinerja yang lebih baik.
- Menambahkan pengujian unit dan integrasi untuk frontend dan backend.

---

Dokumentasi ini berfungsi sebagai referensi untuk pengembangan dan pemeliharaan website di masa depan. Dengan mengikuti langkah-langkah yang diuraikan, website dapat ditingkatkan dan diskalakan sesuai kebutuhan.

