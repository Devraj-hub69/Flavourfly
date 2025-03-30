//for foodrow-slider
const food_slider = document.querySelector('.fslider');
const food_slides = document.querySelectorAll('#foodrow-slider > div');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const total_food_Slides = food_slides.length;
let currentI = 0;

function updateSlider() {
    food_slider.style.transform = `translateX(-${currentI * 170}px)`;
    food_slider.style.transition = 'transform 0.5s ease-in-out'; 

    if (currentI === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentI === total_food_Slides - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

prevButton.addEventListener('click', () => {
    if (currentI > 0) {
        currentI--;
        updateSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (currentI < total_food_Slides - 1) {
        currentI++;
        updateSlider();
    }
});

updateSlider();



//debouncing
let debounceTimeout;

// Updated local data with your new entries
const mealsData = [
  { id: 1, category: "Pizza", name: "Margherita Pizza" },
  { id: 2, category: "Pizza", name: "Pepperoni Pizza" },
  { id: 3, category: "Pizza", name: "BBQ Chicken Pizza" },
  { id: 4, category: "Pizza", name: "Veggie Supreme Pizza" },
  { id: 5, category: "Burgers", name: "Classic Beef Burger" },
  { id: 6, category: "Burgers", name: "Veggie Burger" },
  { id: 7, category: "Burgers", name: "Chicken Burger" },
  { id: 8, category: "Burgers", name: "Cheese Burger" },
  { id: 9, category: "Desserts", name: "Chocolate Brownie" },
  { id: 10, category: "Desserts", name: "Cheesecake" },
  { id: 11, category: "Desserts", name: "Tiramisu" },
  { id: 12, category: "Desserts", name: "Apple Pie" },
  { id: 13, category: "Drinks", name: "Mango Smoothie" },
  { id: 14, category: "Drinks", name: "Iced Coffee" },
  { id: 15, category: "Drinks", name: "Green Tea" },
  { id: 16, category: "Drinks", name: "Strawberry Shake" },
  { id: 17, category: "Croissant", name: "Romanian Croissant" },
  { id: 18, category: "Croissant", name: "French Croissant" },
  { id: 19, category: "Croissant", name: "Chocolate Croissant" },
  { id: 20, category: "Croissant", name: "Strawberry Croissant" },
  { id: 21, category: "Donut", name: "Cinnamon Drizzle" },
  { id: 22, category: "Donut", name: "Chocolate Sprinkle Donut" },
  { id: 23, category: "Donut", name: "Oreo Crumble" },
  { id: 24, category: "Coffee", name: "Black Coffee" },
  { id: 25, category: "Coffee", name: "Iced Coffee" },
  { id: 26, category: "Coffee", name: "Cappuccino" },
  { id: 27, category: "Coffee", name: "Latte" },
  { id: 28, category: "Sandwiches", name: "Vegetable Sandwich" },
  { id: 29, category: "Sandwiches", name: "Chicken Sandwich" },
  { id: 30, category: "Sandwiches", name: "Cheesy Chicken Grilled Sandwich" },
  { id: 31, category: "Cake", name: "Cup Cakes" },
  { id: 32, category: "Cake", name: "Choco Lava Cake" },
  { id: 33, category: "Cake", name: "White Forest Cake" },
  { id: 34, category: "Cake", name: "Black Forest Cake" },
  { id: 35, category: "Soup", name: "Chicken Soup" },
  { id: 36, category: "Soup", name: "Vegg Clear Soup" },
  { id: 37, category: "Soup", name: "Chinese Soup" },
  { id: 38, category: "Salad", name: "Chicken Salad" },
  { id: 39, category: "Salad", name: "Vegetable Salad" },
  { id: 40, category: "Salad", name: "Fruit Salad" },
  { id: 41, category: "Wrap", name: "Chicken Wrap" },
  { id: 42, category: "Wrap", name: "Veg Wrap" },
  { id: 43, category: "Wrap", name: "Egg Wrap" },
  { id: 44, category: "Cookies", name: "Chocolate Chip Cookies" }
];

// Debouncing function to delay API or search calls
function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Function to fetch suggestions from local data
function fetchSearchSuggestions(query) {
  try {
    // Filter mealsData to match the query
    const filteredMeals = mealsData.filter(meal =>
      meal.name.toLowerCase().includes(query.toLowerCase())
    );

    displaySuggestions(filteredMeals); // Show filtered results
  } catch (error) {
    console.error('Error:', error);
  }
}

// Populate the suggestion bar with fetched data
function displaySuggestions(meals) {
  const suggestionsContainer = document.getElementById('search-suggestions');
  suggestionsContainer.innerHTML = ''; // Clear previous suggestions
  if (meals.length) {
    meals.forEach((meal) => {
      const suggestion = document.createElement('div');
      suggestion.className = 'suggestion';
      suggestion.textContent = meal.name; // Display meal name only
      suggestionsContainer.appendChild(suggestion);
    });
  } else {
    suggestionsContainer.textContent = 'No suggestions found';
  }
}

// Handle input events with debouncing
document.querySelector('#search-container input').addEventListener(
  'input',
  debounce((event) => {
    const query = event.target.value.trim();
    if (query) {
      fetchSearchSuggestions(query);
      document.getElementById('search-suggestions').style.display = 'block';
    } else {
      document.getElementById('search-suggestions').style.display = 'none';
    }
  }, 300)
);

// Ensure suggestions appear only when the input field is active
const searchInput = document.querySelector('#search-container input');
const suggestionsContainer = document.getElementById('search-suggestions');

searchInput.addEventListener('focus', () => {
  suggestionsContainer.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    suggestionsContainer.style.display = 'none';
  }, 200); // Short delay to allow clicking on suggestions
});

//end of search


//image sliding
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 5000); // Change slide every 3 seconds


