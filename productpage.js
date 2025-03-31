
        function updatePrice() {
            let selectElement = document.getElementById("variation");
            let selectedOption = selectElement.options[selectElement.selectedIndex];
            document.getElementById("displayed-price").textContent = '₱' + selectedOption.getAttribute("data-price");
        }

        function addToCart() {
            let quantity = document.getElementById("quantity").value;
            let price = document.getElementById("displayed-price").textContent.replace('₱', '');
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name: "Sanrio Pompompurin", price: price, quantity: quantity });
            localStorage.setItem("cart", JSON.stringify(cart));
            document.getElementById("cart-count").textContent = cart.length;
            alert("Added to cart!");
        }