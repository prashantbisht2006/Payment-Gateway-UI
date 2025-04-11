"use client";

import { Dispatch, SetStateAction } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  amount: string;
  setAmount: Dispatch<SetStateAction<string>>;
  total: string;
  setScreen: Dispatch<SetStateAction<number>>;
  theme: string; // ✅ New prop for theme
}

export default function PaymentScreen({
  amount,
  setAmount,
  total,
  setScreen,
  theme,
}: Props) {
  return (
    <Card
      className={`shadow-lg rounded-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <CardContent className="space-y-6 p-6">
        <CardTitle className="text-center text-2xl font-semibold">Payment</CardTitle>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Funding Amount</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">₹</span>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`w-24 text-right rounded-md px-2 py-1 border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        <div className="border-t pt-2 font-bold flex justify-between text-lg">
          <span>Total Amount:</span> ₹{total}
        </div>

        <Button
          onClick={() => setScreen(2)}
          className={`w-full transition-colors ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Proceed To Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