//Restaurants section
const initialRestaurants = [
    {
        name: "Aminia",
        image: "https://b.zmtcdn.com/data/pictures/2/18896202/a2f8116f56329e9ea7a3e5fb908d8214_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐⭐",
        url: "restaurant1.html",
        category: "North Indian, Biryani, Kebabs"
    },
    {
        name: "Sanghai-Flavors of China",
        image: "https://b.zmtcdn.com/data/pictures/0/20225470/fc00bbf9412384e3b70b3c96b1b0c337_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐⭐⭐",
        url: "restaurant2.html",
        category:"Chinese, sichuan, Asian"
    },
    {
        name: "Oudh 1590",
        image: "https://b.zmtcdn.com/data/pictures/5/19925525/56fba03170ad8bdbfd238546c534ba02_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐",
        url: "restaurant3.html",
        category:"North Indian, Kebab, Biryani"
    },
    {
        name: "Kasturi Restaurant",
        image: "https://b.zmtcdn.com/data/pictures/3/18663023/5b39500ddf2941900b719dbb5b328320_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐⭐⭐",
        url: "restaurant4.html",
        category:"Bengali, Bangladeshi, Seafood, Desserts, Shake"
    },
    {
        name: "Hatari",
        image: "https://b.zmtcdn.com/data/pictures/8/20200558/43eafeed94bf554d805f6c88313956a4_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐",
        url: "restaurant5.html",
        category:"Chinese, North Indian, Biryani, Mughlai"
    },
    {
        name: "The fit foodie",
        image: "https://b.zmtcdn.com/data/pictures/3/19566203/b21cf624489ef5fee71958e667caa505_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐⭐",
        url: "restaurant6.html",
        category:"Healthy Food, Salad, Beverages"
    },
    {
        name: "Silver Dragon",
        image: "https://b.zmtcdn.com/data/pictures/0/21693780/52646bb7b0a8fc51d56e48033bb8cd0b_featured_v2.jpg?output-format=webp",
        rating: "⭐⭐⭐⭐⭐",
        url: "restaurant7.html",
        category:"North Indian, Chinese, Mughlai"
    },
    {
        name: "Luxe Billiard N Cafe",
        image: "https://b.zmtcdn.com/data/pictures/0/19356990/6490999454311e018323f7673e817011_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant8.html",
        category:"Cafe, Fast Food, Beverages"
    },
    {
        name: "Cafe Frespresso",
        image: "https://b.zmtcdn.com/data/pictures/1/19292291/bc53a9239b15dec6fd656de26b1a2b81_featured_v2.jpg",
        rating: "⭐⭐⭐⭐",
        url: "restaurant9.html",
        category:"Pizza, Burger,Sandwiches"
    },
    {
        name: "KFC",
        image: "https://b.zmtcdn.com/data/pictures/chains/7/20287/146ff4f5f9effc840471afed23c6bfd1_featured_v2.jpg",
        rating: "⭐⭐⭐⭐⭐",
        url: "restaurant10.html",
        category:"Fast Food, Burger, Beverages"
    },
    {
        name: "Domino's Pizza",
        image: "https://b.zmtcdn.com/data/pictures/chains/2/20172/2dc1f598b7cc18df67a5c043f6109a6e_featured_v2.jpg",
        rating: "⭐⭐⭐⭐",
        url: "restaurant11.html",
        category:"Pizza, Fast Food"
    },
    {
        name: "Baskin Robbins",
        image: "https://b.zmtcdn.com/data/pictures/2/19733302/ac55da5bf52bd6e7a9e7eff2873c9d95_o2_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant12.html",
        category:"Ice Cream, Desserts"
    }
  ];
  // Additional data to load
