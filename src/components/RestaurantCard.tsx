import { Star, Clock, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  deliveryFee: string;
  offer?: string;
}

const RestaurantCard = ({ 
  name, 
  image, 
  rating, 
  deliveryTime, 
  cuisines, 
  deliveryFee,
  offer 
}: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-0 shadow-food hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gradient-card"
      onClick={() => navigate("/restaurant-menu")}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Offer Badge */}
        {offer && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-accent text-accent-foreground font-semibold">
              {offer}
            </Badge>
          </div>
        )}

        {/* Delivery Time Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>{deliveryTime}</span>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1 bg-success/10 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-success text-success" />
            <span className="text-sm font-semibold text-success">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({Math.floor(Math.random() * 1000) + 100}+ reviews)</span>
        </div>

        {/* Cuisines */}
        <div className="flex flex-wrap gap-1 mb-3">
          {cuisines.slice(0, 3).map((cuisine, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {cuisine}
            </Badge>
          ))}
          {cuisines.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{cuisines.length - 3}
            </Badge>
          )}
        </div>

        {/* Delivery Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>{deliveryFee}</span>
          </div>
          <span>• {deliveryTime}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;