import React from "react";
import LinkBox from "./_shared/LinkBox";
import Image from "next/image";

const Links = () => {
  return (
    <div className="flex flex-row gap-5">
      <LinkBox imageUrl="/linkedin-icon.svg" text="Text 1" />
      <div className="flex-2 bg-white rounded-xl flex items-center pl-4">
        <input
          type="email"
          placeholder="Let's Talk -@gmail.com"
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
      <LinkBox imageUrl="/x.svg" text="Text 3" />
    </div>
  );
};

export default Links;
