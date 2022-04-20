let elProductLink = document.querySelectorAll('.products__link');
let elProductMatrasList = document.querySelector('.products__matras-list');
let elProductMiniList = document.querySelector('.products__mini-list');
elProductLink.forEach(item => {
  item.addEventListener("click", e => {
      elProductLink.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
  })
})

let bigData = [
  {
    id:1,
    sign:"Mahsulot",
    img:"img/matras1.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  },
  {
    id:2,
    sign:"Mahsulot",
    img:"img/matras2.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  },
  {
    id:3,
    sign:"Mahsulot",
    img:"img/matras3.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  },
  {
    id:4,
    sign:"Mahsulot",
    sale:"Aksiya",
    img:"img/matras4.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  },
]
for(i of bigData) {
  elProductMatrasList.innerHTML += `<li class="products__matras-item">
  <div class="products__matras-wrapper">
  <div class="products__imgs">
  <span class="products__matras-sign">${i.sign}</span>
  <img class="products__matras-img" src='${i.img}' alt="img">
  </div>
    <div class="products__matras-des">
      <h2 class="products__matras-title">${i.title}</h2>
      <ul class="products__size-list">
        <li class="products__size-item"><p class="products__size-text">Yuklama</p><p class="products__size-subtext">150 <span class="products__size-spn">kg</span></p></li>
        <li class="products__size-item"><p class="products__size-text">Kafolat</p><p class="products__size-subtext">3 <span class="products__size-spn">yil</span></p></li>
        <li class="products__size-item"><p class="products__size-text">O'lchami</p><p class="products__size-subtext">200x120x40</p></li>
        <li class="products__size-item "><p class="products__size-text">Sig'imi</p><p class="products__size-subtext">2 <span class="products__size-spn">kishilik</span></p></li>
      </ul>
      <p class="products__size-texts">Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.</p>
      <p class="product__price-text">Narxi</p>
      <p class="product__price">1 <span>699</span> <span>999</span> <span class="product__valyuta">so'm</span></p>
      <button class="products__btn">${i.order} ${i.sale}<span><i class='${i.icon}'></i></span></button>
    </div>
  </div>
  </li>` 
}
let miniDatas = [
  {
    id:1,
    sale:"Aksiya",
    img:"img/mat6.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  },
  {
    id:2,
    sale:"Aksiya",
    img:"img/mat5.png",
    title:"Ortopedik Eko matras",
    order:"Buyurtma",
    icon:"bx bx-cart"
  }
]
