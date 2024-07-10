"use client";
import { Ban, Clapperboard, Home, Search, SquarePlus } from "lucide-react";
import { useState } from "react";
import CameraModal from "./CameraModal";
import Link from "next/link";

function BottomBar() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };
  return (
    <div>
      <div className="flex sticky bottom-3 flex-row items-center justify-between px-4 bg-black text-white">
        <Link href={"/"}>
          <Home className="w-10 h-10" />
        </Link>

        <Link href="/search">
          <Search className="w-10 h-10" />
        </Link>

        <SquarePlus className="w-10 h-10" onClick={handleOpenCamera} />
        <Clapperboard className="w-10 h-10" />
        <Ban className="w-10 h-10" />
      </div>
      {isCameraOpen && <CameraModal onClose={handleCloseCamera} />}
    </div>
  );
}

export default BottomBar;
