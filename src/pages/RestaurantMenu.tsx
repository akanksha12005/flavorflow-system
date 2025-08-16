import { ArrowLeft, Star, Clock, MapPin, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItem from "@/components/MenuItem";
import { useNavigate } from "react-router-dom";
import restaurant1 from "@/assets/restaurant-1.jpg";

const menuItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, olive oil on a crispy thin crust",
    price: 299,
    image: restaurant1,
    isVeg: true,
    rating: 4.5,
    category: "Pizza"
  },
  {
    id: "2", 
    name: "Chicken Pepperoni",
    description: "Spicy pepperoni, mozzarella cheese, tomato sauce, oregano",
    price: 449,
    image: restaurant1,
    isVeg: false,
    rating: 4.7,
    category: "Pizza",
    spiceLevel: 2
  },
  {
    id: "3",
    name: "Garlic Bread",
    description: "Fresh bread with garlic butter, herbs, and melted cheese",
    price: 149,
    image: restaurant1,
    isVeg: true,
    rating: 4.3,
    category: "Starters"
  },
  {
    id: "4",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, caesar dressing",
    price: 199,
    image: restaurant1,
    isVeg: true,
    rating: 4.2,
    category: "Salads"
  },
  {
    id: "5",
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip and celery sticks",
    price: 329,
    image: restaurant1,
    isVeg: false,
    rating: 4.6,
    category: "Starters",
    spiceLevel: 3
  },
  {
    id: "6",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 179,
    image: restaurant1,
    isVeg: true,
    rating: 4.8,
    category: "Desserts"
  }
];

const categories = ["All", "Pizza", "Starters", "Salads", "Desserts"];

const RestaurantMenu = () => {
  const navigate = useNavigate();

  const getFilteredItems = (category: string) => {
    if (category === "All") return menuItems;
    return menuItems.filter(item => item.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Bella Vista Italian</h1>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="relative">
        <img 
          src={restaurant1} 
          alt="Bella Vista Italian" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Bella Vista Italian</h1>
          <p className="text-white/90 mb-3">Authentic Italian cuisine with fresh ingredients</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="font-medium">4.5</span>
              <span className="text-sm">(250+ reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>25-30 min</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>2.5 km away</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge className="bg-success text-success-foreground">Free Delivery</Badge>
            <Badge className="bg-accent text-accent-foreground">20% OFF</Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button variant="secondary" size="icon" className="bg-white/90">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-white/90">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {category === "All" ? "Full Menu" : category}
                </h2>
                <span className="text-muted-foreground">
                  {getFilteredItems(category).length} items
                </span>
              </div>
              
              <div className="space-y-4">
                {getFilteredItems(category).map((item) => (
                  <MenuItem key={item.id} {...item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <Button className="w-full gradient-primary text-white py-4 text-lg font-semibold shadow-lg">
          View Cart • ₹748 • 3 items
        </Button>
      </div>
    </div>
  );
};

export default RestaurantMenu;