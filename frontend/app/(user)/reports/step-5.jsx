import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Wifi, 
  Signal, 
  Battery, 
  AlertTriangle,
  Siren,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' or 'code'
  const [copied, setCopied] = useState(false);

  const rnCode = `import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function ReviewReportScreen({ navigation }) {
  const summaryData = [
    { label: 'VEHICLE', value: 'Toyota Corolla', isAlert: false },
    { label: 'VIN', value: '****456', isAlert: false },
    { label: 'COLOUR', value: 'White', isAlert: false },
    { label: 'REGISTRATION', value: 'ABC 123 GP', isAlert: false },
    { label: 'LOCATION', value: 'Johannesburg, GP', isAlert: false },
    { label: 'INCIDENT TYPE', value: 'Hijacked', isAlert: true },
    { label: 'DATE', value: '13 Sep 2026', isAlert: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Navigation */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Text style={styles.backChevron}>‹</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleWhite}>REVIEW </Text>
          <Text style={styles.titleRed}>REPORT</Text>
        </View>

        {/* Step Progress Bar */}
        <View style={styles.progressHeader}>
          <Text style={styles.stepText}>STEP 5 OF 5</Text>
          <Text style={styles.percentText}>100% complete</Text>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={styles.progressBarFill} />
        </View>

        {/* Summary Card Details */}
        <View style={styles.detailsCard}>
          {summaryData.map((item, index) => (
            <View 
              key={item.label} 
              style={[
                styles.detailRow, 
                index !== summaryData.length - 1 && styles.detailRowBorder
              ]}
            >
              <Text style={styles.detailLabel}>{item.label}</Text>
              <Text style={[styles.detailValue, item.isAlert && styles.detailValueAlert]}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Warning / Confirmation Banner */}
        <View style={styles.warningCard}>
          <Text style={styles.warningIcon}>⚠️</Text>
          <Text style={styles.warningText}>
            Please confirm that the information provided is accurate and true to the best of your knowledge.
          </Text>
        </View>

        {/* Submit Action Button */}
        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.submitButton}
          onPress={() => {
            // Handle Report Submission
          }}
        >
          <Text style={styles.submitButtonText}>🚨  SUBMIT REPORT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backChevron: {
    color: '#a1a1aa',
    fontSize: 22,
    fontWeight: '300',
    marginRight: 4,
    lineHeight: 22,
  },
  backText: {
    color: '#a1a1aa',
    fontSize: 14,
    fontWeight: '400',
  },
  cancelText: {
    color: '#52525b',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleWhite: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  titleRed: {
    color: '#e11d48',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepText: {
    color: '#e11d48',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  percentText: {
    color: '#52525b',
    fontSize: 11,
    fontWeight: '500',
  },
  progressBarTrack: {
    height: 4,
    backgroundColor: '#27272a',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 24,
  },
  progressBarFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e11d48',
  },
  detailsCard: {
    backgroundColor: '#151518',
    borderRadius: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#27272a',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  detailRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#27272a/60',
  },
  detailLabel: {
    color: '#52525b',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  detailValue: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  detailValueAlert: {
    color: '#e11d48',
  },
  warningCard: {
    backgroundColor: '#1b1612',
    borderColor: '#3f2212',
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  warningIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  warningText: {
    color: '#a1a1aa',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    flex: 1,
  },
  submitButton: {
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
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
});
`;

  const copyCode = () => {
    navigator.clipboard.writeText(rnCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-4 font-sans text-white select-none">
      
      {/* Header View Switcher */}
      <div className="mb-6 flex items-center bg-[#18181b] p-1.5 rounded-xl border border-zinc-800">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'preview'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          UI PREVIEW
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'code'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          REACT NATIVE (.JSX) CODE
        </button>
      </div>

      {activeTab === 'preview' ? (
        /* Mobile Viewport */
        <div className="w-[393px] h-[852px] bg-[#0c0c0e] rounded-[50px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(225,29,72,0.2)] border-[8px] border-[#27272a] flex flex-col relative">
          
          {/* Status Bar */}
          <div className="w-full h-12 px-7 flex justify-between items-center text-xs font-semibold tracking-wide text-zinc-200 pt-2 z-20">
            <span>9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-28 h-6 bg-black rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Signal size={14} className="fill-current" />
              <Wifi size={14} />
              <Battery size={16} className="fill-current" />
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="px-6 py-3 flex justify-between items-center text-sm z-10">
            <button className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <ChevronLeft size={20} className="-ml-1 mr-0.5" />
              <span className="font-normal text-xs tracking-wide">Back</span>
            </button>
            <button className="text-zinc-500 hover:text-zinc-300 font-bold text-[11px] tracking-wider">
              CANCEL
            </button>
          </div>

          {/* Title & Progress Header */}
          <div className="px-6 pt-1 pb-3 flex flex-col">
            <h1 className="text-xl font-black tracking-wider mb-4">
              <span className="text-white">REVIEW </span>
              <span className="text-red-600">REPORT</span>
            </h1>

            {/* Progress Bar */}
            <div className="flex justify-between items-center text-xs font-medium mb-2">
              <span className="text-red-600 font-extrabold tracking-wider text-[11px]">STEP 5 OF 5</span>
              <span className="text-zinc-500 text-[11px]">100% complete</span>
            </div>
            
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-full h-full bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Summary Details Container */}
          <div className="px-6 py-2 flex-1 flex flex-col justify-between">
            
            <div className="bg-[#151518] border border-zinc-800/80 rounded-2xl px-4 py-1">
              {[
                { label: 'VEHICLE', value: 'Toyota Corolla', alert: false },
                { label: 'VIN', value: '****456', alert: false },
                { label: 'COLOUR', value: 'White', alert: false },
                { label: 'REGISTRATION', value: 'ABC 123 GP', alert: false },
                { label: 'LOCATION', value: 'Johannesburg, GP', alert: false },
                { label: 'INCIDENT TYPE', value: 'Hijacked', alert: true },
                { label: 'DATE', value: '13 Sep 2026', alert: false },
              ].map((item, idx) => (
                <div 
                  key={item.label}
                  className={`flex justify-between items-center py-3 ${
                    idx < 6 ? 'border-b border-zinc-800/60' : ''
                  }`}
                >
                  <span className="text-[10px] font-bold tracking-wider text-zinc-500">
                    {item.label}
                  </span>
                  <span className={`text-xs font-bold ${
                    item.alert ? 'text-red-600' : 'text-white'
                  }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pb-6">
              {/* Warning Card */}
              <div className="bg-[#1b1612] border border-[#3f2212] rounded-xl p-3.5 flex items-center space-x-3">
                <span className="text-amber-500 text-base shrink-0">⚠️</span>
                <p className="text-[11px] leading-relaxed text-zinc-400 font-normal">
                  Please confirm that the information provided is accurate and true to the best of your knowledge.
                </p>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black tracking-widest text-xs rounded-2xl shadow-[0_8px_30px_rgba(225,29,72,0.45)] active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                <span>🚨</span>
                <span>SUBMIT REPORT</span>
              </button>

              {/* Home Bar Indicator */}
              <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto pt-1"></div>
            </div>

          </div>

        </div>
      ) : (
        /* React Native Code Display */
        <div className="w-full max-w-3xl bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 bg-[#18181c] border-b border-zinc-800">
            <span className="text-xs font-bold text-zinc-400">ReviewReportScreen.jsx</span>
            <button
              onClick={copyCode}
              className="flex items-center space-x-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="p-6 text-xs text-zinc-300 font-mono overflow-x-auto max-h-[600px] leading-relaxed">
            <code>{rnCode}</code>
          </pre>
        </div>
      )}

    </div>
  );
}
