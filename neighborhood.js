const RestaurantBtn = document.querySelector('#restaurantBtn');

function randomRestaurantRecommendation(){
    const randomRestaurants = ["Grand Vin", "Il Tavolo", "Touch the Heart"];
    
    const random = Math.floor(Math.random() * randomRestaurants.length);
    console.log(random, randomRestaurants[random]);
}

RestaurantBtn.addEventListener('click', randomRestaurantRecommendation);

