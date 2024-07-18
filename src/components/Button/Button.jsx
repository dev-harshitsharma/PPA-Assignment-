import React from "react";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="px-5 py-2 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white">
        {text}
      </button>
    </Link>
  );
};

export default Button;
