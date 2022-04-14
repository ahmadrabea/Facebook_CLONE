import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LogIn = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt=""
      />
      <div
        onClick={signIn}
        className="px-3 py-2 rounded-full bg-blue-600 text-white font-semibold m-2 cursor-pointer"
      >
        LogIn with Facebook
      </div>
    </div>
  );
};

export default LogIn;
