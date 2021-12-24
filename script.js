const col = document.querySelectorAll(".col");
const modalTutup = document.querySelector(".modal-tutup")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".btn-close")
const containerModal = document.querySelector(".container-modal")
const btnClose = document.querySelector(".close-modal")
const nama = document.querySelector(".detail-nama")
const asal = document.querySelector(".detail-asal")
const deskripsi = document.querySelector(".detail-diskripsi")
const imgModal = document.querySelector(".img-modal")
const open = document.querySelector("nav ul")
const dataMasakan = [
    {
        id: 1,
        nama: "Mie Aceh",
        asal: "Aceh",
        gambar: "makanan-khas-daerah-mie-aceh.jpg",
        deskripsi: "Aceh merupakan salah satu provinsi di Indonesia yang terkenal dengan berbagai kuliner khas terbaik yang bahkan telah mendunia. Saat berkunjung ke Aceh, belum lengkap rasanya jika Anda tidak bisa mencicipi menu dengan bahan mie kuning tebal plus irisan daging yang disajikan dalam sup kari gurih dan pedas yang satu ini."
    },
    {
        id: 2,
        nama: "Rendang",
        asal: "Sumatera Barat",
        gambar: "rendang-sumatera-barat.jpg",
        deskripsi: "Sumatera Barat memang telah berhasil mencuri mata dunia dengan bumbu khas masakan padangnya. Salah satunya tentu saja rendang yang terbuat dari berbagai jenis rempah dengan citarasa yang sangat kuat juga nikmat."
    },
    {
        id: 3,
        nama: "Gulai Ikan Patin",
        asal: "Jambi",
        gambar: "gulai-ikan-patin-jambi.jpg",
        deskripsi: "Selanjutnya ada makanan khas daerah Jambi, dengan nama gulai iakan patin. Masakan yang satu ini sangat populer di tengah masyarakat Jambi dan sekitarnya. Dengan menggunakan daging buah durian yang telah difermentasi, gulai ikan akan dimasak hingga matang dengan rasa yang dijamin bikin ketagihan."
    },
    {
        id: 4,
        nama: "Pempek",
        asal: "Sumatera Selatan",
        gambar: "pempek-sumatera-selatan.jpg",
        deskripsi: "Pempek merupakan kuliner khas Sumatera Selatan yang terbuat dari olahan sagu dan ikan plus tambahan kuah coklat yang dinamai cukpo. Cita rasanya dijamin akan menggugah selera Anda."
    },
    {
        id: 5,
        nama: "Kerak Telor",
        asal: "Jakarta",
        gambar: "kerak-telor-jakarta.jpg",
        deskripsi: "Ibukota Indonesia juga tidak ketinggalan dengan kuliner khasnya yang bernama kerak telor, yakni menu masakan yang terbuat dari beras keran putih, ebi, telur ayam yang kemudian di sangrai. Akan semakin lezat dengan tambahan beberapa bumbu rahasia lainnya."
    },
    {
        id: 6,
        nama: "Gulai Belacan",
        asal: "Riau",
        gambar: "makanan-khas-daerah-gulai-belacan-riau.jpg",
        deskripsi: "Riau hadir dengan menu gulai belacannya yang terbuat dari campuran belacan plus kuah gurih yang sangat lezat. Akan semakin nikmat dengan tambahan ikan atau udang sebagai menu pelengkap gula belacan."
    },
    {
        id: 7,
        nama: "Bika Ambon",
        asal: "Sumatera Utara",
        gambar: "bika-ambon-sumatera-utara.jpg",
        deskripsi: "Jika Aceh mendunia dengan mienya, berbeda lagi dengan Sumatera Utara yang populer dengan bika ambon. Yakni sejenis kue dengan rasa yang sangat lezat. Bika ambon bahkan juga dijual dengan beberapa varian rasa terbaik, seperti keju hingga durian."
    },
    {
        id: 8,
        nama: "Sate Bandeng",
        asal: "Banten",
        gambar: "sate-bandeng-banten.jpg",
        deskripsi: "Banten juga menghadirkan kuliner terbaik khasnya yang bernama sate bandeng dengan daging empuk tak bertulang yang ditambah santan dan gula coklat. Pastikan Anda mencicipinya saat berkunjung ke Banten ya."
    }
]

dataMasakan.forEach(function(e, i){
    col[i].innerHTML = card(e);
})

function card(data){
    return `<div class="card">
                <img class="img-card" src="Gambar/${data.gambar}" alt="" width="250">
                <div class="card-body">
                    <h4 class="card-tittle">${data.nama}</h4>
                    <input class="btn-card" type="submit" value="Show More" data-id=${data.id}>
                </div>
            </div>`
}
document.addEventListener("click", function(e){
    if(e.target.className === "btn-card"){
        modal.style.display = "block"
        const id = e.target.dataset.id
        const tempt = dataMasakan.filter(e => e.id == id)[0];
        nama.innerHTML = tempt.nama
        document.querySelector(".modal-tittle").innerHTML = `Data Masakan ${tempt.nama}`
        asal.innerHTML = tempt.asal
        imgModal.src = `Gambar/${tempt.gambar}`
        deskripsi.innerHTML = tempt.deskripsi
        document.querySelector("body").style.overflow = "hidden"
        modalTutup.style.position =  "fixed";
    }
})
closeModal.addEventListener("click", function(e){
    modal.style.display = "none"
    document.querySelector("body").style.overflow = "auto"
    modalTutup.style.position =  "static";
})
btnClose.addEventListener("click", function(e){
    modal.style.display = "none"
    document.querySelector("body").style.overflow = "auto"
    modalTutup.style.position =  "static";
})
document.querySelector(".icon-nav").addEventListener("click", function(e) {
    open.classList.toggle("open")
})
document.querySelectorAll(".link").forEach(e => {
    e.addEventListener("click", () => {
        open.classList.toggle("open")
    })
})