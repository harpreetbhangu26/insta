import Adver from "@/components/Advert";
import Parts from "@/components/Parts";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  return (
    <div className="p-4 m-20">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white bg-red-500 p-3  rounded-md">
          Watch Youtube Videos without advertisements
        </h1>
        <Link href="/search">
          <Image
            className=""
            src="/youtube.svg"
            alt="youtube"
            height={200}
            width={400}
          />
        </Link>
      </div>
      <Adver />
      <div>
        <h1>This website is created by your Hero No One</h1>
        <Image
          className="rounded-full"
          src="/mypic.jpg"
          alt="pic"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
