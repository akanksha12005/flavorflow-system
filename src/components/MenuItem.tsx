import { Plus, Minus, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  rating: number;
  category: string;
  spiceLevel?: number;
}

const MenuItem = ({
  id,
  name,
  description,
  price,
  image,
  isVeg,
  rating,
  category,
  spiceLevel
}: MenuItemProps) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(prev => prev + 1);
    // TODO: Add to cart logic when Supabase is connected
    console.log(`Added ${name} to cart`);
  };

  const removeFromCart = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      // TODO: Remove from cart logic when Supabase is connected
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-food hover:shadow-lg transition-all duration-300 gradient-card">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          
          {/* Veg/Non-veg indicator */}
          <div className="absolute top-2 left-2">
            <div className={`w-4 h-4 border-2 ${isVeg ? 'border-success' : 'border-destructive'} flex items-center justify-center`}>
              <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-success' : 'bg-destructive'}`}></div>
            </div>
          </div>

          {/* Spice Level */}
          {spiceLevel && (
            <div className="absolute top-2 right-2 flex">
              {[...Array(spiceLevel)].map((_, i) => (
                <span key={i} className="text-red-500 text-xs">🌶️</span>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-card-foreground mb-1">{name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary" className="text-xs">{category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-warning text-warning" />
                  <span className="text-xs text-muted-foreground">{rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">₹{price}</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>

          {/* Add to Cart Controls */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {isVeg ? "🟢 Pure Veg" : "🔴 Non-Veg"}
            </div>
            
            {quantity === 0 ? (
              <Button 
                onClick={addToCart}
                className="gradient-primary text-white hover:opacity-90 transition-smooth"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  onClick={removeFromCart}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <Button
                  onClick={addToCart}
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MenuItem;