let carts = document.querySelectorAll('.add-cart');

let products =[
    {
        name: 'vaggie pizza',
        tag: 'vaggie pizz',
        price: 11,
        inCart: 0
    },


    {
        name: 'peperoni pizza',
        tag: 'peperoni pizza',
        price: 14,
        inCart: 0
    },



    {
        name: 'meat pizza',
        tag: 'meat pizza',
        price: 40,
        inCart: 0
    },




    {
        name: 'margherita pizza',
        tag: 'margherita pizza',
        price: 20,
        inCart: 0
    },



    {
        name: 'bbq chicken pizza',
        tag: 'bbq chicken pizza',
        price: 90,
        inCart: 0
    },


    {
        name: 'hawaiian pizza',
        tag: 'hawaiian pizza',
        price: 10,
        inCart: 0
    },


    {
        name: 'butter',
        tag: 'butter',
        price: 80,
        inCart: 0
    },


    {
        name: 'buffalo pizza',
        tag: 'buffalo pizza',
        price: 80,
        inCart: 0
    },


    {
        name: 'peppy paneer pizza',
        tag: 'peppy paneer pizza',
        price: 77,
        inCart: 0
    },

    


    {
        name: 'dominos extravaganzza pizza',
        tag: 'dominos extravaganzza pizza',
        price: 30,
        inCart: 0
    },


    {
        name: 'chicken taco pizza',
        tag: 'chicken taco pizza',
        price: 33,
        inCart: 0
    },


    {
        name: 'pepperoni pizza',
        tag: 'pepperoni pizza',
        price: 33,
        inCart: 0
    },


    {
        name: 'chicken pizza',
        tag: 'chicken pizza',
        price: 33,
        inCart: 0
    },


    {
        name: '50/50 burger',
        tag: '50/50 burger',
        price: 93,
        inCart: 0
    }
];


for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent=productNumbers +1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(products);
}

function setItem(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)


    if (cartItems != null) {
        ( cartItems[products.tag] = undefined); {
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart += 1;
    }else{
        products.inCart = 1;
        cartItems ={
        [products.tag]:products
    }
    }



    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    

}
function totalCost(products){
    // console.log("vhvhv", products.price);

    let cartCost = localStorage.getItem('totalCost');
    console.log('my cartcost is', cartCost);
    console.log(typeof cartCost);



if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price)
} else {
    localStorage.setItem('totalCost', products.price);
    
}
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContianer = document.querySelector
    (".Products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContianer){
        productContianer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContianer.innerHTML += ` 
            <div class="Products">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./image/${item.tag}.jpeg">
            <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
                        <div class="quantity">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <span>${item.inCart}</span>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        </div>

                        <div class"total">
                        $${item.inCart * item.price},00
                        </div>
            `
            
            
        });

        productContianer.innerHTML +=`
        <div class"basketTotalContianer">
                        <h4 class="basketTotalTitle">
            total
                        </h4>

                        <h4 class="basketTotal">
                        $${cartCost},00
                        </h4>
        </div>
        
        `


    }
}
onLoadCartNumbers();
displayCart();








const toggleBtn = document.querySelector('.action-toggle')
            const toggleBtnIcon = document.querySelector('.action-toggle i')
            const dropDownMenu = document.querySelector('.dropdown-menu')

            toggleBtn.onclick = function () {
                dropDownMenu.classList.toggle('open')
            const isOpen =  dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList=isOpen
            ?'fa-solid fa-xmark'
            :'fa-solid fa-bars'
            }


//             var typed = new Typed('.GET-DELICIOUS-FOOD-span', {
// strings: [" out door sevices.", " home services.", "  online services."],
// typeSpeed: 100,
// backSpeed:100,
// backDelay: 1000,
// loop: true,
// });
