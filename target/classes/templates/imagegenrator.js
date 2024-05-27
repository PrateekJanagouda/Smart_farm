

// Example data array of objects
const productsData = [
    {
        name: "Epsom salt",
        price: 20,
        description: "Divine Tree Epsom Salt for Plants | Magnesium Sulfate Organic Fertilizer for Speed Up Plant Growth - 900 Gm",
        image: 'https://m.media-amazon.com/images/I/61zjUYjw51L._SL1100_.jpg',
        id: 1,
    },
    {
        name: "Root-Boost",
        price: 19,
        description: "Water-soluble fertilizer that is easy to use and provides a balanced formula of nitrogen, phosphorus, and potassium for all types of plants. OMRI-listed for organic gardening.",
        image: 'https://m.media-amazon.com/images/I/41LKJwjiR8L._SY445_SX342_QL70_FMwebp_.jpg',
        id: 2,
    },
    // Add more products as needed

    {
        name: "TATA RALLIGOLD GROWTH PROMOTER",
        price: 23.89,
        description: "Tata Ralligold is a Unique mycorrihzal rooting stimulant containing humic acids, VAM, Kelp, vitamins & amino acids.",
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/MQ/VY/MZ/143814374/ralli-gold-1-kg-stack-1000x1000.jpg',
        id: 3,
    },
    {
        name: "Rimon",
        price: 23.56,
        description: "An Insect growth regulator (IGR) having stomach action which acts by inhibiting chitin synthesis process during larval stages of insects thus bringing mortality.",
        image: 'https://www.bighaat.com/cdn/shop/files/rimon-33_200x.jpg?v=1688716421',
        id: 4,
    },
    {
        name: "COROMANDEL PHENDAL",
        price: 10.2,
        description: "It is a broad-spectrum insecticide and an acaricide with a rapid knockdown action that breaks the resistance of insects.",
        image: 'https://www.bighaat.com/cdn/shop/products/1_45_1800x1800.webp?v=1672654989',
        id: 5,
    },
    {
        name: "TAPUZ INSECTICIDE",
        price: 9.67,
        description: "Tapuz is an effective pre-mix of buprofezin & acephate. Buporfezin belongs to the largest organo phosphorus group. It is an unique combination product with two different mode of action.",
        image: 'https://www.bighaat.com/cdn/shop/products/Untitleddesign_19_4cca7982-8db2-460b-b96f-eaaae5178b0b_1800x1800.jpg?v=1651492316',
        id: 6,
    },
    {
        name: "CULTAR PLANT GROWTH PROMOTER",
        price: 11.67,
        description: "Cultar contains paclobutrazol, a phytoregulator, which acts inhibiting the synthesis of gibberellins, producing a decrease in vegetative growth.",
        image: 'https://www.bighaat.com/cdn/shop/files/41hsLAJK-hL_200x.jpg?v=1689744918',
        id: 7,
    },
    {
        name: "GODREJ DOUBLE | YIELD ENHANCER",
        price: 7.87,
        description: "Double enables crops to overcome reproductive inefficiency barriers by triggering vital physiological processes, ensuring higher yields of vegetables, fruits, fields and cash crops.",
        image: 'https://www.bighaat.com/cdn/shop/products/Godrej-DOUBLE-Plant-Growth-Regulators-sw_720x720_66d4bc4c-6ba2-4c09-a2d1-cc5bea540a4b_200x.jpg?v=1680004118',
        id: 8,
    },
    {
        name: "NPK",
        price: 15.99,
        description: "Go Garden NPK 19 19 19 Fertilizer Plant Food for Plants and Gardening Purpose - 450 Grams",
        image: 'https://www.bighaat.com/cdn/shop/files/PROGIBBGIBBERELLICACID_200x.webp?v=1682587717',
        id: 9,
    },

];















