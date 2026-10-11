import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { COLORS } from '../theme';

const { width } = Dimensions.get('window');

export default function VINScannerScreen({ onNavigate }) {
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(2)}>
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>VIN SCANNER</Text>
        <TouchableOpacity style={styles.flashButton}>
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentYellow} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></Polygon>
          </Svg>
        </TouchableOpacity>
      </View>

      <View style={styles.scannerContainer}>
        <View style={styles.scannerViewport}>
          <View style={[styles.scannerCorner, styles.topLeft]} />
          <View style={[styles.scannerCorner, styles.topRight]} />
          <View style={[styles.scannerCorner, styles.bottomLeft]} />
          <View style={[styles.scannerCorner, styles.bottomRight]} />
          
          <View style={styles.laserLine} />
          <Text style={styles.scannerBarcodeText}>VIN BARCODE AREA</Text>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.redDot} />
          <Text style={styles.scanningText}>SCANNING VIN...</Text>
        </View>
        <Text style={styles.instructionText}>Position the VIN inside the frame</Text>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.manualBtn} onPress={() => onNavigate(2)}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <Rect x="2" y="4" width="20" height="16" rx="2" ry="2"></Rect>
              <Path d="M6 8h.01"></Path>
              <Path d="M10 8h.01"></Path>
              <Path d="M14 8h.01"></Path>
              <Path d="M18 8h.01"></Path>
              <Path d="M6 12h.01"></Path>
              <Path d="M10 12h.01"></Path>
              <Path d="M14 12h.01"></Path>
              <Path d="M18 12h.01"></Path>
              <Path d="M7 16h10"></Path>
            </Svg>
            <Text style={styles.manualBtnText}>ENTER MANUALLY</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, backgroundColor: COLORS.background },
  headerBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  backButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.surfaceBorder },
  backButtonText: { color: COLORS.textPrimary, fontSize: 20, fontWeight: 'bold', marginTop: -2 },
  headerTitle: { color: COLORS.textPrimary, fontSize: 14, fontWeight: '900', letterSpacing: 1.5 },
  flashButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.surfaceBorder },
  scannerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  scannerViewport: { width: width - 80, height: 180, justifyContent: 'center', alignItems: 'center', position: 'relative', backgroundColor: 'rgba(255, 42, 66, 0.03)' },
  scannerCorner: { position: 'absolute', width: 28, height: 28, borderColor: COLORS.accentRed },
  topLeft: { top: 0, left: 0, borderTopWidth: 3, borderLeftWidth: 3 },
  topRight: { top: 0, right: 0, borderTopWidth: 3, borderRightWidth: 3 },
  bottomLeft: { bottom: 0, left: 0, borderBottomWidth: 3, borderLeftWidth: 3 },
  bottomRight: { bottom: 0, right: 0, borderBottomWidth: 3, borderRightWidth: 3 },
  laserLine: { width: '80%', height: 2, backgroundColor: COLORS.accentRed, marginBottom: 8, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 6 },
  scannerBarcodeText: { color: COLORS.textSecondary, fontSize: 11, fontWeight: '700', letterSpacing: 1.2 },
  statusContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 32 },
  redDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.accentRed, marginRight: 6 },
  scanningText: { color: COLORS.accentRed, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  instructionText: { color: COLORS.textSecondary, fontSize: 12, marginTop: 6 },
  footerContainer: { padding: 20, paddingBottom: 30 },
  manualBtn: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1.5, borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  manualBtnText: { color: COLORS.textPrimary, fontWeight: 'bold', fontSize: 13, letterSpacing: 1 },
});
