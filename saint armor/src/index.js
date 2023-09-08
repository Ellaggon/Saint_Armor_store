import { madeCategoryCards } from "./categoryCards";
import { products } from "./products.js";
import recomendedCards from "./recomendedCards";

const d = document;

function carrito () {
  const $tbody = d.querySelector(".carrito-tbody"),
    $totalToPay = d.querySelector(".total-pay"),
    $delete = d.querySelector(".carrito-tbody .delete");
  
  let allProducts = [];

  d.addEventListener("click", e => {
    if(e.target.classList.contains("btn-carrito")){
      alert("Añadido al carrito exitosamente"); 
      // el nuevo arreglo infoProduct representa al nuevo producto en el carrito
      const infoProduct = {
        nro: 1,
        quantity: 1,
        name: d.querySelector(".slider-info h1").textContent,
        price: d.querySelector(".slider-info h2").textContent,
      };
      
      // exist muestra si un producto se duplica
      const exist = allProducts.some(el => el.name === infoProduct.name);
      // si un producto se duplica adicionamos uno en quantity y lo actualiamos
      if(exist){
        const products = allProducts.map(el => {
          if(el.name === infoProduct.name){
            el.quantity++;
            return el;
          } else {
            return el;
          };
        });
        allProducts = [...products]
      } else {
        // si no existe la duplica, a "allProducts" le adicionamos el nuevo infoProduct
        allProducts = [...allProducts, infoProduct];
      } 
      
      // creamos el indice
      allProducts.forEach((el, indice) => {
        if(indice === 0){
          indice = 1;
        }else{
          indice++;
        };
        el.nro = indice++;
      });

      console.log(allProducts)
      showHTML();
    };
  });

  const showHTML = () => {

    $tbody.innerHTML = "";
    let total = 0;
    
    allProducts.forEach(el => {
      const $tr = d.createElement("tr");
      $tr.innerHTML = `
        <tr>
          <th scope="row">${el.nro}</th>
          <td class="name">${el.name}</td>
          <td class="amount">${el.quantity}</td>
          <td class="price">${el.price}</td>
          <td class="delete">x</td>
        </tr>
      `;
      $tbody.appendChild($tr);
      total = total + parseInt(el.quantity * el.price.slice(1))
    });
    $totalToPay.innerText = `$${total}`;
  };

  d.addEventListener("click", e => {
    if(e.target === $delete){
      console.log("prueba")
    };
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  recomendedCards();
  madeCategoryCards();
  carrito();
});
