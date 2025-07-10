import { Bot, Timer } from "lucide-react";
import { Input } from "./Input";
import { useRef, useState } from "react";
import React from "react";

export function Otp() {
  const inputRefs = useRef(Array(6).fill().map(() => React.createRef()));
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange =(value, index)=>{
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index]=value;
    setOtp(newOtp);
    if(value && index < 5){
        inputRefs.current[index+1].current.focus();
    }
  }

  const handleKeyDown=(e, index)=>{
    if(e.key === 'Backspace' && !otp[index] && index>0){
        inputRefs.current[index-1].current.focus();
    }
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <span className="flex justify-center text-green-400 gap-2 text-2xl mb-20">
        <Bot className="text-white" size={33} />
        Webinar<span className="text-white ml-[-10px]">.gg</span>
      </span>

      <h1 className="text-xl font-bold mb-10">Check Your Email For A Code</h1>
      <p className="text-blue-200 mb-4">
        Please enter the verification code sent to your email id{" "}
        <b>parabhleen@gmail.com</b>
      </p>

      <div className="flex justify-center gap-3">
        {otp.map((digit, i) => (
          <Input
            key={i}
            ref={inputRefs.current[i]}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        ))}
      </div>

      <div className="flex text-blue-200 justify-center mb-8 text-center items-center gap-[1px]">
        <Timer size={18} />
        09:30
      </div>

      <button className="bg-blue-200 rounded-lg w-4/6 p-2 mb-3">Verify</button>

      <p className="text-blue-200 mb-4">
        Can't find this email? Click{" "}
        <span className="text-gray-300 underline cursor-pointer">here</span> to resend
      </p>
    </div>
  );
}
