import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Car, 
  AlertTriangle, 
  Camera, 
  MapPin, 
  FileText, 
  Home, 
  Bell, 
  User, 
  Wifi, 
  Battery, 
  Signal,
  CheckCircle2
} from 'lucide-react';

export default function ISawThisCarScreen() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [description, setDescription] = useState('');
  const [isPhotoCaptured, setIsPhotoCaptured] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setDescription('');
        setIsPhotoCaptured(false);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-2 sm:p-4 font-sans select-none">
      
      {/* Device Mockup Wrapper */}
      <div className="w-full max-w-[400px] h-[844px] bg-[#0d0d0d] rounded-[44px] overflow-hidden relative flex flex-col border border-[#1f1f1f] shadow-[0_0_50px_rgba(0,0,0,0.8)] my-auto">
        
        {}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20 flex-shrink-0">
          <span className="text-white text-xs font-semibold tracking-tight">9:41</span>
          
          {/* Dynamic Island Notch */}
          <div className="w-28 h-7 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5"></div>
          
          <div className="flex items-center space-x-1.5 text-white">
            <Signal size={13} className="text-white" />
            <Wifi size={13} className="text-white" />
            <Battery size={15} className="text-white fill-white" />
          </div>
        </div>

        {}
        <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto pb-4 scrollbar-thin">
          
          {/* Back Navigation Link */}
          <button 
            type="button"
            className="flex items-center text-[#8e8e93] hover:text-white transition-colors mb-2 cursor-pointer w-fit group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-xs font-medium ml-0.5">Back</span>
          </button>

          {/* Screen Title */}
          <div className="mb-3">
            <h1 className="text-white text-[26px] font-black tracking-wider leading-tight uppercase">I SAW</h1>
            <h2 className="text-[#ff1d1d] text-[26px] font-black tracking-wider leading-tight uppercase">THIS CAR</h2>
            <p className="text-[#6c6c70] text-[11px] font-medium mt-1">
              Help provide information that may assist vehicle recovery.
            </p>
          </div>

          {}
          <div className="bg-[#121214] border border-[#1a1a1a] rounded-2xl p-3 mb-2.5 flex items-center justify-between shadow-inner">
            <div className="flex items-center space-x-3">
              {/* Car Icon Box */}
              <div className="w-9 h-9 rounded-xl bg-[#1c1a1a] flex items-center justify-center border border-[#2a1b1b] text-[#ff1d1d]">
                <Car size={18} />
              </div>

              <div>
                <h3 className="text-white text-xs font-bold tracking-tight">White Toyota Corolla</h3>
                <p className="text-[#6c6c70] text-[10px] font-medium mt-0.5">VIN: ****456 · ABC 123 GP</p>
              </div>
            </div>

            {/* Stolen Status Badge */}
            <div className="flex items-center space-x-1 bg-[#2b0e0e] border border-[#5c1717] rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1d1d] animate-pulse"></span>
              <span className="text-[#ff1d1d] text-[9px] font-black tracking-wider uppercase">STOLEN</span>
            </div>
          </div>

          {}
          <div className="bg-[#220d0d] border border-[#5c1717] rounded-2xl p-3 mb-2.5 flex items-start space-x-3">
            <AlertTriangle size={16} className="text-[#ff1d1d] flex-shrink-0 mt-0.5" />
            <p className="text-[#ff1d1d] text-[10px] font-bold leading-relaxed">
              Do not approach or confront the vehicle. Only submit information that you can provide safely.
            </p>
          </div>

          {}
          <div className="space-y-2 mb-2.5">
            
            {/* Card 1: Take Photo */}
            <button 
              type="button"
              onClick={() => setIsPhotoCaptured(!isPhotoCaptured)}
              className={`w-full border rounded-2xl p-3 flex items-center space-x-3 transition-all text-left cursor-pointer ${
                isPhotoCaptured 
                  ? 'bg-[#0f1f14] border-[#1b432a]' 
                  : 'bg-[#121214] hover:bg-[#18181b] border-[#1e1e22]'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                isPhotoCaptured 
                  ? 'bg-[#122e1c] border-[#1b432a] text-[#20d061]' 
                  : 'bg-[#1a1a1e] border-[#27272a] text-[#8e8e93]'
              }`}>
                <Camera size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-white text-xs font-black tracking-wider uppercase">TAKE PHOTO</h4>
                  {isPhotoCaptured && <span className="text-[9px] text-[#20d061] font-bold">ATTACHED ✓</span>}
                </div>
                <p className="text-[#6c6c70] text-[10px] font-medium mt-0.5">
                  {isPhotoCaptured ? "1 photo attached securely" : "Capture the vehicle if safe to do so"}
                </p>
              </div>
            </button>

            {/* Card 2: Location Captured (Active Green) */}
            <div className="w-full bg-[#0d1a12] border border-[#1b432a] rounded-2xl p-3 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#102418] flex items-center justify-center border border-[#1b432a] text-[#20d061]">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-[#20d061] text-xs font-black tracking-wider uppercase">LOCATION CAPTURED</h4>
                <p className="text-[#20d061]/80 text-[10px] font-medium mt-0.5">Johannesburg, Gauteng · GPS Active</p>
              </div>
            </div>

            {/* Card 3: Add Description */}
            <div className="w-full bg-[#121214] border border-[#1e1e22] rounded-2xl p-3 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#1a1a1e] flex items-center justify-center border border-[#27272a] text-[#8e8e93]">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="text-white text-xs font-black tracking-wider uppercase">ADD DESCRIPTION</h4>
                <p className="text-[#6c6c70] text-[10px] font-medium mt-0.5">Describe what you observed</p>
              </div>
            </div>

          </div>

          {}
          <div className="mb-3">
            <textarea 
              rows={3} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you saw — direction of travel, number of occupants, any distinguishing features..."
              className="w-full bg-[#121214] border border-[#242424] focus:border-[#ff1d1d] rounded-2xl p-3 text-xs text-white placeholder-[#52525b] outline-none transition-all resize-none font-medium leading-relaxed"
            />
          </div>

          {}
          <button 
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full transition-all py-3.5 rounded-xl flex items-center justify-center cursor-pointer mt-auto ${
              isSubmitted 
                ? 'bg-[#20d061] shadow-[0_4px_20px_rgba(32,208,97,0.4)]' 
                : 'bg-[#ff1d1d] hover:bg-[#e01919] active:scale-[0.98] shadow-[0_4px_22px_rgba(255,29,29,0.5)]'
            }`}
          >
            {isSubmitting ? (
              <span className="text-white text-xs font-black tracking-widest uppercase animate-pulse">SUBMITTING...</span>
            ) : isSubmitted ? (
              <div className="flex items-center space-x-1.5 text-white">
                <CheckCircle2 size={16} />
                <span className="text-xs font-black tracking-widest uppercase">SIGHTING SUBMITTED</span>
              </div>
            ) : (
              <span className="text-white text-xs font-black tracking-widest uppercase">SUBMIT SIGHTING</span>
            )}
          </button>

        </div>

        {}
        <div className="h-16 bg-[#0d0d0d] border-t border-[#1a1a1a] flex justify-around items-center px-2 z-20 flex-shrink-0">
          
          {/* Home Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('HOME')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'HOME' ? 'text-[#ff1d1d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'HOME' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ff1d1d] rounded-b-md"></div>}
            <Home size={19} />
            <span className="text-[9px] font-black mt-1 tracking-wider uppercase">HOME</span>
          </button>

          {/* Map Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('MAP')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'MAP' ? 'text-[#ff1d1d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'MAP' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ff1d1d] rounded-b-md"></div>}
            <MapPin size={19} />
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">MAP</span>
          </button>

          {/* Alerts Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('ALERTS')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'ALERTS' ? 'text-[#ff1d1d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'ALERTS' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ff1d1d] rounded-b-md"></div>}
            <div className="relative">
              <Bell size={19} />
              <span className="absolute -top-1 -right-2 bg-[#ff1d1d] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-sm">3</span>
            </div>
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">ALERTS</span>
          </button>

          {/* Profile Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('PROFILE')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'PROFILE' ? 'text-[#ff1d1d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'PROFILE' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ff1d1d] rounded-b-md"></div>}
            <User size={19} />
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">PROFILE</span>
          </button>

        </div>

        {/* Home Indicator Line */}
        <div className="w-32 h-1 bg-white/80 rounded-full mx-auto mb-2 mt-0.5 flex-shrink-0"></div>

      </div>
    </div>
  );
}