let additionalRestaurants = [ 
    {
        name: "Momo I Am",
        image: "https://b.zmtcdn.com/data/pictures/chains/0/21060/92f27ec5a982c3c7ef0a984a9ffdc832_featured_v2.jpg",
        rating: "⭐⭐⭐⭐⭐",
        url: "restaurant4.html",
        category: "Tibetan, Nepalese, Chinese"
    },
    {
        name: "360 Barbecue",
        image: "https://b.zmtcdn.com/data/pictures/0/19935140/e2f477e0cf98a75c27a2411d57b848a5_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant5.html",
        category: "BBQ, Chinese, North Indian"
    },
    {
        name: "Bread and Butter",
        image:"https://b.zmtcdn.com/data/pictures/6/19763256/8a14d395875ef00d0c113ae7d0d18b27_featured_v2.jpg",
        rating: "⭐⭐⭐⭐",
        url: "restaurant6.html",
        category: "Continental, Italian, North Indian"
    },
    {
        name: "The belgian waffle co.",
        image:"https://b.zmtcdn.com/data/pictures/chains/5/18573295/7f2d91a589b07cbf7282e68a5ec33023_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant6.html",
        category: "waffles, Desserts"
    },
    {
        name: "Dream Bar and restaurant",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/23348/1a199e0a24638bc1c03fc3caf5f905b6_featured_v2.jpg",
        rating: "⭐⭐⭐⭐",
        url: "restaurant6.html",
        category: "North Indian, Chinese, Mughlai"
    },
    {
        name: "Ubique",
        image: "https://b.zmtcdn.com/data/pictures/7/19554087/f5fe6b8081b69efafb01381aa20b1c2e_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant5.html",
        category: "North Indian, Chinese, Mughlai"
    },
    {
        name: "South Junction",
        image: "https://b.zmtcdn.com/data/pictures/chains/2/19291992/2571c82aed8565b16b9ff57d5b4a5a14_featured_v2.jpg",
        rating: "⭐⭐⭐",
        url: "restaurant5.html",
        category: "South Indian"
    }
  ];
  
// Dynamically create restaurant cards
// Function to render restaurants
// Function to show the skeleton loader dynamically
function showSkeletonLoader() {
  const container = document.getElementById("restaurant-container");
  for (let i = 0; i < 12; i++) { // Adjust the count for skeletons
    const skeletonCard = document.createElement("div");
    skeletonCard.className = "skeleton-card";
    skeletonCard.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-button"></div>
    `;
    container.appendChild(skeletonCard);
  }
}

// Function to remove skeleton loader
function removeSkeletonLoader() {
  const container = document.getElementById("restaurant-container");
  const skeletonCards = document.querySelectorAll(".skeleton-card");
  skeletonCards.forEach((card) => container.removeChild(card));
}
// Function to render restaurants with a simulated loading state
function renderRestaurantsWithLoader(data) {
  showSkeletonLoader();
  setTimeout(() => {
    removeSkeletonLoader(); // Remove the skeleton
    renderRestaurants(data); // Render the actual restaurant cards
  }, 2000); // Simulates a 2-second delay
}

// Function to dynamically create restaurant cards
function renderRestaurants(data) {
  const container = document.getElementById("restaurant-container");
  console.log("Container:", container); // Debugging line
  data.forEach((restaurant) => {
      console.log("Restaurant:", restaurant); // Debugging line
      const card = document.createElement("div");
      card.className = "restaurant";
      card.innerHTML = `
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h3>${restaurant.name}</h3>
          <p>Rating: ${restaurant.rating}</p>
          <p>Category: ${restaurant.category}</p>
      `;
      card.addEventListener("click", () => {
          window.location.href = restaurant.url;
      });
      container.appendChild(card);
  });
}
// Initial render with skeleton loader
renderRestaurantsWithLoader(initialRestaurants);

// Load More button functionality
const loadMoreBtn = document.getElementById("load-more-btn");
loadMoreBtn.addEventListener("click", () => {
renderRestaurantsWithLoader(additionalRestaurants);
loadMoreBtn.style.display = "none"; // Hide the button after loading
});


