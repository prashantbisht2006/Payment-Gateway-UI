"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  upiId: string;
  setUpiId: React.Dispatch<React.SetStateAction<string>>;
  total: string;
  validateUPI: () => void;
  theme: string;
};

export default function UPIPayment({ upiId, setUpiId, total, validateUPI, theme }: Props) {
  return (
    <Card className={`shadow-md rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <CardContent className="space-y-4">
        <CardTitle className="text-center text-xl font-semibold">UPI Payment</CardTitle>

        <div className="space-y-1">
          <Label className="text-sm font-medium">Enter UPI ID</Label>
          <Input
            className={`${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"}`}
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>

        <Button
          onClick={validateUPI}
          className={`w-full font-semibold ${
            theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
}
