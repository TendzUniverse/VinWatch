import React, { useState } from 'react';
import { 
  ChevronLeft, 
  MapPin, 
  Lock, 
  Wifi, 
  Signal, 
  Battery, 
  Navigation,
  CheckCircle,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' or 'code'
  const [copied, setCopied] = useState(false);
  const [locationConfirmed, setLocationConfirmed] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Johannesburg, Gauteng');

  const reactNativeCode = `import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LocationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121214" />
      
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={20} color="#A1A1AA" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('Cancel')}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      {/* Main Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>LOCATION</Text>

        {/* Progress Tracker */}
        <View style={styles.progressRow}>
          <Text style={styles.stepText}>STEP 3 OF 5</Text>
          <Text style={styles.percentText}>60% complete</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>
      </View>

      {/* Content Body */}
      <View style={styles.content}>
        
        {/* Map View Display */}
        <View style={styles.mapContainer}>
          {/* Map Grid Lines */}
          <View style={styles.gridLineH1} />
          <View style={styles.gridLineH2} />
          <View style={styles.gridLineH3} />
          <View style={styles.gridLineV1} />
          <View style={styles.gridLineV2} />
          <View style={styles.gridLineV3} />

          {/* Green map zone */}
          <View style={styles.greenZone} />

          {/* Radar Ring */}
          <View style={styles.radarRing} />

          {/* Target Location Dot */}
          <View style={styles.locationPulse} />
          <View style={styles.locationDot} />
        </View>

        {/* Current Location Info Box */}
        <View style={styles.locationCard}>
          <View style={styles.pinIconContainer}>
            <Ionicons name="location-sharp" size={18} color="#EF4444" />
          </View>
          <View style={styles.locationDetails}>
            <Text style={styles.locationSubLabel}>CURRENT LOCATION</Text>
            <Text style={styles.locationMainText}>Johannesburg, Gauteng</Text>
          </View>
          <View style={styles.gpsBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.gpsText}>GPS</Text>
          </View>
        </View>

        {/* Security / Privacy Banner */}
        <View style={styles.securityBox}>
          <Ionicons name="lock-closed" size={16} color="#F59E0B" style={styles.lockIcon} />
          <Text style={styles.securityText}>
            Your location helps identify where the incident occurred and will be included in the report.
          </Text>
        </View>
      </View>

      {/* Bottom CTA Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.confirmButton} activeOpacity={0.8}>
          <Text style={styles.confirmButtonText}>CONFIRM LOCATION</Text>
        </TouchableOpacity>
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#A1A1AA',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 2,
  },
  cancelText: {
    color: '#71717A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  titleSection: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
  },
  titleText: {
    color: '#DC2626',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  stepText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  percentText: {
    color: '#71717A',
    fontSize: 11,
  },
  progressBarBackground: {
    width: '100%',
    height: 4,
    backgroundColor: '#27272A',
    borderRadius: 2,
    marginTop: 8,
  },
  progressBarFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#DC2626',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  mapContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#0A101D',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  gridLineH1: { position: 'absolute', top: 40, left: 0, right: 0, height: 1, backgroundColor: '#1E293B' },
  gridLineH2: { position: 'absolute', top: 90, left: 0, right: 0, height: 1, backgroundColor: '#1E293B' },
  gridLineH3: { position: 'absolute', top: 140, left: 0, right: 0, height: 1, backgroundColor: '#1E293B' },
  gridLineV1: { position: 'absolute', left: '25%', top: 0, bottom: 0, width: 1, backgroundColor: '#1E293B' },
  gridLineV2: { position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, backgroundColor: '#1E293B' },
  gridLineV3: { position: 'absolute', left: '75%', top: 0, bottom: 0, width: 1, backgroundColor: '#1E293B' },
  greenZone: {
    position: 'absolute',
    bottom: 45,
    left: '32%',
    width: 60,
    height: 30,
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.3)',
    borderRadius: 4,
  },
  radarRing: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.3)',
    borderStyle: 'dashed',
    position: 'absolute',
  },
  locationPulse: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(220, 38, 38, 0.35)',
    position: 'absolute',
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#DC2626',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18181B',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DC2626',
    padding: 16,
    marginBottom: 20,
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  pinIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(220, 38, 38, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  locationDetails: {
    flex: 1,
  },
  locationSubLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#71717A',
    letterSpacing: 0.5,
  },
  locationMainText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 2,
  },
  gpsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#22C55E',
    marginRight: 4,
  },
  gpsText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#22C55E',
  },
  securityBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#18181B',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#27272A',
    padding: 14,
  },
  lockIcon: {
    marginRight: 10,
    marginTop: 1,
  },
  securityText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 16,
    color: '#A1A1AA',
    fontWeight: '500',
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#DC2626',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
  homeIndicator: {
    width: 128,
    height: 4,
    backgroundColor: '#52525B',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 16,
  },
});
`;

  const copyToClipboard = () => {
    try {
      const el = document.createElement('textarea');
      el.value = reactNativeCode;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white flex flex-col items-center justify-start p-4 md:p-6 font-sans">
      
      {/* Top Toggle Switch between App View and Code View */}
      <div className="flex items-center space-x-3 mb-6 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
        <button 
          onClick={() => setActiveTab('preview')}
          className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all ${
            activeTab === 'preview' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-zinc-400 hover:text-white'
          }`}
        >
          MOBILE PREVIEW
        </button>
        <button 
          onClick={() => setActiveTab('code')}
          className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all ${
            activeTab === 'code' ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'text-zinc-400 hover:text-white'
          }`}
        >
          REACT NATIVE CODE
        </button>
      </div>

      {activeTab === 'preview' ? (
        <div className="relative">
          {/* Mobile Shell Frame */}
          <div className="w-[393px] h-[852px] bg-[#121214] rounded-[50px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(255,0,0,0.2)] border-[8px] border-[#27272a] flex flex-col relative">
            
            {/* Dynamic Island / iOS Top Bar */}
            <div className="w-full h-12 px-7 flex justify-between items-center text-xs font-semibold tracking-wide text-zinc-200 pt-2 z-20">
              <span>9:41</span>
              <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-28 h-6 bg-black rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Signal size={14} className="fill-current text-white" />
                <Wifi size={14} className="text-white" />
                <Battery size={16} className="fill-current text-white" />
              </div>
            </div>

            {/* Navigation Header */}
            <div className="px-6 py-3 flex justify-between items-center text-sm z-10">
              <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
                <ChevronLeft size={20} className="-ml-1" />
                <span className="font-medium text-xs tracking-wide">Back</span>
              </button>
              <button className="text-zinc-500 hover:text-zinc-300 font-bold text-xs tracking-wider">
                CANCEL
              </button>
            </div>

            {/* Page Header */}
            <div className="px-6 pt-1 pb-4 flex flex-col">
              <h1 className="text-xl font-black tracking-widest text-red-600 uppercase">
                LOCATION
              </h1>

              {/* Progress Indicator */}
              <div className="mt-3 flex justify-between items-center text-xs font-medium text-zinc-400">
                <span className="text-red-600 font-extrabold tracking-wider">STEP 3 OF 5</span>
                <span className="text-zinc-500 text-[11px]">60% complete</span>
              </div>
              
              <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                <div className="w-[60%] h-full bg-red-600 rounded-full"></div>
              </div>
            </div>

            {/* Content View */}
            <div className="px-6 py-2 flex flex-col flex-1">
              
              {/* Custom Dark Vector Map Box */}
              <div className="w-full h-48 bg-[#090e17] rounded-2xl border border-slate-800/80 overflow-hidden relative flex items-center justify-center mb-5 shadow-inner">
                
                {/* Map Grid overlay */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0 opacity-40">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border-r border-b border-slate-700/50"></div>
                  ))}
                </div>

                {/* Map Accent Zone (Green block in background) */}
                <div className="absolute bottom-10 left-28 w-16 h-8 bg-emerald-500/15 border border-emerald-500/30 rounded"></div>

                {/* Radar Grid Circles */}
                <div className="w-24 h-24 rounded-full border border-dashed border-red-500/40 absolute animate-pulse"></div>
                <div className="w-40 h-40 rounded-full border border-slate-800/60 absolute"></div>

                {/* Center Location Marker Pin */}
                <div className="relative flex items-center justify-center z-10">
                  <div className="w-6 h-6 rounded-full bg-red-600/30 animate-ping absolute"></div>
                  <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-lg shadow-red-600/80"></div>
                </div>

                {/* Map subtle overlay overlay */}
                <div className="absolute bottom-2 right-3 flex items-center space-x-1 text-[9px] text-zinc-500 font-mono">
                  <Navigation size={10} className="text-red-500" />
                  <span>GPS ACTIVE</span>
                </div>
              </div>

              {/* Current Location Red Highlight Card */}
              <div className="p-4 rounded-2xl bg-[#18181b] border border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.2)] flex items-center justify-between mb-5">
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                    <MapPin size={18} className="fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-zinc-400 tracking-wider block uppercase">
                      CURRENT LOCATION
                    </span>
                    <span className="text-sm font-extrabold text-white mt-0.5 block">
                      {currentLocation}
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 px-2.5 py-1 rounded-full flex items-center space-x-1.5 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-emerald-500 tracking-wider">GPS</span>
                </div>
              </div>

              {/* Security Banner */}
              <div className="bg-[#18181b]/80 border border-zinc-800/80 rounded-xl p-3.5 flex items-start space-x-3">
                <Lock size={16} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-[11px] leading-relaxed text-zinc-400 font-medium">
                  Your location helps identify where the incident occurred and will be included in the report.
                </p>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-2 flex flex-col space-y-4">
              <button 
                onClick={() => setLocationConfirmed(true)}
                className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black tracking-widest text-xs rounded-2xl shadow-[0_10px_25px_rgba(220,38,38,0.4)] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
              >
                {locationConfirmed ? (
                  <>
                    <CheckCircle size={16} />
                    <span>LOCATION CONFIRMED</span>
                  </>
                ) : (
                  <span>CONFIRM LOCATION</span>
                )}
              </button>

              {/* iOS Indicator Bar */}
              <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto"></div>
            </div>

          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-[#121214] rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="bg-zinc-900 px-6 py-4 flex justify-between items-center border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-mono text-zinc-400 ml-2">LocationScreen.jsx (React Native)</span>
            </div>
            <button 
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg transition-colors"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="p-6 text-xs font-mono text-zinc-300 overflow-x-auto h-[650px] leading-relaxed">
            <code>{reactNativeCode}</code>
          </pre>
        </div>
      )}

    </div>
  );
}
