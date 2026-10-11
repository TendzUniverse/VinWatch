import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Wifi, 
  Signal, 
  Battery, 
  Code, 
  Smartphone, 
  Copy, 
  Check 
} from 'lucide-react';

const REACT_NATIVE_CODE = `import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

const INCIDENT_TYPES = [
  {
    id: 'hijacked',
    title: 'HIJACKED',
    icon: '🚨',
    description: 'Vehicle taken at gunpoint or threat',
  },
  {
    id: 'stolen',
    title: 'STOLEN',
    icon: '🚘',
    description: 'Vehicle stolen when unattended',
  },
  {
    id: 'carjacked',
    title: 'CARJACKED',
    icon: '⚠️',
    description: 'Forced out of vehicle by perpetrators',
  },
  {
    id: 'suspected',
    title: 'SUSPECTED THEFT',
    icon: '🔍',
    description: 'Suspicious activity observed',
  },
];

export default function WhatHappenedScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('hijacked');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0c" />

      {/* Navigation Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('Cancel')}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleWhite}>
            WHAT <Text style={styles.titleRed}>HAPPENED?</Text>
          </Text>

          {/* Progress Bar Header */}
          <View style={styles.progressRow}>
            <Text style={styles.stepText}>STEP 4 OF 5</Text>
            <Text style={styles.percentText}>80% complete</Text>
          </View>

          {/* Progress Bar Track */}
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Incident Type Option Cards */}
        <View style={styles.optionsList}>
          {INCIDENT_TYPES.map((item) => {
            const isSelected = selectedType === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => setSelectedType(item.id)}
                style={[
                  styles.optionCard,
                  isSelected && styles.optionCardSelected,
                ]}
              >
                <View style={styles.optionLeft}>
                  <Text style={styles.optionIcon}>{item.icon}</Text>
                  <View style={styles.optionTextContainer}>
                    <Text
                      style={[
                        styles.optionTitle,
                        isSelected && styles.optionTitleSelected,
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.optionDescription}>
                      {item.description}
                    </Text>
                  </View>
                </View>

                {/* Custom Radio Button */}
                <View
                  style={[
                    styles.radioOuter,
                    isSelected && styles.radioOuterSelected,
                  ]}
                >
                  {isSelected && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Footer Action Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.continueButton}
          onPress={() => {
            // Navigate to Step 5
          }}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0c',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    color: '#9ca3af',
    fontSize: 24,
    marginRight: 4,
    marginTop: -2,
  },
  backText: {
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: '500',
  },
  cancelText: {
    color: '#6b7280',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    marginBottom: 24,
  },
  titleWhite: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  titleRed: {
    color: '#e11d48',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepText: {
    color: '#e11d48',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  percentText: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '500',
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#1f1f23',
    borderRadius: 2,
    width: '100%',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '80%',
    backgroundColor: '#e11d48',
    borderRadius: 2,
  },
  optionsList: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: '#141416',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#1e1e24',
  },
  optionCardSelected: {
    borderColor: '#e11d48',
    backgroundColor: '#191315',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  optionIcon: {
    fontSize: 22,
    marginRight: 14,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.6,
    marginBottom: 3,
  },
  optionTitleSelected: {
    color: '#FFFFFF',
  },
  optionDescription: {
    color: '#71717a',
    fontSize: 12,
    fontWeight: '400',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#3f3f46',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#e11d48',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e11d48',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: '#0a0a0c',
  },
  continueButton: {
    backgroundColor: '#e11d48',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#e11d48',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 8,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
});
`;

