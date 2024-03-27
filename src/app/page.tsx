import Image from "next/image";
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";

function HomePage() {
  return (
    <div className="bg-blue-900 min-h-screen">
      <div className=" w-[40%] mx-auto pt-32 text-white">
        <h2 className="text-blue-300 text-[30px] text-center">John wick</h2>
        <h4>Actor and Artist</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          exercitationem ad laudantium maxime at, ratione assumenda provident,
          modi corporis error voluptatibus voluptates. Atque reprehenderit
          veritatis ullam error quos nam molestiae.
        </p>

        <div className="flex items-start justify-center gap-10">
          <FaSquareFacebook className="text-red-500 text-[20px]" />
          <FaSquareFacebook className="text-red-500 text-[20px]" />
          <FaSquareFacebook className="text-red-500 text-[20px]" />
        </div>

        <Image
          src="/images/img1.jpg"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />

        {/* <img
          src="/images/img1.jpg"
          alt=""
          className="h-[200px] w-[200px] rounded-full"
        /> */}
      </div>
    </div>
  );
}

export default HomePage;
