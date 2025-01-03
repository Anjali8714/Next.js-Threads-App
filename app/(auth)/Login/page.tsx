import React from "react";
import Image from "next/image";
import Formpage from "@/Components/Formpage/page";

const Login = () => {
  return (

    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center">
    
    <div className="absolute inset-x-0 top-0 h-[60vh]"> 
      <Image
        src="/Images/bg.webp" 
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />     
    </div>
    <Formpage/>
    </div>
    
  )};

export default Login;
