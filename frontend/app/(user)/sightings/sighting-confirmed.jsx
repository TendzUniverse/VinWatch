import React, { useState } from 'react';
import { 
  Eye, 
  Check, 
  Home, 
  MapPin, 
  Bell, 
  User, 
  Wifi, 
  Battery, 
  Signal 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-2 sm:p-4 font-sans select-none">
      
      {/* Device Frame */}
      {}
      <div className="w-full max-w-[400px] h-[844px] bg-[#0b0b0d] rounded-[44px] overflow-hidden relative flex flex-col border border-[#1d1d22] shadow-[0_0_60px_rgba(0,0,0,0.9)] my-auto">
        
        {/* iOS Status Bar */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20 flex-shrink-0 text-white">
          <span className="text-xs font-semibold tracking-tight">9:41</span>
          
          {/* Dynamic Island */}
          <div className="w-28 h-7 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5"></div>
          
          <div className="flex items-center space-x-1.5">
            <Signal size={13} />
            <Wifi size={13} />
            <Battery size={15} className="fill-white" />
          </div>
        </div>

        {/* Main Content Body */}
        {}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-2 pb-6">
          
          {/* Center Graphic Icon: Sighting Eyes with Red Checkmark */}
          <div className="relative mb-6">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#ea1d0d]/10 rounded-full blur-2xl scale-125"></div>
            
            <div className="relative w-20 h-20 bg-[#16161c] border border-[#272730] rounded-3xl flex items-center justify-center shadow-2xl">
              <Eye size={42} className="text-[#e4e4e7]" strokeWidth={1.8} />
              
              {/* Red Checkmark Badge */}
              <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-[#ea1d0d] rounded-full border-2 border-[#0b0b0d] flex items-center justify-center shadow-md">
                <Check size={16} className="text-white" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Title Header */}
          {}
          <div className="text-center mb-8">
            <h1 className="text-white text-3xl font-black tracking-widest leading-none uppercase">SIGHTING</h1>
            <h2 className="text-[#ea1d0d] text-3xl font-black tracking-widest leading-tight uppercase mt-0.5">SUBMITTED</h2>
            <p className="text-[#8e8e93] text-xs text-center mt-3 max-w-[260px] leading-relaxed">
              Your information has been submitted for review.
            </p>
          </div>

          {/* Report Status Card */}
          {}
          <div className="w-full bg-[#121216] border border-[#23232c] rounded-2xl p-4 mb-8 shadow-inner">
            <p className="text-[#52525b] text-[10px] font-bold tracking-widest mb-2.5 text-center uppercase">
              REPORT STATUS
            </p>

            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
              <span className="text-[#f59e0b] text-xs font-black tracking-wider uppercase">
                PENDING REVIEW
              </span>
            </div>

            <p className="text-[#8e8e93] text-[11px] text-center leading-relaxed px-2">
              Verified information may assist vehicle recovery efforts.
            </p>
          </div>

          {/* Primary Action Button */}
          {}
          <button 
            type="button"
            className="w-full bg-[#ea1d0d] hover:bg-[#d4190c] active:scale-[0.98] transition-all py-3.5 rounded-xl flex items-center justify-center shadow-[0_4px_22px_rgba(234,29,13,0.45)] cursor-pointer mt-auto"
          >
            <span className="text-white text-xs font-black tracking-widest uppercase">
              RETURN HOME
            </span>
          </button>

        </div>

        {/* Bottom Navigation Bar */}
        {}
        <div className="h-16 bg-[#0b0b0d] border-t border-[#1a1a20] flex justify-around items-center px-2 z-20 flex-shrink-0">
          
          {/* Home Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('HOME')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'HOME' ? 'text-[#ea1d0d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'HOME' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <Home size={19} />
            <span className="text-[9px] font-black mt-1 tracking-wider uppercase">HOME</span>
          </button>

          {/* Map Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('MAP')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'MAP' ? 'text-[#ea1d0d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'MAP' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <MapPin size={19} />
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">MAP</span>
          </button>

          {/* Alerts Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('ALERTS')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'ALERTS' ? 'text-[#ea1d0d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'ALERTS' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <div className="relative">
              <Bell size={19} />
              <span className="absolute -top-1 -right-2 bg-[#ea1d0d] text-white text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-sm">
                3
              </span>
            </div>
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">ALERTS</span>
          </button>

          {/* Profile Tab */}
          <button 
            type="button"
            onClick={() => setActiveTab('PROFILE')}
            className={`flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer ${
              activeTab === 'PROFILE' ? 'text-[#ea1d0d]' : 'text-[#666666] hover:text-white'
            }`}
          >
            {activeTab === 'PROFILE' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <User size={19} />
            <span className="text-[9px] font-bold mt-1 tracking-wider uppercase">PROFILE</span>
          </button>

        </div>

        {/* Bottom Home Line Indicator */}
        {}
        <div className="w-32 h-1 bg-white/80 rounded-full mx-auto mb-2 mt-0.5 flex-shrink-0"></div>

      </div>
    </div>
  );
}
