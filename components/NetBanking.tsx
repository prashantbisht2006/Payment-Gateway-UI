"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  bank: string;
  setBank: React.Dispatch<React.SetStateAction<string>>;
  userid: string;
  setUserid: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  total: string;
  validateNetBanking: () => void;
  theme: string;
};

export default function NetBanking({
  bank,
  setBank,
  userid,
  setUserid,
  password,
  setPassword,
  total,
  validateNetBanking,
  theme,
}: Props) {
  const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Axis Bank",
    "Canara Bank",
    "Kotak Mahindra Bank",
    "Union Bank of India",
    "IDFC FIRST Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Bank of India",
    "Central Bank of India",
    "Indian Overseas Bank",
    "UCO Bank",
    "Bank of Maharashtra",
    "Indian Bank",
    "Federal Bank",
    "South Indian Bank",
  ];

  return (
    <Card className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
      <CardContent className="space-y-4 p-6">
        <CardTitle className="text-center text-lg font-bold">Net Banking</CardTitle>

        {/* ✅ Bank Dropdown */}
        <div className="space-y-2">
          <Label>Select Bank</Label>
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <option value="">-- Choose a Bank --</option>
            {banks.map((bankName) => (
              <option key={bankName} value={bankName}>
                {bankName}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ User ID Field */}
        <div className="space-y-2">
          <Label>User ID</Label>
          <Input
            placeholder="User ID"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            className="text-black"
          />
        </div>

        {/* ✅ Password Field */}
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black"
          />
        </div>

        <div className="flex justify-between font-semibold text-base">
          <span>Total:</span> ₹{total}
        </div>

        <Button
          onClick={validateNetBanking}
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
