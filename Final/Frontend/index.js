
const food_suggestions = [
    {
        "id": 1,
        "category": "Pizza",
        "name": "Margherita Pizza",
        "price": 12.99,
        "rating": 2.1,
        "ingredients": [
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Basil"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg"
    },
    {
        "id": 2,
        "category": "Pizza",
        "name": "Pepperoni Pizza",
        "price": 14.99,
        "rating": 3.2,
        "ingredients": [
            "Tomato Sauce",
            "Mozzarella Cheese",
            "Pepperoni"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://media01.stockfood.com/largepreviews/NDIxMjk0ODk4/13590158-A-thin-crust-pepperoni-pizza-with-a-slice-lifted-and-cheese-stretching.jpg"
    },
    {
        "id": 3,
        "category": "Pizza",
        "name": "BBQ Chicken Pizza",
        "price": 15.99,
        "rating": 4.3,
        "ingredients": [
            "BBQ Sauce",
            "Chicken",
            "Red Onions",
            "Mozzarella"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://fresh.co.nz/wp-content/uploads/2012/01/BBQ-12-2.jpg"
    },
    {
        "id": 4,
        "category": "Pizza",
        "name": "Veggie Supreme Pizza",
        "price": 13.49,
        "rating": 4.4,
        "ingredients": [
            "Tomato Sauce",
            "Bell Peppers",
            "Olives",
            "Onions"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://i.pinimg.com/originals/1b/ad/43/1bad43fd7c1e033e578570936191f23a.jpg"
    },
    {
        "id": 5,
        "category": "Burgers",
        "name": "Classic Beef Burger",
        "price": 10.99,
        "rating": 4.5,
        "ingredients": [
            "Beef Patty",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Burger Bun"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.iTnflSl4YDI6mtrql9Ds3AHaEt?rs=1&pid=ImgDetMain"
    },
    {
        "id": 6,
        "category": "Burgers",
        "name": "Veggie Burger",
        "price": 9.99,
        "rating": 4.6,
        "ingredients": [
            "Veggie Patty",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Whole Wheat Bun"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://leaf.nutrisystem.com/wp-content/uploads/2023/03/green-veggie-burger-1.jpg"
    },
    {
        "id": 7,
        "category": "Burgers",
        "name": "Chicken Burger",
        "price": 11.49,
        "rating": 2.7,
        "ingredients": [
            "Grilled Chicken",
            "Lettuce",
            "Mayo",
            "Burger Bun"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://c.ndtvimg.com/2023-04/uudj8mko_burger_625x300_28_April_23.jpg"
    },
    {
        "id": 8,
        "category": "Burgers",
        "name": "Cheese Burger",
        "price": 12.49,
        "rating": 1.8,
        "ingredients": [
            "Beef Patty",
            "Cheddar Cheese",
            "Lettuce",
            "Tomato"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
    },
    {
        "id": 9,
        "category": "Desserts",
        "name": "Chocolate Brownie",
        "price": 6.99,
        "rating": 4.9,
        "ingredients": [
            "Chocolate",
            "Flour",
            "Sugar",
            "Butter"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://img.freepik.com/premium-photo/chocolate-brownie_949611-404.jpg"
    },
    {
        "id": 10,
        "category": "Desserts",
        "name": "Cheesecake",
        "price": 7.99,
        "rating": 2.0,
        "ingredients": [
            "Cream Cheese",
            "Graham Cracker Crust",
            "Sugar"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://img.freepik.com/premium-photo/sweet-cheesecake-background_969965-30856.jpg"
    },
    {
        "id": 11,
        "category": "Desserts",
        "name": "Tiramisu",
        "price": 8.99,
        "rating": 4.1,
        "ingredients": [
            "Mascarpone Cheese",
            "Coffee",
            "Cocoa Powder",
            "Sugar"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/R.f17d5ff5dd8ea2142456f686cc5e7683?rik=BIVJmEVbrPtz4A&riu=http%3a%2f%2f2.bp.blogspot.com%2f-_bA8QWRuO1k%2fVtYs0ocvoMI%2fAAAAAAAAACk%2fAm_h1hS42IY%2fs1600%2ftiramisu_0646_wm.jpg&ehk=B64BaGZlMeuhv5NB4JPxB0Q9ARwQrD5WFZEMekEtHOE%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 12,
        "category": "Desserts",
        "name": "Apple Pie",
        "price": 5.99,
        "rating": 4.2,
        "ingredients": [
            "Apples",
            "Cinnamon",
            "Pie Crust",
            "Sugar"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://cdn.pixabay.com/photo/2023/07/16/02/44/ai-generated-8129967_1280.png"
    },
    {
        "id": 13,
        "category": "Drinks",
        "name": "Mango Smoothie",
        "price": 5.99,
        "rating": 4.3,
        "ingredients": [
            "Mango",
            "Milk",
            "Honey"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.freshdirect.com/blog/wp-content/uploads/2017/05/mango-smoothie-2-1080x1080.jpg"
    },
    {
        "id": 14,
        "category": "Drinks",
        "name": "Iced Coffee",
        "price": 4.49,
        "rating": 3.4,
        "ingredients": [
            "Coffee",
            "Milk",
            "Ice"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.kOIwvAzbmWhiSAWR1evpmQAAAA?w=360&h=540&rs=1&pid=ImgDetMain"
    },
    {
        "id": 15,
        "category": "Drinks",
        "name": "Green Tea",
        "price": 3.99,
        "rating": 4.5,
        "ingredients": [
            "Green Tea Leaves",
            "Hot Water"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://static.toiimg.com/photo/78092190.cms"
    },
    {
        "id": 16,
        "category": "Drinks",
        "name": "Strawberry Shake",
        "price": 6.49,
        "rating": 4.6,
        "ingredients": [
            "Strawberries",
            "Milk",
            "Sugar"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://assets.epicurious.com/photos/647df8cad9749492c4d5d407/1:1/w_2560%2Cc_limit/StrawberryMilkshake_RECIPE_053123_3599.jpg"
    },
    {
        "id": 17,
        "category": "Croissant",
        "name": "Romanian Croissant",
        "price": 2.99,
        "rating": 4.1,
        "ingredients": [
            "Flour",
            "Vanilla",
            "Egg youlk"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://simonacallas.com/wp-content/uploads/2017/02/Soft-Croissant-Style-Sweet-Bagels.jpg"
    },
    {
        "id": 18,
        "category": "Croissant",
        "name": "French Croissant",
        "price": 3.99,
        "rating": 2.2,
        "ingredients": [
            "Flour",
            "Butter"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://images.kojaro.com/2020/7/ba36ee0f-12af-4ebf-b35f-17db0fa29caf.jpg"
    },
    {
        "id": 19,
        "category": "Croissant",
        "name": "Choclate Croissant",
        "price": 1.99,
        "rating": 4.3,
        "ingredients": [
            "Flour",
            "Butter",
            "Chocolate"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://i.pinimg.com/originals/f2/f4/2e/f2f42e8f7a6296927da2d1239a3ef006.jpg"
    },
    {
        "id": 20,
        "category": "Croissant",
        "name": "Strawberry Croissant",
        "price": 1.49,
        "rating": 4.4,
        "ingredients": [
            "Flour",
            "Butter",
            "Strawberries"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.mashed.com/img/gallery/costco-shoppers-are-loving-these-strawberry-filled-croissants/l-intro-1627564793.jpg"
    },
    {
        "id": 21,
        "category": "Donut",
        "name": "Cinnamon Drizzle",
        "price": 1.99,
        "rating": 4.5,
        "ingredients": [
            "Milk",
            "Egg"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/R.c1f5d012a11eb6ed8f48f24ffad53840?rik=uUphRjt4gxzvfw&riu=http%3a%2f%2fgrandmotherskitchen.org%2fuploads%2f51%2ffiles%2frecipe.jpg&ehk=twRuLeyQ4tcOmI3uboVXaJsqxvSSNCFTs0yz2HLNU2E%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 22,
        "category": "Donut",
        "name": "Chocolate sprinkle Donut",
        "price": 2.99,
        "rating": 4.6,
        "ingredients": [
            "Milk",
            "Egg",
            "Chocolate"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.b3tAjKInKBTr9rYKJIdYrAHaFj?rs=1&pid=ImgDetMain"
    },
    {
        "id": 23,
        "category": "Donut",
        "name": "Oreo Crumble",
        "price": 1.49,
        "rating": 4.7,
        "ingredients": [
            "Grilled Chicken",
            "Lettuce",
            "Mayo",
            "Burger Bun"
        ],
        "recommended_for": [
            "Milk",
            "Egg",
            "oreo"
        ],
        "image_url": "https://mymorningmocha.com/wp-content/uploads/2022/06/Oreo-Donuts-Opengraph.jpg"
    },
    {
        "id": 24,
        "category": "Coffee",
        "name": "Black coffee",
        "price": 12.49,
        "rating": 4.8,
        "ingredients": [
            "coffee"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.nripulse.com/wp-content/uploads/2016/04/Black-Coffee.jpg"
    },
    {
        "id": 25,
        "category": "Coffee",
        "name": "Iced Coffee",
        "price": 6.99,
        "rating": 4.9,
        "ingredients": [
            "Coffee",
            "Milk"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.kOIwvAzbmWhiSAWR1evpmQAAAA?w=360&h=540&rs=1&pid=ImgDetMain"
    },
    {
        "id": 26,
        "category": "Coffee",
        "name": "Cappuccino",
        "price": 7.99,
        "rating": 4.0,
        "ingredients": [
            "Coffee",
            "Milk"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.kOIwvAzbmWhiSAWR1evpmQAAAA?w=360&h=540&rs=1&pid=ImgDetMain"
    },
    {
        "id": 27,
        "category": "Coffee",
        "name": "Latte",
        "price": 8.99,
        "rating": 4.1,
        "ingredients": [
            "Coffee",
            "Milk"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg"
    },
    {
        "id": 28,
        "category": "Sandwiches",
        "name": "Vegetable Sandwich",
        "price": 5.99,
        "rating": 4.2,
        "ingredients": [
            "Bread",
            "Veggies"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.acouplecooks.com/wp-content/uploads/2018/05/Rainbow-Vegetable-Sandwich-007.jpg"
    },
    {
        "id": 29,
        "category": "Sandwiches",
        "name": "Chicken Sandwich",
        "price": 5.99,
        "rating": 4.3,
        "ingredients": [
            "Bread",
            "Veggies",
            "Chicken"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.REn4tLoLbbq5LgBlt1s1wwAAAA?rs=1&pid=ImgDetMain"
    },
    {
        "id": 30,
        "category": "Sandwiches",
        "name": "Cheesy Chicken Grilled Sandwich",
        "price": 4.49,
        "rating": 4.4,
        "ingredients": [
            "Bread",
            "Veggies",
            "Chicken",
            "Cheese"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://insanelygoodrecipes.com/wp-content/uploads/2023/04/Homemade_Grilled_Cheese_Tomato_and_Spinach_Sandwich-750x393.jpg"
    },
    {
        "id": 31,
        "category": "Cake",
        "name": "Cup Cakes",
        "price": 3.99,
        "rating": 4.5,
        "ingredients": [
            "Flour",
            "Egg",
            "Milk",
            "Flavour"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/R.a075c8f0f9c308e5f025e3b0e51bed9f?rik=24XXveMIqSkVKg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-TgxnxZy2EjY%2fTkiN1LyiTmI%2fAAAAAAAACKk%2fI_8zxxVPKPc%2fs1600%2fIMG_6155csqs.jpg&ehk=0SPWBbzqYsuXrwHWP%2biGA3SJxRqn3Z7yiYXRWdo%2bDGY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        "id": 32,
        "category": "Cake",
        "name": "Choco lava cake",
        "price": 11.99,
        "rating": 4.9,
        "ingredients": [
            "Flour",
            "Egg",
            "Milk",
            "Chocolate"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://i.pinimg.com/originals/d6/84/14/d68414dad8fe45f420ddd872e6e9e696.jpg"
    },
    {
        "id": 33,
        "category": "Cake",
        "name": "White Forest Cake",
        "price": 11.49,
        "rating": 4.3,
        "ingredients": [
            "Flour",
            "Egg",
            "Milk",
            "Vanilla"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.bakingo.com/blog/wp-content/uploads/2023/06/recipe-of-white-forest-cake.jpg"
    },
    {
        "id": 34,
        "category": "Cake",
        "name": "Black Forest Cake",
        "price": 10.49,
        "rating": 4.6,
        "ingredients": [
            "Flour",
            "Egg",
            "Milk",
            "Chocolate"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://sallysbakingaddiction.com/wp-content/uploads/2018/11/black-forest-cake-2-600x900.jpg"
    },
    {
        "id": 35,
        "category": "Soup",
        "name": "Chicken Soup",
        "price": 6.49,
        "rating": 4.6,
        "ingredients": [
            "Boneless chicken",
            "veggies"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.seriouseats.com/thmb/IKY5aED3gOwTTZ0KQpsMxMCcIFI=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__12__20171115-chicken-soup-vicky-wasik-11-80db1a04d84a43a089e0559efdddd517.jpg"
    },
    {
        "id": 36,
        "category": "Soup",
        "name": "Vegg clear Soup",
        "price": 4.49,
        "rating": 4.6,
        "ingredients": [
            "veggies"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://vitalfairliving.com/wp-content/uploads/2022/04/Fall-Soup.png"
    },
    {
        "id": 37,
        "category": "Soup",
        "name": "Chinese Soup",
        "price": 4.49,
        "rating": 4.6,
        "ingredients": [
            "veggies",
            "Noodles"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://redhousespice.com/wp-content/uploads/2021/08/Chinese-hot-and-sour-soup-1-scaled.jpg"
    },
    {
        "id": 38,
        "category": "Salad",
        "name": "Chicken Salad",
        "price": 5.49,
        "rating": 4.6,
        "ingredients": [
            "veggies",
            "Chicken",
            "Paper"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.1bgahFYHid1IVC_nxCEnkQHaKh?w=1200&h=1704&rs=1&pid=ImgDetMain"
    },
    {
        "id": 39,
        "category": "Salad",
        "name": "Vegetable Salad",
        "price": 6.49,
        "rating": 4.6,
        "ingredients": [
            "veggies",
            "Paper"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.1XVCrv91SKTwnjyen28KfgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        "id": 40,
        "category": "Salad",
        "name": "Fruit Salad",
        "price": 8.49,
        "rating": 4.3,
        "ingredients": [
            "Fruits"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.valyastasteofhome.com/wp-content/uploads/2015/06/062-1.jpg"
    },
    {
        "id": 41,
        "category": "Wrap",
        "name": "Chicken wrap",
        "price": 9.49,
        "rating": 4.2,
        "ingredients": [
            "Wheat Tortilla",
            "Seasame oil",
            "Avocado",
            "Chicken"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://th.bing.com/th/id/OIP.dLege-4THtIERcziF5iBkQHaIn?rs=1&pid=ImgDetMain"
    },
    {
        "id": 42,
        "category": "Wrap",
        "name": "Veg wrap",
        "price": 6.49,
        "rating": 4.5,
        "ingredients": [
            "Wheat Tortilla",
            "Seasame oil",
            "Avocado",
            "veggies"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.bowlofdelicious.com/wp-content/uploads/2014/01/Veggie-Wraps-square.jpg"
    },
    {
        "id": 43,
        "category": "Wrap",
        "name": "Egg wrap",
        "price": 7.49,
        "rating": 4.3,
        "ingredients": [
            "Wheat Tortilla",
            "Seasame oil",
            "Avocado",
            "egg"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://onedishkitchen.com/wp-content/uploads/2022/12/egg-wrap-one-dish-kitchen-1-1592x2048.jpg"
    },
    {
        "id": 44,
        "category": "Cookies",
        "name": "Chocolate Chip Cookies",
        "price": 3.49,
        "rating": 4.1,
        "ingredients": [
            "Butter",
            "Flour",
            "Egg",
            "Chocolate chips"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://www.modernhoney.com/wp-content/uploads/2017/11/Thin-and-Crispy-Chocolate-Chip-Cookies-2.jpg"
    },
    {
        "id": 45,
        "category": "Cookies",
        "name": "Chocolate Chip Cookies",
        "price": 3.49,
        "rating": 4.1,
        "ingredients": [
            "Butter",
            "Flour",
            "Egg",
            "Chocolate chips"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://i.pinimg.com/originals/e9/53/e0/e953e03e6c88cdf9b7f85be7952d7534.jpg"
    },
    {
        "id": 45,
        "category": "Cookies",
        "name": "Chocolate Chip Cookies",
        "price": 3.49,
        "rating": 4.1,
        "ingredients": [
            "Butter",
            "Flour",
            "Egg",
            "Chocolate chips"
        ],
        "recommended_for": [
            "Food Lovers",
            "Gourmet Enthusiasts"
        ],
        "image_url": "https://i.pinimg.com/originals/e9/53/e0/e953e03e6c88cdf9b7f85be7952d7534.jpg"
    }

]



document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:7070/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            Toastify({
                text: "Registration successful!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    color: "#fff",
                    fontSize: "12px",
                    borderRadius: "8px",
                    padding: "10px"
                }
            }).showToast();

            setTimeout(() => {
                window.location.href = "foodsugg.html"; // Redirect after notification
            }, 2000);
        } else {
            throw new Error(data.message || "Registration failed");
        }
    } catch (error) {
        Toastify({
            text: error.message || "Something went wrong!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
                color: "#fff",
                fontSize: "12px",
                borderRadius: "8px",
                padding: "8px",
            }
        }).showToast();
    }
});


// document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const res = await fetch('http://localhost:7070/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password })
//     });

//     console.log(res)

//     const data = await res.json();
//     console.log(data)
//     alert(data.message);
//     window.location.href = "foodsugg.html"
// });

// document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const res = await fetch('http://localhost:7070/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();
//     console.log(data)
//     if (data.token) {
//         localStorage.setItem('token', data.token);
//         alert("login successfull")
//         window.location.href = 'foodsugg.html';
//     } else {
//         alert('Login failed');
//     }
// });

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:7070/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    
    if (data.token) {
        localStorage.setItem('token', data.token);

        Toastify({
            text: "Login successful!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                color: "#fff",
                fontSize: "16px",
                borderRadius: "8px",
                padding: "10px"
            }
        }).showToast();

        setTimeout(() => {
            window.location.href = 'foodsugg.html';
        }, 2000); // Delay redirect slightly to show the toast
    } else {
        Toastify({
            text: "Login failed. Please check your credentials.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
                color: "#fff",
                fontSize: "16px",
                borderRadius: "8px",
                padding: "10px"
            }
        }).showToast();
    }
});


const nextBtn = document.getElementById("next-btn");
const productContainer = document.getElementById("product-container");

let currentPage = 1;
let isLoading = false;
let hasMoreProducts = true;


async function fetchProducts() {

    if (isLoading || !hasMoreProducts) 
        return;

    isLoading = true;

    setTimeout(async()=>{
    try {
        const response = await fetch(`http://localhost:7070/api/products?page=${currentPage}`, {
            method: "GET"
        });
        const data = await response.json();

        console.log(data)

        if (data.products.length) {
            displayProducts(data.products);
            currentPage++;
        } else {
            hasMoreProducts = false; // No more products to load
        }
    } catch (error) {
        console.log("Error fetching products:", error);
    }finally{isLoading=false}

},3000)
}



fetchProducts();


    






let change2 = document.getElementById("change2");
let change = document.getElementById("change");

change.addEventListener("click", () => {
    document.querySelector("#change").style.backgroundColor = "rgb(255, 220, 220)";
    document.querySelector("#bike").style.backgroundColor = "white";
    document.querySelector("#change2").style = "none";
    document.querySelector("#bike2").style = "none";
    document.querySelector("#change3").style = "none";
    document.querySelector("#bike3").style = "none";
    window.location.href="foodsugg.html"
    
})

change2.addEventListener("click", () => {
    document.querySelector("#change2").style.backgroundColor = "rgb(255, 220, 220)";
    document.querySelector("#bike2").style.backgroundColor = "white";
    document.querySelector("#change").style = "none";
    document.querySelector("#bike").style = "none";
    document.querySelector("#change3").style = "none";
    document.querySelector("#bike3").style = "none";
    window.location.href="restaurent.html"
    
})
// let change3 = document.getElementById("change3");

// change3.addEventListener("click", () => {
//     document.querySelector("#change3").style.backgroundColor = "rgb(255, 220, 220)";
//     document.querySelector("#bike3").style.backgroundColor = "white";
//     document.querySelector("#change").style = "none";
//     document.querySelector("#bike").style = "none";
//     document.querySelector("#change2").style = "none";
//     document.querySelector("#bike2").style = "none";
// })
document.getElementById("openModal").onclick = function () {
    document.getElementById("loginModal").style.display = "flex";
}
document.querySelector(".close").onclick = function () {
    document.getElementById("loginModal").style.display = "none";
}
window.onclick = function (event) {
    if (event.target == document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
}

//food data fetch
const foodSuggetions = document.getElementById("foodSuggetions");
function displayProducts(food_suggestions) {

    
    food_suggestions.forEach((product, index) => {
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

        let button = document.createElement("button");
        button.innerText = "Add to Cart";

        button.addEventListener("click", () => {
            addToCart(product, index);
            
        });
        let button2=document.createElement("button");
        button2.innerText="View details";

        button2.addEventListener("click",()=>{

            localStorage.setItem("DetailsFood",JSON.stringify(product))
            window.location.href="foodetail.html"
        })

        productBox.append(heading, img, name, price, rating, button,button2);
        foodSuggetions.append(productBox);
    });
}



let Foodcart = JSON.parse(localStorage.getItem("FoodItem"));
function addToCart(el, index) {
    // console.log(el, index)
    Foodcart.push(el);
    localStorage.setItem("FoodItem", JSON.stringify(Foodcart));

    Toastify({
        text: "Food added to your card",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        // onClick: function(){} // Callback after click
    }).showToast();

    let FoodCart = document.getElementById("FoodCart")
    FoodCart.append(Foodcart);
}

let gocard = document.getElementById("gocard");
gocard.addEventListener("click", () => {
    window.location.href="Foodcart.html"

})



// displayProducts(food_suggestions)


 //filter by price
 let filterByPrice = document.getElementById("sortbyprice");
  
 filterByPrice.addEventListener("change", function () {
   let filtered = [...food_suggestions];
   const selected = filterByPrice.options[filterByPrice.selectedIndex].value;
   if (selected == "low") {
     filtered = filtered.filter((product, index) => product.price < 5);
   }
   if (selected == "medium") {
     filtered = filtered.filter(
       (product, index) => product.price >= 6 && product.price <= 10
     );
   }
   if (selected == "high") {
     filtered = filtered.filter((product, index) => product.price >= 11);
   }
   foodSuggetions.innerHTML = "";
   displayProducts(filtered);
 });

 

//filter by ratings
let filterByRating = document.getElementById("sortbyratings");
  
filterByRating.addEventListener("change", function () {

  let filtered1 = [...food_suggestions];
  const selected = filterByRating.options[filterByRating.selectedIndex].value;
  if (selected == "low1") {
    filtered1 = filtered1.filter((product, index) => product.rating <= 2.5);
  }
  if (selected == "medium1") {
    filtered1 = filtered1.filter(
      (product, index) => product.rating > 2.5 && product.rating <= 3.5
    );
  }
  if (selected == "high1") {
    filtered1 = filtered1.filter((product, index) => product.rating > 3.5);
  }
  foodSuggetions.innerHTML = "";
  displayProducts(filtered1);
});

let loader = document.querySelector('.skeleton')
// let container = document.querySelector('.container')
setTimeout(() => {
    loader.style.display = "none";
    // container.style.display = "block";
}, 5000)


nextBtn.addEventListener("click", () => {
    currentPage++;
    fetchProducts();
});

//implementation of  search function by throtteling
async function getData2() {

    const response = await fetch(`http://localhost:7070/api/seachproducts`, {
            method: "GET",
            headers:{"Content-Type":"application/json"},
    });
    const data = await response.json();
    const data2=data.products;
    // console.log(searchBar.value);
    let query = document.getElementById("searchBar2").value.toLowerCase();
    let filtered = data2.filter((p) => p.name.toLowerCase().includes(query));
    foodSuggetions.innerHTML = "";
    displayProducts(filtered);
  }

function searchFunction2(){
    getData2();
}



// async function searchProducts() {

//     if (isLoading || !hasMoreProducts) 
//         return;

//     isLoading = true;

//     setTimeout(async()=>{
//     try {
//         const response = await fetch(`http://localhost:7070/api/seachproducts`, {
//             method: "GET"
//         });
//         const data = await response.json();

//         console.log(data)

//     //     if (data.products.length) {
//     //         displayProducts(data.products);
//     //         currentPage++;
//     //     } else {
//     //         hasMoreProducts = false; // No more products to load
//     //     }
//     } 
//     catch (error) {
//         console.log("Error fetching products:", error);
//     }finally{isLoading=false}

// },3000)
// }



// searchProducts();


    