const catalog=[
    {id: 1, name: 'product 1',price: 20},
    {id: 2, name: 'product 2',price: 30},
    {id: 3, name: 'product 3',price: 25},
];
function loadcatalog(){
    const catalogcontainer= document.getElementById('content');
    catalogcontainer.innerHTML='<h2>catalog</h2>';
    catalog.forEach(product =>{
        const productcard=document.createElement('div');
        productcard.classList.add('product-card');
        productcard.innerHTML=`
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to cart</button>`;
        catalogcontainer.appendChild(productcard);

    });
}
function addToCart(productId){
    console.log(`product ${productId} added to cart`);

}
loadcatalog();