document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("form-container");

  // Status pendaftaran
  const pendaftaranBuka = false; // ganti ke true jika sudah buka

  if (!pendaftaranBuka) {
    formContainer.innerHTML = `<p>Pendaftaran <b>Coming Soon</b>. Nantikan informasi selanjutnya.</p>`;
  } else {
    formContainer.innerHTML = `
      <form action="https://formspree.io/f/your-form-id" method="POST" class="join-form">
        <label>Nama Lengkap:</label>
        <input type="text" name="nama" required>
        
        <label>Email:</label>
        <input type="email" name="email" required>
        
        <label>No. HP/WA:</label>
        <input type="text" name="hp" required>
        
        <button type="submit">Daftar</button>
      </form>
    `;
  }
});
// Toggle Mobile Menu
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("nav-active");
});