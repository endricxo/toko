// Data produk lengkap dengan gambar
const produkData = [  // Pakaian
  { nama: "Kaos Polos", harga: 50000, kategori: "pakaian", gambar: "asset/kaos.jpg" },
  { nama: "Kemeja Flanel", harga: 80000, kategori: "pakaian", gambar: "asset/kemeja.jpeg" },
  { nama: "Hoodie Hitam", harga: 150000, kategori: "pakaian", gambar: "asset/hoodie.jpg" },
  { nama: "Jaket Jeans", harga: 200000, kategori: "pakaian", gambar: "asset/jaket.jpg" },
  { nama: "Kaos Lengan Panjang", harga: 60000, kategori: "pakaian", gambar: "asset/kaospanjang.jpeg" },
  { nama: "Celana Jeans", harga: 120000, kategori: "pakaian", gambar: "asset/celana.jpg" },
  { nama: "Sweater Rajut", harga: 100000, kategori: "pakaian", gambar: "asset/sweater.jpg" },
  { nama: "Baju Batik", harga: 85000, kategori: "pakaian", gambar: "asset/batik .jpg" },
  { nama: "Polo Shirt", harga: 75000, kategori: "pakaian", gambar: "asset/polo.jpg" },
  { nama: "Jas Hujan", harga: 70000, kategori: "pakaian", gambar: "asset/jashujan.jpg" },

  // Elektronik
  { nama: "Headphone", harga: 250000, kategori: "elektronik", gambar: "asset/headphones.jpg" },
  { nama: "Mouse Wireless", harga: 100000, kategori: "elektronik", gambar: "asset/mouse .jpeg" },
  { nama: "Keyboard Gaming", harga: 300000, kategori: "elektronik", gambar: "asset/keyboard.jpg" },
  { nama: "Lampu LED", harga: 50000, kategori: "elektronik", gambar: "asset/lampu.jpg" },
  { nama: "Charger HP", harga: 60000, kategori: "elektronik", gambar: "asset/charger].jpeg" },
  { nama: "Power Bank", harga: 150000, kategori: "elektronik", gambar: "asset/powerbank.jpeg" },
  { nama: "Speaker Bluetooth", harga: 200000, kategori: "elektronik", gambar: "asset/speaker.jpg" },
  { nama: "Webcam HD", harga: 180000, kategori: "elektronik", gambar: "asset/webcam.jpg" },
  { nama: "USB Hub", harga: 75000, kategori: "elektronik", gambar: "asset/usb.jpg" },
  { nama: "Harddisk Eksternal", harga: 500000, kategori: "elektronik", gambar: "asset/hdd.jpg" },

  // Sepatu
  { nama: "Sepatu Sneaker", harga: 220000, kategori: "sepatu", gambar: "asset/sneaker.jpg" },
  { nama: "Sepatu Formal", harga: 300000, kategori: "sepatu", gambar: "asset/formal.jpg" },
  { nama: "Sandal Gunung", harga: 120000, kategori: "sepatu", gambar: "asset/download.jpeg" },
{ nama: "Sepatu Olahraga", harga: 250000, kategori: "sepatu", gambar: "asset/olahraga.jpg" },
  { nama: "Boots Pria", harga: 350000, kategori: "sepatu", gambar: "asset/boots.jpg" },
  { nama: "Sepatu Casual", harga: 180000, kategori: "sepatu", gambar: "asset/casual.jpg" },
  { nama: "Slip On", harga: 150000, kategori: "sepatu", gambar: "asset/slipon.jpg" },
  { nama: "Sepatu Anak", harga: 130000, kategori: "sepatu", gambar: "asset/anak.jpg" },
  { nama: "Sepatu Hitam Polos", harga: 170000, kategori: "sepatu", gambar: "asset/hitampolos.jpg" },
  { nama: "Sepatu Cewek Pink", harga: 200000, kategori: "sepatu", gambar: "asset/pink.jpg" },

  // Aksesoris
  { nama: "Topi Trucker", harga: 40000, kategori: "aksesoris", gambar: "asset/topi.jpg" },
  { nama: "Gelang Kulit", harga: 30000, kategori: "aksesoris", gambar: "asset/kulit.jpg" },
  { nama: "Jam Tangan", harga: 150000, kategori: "aksesoris", gambar: "asset/jam.jpg" },
  { nama: "Kacamata Hitam", harga: 60000, kategori: "aksesoris", gambar: "asset/kacamata.jpg" },
  { nama: "Tas Selempang", harga: 100000, kategori: "aksesoris", gambar: "asset/tas.jpg" },
  { nama: "Dompet Pria", harga: 85000, kategori: "aksesoris", gambar: "asset/dompet.jpg" },
  { nama: "Cincin Fashion", harga: 25000, kategori: "aksesoris", gambar: "asset/cincin.jpg" },
  { nama: "Kalung Unik", harga: 40000, kategori: "aksesoris", gambar: "asset/kalung .jpeg" },
  { nama: "Ikat Pinggang", harga: 45000, kategori: "aksesoris", gambar: "asset/ikatpinggang.jpg" },
  { nama: "Anting Cantik", harga: 30000, kategori: "aksesoris", gambar: "asset/anting.jpg" },
];
  

