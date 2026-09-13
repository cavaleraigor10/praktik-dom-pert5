// Menangkap elemen form dan input berdasarkan ID
const formBarang = document.getElementById('form-barang');
const inputNama = document.getElementById('nama-barang');
const inputHarga = document.getElementById('harga-barang');
const inputStok = document.getElementById('stok');

// Menangkap elemen untuk menampilkan pesan error
const errorNama = document.getElementById('error-nama');
const errorHarga = document.getElementById('error-harga');
const errorStok = document.getElementById('error-stok');
const alertSukses = document.getElementById('alert-sukses');

// Event listener saat form dikirim (submit)
formBarang.addEventListener('submit', function (e) {
    // Mencegah form melakukan reload halaman secara default
    e.preventDefault();

    let isValid = true;
    alertSukses.classList.add('d-none'); // Sembunyikan alert sukses sebelumnya

    // --- 1. VALIDASI NAMA BARANG ---
    const nilaiNama = inputNama.value.trim();
    if (nilaiNama === "") {
        inputNama.classList.add('is-invalid');
        errorNama.textContent = "Nama barang wajib diisi.";
        isValid = false;
    } else if (nilaiNama.length < 5) {
        inputNama.classList.add('is-invalid');
        errorNama.textContent = "Nama barang minimal harus 5 karakter.";
        isValid = false;
    } else {
        inputNama.classList.remove('is-invalid');
        inputNama.classList.add('is-valid');
    }

    // --- 2. VALIDASI HARGA BARANG ---
    const nilaiHarga = inputHarga.value.trim();
    const angkaHarga = parseFloat(nilaiHarga);

    if (nilaiHarga === "") {
        inputHarga.classList.add('is-invalid');
        errorHarga.textContent = "Harga barang wajib diisi.";
        isValid = false;
    } else if (isNaN(angkaHarga)) {
        inputHarga.classList.add('is-invalid');
        errorHarga.textContent = "Harga barang harus berupa angka.";
        isValid = false;
    } else if (angkaHarga < 1000) {
        inputHarga.classList.add('is-invalid');
        errorHarga.textContent = "Harga barang minimal bernilai Rp 1.000.";
        isValid = false;
    } else {
        inputHarga.classList.remove('is-invalid');
        inputHarga.classList.add('is-valid');
    }

    // --- 3. VALIDASI STOK (Aturan dari Modul Praktik) ---
    const nilaiStok = inputStok.value.trim();
    const angkaStok = parseInt(nilaiStok);

    if (nilaiStok === "") {
        inputStok.classList.add('is-invalid');
        errorStok.textContent = "Jumlah stok wajib diisi.";
        isValid = false;
    } else if (isNaN(angkaStok)) {
        inputStok.classList.add('is-invalid');
        errorStok.textContent = "Jumlah stok harus berupa angka.";
        isValid = false;
    } else {
        inputStok.classList.remove('is-invalid');
        inputStok.classList.add('is-valid');
    }

    // --- KONDISI JIKA SEMUA VALIDASI LOLOS ---
    if (isValid) {
        alertSukses.classList.remove('d-none');
        // Anda bisa menambahkan logika pengiriman data lanjutan di sini
    }
});