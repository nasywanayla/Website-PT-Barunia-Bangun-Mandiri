function animasiAwal() {
    document.getElementById("heroLabel").className =
        "small-title animasi-awal fade-in delay-1";
    document.getElementById("heroJudul").className =
        "animasi-awal fade-in delay-2";
    document.getElementById("heroDeskripsi").className =
        "hero-text animasi-awal fade-in delay-3";
    document.getElementById("heroTombol").className =
        "hero-button animasi-awal fade-in delay-4";
    animasiScroll();
}
function animasiScroll() {
    var bagian = document.getElementsByClassName("animasi-scroll");
    for (var i = 0; i < bagian.length; i++) {
        var posisi = bagian[i].getBoundingClientRect().top;
        var tinggiLayar = window.innerHeight;
        if (posisi < tinggiLayar - 70) {
            bagian[i].className =
                bagian[i].className.replace(
                    "animasi-scroll",
                    "muncul"
                );
        }
    }
}
function detailRumah(nomor) {
    var detail =
        document.getElementById("detail" + nomor);
    var tombol =
        document.getElementById("tombol" + nomor);
    if (detail.style.display == "none") {
        detail.style.display = "block";
        tombol.innerHTML = "TUTUP DETAIL −";
    } else {
        detail.style.display = "none";
        tombol.innerHTML = "LIHAT DETAIL +";
    }
}
function gambarMasuk(nomor) {
    var gambar =
        document.getElementById("gambar" + nomor);
    gambar.style.transform = "scale(1.08)";

}
function gambarKeluar(nomor) {
    var gambar =
        document.getElementById("gambar" + nomor);
    gambar.style.transform = "scale(1)";

}
var nomorGambar = 36;
function gantiGambar() {
    var gambar =
        document.getElementById("gambarGaleri");
    var keterangan =
        document.getElementById("keteranganGaleri");
    gambar.className = "";
    gambar.src =
        "TipeRumah" + nomorGambar + ".png";
    if (nomorGambar == 36) {
        keterangan.innerHTML =
            "Rumah Tipe 36 / 60";
    } else if (nomorGambar == 45) {
        keterangan.innerHTML =
            "Rumah Tipe 45 / 84";
    } else if (nomorGambar == 60) {
        keterangan.innerHTML =
            "Rumah Tipe 60 / 96";
    } else {
        keterangan.innerHTML =
            "Rumah Tipe 70 / 120";

    }
    void gambar.offsetWidth;
    gambar.className = "galeri-fade";

}
function gambarBerikutnya() {
    if (nomorGambar == 36) {
        nomorGambar = 45;
    } else if (nomorGambar == 45) {
        nomorGambar = 60;
    } else if (nomorGambar == 60) {
        nomorGambar = 70;
    } else {
        nomorGambar = 36;
    }
    gantiGambar();
}
function gambarSebelumnya() {
    if (nomorGambar == 70) {
        nomorGambar = 60;
    } else if (nomorGambar == 60) {
        nomorGambar = 45;
    } else if (nomorGambar == 45) {
        nomorGambar = 36;
    } else {
        nomorGambar = 70;
    }
    gantiGambar();
}
function pilihRumah() {
    var tipe =
        document.getElementById("tipe").value;
    var informasi =
        document.getElementById("informasiTipe");
    if (tipe == "36") {
        informasi.innerHTML =
            "Tipe 36 / 60 — Rumah minimalis " +
            "untuk pasangan muda dan keluarga kecil.";
    } else if (tipe == "45") {
        informasi.innerHTML =
            "Tipe 45 / 84 — Penataan ruang efisien " +
            "dengan kenyamanan untuk keluarga kecil.";
    } else if (tipe == "60") {
        informasi.innerHTML =
            "Tipe 60 / 96 — Hunian lebih luas " +
            "untuk mendukung aktivitas keluarga.";
    } else if (tipe == "70") {
        informasi.innerHTML =
            "Tipe 70 / 120 — Hunian premium " +
            "dengan ruang yang lebih fleksibel.";
    } else {

        informasi.innerHTML = "";
    }
}
function validasiForm() {
    var nama =
        document.getElementById("nama").value.trim();
    var whatsapp =
        document.getElementById("whatsapp").value.trim();
    var tipe =
        document.getElementById("tipe").value;
    var pesan =
        document.getElementById("pesan").value.trim();
    if (
        nama == "" ||
        whatsapp == "" ||
        tipe == "" ||
        pesan == ""
    ) {
        alert(
            "Silakan lengkapi seluruh formulir terlebih dahulu!"
        );
        return false;
    } else {
        alert(
            "Terima kasih, " + nama +
            "! Formulir Anda sudah lengkap. " +
            "Ini masih merupakan simulasi konsultasi."
        );
        return false;
    }
}
function resetForm() {
    document.getElementById("informasiTipe").innerHTML = "";
}