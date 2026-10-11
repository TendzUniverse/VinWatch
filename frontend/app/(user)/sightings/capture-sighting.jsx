import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  Image as GalleryIcon, 
  RefreshCw, 
  AlertTriangle, 
  Signal, 
  Wifi, 
  Battery, 
  Check 
} from 'lucide-react';

export default function App() {
  const [flashOn, setFlashOn] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleShutterClick = () => {
    if (capturing) return;
    setCapturing(true);

    // Flash animation trigger
    setTimeout(() => {
      setCapturing(false);
      setCapturedImage('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=400');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-2 sm:p-4 font-sans select-none">
      
      {/* Device Frame */}
      <div className="w-full max-w-[400px] h-[844px] bg-[#090a0f] rounded-[44px] overflow-hidden relative flex flex-col border border-[#1a1a22] shadow-[0_0_50px_rgba(0,0,0,0.9)] my-auto">
        
        { }
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-30 flex-shrink-0 text-white">
          <span className="text-xs font-semibold tracking-tight">9:41</span>
          
          {/* Dynamic Island */}
          <div className="w-28 h-7 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5"></div>
          
          <div className="flex items-center space-x-1.5">
            <Signal size={13} />
            <Wifi size={13} />
            <Battery size={15} className="fill-white" />
          </div>
        </div>

        { }
        <div className="relative flex-1 flex flex-col justify-between overflow-hidden bg-[#0a0b12]">
          
          {/* Camera Flash Screen Overlay effect */}
          {capturing && (
            <div className="absolute inset-0 bg-white z-40 animate-ping opacity-90"></div>
          )}

          {/* Simulated Viewfinder Camera Stream/Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#11131f] via-[#08090e] to-[#040407]">
            {/* Optional subtle grid/noise texture */}
            <div className="w-full h-full opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          { }
          <div className="relative z-20 px-5 pt-3 flex items-center justify-between">
            {/* Back Button */}
            <button 
              type="button"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft size={20} className="text-white -ml-0.5" />
            </button>

            {/* Header Title */}
            <h1 className="text-white text-base font-extrabold tracking-widest uppercase drop-shadow-md">
              CAPTURE SIGHTING
            </h1>

            {/* Flash Button */}
            <button 
              type="button"
              onClick={() => setFlashOn(!flashOn)}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border active:scale-95 transition-all cursor-pointer ${
                flashOn 
                  ? 'bg-[#ff2a1d]/20 border-[#ff2a1d] text-[#ff2a1d] shadow-[0_0_12px_rgba(255,42,29,0.5)]' 
                  : 'bg-black/40 border-white/10 text-[#ff2a1d]'
              }`}
            >
              <Zap size={18} className={flashOn ? 'fill-[#ff2a1d]' : ''} />
            </button>
          </div>

          { }
          <div className="relative z-10 flex-1 my-4 mx-5 border border-transparent flex flex-col justify-between p-4">
            
            {/* Top Left Corner Bracket */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff2a1d]"></div>
            
            {/* Top Right Corner Bracket */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff2a1d]"></div>
            
            {/* Bottom Left Corner Bracket */}
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff2a1d]"></div>
            
            {/* Bottom Right Corner Bracket */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff2a1d]"></div>

            {/* Empty Center Space */}
            <div className="flex-1"></div>

            {/* Safety Warning Overlay Inside Viewfinder */}
            <div className="flex items-center justify-center space-x-1.5 text-center mb-2 px-2">
              <AlertTriangle size={14} className="text-[#ff2a1d] flex-shrink-0" />
              <p className="text-[#ff2a1d] text-[11px] font-extrabold tracking-tight drop-shadow">
                Only capture information if it is safe to do so
              </p>
            </div>
          </div>

          { }
          <div className="relative z-20 pb-8 px-8 flex items-center justify-between">
            
            {/* Left Control: Gallery / Media Library */}
            <button 
              type="button"
              className="w-12 h-12 rounded-full bg-[#161822]/90 border border-white/10 flex items-center justify-center text-[#2090ff] active:scale-95 transition-all cursor-pointer relative overflow-hidden group shadow-lg"
            >
              {capturedImage ? (
                <img src={capturedImage} alt="Captured preview" className="w-full h-full object-cover" />
              ) : (
                <GalleryIcon size={20} className="text-[#2aa1eb]" />
              )}
            </button>

            {/* Center Control: Shutter Capture Button */}
            <button 
              type="button"
              onClick={handleShutterClick}
              className="relative w-20 h-20 rounded-full flex items-center justify-center active:scale-95 transition-all cursor-pointer group"
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-[#ff2a1d]/30 blur-md group-hover:bg-[#ff2a1d]/50 transition-all"></div>
              
              {/* White/Red Outer Frame Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#ff2a1d] bg-[#100808]/40"></div>
              
              {/* Inner Red Shutter Circle */}
              <div className="w-14 h-14 rounded-full bg-[#ff2a1d] shadow-[0_0_20px_rgba(255,42,29,0.8)] group-hover:scale-105 transition-transform"></div>
            </button>

            {/* Right Control: Switch Camera */}
            <button 
              type="button"
              onClick={() => setIsFrontCamera(!isFrontCamera)}
              className="w-12 h-12 rounded-full bg-[#161822]/90 border border-white/10 flex items-center justify-center text-[#2090ff] active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              <RefreshCw 
                size={20} 
                className={`text-[#2aa1eb] transition-transform duration-500 ${isFrontCamera ? 'rotate-180' : ''}`} 
              />
            </button>

          </div>

        </div>

        { }
        <div className="bg-[#0a0b12] pb-2 pt-1 flex justify-center z-30">
          <div className="w-32 h-1 bg-white/80 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
