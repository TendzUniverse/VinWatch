import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Eye, 
  Siren, 
  Home, 
  MapPin, 
  Bell, 
  User, 
  Wifi, 
  Battery 
} from 'lucide-react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeTab, setActiveTab] = useState('REPORTS');

  const reportsData = [
    {
      id: 1,
      type: 'Community Sighting',
      vehicle: 'Toyota Corolla',
      submitted: 'Submitted Today',
      status: 'PENDING',
      icon: 'eye'
    },
    {
      id: 2,
      type: 'Hijacking Report',
      vehicle: 'Toyota Corolla',
      submitted: 'Submitted 2 days ago',
      status: 'VERIFIED',
      icon: 'siren'
    },
    {
      id: 3,
      type: 'Community Sighting',
      vehicle: 'VW Polo',
      submitted: 'Submitted 3 days ago',
      status: 'VERIFIED',
      icon: 'eye'
    },
    {
      id: 4,
      type: 'Community Sighting',
      vehicle: 'Unknown Vehicle',
      submitted: 'Submitted 1 week ago',
      status: 'REJECTED',
      icon: 'eye'
    }
  ];

  const filteredReports = activeFilter === 'ALL' 
    ? reportsData 
    : reportsData.filter(r => r.status === activeFilter);

  const renderStatusBadge = (status) => {
    switch(status) {
      case 'PENDING':
        return (
          <div className="bg-[#2a220e]/60 border border-[#b8860b]/40 text-[#f39c12] text-[10px] font-black px-3 py-1.5 rounded-lg tracking-wider">
            PENDING
          </div>
        );
      case 'VERIFIED':
        return (
          <div className="bg-[#0e2a14]/60 border border-[#27ae60]/40 text-[#2ecc71] text-[10px] font-black px-3 py-1.5 rounded-lg tracking-wider">
            VERIFIED
          </div>
        );
      case 'REJECTED':
        return (
          <div className="bg-[#2a0e0e]/60 border border-[#e74c3c]/40 text-[#e74c3c] text-[10px] font-black px-3 py-1.5 rounded-lg tracking-wider">
            REJECTED
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 font-sans select-none">
      
      {/* Phone Outer Frame */}
      <div className="w-full max-w-[400px] h-[844px] bg-[#0b0b0b] rounded-[40px] overflow-hidden relative flex flex-col border border-[#1f1f1f] shadow-2xl">
        
        {/* Status Bar */}
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

        {/* Content Section */}
        <div className="flex-1 flex flex-col px-5 pt-3 overflow-y-auto pb-4">
          
          {/* Back Button */}
          <button className="flex items-center text-[#8e8e93] hover:text-white transition-colors mb-4 cursor-pointer w-fit">
            <ChevronLeft size={18} />
            <span className="text-xs font-semibold ml-0.5">Back</span>
          </button>

          {/* Screen Title & Count Header */}
          <div className="flex justify-between items-baseline mb-5">
            <div>
              <span className="text-white text-2xl font-black tracking-widest">MY </span>
              <span className="text-[#ea1d0d] text-2xl font-black tracking-widest">REPORTS</span>
            </div>
            <span className="text-[#6c6c70] text-xs font-medium">4 total</span>
          </div>

          {/* Filter Pills */}
          <div className="flex space-x-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
            {['ALL', 'PENDING', 'VERIFIED', 'REJECTED'].map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ea1d0d] text-white shadow-[0_2px_10px_rgba(234,29,13,0.3)]'
                      : 'bg-[#18181a] text-[#71717a] hover:bg-[#222225] border border-[#27272a]/50'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Reports List */}
          {}
          <div className="space-y-3 flex-1">
            {filteredReports.map((report) => (
              <div 
                key={report.id}
                className="bg-[#121214] border border-[#1e1e22] rounded-2xl p-4 flex items-center justify-between hover:border-[#2a2a30] transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  {/* Category Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1e] flex items-center justify-center border border-[#27272a]">
                    {report.icon === 'siren' ? (
                      <Siren size={20} className="text-[#ea1d0d]" />
                    ) : (
                      <Eye size={20} className="text-[#a1a1aa]" />
                    )}
                  </div>

                  {/* Vehicle Details */}
                  <div>
                    <h3 className="text-white text-xs font-bold tracking-tight">{report.type}</h3>
                    <p className="text-[#a1a1aa] text-[11px] font-medium mt-0.5">{report.vehicle}</p>
                    <p className="text-[#52525b] text-[10px] font-medium mt-0.5">{report.submitted}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  {renderStatusBadge(report.status)}
                </div>
              </div>
            ))}

            {filteredReports.length === 0 && (
              <div className="text-center py-12 text-[#52525b] text-xs">
                No reports found matching "{activeFilter}".
              </div>
            )}
          </div>

        </div>

        {/* Bottom Navigation Bar */}
        {}
        <div className="h-16 bg-[#0b0b0b] border-t border-[#1c1c1e] flex justify-around items-center px-2 z-20">
          
          <button 
            onClick={() => setActiveTab('HOME')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer"
          >
            {activeTab === 'HOME' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <Home size={20} className={activeTab === 'HOME' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'HOME' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>HOME</span>
          </button>

          <button 
            onClick={() => setActiveTab('MAP')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer"
          >
            {activeTab === 'MAP' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <MapPin size={20} className={activeTab === 'MAP' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'MAP' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>MAP</span>
          </button>

          <button 
            onClick={() => setActiveTab('REPORTS')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer"
          >
            {activeTab === 'REPORTS' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <div className="relative">
              <Bell size={20} className={activeTab === 'REPORTS' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
              <span className="absolute -top-1 -right-2 bg-[#ea1d0d] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'REPORTS' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>ALERTS</span>
          </button>

          <button 
            onClick={() => setActiveTab('PROFILE')}
            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer"
          >
            {activeTab === 'PROFILE' && <div className="absolute top-0 w-2/5 h-[3px] bg-[#ea1d0d] rounded-b-md"></div>}
            <User size={20} className={activeTab === 'PROFILE' ? 'text-[#ea1d0d]' : 'text-[#666666]'} />
            <span className={`text-[10px] font-bold mt-1 tracking-wider ${activeTab === 'PROFILE' ? 'text-[#ea1d0d]' : 'text-[#666666]'}`}>PROFILE</span>
          </button>

        </div>

        {/* Home Bar Indicator */}
        <div className="w-32 h-1 bg-white/80 rounded-full mx-auto mb-2 mt-1"></div>

      </div>
    </div>
  );
}
