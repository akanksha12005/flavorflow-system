import { ArrowLeft, MapPin, Clock, Phone, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const orderSteps = [
  { 
    id: 1, 
    title: "Order Placed", 
    description: "Your order has been confirmed", 
    completed: true,
    time: "2:30 PM"
  },
  { 
    id: 2, 
    title: "Restaurant Accepted", 
    description: "Bella Vista Italian is preparing your food", 
    completed: true,
    time: "2:32 PM"
  },
  { 
    id: 3, 
    title: "Food Being Prepared", 
    description: "Your delicious meal is being cooked", 
    completed: true,
    time: "2:35 PM"
  },
  { 
    id: 4, 
    title: "Out for Delivery", 
    description: "Your food is on the way", 
    completed: false,
    time: "Expected: 3:05 PM"
  },
  { 
    id: 5, 
    title: "Delivered", 
    description: "Enjoy your meal!", 
    completed: false,
    time: "Expected: 3:15 PM"
  }
];

const orderItems = [
  { name: "Margherita Pizza", quantity: 1, price: 299 },
  { name: "Chicken Pepperoni", quantity: 1, price: 449 },
  { name: "Garlic Bread", quantity: 2, price: 149 }
];

const OrderTracking = () => {
  const navigate = useNavigate();
  const currentStep = orderSteps.findIndex(step => !step.completed) || 0;

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
            <div>
              <h1 className="text-xl font-bold">Track Order</h1>
              <p className="text-sm text-muted-foreground">Order #FE-2024-001</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Delivery Status */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Delivery Status</CardTitle>
              <Badge className="bg-primary text-primary-foreground">
                In Progress
              </Badge>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Expected delivery: 3:15 PM</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <div key={step.id} className="flex items-start space-x-3">
                  {/* Step Indicator */}
                  <div className="flex flex-col items-center">
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : index === currentStep ? (
                      <Circle className="w-6 h-6 text-primary animate-pulse" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                    {index < orderSteps.length - 1 && (
                      <div className={`w-0.5 h-8 mt-2 ${
                        step.completed ? 'bg-success' : 'bg-muted'
                      }`} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${
                        step.completed ? 'text-foreground' : 
                        index === currentStep ? 'text-primary' : 
                        'text-muted-foreground'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Info */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader>
            <CardTitle className="text-lg">Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Delivering to</p>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Apartment 4B<br />
                  Downtown, City - 123456
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Delivery Partner</p>
                <p className="text-sm text-muted-foreground">
                  Raj Kumar • +91 98765 43210
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Call Delivery Partner
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader>
            <CardTitle className="text-lg">Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                  </div>
                  <span className="font-medium">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹897</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span className="text-success">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST & Restaurant Charges</span>
                <span>₹51</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                <span>Total</span>
                <span>₹948</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate("/help")}
          >
            Need Help?
          </Button>
          <Button 
            className="w-full gradient-primary text-white"
            onClick={() => navigate("/")}
          >
            Order Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;