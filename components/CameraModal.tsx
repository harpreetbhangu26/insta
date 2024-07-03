import { useRef, useEffect } from "react";

interface CameraModalProps {
  onClose: () => void;
}

export default function CameraModal({ onClose }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => {
            track.stop();
          });
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative w-full h-full">
        <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
