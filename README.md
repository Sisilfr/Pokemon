# 🧩 React Pokémon Card Grid

Sebuah proyek React sederhana untuk menampilkan daftar karakter Pokémon dalam bentuk kartu yang menarik dan responsif. Proyek ini merupakan bagian dari pembelajaran React Hooks dan penggunaan komponen dinamis dengan props.

## ✨ Fitur

- Menampilkan kartu Pokémon lengkap dengan gambar, nama, nomor, dan tipe.
- Sortir Pokémon berdasarkan ID.
- Switch tampilan kartu antara grid dan list.
- Desain responsif dan user-friendly.
- Menggunakan React Hooks (useState).
- Manajemen aset lokal (gambar Pokémon dari file).

## 🛠 Teknologi

- *React JS* (Vite / Create React App)
- *JavaScript (ES6+)*
- *CSS Flexbox / Custom Styling*
- Gambar statis (lokal) dari folder Assets

## 📁 Struktur Folder

src/ │ 
├── Components/ │ 
├── PokemonCard.js # Komponen individual kartu Pokémon │ 
├── PokemonGrid.js # Komponen untuk grid/list seluruh Pokémon │ 
├── Header.js # Komponen header & pencarian 
│ └── ... # Komponen lainnya │ 
├── Assets/ │ 
└── Components/ # Gambar Pokémon │
├── Bulbasaur.png │ 
└── kabuto.png │ 
├── App.js # Root komponen 
└── index.js # Entry point React


## 🧠 Pembelajaran dari Proyek Ini (React Hooks)

Proyek ini merupakan contoh nyata penggunaan *React Hooks* dalam membangun aplikasi web interaktif berbasis komponen. Berikut adalah beberapa poin penting yang bisa dipelajari dari proyek ini:

---

### 🔹 1. Mengelola State dengan useState

Hook useState digunakan untuk menyimpan data yang dapat berubah dalam komponen. Pada proyek ini, useState digunakan untuk:

- Menyimpan mode tampilan (grid atau list)
- Menyimpan data Pokémon yang sedang ditampilkan
- Mengatur kriteria sorting (jika ada filter/sortir)

Contoh kode:

js
const [viewMode, setViewMode] = useState('grid');
const [pokemonData, setPokemonData] = useState([]);


### 🔹 2. Manajemen Komponen Reusable

Dengan bantuan React dan React Hooks, kita dapat membangun komponen yang fleksibel dan reusable, yaitu komponen yang bisa digunakan berulang kali dengan data berbeda hanya dengan mengubah props.

Contoh komponen pada proyek ini:

- **PokemonCard**: Komponen ini menampilkan satu kartu Pokémon, termasuk nama, tipe, gambar, dan ID. Data dioper lewat props dan bisa diubah sesuai kebutuhan.
- **PokemonGrid**: Komponen ini bertanggung jawab untuk menampilkan daftar seluruh kartu Pokémon. Ia menerima array data Pokémon dan me-render masing-masing menggunakan .map() untuk setiap elemen PokemonCard.

Manfaat reusable components:

- Lebih mudah untuk mengelola UI yang kompleks.
- Meminimalisir pengulangan kode.
- Mempermudah debugging dan pengembangan.
- Komponen dapat digunakan ulang di halaman atau proyek lain.

Contoh penggunaan:

javascript
<PokemonCard
  name="Bulbasaur"
  type="Grass/Poison"
  image={bulbasaurImage}
  id={1}
/>


### 🔹 3. Pemanfaatan Props + .map() untuk Rendering Dinamis

Dalam proyek ini, data Pokémon disimpan dalam bentuk *array of objects*, di mana setiap objek mewakili satu Pokémon (dengan atribut seperti id, name, type, dan image).

Untuk menampilkan daftar Pokémon, digunakan fungsi .map() dari JavaScript yang mengiterasi data dan me-render komponen PokemonCard untuk setiap item.

Dengan pendekatan ini, kita bisa menghasilkan elemen UI secara *dinamis* berdasarkan data, tanpa harus menulis kode satu per satu untuk setiap Pokémon.

Contoh penggunaan:

