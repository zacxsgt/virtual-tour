// Tampilkan pesan jika iframe gagal dimuat
window.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('tourFrame');
    
    iframe.addEventListener('error', function() {
        alert('Gagal memuat virtual tour. Pastikan XAMPP Apache sudah berjalan dan path sudah benar!');
    });
});