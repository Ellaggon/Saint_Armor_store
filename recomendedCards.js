import { products } from "./products.js";

const d = document;

export default function recomendedCards(){
  const $cards = d.querySelector(".cards"),
    $template = d.getElementById("template-recomended"),    
    $fragment = d.createDocumentFragment();
    
    if($template){
      const templateContent = $template.content;
      
      products.forEach(el => {
        templateContent.querySelector("img").setAttribute("src", el.img1);
        templateContent.querySelector("img").setAttribute("alt", el.title);
        templateContent.querySelector("img").classList.add("rounded-top-4");
        templateContent.querySelector("h5").textContent = el.title;
        templateContent.querySelector("h5").classList.add("text-center", "mb-2");
        templateContent.querySelector("article").classList.add("slider-box_card");
        templateContent.querySelector("figure").classList.add("card", "text-center", "rounded-4", "shadow");
        templateContent.querySelector("figcaption").classList.add("card-body");
        templateContent.querySelector("figcaption").innerHTML = `
        <small class="card-detail">${el.detail_short}</small>
        <p class="card-price fw-bold mb-3"><sup>$</sup>&#160;${el.price}</p>
        <a href="https://wa.me/56950246702?text=Hola,%20quiero%20comprar%201%20${el.title}%20a%20${el.price}" target="_blank" class="btn btn-danger">Whatsapp...</a>`
  
        let $clone = d.importNode(templateContent, true);
        $fragment.appendChild($clone);
      });
      $cards.appendChild($fragment);
    };
  };