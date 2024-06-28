
const producto = [
    {
        id: 1,
        nombre: "Ce",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuc6f2A3_c8LJJOqRvcF6SNsGw0xCUf9qnPA&s",
    },
    {
        id: 2,
        nombre: "Celular",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2a3AZj25d8XD12V24m5ZyyL6MjEQ8hoeQA&s",
    },
    {
        id: 3,
        nombre: "Heladera",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYkpU17XqjizFFHNPGwXosG4Ium62Rde2sg&s",
    },
    {
        id: 4,
        nombre: "Televisor",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Mm6BKVaoaRhi1vHuiMvBNjDGeOqvfkNzpA&s",
    },
    {
        id: 5,
        nombre: "Celular",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQop7bdJ_eDZdEIf5vxGJfpeCi2R14ksjhzA&s",
    },
    {
        id: 6,
        nombre: "Heladera",
        precio: 15000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaa4BAnsOSFB0LkTp6cdQ_ZGw4InILYv286Q&s",
    },
];

let productsContainer = document.getElementById("contenedor");
let cardProducts = [];

function renderProducto (productsArray){
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagen" src="${producto.img} width="350px" alt="Producto 1">
                          <h2 class="detalles">${producto.nombre}</h2>
                          <p class="Precio">${producto.precio}$</p>
                          <button class= "productoAgregar" id="${producto.id}">Comprar </button>`
        productsContainer.appendChild(card);
    });
    addToCardButton()
};
renderProducto(producto);
function addToCardButton (){
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button  => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = producto.find(producto => producto.id == productId)

            cardProducts.push (selectedProduct)
            console.log (cardProducts)

            localStorage.setItem("cardProducts", JSON.stringify(cardProducts))
        }
    })
};