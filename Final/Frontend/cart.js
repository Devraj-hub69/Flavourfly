
function goToCart() {

    let passdata = JSON.parse(localStorage.getItem("FoodItem"));
    console.log(passdata)
    passdata.forEach((product, index) => {
        let productBox = document.createElement("div");
        productBox.className = "food-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category || "No Category";

        let img = document.createElement("img");
        img.src = product.image_url || "placeholder.jpg";


        let name = document.createElement("p");
        name.innerText = product.name;

        let price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating || "N/A"}`;

        let button2= document.createElement("button");
        button2.innerText = "Buy now";
        button2.addEventListener("click", () => {
            window.location.href="index2.html"

        });

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.addEventListener("click", () => {
            passdata.splice(index, 1);
            localStorage.setItem("FoodItem", JSON.stringify(passdata));
            productBox.remove();
        });

        let FoodCart = document.getElementById("FoodCart");

        productBox.append(heading, img, name, price, rating, button2,button);
        FoodCart.append(productBox);
    });


}
goToCart()