import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Camera, 
  Keyboard, 
  Lock, 
  Wifi, 
  Signal, 
  Battery, 
  Sparkles 
} from 'lucide-react';

export default function App() {
  const [selectedMethod, setSelectedMethod] = useState('scan'); // 'scan' or 'manual'

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 font-sans text-white select-none">
      {}
      <div className="w-[393px] h-[852px] bg-[#121214] rounded-[50px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(255,0,0,0.15)] border-[8px] border-[#27272a] flex flex-col relative">
        
        {}
        <div className="w-full h-12 px-7 flex justify-between items-center text-xs font-semibold tracking-wide text-zinc-200 pt-2 z-20">
          <span>9:41</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-28 h-6 bg-black rounded-full"></div>
          <div className="flex items-center space-x-2">
            <Signal size={14} className="fill-current" />
            <Wifi size={14} />
            <Battery size={16} className="fill-current" />
          </div>
        </div>

        {}
        <div className="px-6 py-3 flex justify-between items-center text-sm z-10">
          <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
            <ChevronLeft size={20} className="mr-0.5" />
            <span className="font-medium text-xs tracking-wide">Back</span>
          </button>
          <button className="text-zinc-500 hover:text-zinc-300 font-semibold text-xs tracking-wider">
            CANCEL
          </button>
        </div>

        {}
        <div className="px-6 pt-2 pb-4 flex flex-col">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xl">🎉</span>
            <h1 className="text-xl font-extrabold tracking-wider">
              <span className="text-white">REPORT </span>
              <span className="text-red-600">HIJACKING</span>
            </h1>
          </div>
          
          <p className="text-xs font-bold tracking-widest text-zinc-400 mt-2">
            SCAN OR ENTER VIN
          </p>

          {/* Progress Indicator */}
          <div className="mt-4 flex justify-between items-center text-xs font-medium text-zinc-400">
            <span className="text-red-600 font-bold tracking-wider">STEP 1 OF 5</span>
            <span className="text-zinc-500 text-[11px]">20% complete</span>
          </div>
          
          <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div className="w-1/5 h-full bg-red-600 rounded-full"></div>
          </div>
        </div>

        {}
        <div className="px-6 py-2 flex flex-col space-y-3.5 flex-1">
          
          {/* Card 1: Scan VIN */}
          <div 
            onClick={() => setSelectedMethod('scan')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-4 relative ${
              selectedMethod === 'scan' 
                ? 'bg-[#181212] border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.15)]' 
                : 'bg-[#18181b]/60 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              selectedMethod === 'scan' ? 'bg-red-600/20 text-red-500' : 'bg-zinc-800 text-zinc-400'
            }`}>
              <Camera size={24} />
            </div>
            <div className="flex-1">
              <h3 className={`font-extrabold tracking-wider text-sm ${
                selectedMethod === 'scan' ? 'text-red-600' : 'text-white'
              }`}>
                SCAN VIN
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5 font-normal leading-relaxed">
                Use camera to scan the VIN plate
              </p>
            </div>
          </div>

          {/* Card 2: Enter Manually */}
          <div 
            onClick={() => setSelectedMethod('manual')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-4 relative ${
              selectedMethod === 'manual' 
                ? 'bg-[#181212] border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.15)]' 
                : 'bg-[#18181b]/60 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              selectedMethod === 'manual' ? 'bg-red-600/20 text-red-500' : 'bg-zinc-800 text-zinc-400'
            }`}>
              <Keyboard size={24} />
            </div>
            <div className="flex-1">
              <h3 className={`font-extrabold tracking-wider text-sm ${
                selectedMethod === 'manual' ? 'text-red-600' : 'text-white'
              }`}>
                ENTER MANUALLY
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5 font-normal leading-relaxed">
                Type the VIN number
              </p>
            </div>
          </div>

        </div>

        {}
        <div className="px-6 pb-8 pt-2 flex flex-col space-y-4">
          
          {/* Security Banner */}
          <div className="bg-[#18181b]/80 border border-zinc-800/80 rounded-xl p-3.5 flex items-start space-x-3">
            <Lock size={16} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
              Keep your information secure. Complete only what you can safely provide.
            </p>
          </div>

          {/* Continue Button */}
          <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black tracking-widest text-sm rounded-2xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] active:scale-[0.98] transition-all">
            CONTINUE
          </button>

          {/* iOS Home Indicator bar */}
          <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto mt-2"></div>
        </div>

      </div>
    </div>
  );
}
