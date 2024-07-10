import { Circle, Plus } from "lucide-react";
import { useRef, useEffect } from "react";

interface CameraModalProps {
  onClose: () => void;
}

export default function CameraModal({ onClose }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.log("Error accessing camera", err);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative w-full h-full">
        <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
        <Plus
          className="absolute top-4 left-4 h-16 w-16 text-white rotate-45 cursor-pointer"
          onClick={onClose}
        />
        <Circle className="absolute bottom-5 h-20 w-20 text-white right-56 bg-slate-200 rounded-full left-1/2 transform -translate-x-1/2 cursor-pointer" />
      </div>
    </div>
  );
}
