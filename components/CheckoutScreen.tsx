"use client";

import { Dispatch, SetStateAction } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  setScreen: Dispatch<SetStateAction<number>>;
  selectedMethod: string;
  setSelectedMethod: Dispatch<SetStateAction<string>>;
  total: string;
  theme: string; // new prop for dynamic color styling
}

export default function CheckoutScreen({
  setScreen,
  selectedMethod,
  setSelectedMethod,
  total,
  theme,
}: Props) {
  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    setScreen(method === "Card" ? 3 : method === "Netbanking" ? 4 : 5);
  };

  return (
    <Card className={`shadow-xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <CardContent className="space-y-4">
        <CardTitle className="text-center text-xl font-semibold">Payment Method</CardTitle>
        <Label className="text-sm font-medium">Select Payment</Label>

        <div className="grid grid-cols-3 gap-4">
          {[
            {
              method: "Card",
              img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png",
            },
            {
              method: "Netbanking",
              img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/State-Bank-of-India-Logo.svg",
            },
            {
              method: "UPI",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg",
            },
          ].map(({ method, img }) => (
            <button
              key={method}
              onClick={() => handleSelect(method)}
              className={`border rounded-lg p-2 bg-opacity-20 hover:bg-opacity-40 transition ${
                selectedMethod === method
                  ? theme === "dark"
                    ? "ring-2 ring-white bg-gray-700"
                    : "ring-2 ring-black bg-gray-200"
                  : theme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >
              <img src={img} alt={method} className="h-8 mx-auto" />
            </button>
          ))}
        </div>

        <div className="flex justify-between font-bold">
          <span>Total:</span> <span>₹{total}</span>
        </div>

        <Button
          className={`w-full font-semibold ${
            theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
          }`}
          onClick={() => setScreen(3)}
        >
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
}
