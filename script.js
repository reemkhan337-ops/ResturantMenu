
let cart=[];
function scrollToContact(){
  document.getElementById('contact')
  .scrollIntoView({behavior:'smooth'});
}

function scrollToMenu(){
 document.getElementById('menu').scrollIntoView({behavior:'smooth'});
}

function toggleCart(){
 document.getElementById('cart').classList.toggle('show');
}

function loadMenu(category){
 fetch(`/api/menu?category=${category}`)
 .then(r=>r.json())
 .then(data=>{
  const grid=document.querySelector('.menu-grid');
  grid.innerHTML='';
  data.forEach(item=>{
   const div=document.createElement('div');
   div.className='card';
   div.innerHTML=`
    <img src="${item.image}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <strong>$${item.price}</strong><br>
    <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
   `;
   grid.appendChild(div);
  });
 });
}

function addToCart(item){
 cart.push(item);
 document.getElementById('count').innerText=cart.length;
 renderCart();
}

function renderCart(){
 const el=document.getElementById('cartItems');
 let total=0;
 el.innerHTML='';
 cart.forEach(i=>{
  total+=i.price;
  el.innerHTML+=`<p>${i.name} - $${i.price}</p>`;
 });
 document.getElementById('total').innerText=total;
}

function checkout(){
 fetch('/api/order',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({items:cart,totalPrice:cart.reduce((a,b)=>a+b.price,0)})})
 .then(()=>{cart=[];renderCart();document.getElementById('count').innerText=0;alert('Order placed!')});
}
function checkout(){
 console.log("Checkout clicked");

 fetch('/api/order',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    items: cart,
    totalPrice: cart.reduce((a,b)=>a+b.price,0)
  })
 })
 .then(res => res.json())
 .then(data => {
   console.log("Response:", data);
   alert("Order sent to backend");
   cart=[];
   document.getElementById('count').innerText=0;
 });
}


loadMenu('All');
