import React, { useState } from 'react';
import { 
  Shield, 
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
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-sans select-none">
      
      {/* Phone Frame Outer Container */}
      <div className="w-full max-w-[400px] h-[844px] bg-[#0b0b0b] rounded-[40px] overflow-hidden relative flex flex-col border border-[#1f1f1f] shadow-2xl">
        
        {/* iOS/Device Status Bar */}
        <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
          <span className="text-white text-sm font-semibold tracking-tight">9:41</span>
          
          {/* Dynamic Island */}
          <div className="w-28 h-7 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5"></div>
          
          <div className="flex items-center space-x-1.5 text-white">
            <span className="text-xs font-bold">5G</span>
            <Wifi size={14} className="text-white" />
            <Battery size={16} className="text-white fill-white" />
          </div>
        </div>

        {/* Main Scrollable Content Area */}
        <div className="flex-1 flex flex-col items-center px-6 pt-4 overflow-y-auto pb-6">
          
          {/* Shield Icon with Checkmark */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="absolute w-20 h-20 bg-red-600/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center justify-center drop-shadow-[0_0_15px_rgba(234,29,13,0.6)]">
              <Shield size={72} className="text-[#ea1d0d]" strokeWidth={1.8} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Check size={28} className="text-[#ea1d0d]" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Heading Section */}
          <div className="text-center mb-6">
            <h1 className="text-white text-3xl font-black tracking-widest leading-none">REPORT</h1>
            <h2 className="text-[#ea1d0d] text-3xl font-black tracking-widest leading-tight mt-0.5">SUBMITTED</h2>
            <p className="text-[#8e8e93] text-xs text-center mt-3 px-4 leading-relaxed">
              The vehicle has been reported and the relevant information has been recorded in the system.
            </p>
          </div>

          {/* Vehicle Status Card */}
          <div className="w-full bg-[#121214] border border-[#2a1212] rounded-2xl p-4 mb-6 shadow-inner">
            <p className="text-[#6c6c70] text-[10px] font-bold tracking-widest mb-2 text-center uppercase">VEHICLE STATUS</p>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ea1d0d] animate-pulse shadow-[0_0_8px_#ea1d0d]"></span>
              <span className="text-[#ea1d0d] text-sm font-extrabold tracking-wider">STOLEN / HIJACKED</span>
            </div>
            <p className="text-[#8e8e93] text-[11px] text-center leading-relaxed px-1">
              Nearby VINWatch users may receive alerts based on their location.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-3 mt-auto">
            <button className="w-full bg-[#ea1d0d] hover:bg-[#d4190c] active:scale-[0.98] transition-all py-4 rounded-xl flex items-center justify-center shadow-[0_4px_16px_rgba(234,29,13,0.4)] cursor-pointer">
              <span className="text-white text-xs font-extrabold tracking-wider">VIEW VEHICLE STATUS</span>
            </button>

            <button className="w-full bg-[#161618] hover:bg-[#222225] border border-[#2c2c2e] active:scale-[0.98] transition-all py-4 rounded-xl flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-bold tracking-wider">RETURN HOME</span>
            </button>
          </div>

        </div>

        {/* Bottom Navigation Bar */}
        <div className="h-16 bg-[#0b0b0b] border-t border-[#1c1c1e] flex justify-around items-center px-2 z-20">
          
          {/* Home Tab */}
          <button 
            onClick={() => setActiveTab('HOME')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer group"
          >
            {activeTab === 'HOME' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <Home size={20} className={activeTab === 'HOME' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'HOME' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>HOME</span>
          </button>

          {/* Map Tab */}
          <button 
            onClick={() => setActiveTab('MAP')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer group"
          >
            {activeTab === 'MAP' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <MapPin size={20} className={activeTab === 'MAP' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'MAP' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>MAP</span>
          </button>

          {/* Alerts Tab */}
          <button 
            onClick={() => setActiveTab('ALERTS')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer group"
          >
            {activeTab === 'ALERTS' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <div className="relative">
              <Bell size={20} className={activeTab === 'ALERTS' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
              <span className="absolute -top-1 -right-2 bg-[#ea1d0d] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">3</span>
            </div>
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'ALERTS' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>ALERTS</span>
          </button>

          {/* Profile Tab */}
          <button 
            onClick={() => setActiveTab('PROFILE')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer group"
          >
            {activeTab === 'PROFILE' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <User size={20} className={activeTab === 'PROFILE' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'PROFILE' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>PROFILE</span>
          </button>

        </div>

        {/* Bottom Home Indicator */}
        <div className="w-32 h-1 bg-white/80 rounded-full mx-auto mb-2 mt-1"></div>

      </div>
    </div>
  );
}
