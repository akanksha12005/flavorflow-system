import RestaurantCard from "@/components/RestaurantCard";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";

const restaurants = [
  {
    id: 1,
    name: "Bella Vista Italian",
    image: restaurant1,
    rating: 4.5,
    deliveryTime: "25-30 min",
    cuisines: ["Italian", "Pizza", "Pasta"],
    deliveryFee: "Free delivery",
    offer: "20% OFF"
  },
  {
    id: 2,
    name: "Mario's Pizzeria",
    image: restaurant2,
    rating: 4.3,
    deliveryTime: "20-25 min",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    deliveryFee: "$2.99 delivery",
    offer: "Buy 1 Get 1"
  },
  {
    id: 3,
    name: "Sakura Sushi Bar",
    image: restaurant3,
    rating: 4.7,
    deliveryTime: "30-35 min",
    cuisines: ["Japanese", "Sushi", "Asian"],
    deliveryFee: "Free delivery"
  },
  {
    id: 4,
    name: "Spice Garden",
    image: restaurant1,
    rating: 4.4,
    deliveryTime: "25-30 min",
    cuisines: ["Indian", "Curry", "Vegetarian"],
    deliveryFee: "$1.99 delivery",
    offer: "30% OFF"
  },
  {
    id: 5,
    name: "Burger Palace",
    image: restaurant2,
    rating: 4.2,
    deliveryTime: "15-20 min",
    cuisines: ["American", "Burgers", "Fast Food"],
    deliveryFee: "Free delivery"
  },
  {
    id: 6,
    name: "Dragon Wok",
    image: restaurant3,
    rating: 4.6,
    deliveryTime: "20-25 min",
    cuisines: ["Chinese", "Asian", "Noodles"],
    deliveryFee: "$2.49 delivery",
    offer: "15% OFF"
  }
];

const RestaurantSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Popular Restaurants
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing local restaurants and get your favorite food delivered in minutes
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Featured Near You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.slice(0, 3).map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>

        {/* All Restaurants */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">All Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;