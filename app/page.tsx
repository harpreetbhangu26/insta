import Parts from "@/components/Parts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 text-black">
      <div className="border-green-600 bg-green-500 p-4 text-2xl flex items-center justify-between  ">
        <h1 className="bg-white p-2 rounded-md">Learn Punjabi lanuguage</h1>
        <div className="skew-y-6 ">
          <Image src="/punjab.png" alt="punjab " height={70} width={90} />
        </div>
      </div>
      <div className="mt-6">
        <Parts />
      </div>
    </div>
  );
}