export default function App() {
  const [selectedOption, setSelectedOption] = useState('hijacked');
  const [activeView, setActiveView] = useState('preview'); // 'preview' or 'code'
  const [copied, setCopied] = useState(false);

  const incidentOptions = [
    {
      id: 'hijacked',
      title: 'HIJACKED',
      icon: '🚨',
      description: 'Vehicle taken at gunpoint or threat',
    },
    {
      id: 'stolen',
      title: 'STOLEN',
      icon: '🚘',
      description: 'Vehicle stolen when unattended',
    },
    {
      id: 'carjacked',
      title: 'CARJACKED',
      icon: '⚠️',
      description: 'Forced out of vehicle by perpetrators',
    },
    {
      id: 'suspected',
      title: 'SUSPECTED THEFT',
      icon: '🔍',
      description: 'Suspicious activity observed',
    },
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(REACT_NATIVE_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070709] flex flex-col items-center justify-start p-3 sm:p-6 font-sans text-white select-none">
      
      {/* Top Controls Bar */}
      <div className="mb-6 flex items-center bg-[#121216] border border-zinc-800 p-1.5 rounded-full shadow-lg">
        <button
          onClick={() => setActiveView('preview')}
          className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
            activeView === 'preview'
              ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Smartphone size={15} />
          <span>UI PREVIEW</span>
        </button>
        <button
          onClick={() => setActiveView('code')}
          className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
            activeView === 'code'
              ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Code size={15} />
          <span>REACT NATIVE CODE</span>
        </button>
      </div>

      {activeView === 'preview' ? (
        <div className="w-[380px] h-[820px] bg-[#0c0c0e] rounded-[48px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] border-[7px] border-[#222228] flex flex-col relative ring-1 ring-zinc-800/60">
          
          {/* iOS Status Bar */}
          <div className="w-full h-11 px-7 flex justify-between items-center text-xs font-semibold tracking-wide text-zinc-300 pt-2 z-20 shrink-0">
            <span>9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-28 h-6 bg-black rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Signal size={13} className="fill-current text-zinc-300" />
              <Wifi size={13} className="text-zinc-300" />
              <Battery size={15} className="fill-current text-zinc-300" />
            </div>
          </div>

          {/* Header Navigation */}
          <div className="px-5 py-2.5 flex justify-between items-center text-sm z-10 shrink-0">
            <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <ChevronLeft size={22} className="-ml-1" />
              <span className="font-medium text-xs tracking-wide">Back</span>
            </button>
            <button className="text-zinc-500 hover:text-zinc-300 font-bold text-[11px] tracking-widest">
              CANCEL
            </button>
          </div>

          {/* Title & Step Header */}
          <div className="px-6 pt-1 pb-3 flex flex-col shrink-0">
            <h1 className="text-[25px] font-black tracking-wide leading-tight mb-4">
              <span className="text-white">WHAT </span>
              <span className="text-red-600">HAPPENED?</span>
            </h1>

            {/* Progress Section */}
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="text-red-600 font-extrabold text-[11px] tracking-wider">
                STEP 4 OF 5
              </span>
              <span className="text-zinc-500 text-[11px]">80% complete</span>
            </div>
            
            <div className="w-full h-1 bg-zinc-800/80 rounded-full mt-2 overflow-hidden">
              <div className="w-[80%] h-full bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Interactive Incident Cards Container */}
          <div className="px-6 py-2 flex flex-col space-y-3 flex-1 overflow-y-auto">
            {incidentOptions.map((item) => {
              const isSelected = selectedOption === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedOption(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#151214] border-red-600/90 shadow-[0_0_20px_rgba(220,38,38,0.12)]'
                      : 'bg-[#141417] border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 pr-2">
                    <span className="text-2xl select-none leading-none">{item.icon}</span>
                    <div className="flex flex-col">
                      <h3 className="font-black text-[13px] tracking-wider text-white">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-normal leading-snug mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Radio Button Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      isSelected
                        ? 'border-red-600'
                        : 'border-zinc-700 group-hover:border-zinc-500'
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className="px-6 pb-6 pt-3 flex flex-col shrink-0 bg-[#0c0c0e]">
            <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black tracking-widest text-xs rounded-2xl shadow-[0_8px_25px_rgba(220,38,38,0.45)] active:scale-[0.98] transition-all">
              CONTINUE
            </button>

            {/* Home Indicator */}
            <div className="w-32 h-1 bg-zinc-600/70 rounded-full mx-auto mt-4"></div>
          </div>

        </div>
      ) : (
        <div className="w-full max-w-3xl bg-[#111115] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <div className="px-5 py-3 bg-[#18181f] border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code size={16} className="text-red-500" />
              <span className="text-xs font-mono font-bold text-zinc-300">
                WhatHappenedScreen.tsx
              </span>
            </div>
            <button
              onClick={handleCopyCode}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-5 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed max-h-[700px] scrollbar-thin scrollbar-thumb-zinc-700">
            <code>{REACT_NATIVE_CODE}</code>
          </pre>
        </div>
      )}

    </div>
  );
}
