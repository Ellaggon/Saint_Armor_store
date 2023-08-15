import { products } from "./products.js";

const d = document;

export function madeCategoryCards() {
  const $main = d.getElementById("main"),
    $template = d.getElementById("template-card"),
    $posts = d.querySelector(".posts"),
    $category = d.querySelector(".container-category"),
    $popup = d.querySelector(".posts .popup-image"),
    $fragment = d.createDocumentFragment();

  //creamos el sitio para la galeria
    // Para que no ocurra error 404 en index.html usamos un if
  if($template){
    const templateContent = $template.content;

    products.forEach(el => {
      const elementContainer = document.createElement('article');
      elementContainer.classList.add("post", "col-6", "col-md-4", "col-lg-3");
      elementContainer.setAttribute("data-category", el.category);
      
      templateContent.querySelector("figure").classList.add("mx-auto", "mb-3");
      templateContent.querySelector("img").setAttribute("src", el.img1);
      templateContent.querySelector("img").setAttribute("alt", el.title);
      templateContent.querySelector("img").setAttribute("loading", "lazy");
      templateContent.querySelector("img").classList.add("card", "card-img-top", "shadow-sm");
      templateContent.querySelector("figcaption").classList.add("card-title", "text-center", "pt-1");
      templateContent.querySelector("h5").textContent = el.title;
      templateContent.querySelector("p").classList.add("text-end");
      templateContent.querySelector("p").textContent = `$ ${el.price} Bs`;
  
      
      let $clone = d.importNode(templateContent, true);
      elementContainer.appendChild($clone);
      $fragment.appendChild(elementContainer);
      $posts.appendChild($fragment);
      
      // creamos un evento click para el popup de los productos
      elementContainer.addEventListener ("click", () => {
        // $main.innerHTML = "";
        $category.style.display = "none";
        $popup.style.display = "block";
        
        const imgUrls = [el.img1, el.img2, el.img3],
          divGrid = d.createElement("div"),
          article = d.createElement("article"),
          figcaption = d.createElement("figcaption"),
          span = d.createElement("span");

        divGrid.classList.add("slider-grid");
        figcaption.classList.add("slider-info", "container", "my-4", "d-flex", "flex-column", "text-light");
        figcaption.innerHTML = `
          <h1 class="h1 fw-bold mb-4 mt-lg-5">${el.nombre} de ${el.title}</h1>
          <h2 class="fw-bold mb-4 mt-lg-5"><sup>$</sup>${el.price}</h2>
          <p>${el.detail}</p>
          <div class="sticky-bottom d-flex justify-content-evenly mt-5">
            <a href="#" class="btn-carrito btn btn-warning">Añadir al carrito</a>
            <a href="https://wa.me/56950246702?text=Hola,%20quiero%20comprar%20$pegaso%20a%20price" target="_blank" class="btn btn-success">Whatsapp >></a>
          </div>
        `;
        article.classList.add("slider-flex");
        span.textContent = "✖️";
  
        imgUrls.forEach(url => {
          const figure = d.createElement("figure");
          const img = d.createElement("img");
  
          figure.classList.add("slider-box_product");
          img.setAttribute("src", url);
          img.setAttribute("alt", el.title);
          img.setAttribute("loading", "lazy");
          img.classList.add("slider-img");
          figure.appendChild(img)
          divGrid.appendChild(figure);
          article.appendChild(divGrid);
          article.appendChild(figcaption);
          $popup.appendChild(article);
          $popup.appendChild(span);
        });
        span.onclick = () => {
          d.querySelector(".popup-image").style.display = "none";
          $category.style.display = "block";
          d.querySelector(".popup-image").innerHTML = "";
        }
      }); 
      $main.appendChild(elementContainer);
    });
  }
};