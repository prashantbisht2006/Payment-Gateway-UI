"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiry: string;
  setExpiry: React.Dispatch<React.SetStateAction<string>>;
  total: string;
  validateCardDetails: () => void;
  theme: string; // 👈 Added theme prop
};

export default function CardPayment({
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  total,
  validateCardDetails,
  theme,
}: Props) {
  const formatCard = (val: string) => {
    return val
      .replace(/\D/g, "")
      .substring(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
    <Card className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
      <CardContent className="space-y-4 p-6">
        <CardTitle className="text-center text-lg font-bold">Add New Card</CardTitle>

        <div className="space-y-2">
          <Label>Cardholder Name</Label>
          <Input placeholder="Name" className="text-black" />
        </div>

        <div className="space-y-2">
          <Label>Card Number</Label>
          <Input
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCard(e.target.value))}
            placeholder="XXXX XXXX XXXX XXXX"
            className="text-black"
          />
        </div>

        <div className="space-y-2">
          <Label>CVV</Label>
          <Input placeholder="XXX" className="text-black" />
        </div>

        <div className="space-y-2">
          <Label>Expiry</Label>
          <Input
            type="month"
            min="2024-04"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="flex justify-between font-semibold text-base">
          <span>Total:</span> ₹{total}
        </div>

        <Button
          onClick={validateCardDetails}
          className={`w-full font-semibold ${
            theme === "dark"
              ? "bg-indigo-500 hover:bg-indigo-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
}
