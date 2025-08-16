import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", active: true, color: "bg-primary" },
  { name: "Pizza", active: false, color: "bg-food-red" },
  { name: "Burgers", active: false, color: "bg-food-orange" },
  { name: "Sushi", active: false, color: "bg-food-green" },
  { name: "Indian", active: false, color: "bg-food-yellow" },
  { name: "Chinese", active: false, color: "bg-accent" },
  { name: "Mexican", active: false, color: "bg-secondary" },
  { name: "Italian", active: false, color: "bg-destructive" },
];

const CategoryFilter = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Browse by Category</h2>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Badge
            key={index}
            variant={category.active ? "default" : "secondary"}
            className={`
              cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105
              ${category.active 
                ? 'gradient-primary text-white shadow-md' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }
            `}
          >
            {category.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;