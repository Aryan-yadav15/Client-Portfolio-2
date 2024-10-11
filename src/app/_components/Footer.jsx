import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 flex flex-col p-10 justify-center items-center rounded-t-[24px]">
      <h1 className="text-center text-6xl text-white">Ready to Colaborate</h1>
      <p className="p-4 text-xl text-white">Lets drop your idea here</p>
      <div className="w-[20rem] h-14 bg-white rounded-xl flex items-center pl-4 ">
        <input
          type="email"
          placeholder="Let's Talk -@gmail.com\"
          className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          className="ml-2 h-full px-4 bg-gray-700 text-white rounded-md hover:bg-black"
          type="button"
        >
          <Image width={50} height={50} src="/google-gmail.svg" alt="mail" />
        </button>
      </div>
      <div className="flex flex-row pt-10 text-white  gap-10 text-xl">
        <p className="hover:text-gray-400">About</p>
        <p className="hover:text-gray-400">Insight</p>
        <p className="hover:text-gray-400">Experience</p>
        <p className="hover:text-gray-400">Work</p>
      </div>
    </div>
  );
};

export default Footer;
