"use client";

import { useState } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import PaymentScreen from "@/components/PaymentScreen";
import CheckoutScreen from "@/components/CheckoutScreen";
import CardPayment from "@/components/CardPayment";
import NetBanking from "@/components/NetBanking";
import UPIPayment from "@/components/UpiPayment";

export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const [screen, setScreen] = useState(1);
  const [amount, setAmount] = useState("12.99");

  const [selectedMethod, setSelectedMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bank, setBank] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const total = parseFloat(amount || "0").toFixed(2);

  const validateUPI = () => {
    if (!/^\w+@[\w.]+$/.test(upiId)) {
      alert("Enter valid UPI ID");
      return;
    }
    alert("UPI Payment Successful!");
  };

  const validateNetBanking = () => {
    if (!bank || !userid || !password) {
      alert("Fill all net banking fields");
      return;
    }
    alert("Net Banking Payment Successful!");
  };

  const validateCardDetails = () => {
    const raw = cardNumber.replace(/\s/g, "");
    if (!/^\d{16}$/.test(raw)) {
      alert("Card number must be 16 digits");
      return;
    }
    if (!expiry) {
      alert("Select expiry date");
      return;
    }
    const exp = new Date(`${expiry}-01`);
    exp.setMonth(exp.getMonth() + 1);
    if (exp <= new Date()) {
      alert("Expiry must be in the future");
      return;
    }
    alert("Card Payment Successful!");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Theme toggle */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>

      {/* Main content container */}
      <div className="w-full max-w-md space-y-6">
        {screen === 1 && (
          <PaymentScreen
            amount={amount}
            setAmount={setAmount}
            total={total}
            setScreen={setScreen}
            theme={theme}
          />
        )}

        {screen === 2 && (
          <CheckoutScreen
            setScreen={setScreen}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            total={total}
            theme={theme}
          />
        )}

        {screen === 3 && (
          <CardPayment
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiry={expiry}
            setExpiry={setExpiry}
            total={total}
            validateCardDetails={validateCardDetails}
            theme={theme}
          />
        )}

        {screen === 4 && (
          <NetBanking
            bank={bank}
            setBank={setBank}
            userid={userid}
            setUserid={setUserid}
            password={password}
            setPassword={setPassword}
            total={total}
            validateNetBanking={validateNetBanking}
            theme={theme}
          />
        )}

        {screen === 5 && (
          <UPIPayment
            upiId={upiId}
            setUpiId={setUpiId}
            total={total}
            validateUPI={validateUPI}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}
