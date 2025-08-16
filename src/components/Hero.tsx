import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFood} 
          alt="Delicious food spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Favorite Food
          <span className="block gradient-primary bg-clip-text text-transparent">
            Delivered Fast
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Discover the best restaurants and cuisines in your area. 
          Fast delivery, great taste, unbeatable prices.
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-food">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Location Input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Enter your delivery location" 
                  className="pl-12 h-12 border-muted text-foreground bg-background"
                />
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search for restaurants or dishes" 
                  className="pl-12 h-12 border-muted text-foreground bg-background"
                />
              </div>
            </div>

            <Button className="w-full md:w-auto mt-4 h-12 px-8 gradient-primary text-white hover:opacity-90 transition-smooth">
              Find Food
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">1000+</div>
            <div className="text-sm text-white/80">Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">30min</div>
            <div className="text-sm text-white/80">Fast Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.8★</div>
            <div className="text-sm text-white/80">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;