function generateLayout(products) {
    const hook = document.getElementById("hook");

    if (!hook) {
        console.error("Element with ID 'hook' not found.");
        return;
    }

    hook.innerHTML = ""; // Clear existing content
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className =
            "flex flex-col justify-self-center h-[450px] w-[300px] bg-transparent rounded-xl p-2";

        const imageDiv = document.createElement("div");
        imageDiv.className = "h-[55%] w-[100%] bg-slate-200 rounded-xl  mb-2";
        const image = document.createElement('img');
        image.setAttribute('src', `${product.image}`)
        image.className = 'h-[100%] w-[100%] bg-slate-400 rounded-xl object-cover mb-2'
        imageDiv.appendChild(image)
        productDiv.appendChild(imageDiv);

        const infoDiv = document.createElement("div");
        infoDiv.className = "h-[43%] w-[100%] bg-transparent rounded-xl flex flex-col p-1";

        const nameAndPriceDiv = document.createElement("div");
        nameAndPriceDiv.className = "flex justify-between bg-transparent";

        const productName = document.createElement("h1");
        productName.className = "text-md font-bold ml-2  bg-transparent text-black";
        productName.textContent = product.name;
        nameAndPriceDiv.appendChild(productName);

        const productPrice = document.createElement("h2");
        productPrice.className = "text-lg mr-2 text-yellow-500";
        productPrice.textContent = `$${product.price}`;
        nameAndPriceDiv.appendChild(productPrice);

        infoDiv.appendChild(nameAndPriceDiv);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className =
            "max-w-full ml-2 h-full overflow-clip text-sm font-thin text-black";
        descriptionDiv.textContent = product.description;
        infoDiv.appendChild(descriptionDiv);

        const addToCartButton = document.createElement("button");
        addToCartButton.type = "button";
        addToCartButton.className = "add-to-cart w-full h-8 bg-red-400 mb-2 rounded-lg text-center";
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.setAttribute("pid", product.id)
        addToCartButton.setAttribute('imgsrc', product.image)
        infoDiv.appendChild(addToCartButton);

        productDiv.appendChild(infoDiv);
        hook.appendChild(productDiv);
    });
}


generateLayout(productsData);

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productId = event.target.getAttribute("pid");
            const productImgSrc = event.target.getAttribute('imgsrc')
            const productName = event.target.parentElement.querySelector("h1").textContent;
            const productPrice = event.target.parentElement.querySelector("h2").textContent;


            if (!cartItems.includes(productId)) {
                cartItems.push(productId);


                // Display the product in the cart

                const cartItem = document.createElement("li");
                cartItem.textContent = productName;
                cartItemsList.appendChild(cartItem);
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productId = event.target.getAttribute("pid");
            const productImgSrc = event.target.getAttribute('imgsrc')
            const productName = event.target.parentElement.querySelector("h1").textContent;
            const productPrice = parseFloat(
                event.target.parentElement.querySelector("h2").textContent.replace("$", "")
            );

            const existingCartItem = cartItems.find(item => item.productId === productId);

            if (existingCartItem) {
                existingCartItem.quantity++;
                updateCartDisplay();
            } else {
                cartItems.push({ productId, productName, productPrice, quantity: 1, productImgSrc });
                updateCartDisplay();
            }
        });
    });

    function updateCartDisplay() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.className = 'flex w-full h-[100px] justify-around items-center mb-6'
            cartItem.innerHTML =
                `<div class = 'flex justify-evenly items-center'>
                            <img
							src="${item.productImgSrc}"
							class="h-20 w-20 rounded-lg bg-black mr-8 "
							style="border: 2px solid rgb(188, 78, 9);"
				/>
                                        <p class= ' text-md font-bold mr-8 '>${item.productName}</p>
                                        <p class= ' text-md font-bold mr-8 '>- $${item.productPrice.toFixed(2)}</p>
                                        <p class= ' text-md font-bold mr-8 '> x ${item.quantity}</p>
                                    </div>
            <button class="remove-item border h-[60px] w-[120px] border-teal-400 rounded-md bg-blue-700 text-white" data-productid="${item.productId}">Remove</button>`;
            cartItemsList.appendChild(cartItem);
            total += item.productPrice * item.quantity;
        });

        cartTotalElement.textContent = `$${total.toFixed(2)} `;

        const removeButtons = document.querySelectorAll(".remove-item");
        removeButtons.forEach(removeButton => {
            removeButton.addEventListener("click", event => {
                const productId = event.target.getAttribute("data-productid");
                const itemIndex = cartItems.findIndex(item => item.productId === productId);
                if (itemIndex !== -1) {
                    cartItems.splice(itemIndex, 1);
                    updateCartDisplay();
                }
            });
        });
    }

    checkoutButton.addEventListener("click", () => {
        console.log("Proceeding to checkout:", cartItems);
    });
});

const closeCartBtn = document.getElementById('close-cart');
const showCartBtn = document.getElementById('show-cart')
const cartScreen = document.getElementById('cart-screen');

closeCartBtn.addEventListener('click', () => {
    cartScreen.classList.add('invisible')
})
showCartBtn.addEventListener('click', () => {
    cartScreen.classList.remove('invisible')
})



