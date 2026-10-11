import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Wifi, 
  Signal, 
  Battery, 
  Car 
} from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(2); // Can toggle between 1 and 2 if needed

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center p-4 font-sans text-white select-none">
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
          <button 
            onClick={() => setStep(1)}
            className="flex items-center text-zinc-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} className="mr-0.5" />
            <span className="font-medium text-xs tracking-wide">Back</span>
          </button>
          <button className="text-zinc-500 hover:text-zinc-300 font-semibold text-xs tracking-wider">
            CANCEL
          </button>
        </div>

        {}
        <div className="px-6 pt-2 pb-3 flex flex-col">
          <h1 className="text-xl font-extrabold tracking-wider">
            <span className="text-white">CONFIRM </span>
            <span className="text-red-600">VEHICLE</span>
          </h1>
          
          {/* Progress Indicator */}
          <div className="mt-4 flex justify-between items-center text-xs font-medium text-zinc-400">
            <span className="text-red-600 font-bold tracking-wider">STEP 2 OF 5</span>
            <span className="text-zinc-500 text-[11px]">40% complete</span>
          </div>
          
          <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <div className="w-2/5 h-full bg-red-600 rounded-full"></div>
          </div>
        </div>

        {}
        <div className="px-6 py-2 flex flex-col flex-1">
          <div className="bg-[#18181b]/70 border border-zinc-800 rounded-2xl p-5 flex flex-col space-y-4">
            
            {/* Vehicle Header */}
            <div className="flex items-center space-x-3 pb-3 border-b border-zinc-800/80">
              <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                <Car size={20} />
              </div>
              <h3 className="font-black tracking-wider text-base text-white">
                Toyota Corolla
              </h3>
            </div>

            {/* Detail Rows */}
            <div className="flex flex-col space-y-3.5 pt-1 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 font-bold tracking-widest text-[11px]">COLOUR</span>
                <span className="font-bold text-white tracking-wide">White</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 font-bold tracking-widest text-[11px]">REGISTRATION</span>
                <span className="font-bold text-white tracking-wide">ABC 123 GP</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-500 font-bold tracking-widest text-[11px]">VIN</span>
                <span className="font-bold text-white tracking-widest">****456</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-500 font-bold tracking-widest text-[11px]">YEAR</span>
                <span className="font-bold text-white tracking-wide">2022</span>
              </div>
            </div>

          </div>

          {/* Prompt text */}
          <div className="text-center mt-6">
            <p className="text-xs text-zinc-500 font-medium">
              Is this the correct vehicle?
            </p>
          </div>
        </div>

        {}
        <div className="px-6 pb-8 pt-2 flex flex-col space-y-3">
          
          {/* Primary Button */}
          <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black tracking-widest text-xs rounded-2xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] active:scale-[0.98] transition-all">
            YES, CONTINUE
          </button>

          {/* Secondary Button */}
          <button 
            onClick={() => setStep(1)}
            className="w-full py-4 bg-transparent hover:bg-zinc-800/50 text-white font-black tracking-widest text-xs rounded-2xl border border-zinc-700/80 active:scale-[0.98] transition-all"
          >
            EDIT INFORMATION
          </button>

          {/* iOS Home Indicator bar */}
          <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto mt-2"></div>
        </div>

      </div>
    </div>
  );
}
