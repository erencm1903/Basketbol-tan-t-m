 const oyuncular = [
      { isim: "LeBron James", takim: "Los Angeles Lakers", aktif: true, sayi: 39000 },
      { isim: "Michael Jordan", takim: "Chicago Bulls", aktif: false, sayi: 32292 },
      { isim: "Stephen Curry", takim: "Golden State Warriors", aktif: true, sayi: 22000 },
      { isim: "Kobe Bryant", takim: "Los Angeles Lakers", aktif: false, sayi: 33643 },
      { isim: "Kevin Durant", takim: "Phoenix Suns", aktif: true, sayi: 27000 },
    ];

    function searchData() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";

      const oyuncuBul = oyuncular.find(o => o.isim.toLowerCase().includes(input));
      const takimOyunculari = oyuncular.filter(o => o.takim.toLowerCase().includes(input));

      if (oyuncuBul) {
        resultDiv.innerHTML = `
          <h3>${oyuncuBul.isim}</h3>
          <p>Takım: ${oyuncuBul.takim}</p>
          <p>Durum: ${oyuncuBul.aktif ? "Aktif" : "Emekli"}</p>
          <p>Toplam Sayı: ${oyuncuBul.sayi}</p>
        `;
      } else if (takimOyunculari.length > 0) {
        resultDiv.innerHTML = `<h3>${takimOyunculari[0].takim} Takımı Oyuncuları:</h3>`;
        takimOyunculari.forEach(o => {
          resultDiv.innerHTML += `
            <p>${o.isim} - ${o.aktif ? "Aktif" : "Emekli"} - ${o.sayi} sayı</p>
          `;
        });
      } else {
        resultDiv.innerHTML = `<p>Sonuç bulunamadı.</p>`;
      }
    }