// Elemen DOM
const produkContainer = document.getElementById("produkContainer");
const searchInput = document.getElementById("searchInput");
const kategoriFilter = document.getElementById("kategoriFilter");
const pesan = document.getElementById("pesanTidakDitemukan");
const tombolKeranjang = document.getElementById("lihatKeranjangBtn");
const tombolCheckout = document.getElementById("tombolCheckout");
const logoToko = document.getElementById("logoToko");
let keranjang = {};

// Render produk berdasarkan pencarian dan filter
function renderProduk() {
  produkContainer.innerHTML = "";
  const keyword = searchInput.value.toLowerCase();
  const kategori = kategoriFilter.value;
  let ditemukan = false;
  

  produkData.forEach((produk) => {
    const cocokKeyword = produk.nama.toLowerCase().includes(keyword);
    const cocokKategori = kategori === "semua" || produk.kategori === kategori;

    if (cocokKeyword && cocokKategori) {
      const el = document.createElement("div");
      el.className = "produk";
      el.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}">
        <h2>${produk.nama}</h2>
        <p>Rp${produk.harga.toLocaleString()}</p>
        <button onclick="tambahKeKeranjang('${produk.nama}', ${produk.harga})">Beli</button>
      `;
      produkContainer.appendChild(el);
      ditemukan = true;
    }
  });

  pesan.style.display = ditemukan ? "none" : "block";
}

// Tambah produk ke keranjang
function tambahKeKeranjang(nama, harga) {
  if (!keranjang[nama]) {
    keranjang[nama] = { harga, jumlah: 1 };
  } else {
    keranjang[nama].jumlah += 1;
  }
  alert(`${nama} ditambahkan ke keranjang`);
  updateIconKeranjang();
 
}

// Tampilkan popup keranjang
function bukaKeranjang() {
  const daftar = document.getElementById("daftarKeranjang");
  const total = document.getElementById("totalHarga");
  daftar.innerHTML = "";
  let totalHarga = 0;

  for (const nama in keranjang) {
    const item = keranjang[nama];
    totalHarga += item.harga * item.jumlah;
    const li = document.createElement("li");
    li.innerHTML = `
      ${nama} - Rp${item.harga.toLocaleString()} x ${item.jumlah}
      <button onclick="ubahJumlah('${nama}', -1)">-</button>
      <button onclick="ubahJumlah('${nama}', 1)">+</button>
      <button onclick="hapusItem('${nama}')">Hapus</button>
    `;
    daftar.appendChild(li);
  }

  total.textContent = "Rp" + totalHarga.toLocaleString();
  document.getElementById("keranjangPopup").style.display = "flex";
}

// Ubah jumlah item dalam keranjang
function ubahJumlah(nama, delta) {
  if (keranjang[nama]) {
    keranjang[nama].jumlah += delta;
    if (keranjang[nama].jumlah <= 0) {
      delete keranjang[nama];
    }
    bukaKeranjang();
    updateIconKeranjang();
  }
}

// Hapus item dari keranjang
function hapusItem(nama) {
  delete keranjang[nama];
  bukaKeranjang();
  updateIconKeranjang();
}

// Tutup popup keranjang
function tutupKeranjang() {
  document.getElementById("keranjangPopup").style.display = "none";
}

// Checkout dan reset keranjang
function checkout() {
  if (Object.keys(keranjang).length === 0) {
    alert("Keranjang Anda kosong");
    return;
  }
  keranjang = {};
  alert("Terimakasih atas pembelian Anda!");
  tutupKeranjang();
  renderProduk();
  updateIconKeranjang();
}

// Update tampilan jumlah item di tombol keranjang
function updateIconKeranjang() {
  const totalItem = Object.values(keranjang).reduce((total, item) => total + item.jumlah, 0);
  tombolKeranjang.innerText = `Keranjang (${totalItem})`;
}

// Play/Pause musik latar
function toggleMusik() {
  const musik = document.getElementById("musikLatar");
  musik.paused ? musik.play() : musik.pause();
}

// Event Listener
searchInput.addEventListener("input", renderProduk);
kategoriFilter.addEventListener("change", renderProduk);
tombolKeranjang.addEventListener("click", bukaKeranjang);
tombolCheckout.addEventListener("click", checkout);

// Logo toko reset pencarian
if (logoToko) {
  logoToko.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    kategoriFilter.value = "semua";
    renderProduk();
  });
}

// Inisialisasi tampilan awal
renderProduk();
updateIconKeranjang();

