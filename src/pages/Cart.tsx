import { ArrowLeft, Plus, Minus, Trash2, MapPin, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cartItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    restaurant: "Bella Vista Italian",
    price: 299,
    quantity: 1,
    isVeg: true,
    customizations: ["Regular crust", "Medium size"]
  },
  {
    id: "2",
    name: "Chicken Pepperoni",
    restaurant: "Bella Vista Italian", 
    price: 449,
    quantity: 1,
    isVeg: false,
    customizations: ["Thin crust", "Large size", "Extra cheese"]
  },
  {
    id: "3",
    name: "Garlic Bread",
    restaurant: "Bella Vista Italian",
    price: 149,
    quantity: 2,
    isVeg: true,
    customizations: ["With cheese"]
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const gstAndCharges = Math.round((subtotal - discount) * 0.06);
  const total = subtotal + deliveryFee + gstAndCharges - discount;

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      setAppliedCoupon("WELCOME10");
      setCouponCode("");
    } else {
      alert("Invalid coupon code");
    }
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
            <h1 className="text-xl font-bold">Your Cart</h1>
            <Badge variant="secondary">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Delivery Address */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Delivery Address</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Home</p>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Apartment 4B<br />
                  Downtown, City - 123456
                </p>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cart Items */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader>
            <CardTitle className="text-lg">Items from Bella Vista Italian</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className={`w-3 h-3 border ${item.isVeg ? 'border-success' : 'border-destructive'} flex items-center justify-center`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-success' : 'bg-destructive'}`}></div>
                      </div>
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                    
                    {item.customizations.length > 0 && (
                      <p className="text-xs text-muted-foreground mb-2">
                        {item.customizations.join(", ")}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">₹{item.price}</span>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive p-1">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {item.id !== cartItems[cartItems.length - 1].id && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Coupon Code */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center space-x-2">
              <Percent className="w-5 h-5" />
              <span>Apply Coupon</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-success text-success-foreground">
                    {appliedCoupon}
                  </Badge>
                  <span className="text-success text-sm font-medium">
                    You saved ₹{discount}!
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setAppliedCoupon(null)}
                  className="text-success"
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="outline"
                  onClick={applyCoupon}
                  disabled={!couponCode}
                >
                  Apply
                </Button>
              </div>
            )}
            
            <div className="mt-3 text-xs text-muted-foreground">
              Try: WELCOME10 for 10% off
            </div>
          </CardContent>
        </Card>

        {/* Bill Summary */}
        <Card className="border-0 shadow-food gradient-card">
          <CardHeader>
            <CardTitle className="text-lg">Bill Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>
            
            {appliedCoupon && (
              <div className="flex justify-between text-success">
                <span>Coupon Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              {deliveryFee === 0 ? (
                <span className="text-success">Free</span>
              ) : (
                <span>₹{deliveryFee}</span>
              )}
            </div>
            
            <div className="flex justify-between">
              <span>GST & Restaurant Charges</span>
              <span>₹{gstAndCharges}</span>
            </div>
            
            <Separator />
            
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </CardContent>
        </Card>

        {/* Checkout Button */}
        <div className="sticky bottom-4">
          <Button 
            className="w-full gradient-primary text-white py-4 text-lg font-semibold shadow-lg"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout • ₹{total}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;