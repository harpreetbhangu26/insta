import Parts from "@/components/Parts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 ">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white bg-red-500 p-3  rounded-md">
          Watch Youtube Videos without advertisements
        </h1>
        <Image
          className=""
          src="/youtube.svg"
          alt="youtube"
          height={400}
          width={500}
        />
      </div>
      <div className="mt-52 ml-28">
        <h1 className="text-xl bg-gray-800 text-white p-2 rounded-md w-64">
          Click on the search Button
        </h1>
        <Image src="/downarrow.svg" alt="arrow" height={200} width={100} />
      </div>
    </div>
  );
}
