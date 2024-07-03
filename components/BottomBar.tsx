"use client";
import { Ban, Clapperboard, Home, Search, SquarePlus } from "lucide-react";
import { useState } from "react";
import CameraModal from "./CameraModal";

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
      <div className="flex flex-row items-center justify-between px-4">
        <Home className="w-10 h-10" />
        <Search className="w-10 h-10" />
        <SquarePlus className="w-10 h-10" onClick={handleOpenCamera} />
        <Clapperboard className="w-10 h-10" />
        <Ban className="w-10 h-10" />
      </div>
      {isCameraOpen && <CameraModal onClose={handleCloseCamera} />}
    </div>
  );
}

export default BottomBar;
