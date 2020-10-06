function tugas8(){
  var pusing = {
    jenis: 'migrain',
    hargaObat: 30000,
    penyebab: 'kurang makan'
  }

  console.log("Riwayat Pasien :");
  console.log(pusing);

  pusing.penyebab = 'kurang uang';
  pusing.kesimpulan = 'cari kerja';

  console.log("Hasil Analisa Dokter :");
  console.log(pusing);
}

tugas8();
