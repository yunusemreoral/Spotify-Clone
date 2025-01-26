// uı class yapısını import et
import { UI } from "./ui.js";
// apı class ımport et
import { API } from "./api.js"; 


// uı clasının örneğini al
const ui = new UI();

// apı clasının örneğini al

const api = new API();

// sayfanın yüklendiği anı izle
document.addEventListener("DOMContentLoaded", async () => {

  // loader ı render et
  ui.renderLoader();

  // apı a istek at ve apıden gelen veri arayüzü renderla
    api.getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
        console.log(err);
    });
});

//form gönderildiğinde bunu izle ve bir fonksiyon çalıştır
ui.form.addEventListener("submit", (e) => {
    // sayfa yenilemeyi engelle
    e.preventDefault();

    // form gönderildiğinde input içerisindeki değere eriş
  const query = e.target[0].value;

  // aratılan kelimenin başında ve sonunda bulunan boşlukları kaldır
  // ve eğer query değeri yok ise uyarı ver

  if(!query.trim()) {
    return alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz.");
  }

  // laoder render et
  ui.renderLoader();

// titleyı güncelle
ui.updateTitle(query + " için sonuçlar");

  // aratılan kelimiyle birlikte apı istek at sonrasından gelen veriyle ekrana cartları renderla
  api
  .searchMusic(query)
  .then((data) => ui.renderCards(data))
  .catch((err) => alert(err));
});

// liste kısmındaki play iconuna tıklayınca arayüzü bu şarkı verisine göre renderlayan fonksiyon
ui.list.addEventListener("click", (e) => {
  // list içerisinde tıklanan elemanın play butonu olup olmadıgını kontrol et
  if (e.target.className == "play") {
    // play butonunun kapsayıcısına eriş
const card = e.target.closest(".card");
// kapsayıcıya verilen dataset özelliklerini al (title,image,mp3)
const data = card.dataset;

// player ksımını render et
ui.renderPlayer(data);
  }
});

