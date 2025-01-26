export class UI {
    // kurucu metot
    constructor() {
        this.form =document.querySelector("form");
        this.list =document.querySelector(".list");
        this.title =document.querySelector("#title");
        this.player =document.querySelector(".player");
    }

    // yazıları düzenleyen fonksiyon

    sliceText(text) {

        // Eğer text'in uzunluğu 15'den büyükse, 15 karakteri alarak sonuna '...' ekleyin. Bu, yazının kısa olmasını sağlar. 15 karakterin altında kalan kısmı göstermeyecek ve okunabilir hale getirecektir.
        if(text.lenght > 15) {
            
            return text.slice(0, 15) + "...";
        }
        return text;
    }
    // şarkı verilerini render eden fonksiyon
    renderCards(songs) {
        // listeye bir şarkı elemanı eklemeden önceki verileri sıfırla
        this.list.innerHTML = "";
        songs.forEach((song) => {
            
 // bir tane div oluştur
 const card = document.createElement("div");

 // oluşturulan bu elamana card clası ekle
 card.className = "card";

 // card elemanına şarkı ile ilgili değerleri ata
 card.dataset.title = song.title;
 card.dataset.subtitle = song.subtitle;
 card.dataset.img = song.images.coverarthq;
 card.dataset.mp3 = song.hub.actions[1].uri;

 // card ın html belirle
 card.innerHTML = `  <figure>
                            <img src="${song.images.coverarthq}" alt="">
                            <div class="play">
                                <i class="bi bi-play-fill"></i>
                            </div>
                        </figure>
                        <div class="card-info">
                            <h4>${this.sliceText(song.title)}</h4>
                            <h4>${song.subtitle}</h4>
                        </div> `;

                        // oluşturlan html arayüze aktar
                        this.list.appendChild(card);
                        // class ve obje yapıları içerisindeki bir değişkenebu yapılar içerisindeki bit mototla erişmek istersek bunların başına this. keywordunu koymak gerekir.bunun sebebi class ve obje yapılarının bu değerin kendi içersiinde oldugunu anlamasıdır.
 
        });
       
    }

        // LOADER RENDER EDEN FONKSİYON
        renderLoader() {
            this.list.innerHTML = `<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
</div>`;
        }

        // title yı günceleyen fonksiyon
        updateTitle(text) {
            this.title.textContent = text;
        }

        // animasyon ayarlaması yapan fonksiyon
        toggleAnimation() {
// player içerisindeki resime eriş
            const image = document.querySelector(".info img");
        // resme class ekle çıkar

        image.classList.toggle("animate");
        }

        // player kısmına dinamik renderleme yapacak fonskiyon
        renderPlayer(song0) {
            this.player.innerHTML = `
            <div class="info">
            <img src="${song.img}" alt="">
       
        <div>
        <h5>${song.title}</h5>
        <p>${song.subtitle}</p>
    </div>
    </div>
    
     <audio src="${song.mp3}" controls autoplay></audio>
 <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

      // şarkı oynatılıyorsa image bir anımasyon ekle durdurulursa bunu kaldır
      
      // audio elemanına eriş
      const audio = this.player.querySelector("audio");
      // audıo eleamnın oynama ve durma olayını izle

      audio.addEventListener("play", this.toggleAnimation);
      audio.addEventListener("pause", this.toggleAnimation);

      
        }
}