js
{pokemonData.map((pokemon) => (
  <PokemonCard
    key={pokemon.id}
    name={pokemon.name}
    image={pokemon.image}
    type={pokemon.type}
  />
))}

### ✅ Keuntungan dari Pendekatan Ini

Menggunakan kombinasi **props dan .map()** dalam React memberikan banyak keuntungan dalam membangun UI berbasis data:

- ⚡ *Efisien untuk data dalam jumlah banyak*  
  Kamu bisa me-render ratusan elemen hanya dengan satu baris .map(), tanpa harus membuat elemen satu per satu secara manual.

- 🔄 *Mudah diperbarui*  
  Ketika data array berubah (misalnya dari API atau input pengguna), UI akan secara otomatis diperbarui tanpa perlu manipulasi DOM secara langsung.

- 🧱 *Struktur komponen yang rapi dan modular*  
  Setiap elemen ditangani oleh komponen terpisah (misalnya PokemonCard), yang membuat kode lebih bersih, terorganisir, dan mudah dirawat.

- 📦 *Skalabilitas yang baik*  
  Kombinasi props dan .map() memungkinkan aplikasi berkembang dengan tetap mempertahankan arsitektur yang solid dan fleksibel.

Pendekatan ini adalah praktik standar dalam pengembangan React modern untuk membangun antarmuka yang dinamis dan efisien.

### 🔹 4. Penggunaan Conditional Rendering

Dalam React, kita bisa mengatur *tampilan UI secara dinamis* berdasarkan kondisi tertentu menggunakan teknik *conditional rendering*.

Pada proyek ini, kita menggunakan state (viewMode) untuk menentukan apakah data akan ditampilkan dalam *tampilan grid* atau *tampilan list*.

Contoh kode:

js
{viewMode === 'grid' ? <GridView /> : <ListView />}

### ✅ Manfaat Conditional Rendering

Penggunaan *conditional rendering* dalam React memberikan banyak manfaat dalam membangun antarmuka pengguna yang dinamis dan responsif, antara lain:

- 🎯 *Fleksibilitas UI*  
  Komponen bisa ditampilkan atau disembunyikan sesuai kondisi, membuat antarmuka lebih interaktif dan adaptif.

- ⚡ *Responsif terhadap input pengguna*  
  State dapat berubah berdasarkan interaksi pengguna (misalnya klik tombol), dan tampilan akan langsung menyesuaikan secara otomatis.

- 🧩 *Tampilan dinamis tanpa perlu banyak halaman*  
  Tidak perlu membuat banyak halaman terpisah — cukup kontrol tampilan dari satu komponen dengan logika kondisi.

- 🛠 *Pengaturan tampilan berbasis data*  
  Ideal untuk menampilkan komponen yang berbeda berdasarkan status data, seperti loading state, error message, atau tampilan kosong.

Teknik ini adalah salah satu kekuatan utama React dalam membuat aplikasi web yang modern dan responsif.

### 🔹 6. State-driven UI

Tampilan antarmuka aplikasi ini sepenuhnya dikendalikan oleh *perubahan state* — ini merupakan salah satu kekuatan utama dari React.

### 🧠 Konsep Utama:
- Perubahan pada state akan *otomatis memicu re-render* komponen yang terkait.
- UI akan selalu *sinkron dengan data* yang ada di dalam state.
- Membuat aplikasi menjadi *lebih responsif* terhadap interaksi pengguna.

Contoh:
js
setViewMode('list'); // akan memicu perubahan tampilan ke list view


---

## 🚀 Penutup

Proyek ini merupakan latihan yang menyenangkan dan bermanfaat untuk memperdalam pemahaman tentang *React Hooks*, khususnya dalam membangun UI yang dinamis dan modular.

Melalui proyek ini, kita belajar bagaimana React mengelola state, merender komponen secara dinamis, serta pentingnya arsitektur berbasis komponen yang reusable.

Semoga proyek ini bisa menjadi referensi atau titik awal untuk membangun aplikasi React yang lebih kompleks ke depannya.  
Terima kasih sudah membaca! 🙌

Happy coding! 💻✨
