import { useScreenNav } from '../../../navigation/useScreenNav';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { COLORS } from '../../../styles/theme';

export default function CheckVINScreen() {
  const onNavigate = useScreenNav();
  const [vin, setVin] = useState('');

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(1)}>
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>CHECK BEFORE{"\n"}YOU BUY</Text>
        <Text style={styles.subtitle}>Verify a vehicle before you buy or interact with it.</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>VIN NUMBER</Text>
          <View style={styles.textInputBox}>
            <TextInput
              style={styles.textInput}
              placeholder="ENTER VIN NUMBER"
              placeholderTextColor="#7C7F88"
              value={vin}
              onChangeText={setVin}
              autoCapitalize="characters"
            />
          </View>
          <Text style={styles.helperText}>Example: ABC123456789DE456</Text>
        </View>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity style={styles.scanButtonCard} onPress={() => onNavigate(3)}>
          <View style={styles.scanIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M3 7V5a2 2 0 0 1 2-2h2"></Path>
              <Path d="M17 3h2a2 2 0 0 1 2 2v2"></Path>
              <Path d="M21 17v2a2 2 0 0 1-2 2h-2"></Path>
              <Path d="M7 21H5a2 2 0 0 1-2-2v-2"></Path>
              <Rect x="7" y="7" width="10" height="10" rx="1"></Rect>
            </Svg>
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.scanButtonTitle}>SCAN VIN</Text>
            <Text style={styles.scanButtonSub}>Use camera to scan VIN plate</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.securityInfoBox}>
          <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentGreen} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
            <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></Path>
          </Svg>
          <Text style={styles.securityInfoText}>
            VIN information is checked securely against national records.
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate(5)}>
          <Text style={styles.primaryBtnText}>CHECK VEHICLE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavigate(5)} style={{ alignSelf: 'center', marginTop: 12 }}>
          <Text style={styles.previewClearText}>Preview clear result →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate(1)}>
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></Path>
            <Polyline points="9 22 9 12 15 12 15 22"></Polyline>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>HOME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></Polygon>
            <Line x1="8" y1="2" x2="8" y2="18"></Line>
            <Line x1="16" y1="6" x2="16" y2="22"></Line>
          </Svg>
          <Text style={styles.navText}>MAP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate(4)}>
          <View style={{ position: 'relative' }}>
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></Path>
              <Path d="M13.73 21a2 2 0 0 1-3.46 0"></Path>
            </Svg>
            <View style={styles.navBadge}>
              <Text style={styles.navBadgeText}>3</Text>
            </View>
          </View>
          <Text style={styles.navText}>ALERTS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate(10)}>
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
            <Circle cx="12" cy="7" r="4"></Circle>
          </Svg>
          <Text style={styles.navText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  backButton: { marginBottom: 12 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  title: { color: COLORS.textPrimary, fontSize: 26, fontWeight: '900', letterSpacing: 0.5, marginBottom: 6 },
  subtitle: { color: COLORS.textSecondary, fontSize: 13, marginBottom: 24 },
  inputContainer: { marginBottom: 16 },
  inputLabel: { color: COLORS.textSecondary, fontSize: 10, fontWeight: 'bold', letterSpacing: 0.8, marginBottom: 8 },
  textInputBox: { backgroundColor: COLORS.surface, borderColor: COLORS.accentRed, borderWidth: 1.5, borderRadius: 14, paddingVertical: 14, paddingHorizontal: 16, alignItems: 'center' },
  textInput: { color: COLORS.textPrimary, fontSize: 14, fontWeight: 'bold', letterSpacing: 1, textAlign: 'center', width: '100%' },
  helperText: { color: COLORS.textMuted, fontSize: 11, textAlign: 'center', marginTop: 8 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  dividerLine: { flex: 1, height: 1, backgroundColor: COLORS.surfaceBorder },
  dividerText: { color: COLORS.textMuted, marginHorizontal: 12, fontSize: 11, fontWeight: 'bold' },
  scanButtonCard: { backgroundColor: COLORS.surface, borderColor: COLORS.accentRed, borderWidth: 1, borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  scanIconBox: { width: 38, height: 38, borderRadius: 10, backgroundColor: 'rgba(255, 42, 66, 0.15)', borderWidth: 1, borderColor: COLORS.accentRed, justifyContent: 'center', alignItems: 'center' },
  scanButtonTitle: { color: COLORS.accentRed, fontSize: 13, fontWeight: '900', letterSpacing: 0.5 },
  scanButtonSub: { color: COLORS.textSecondary, fontSize: 11, marginTop: 2 },
  securityInfoBox: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  securityInfoText: { color: COLORS.textSecondary, fontSize: 12, flex: 1, lineHeight: 16 },
  primaryBtn: { backgroundColor: COLORS.accentRed, borderRadius: 14, paddingVertical: 16, alignItems: 'center', shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, elevation: 6 },
  primaryBtnText: { color: COLORS.textPrimary, fontWeight: '900', fontSize: 15, letterSpacing: 1 },
  previewClearText: { color: COLORS.textMuted, fontSize: 11 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#121316', borderTopWidth: 1, borderTopColor: COLORS.surfaceBorder, height: 60, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: COLORS.textMuted, fontSize: 10, marginTop: 3, fontWeight: '600', letterSpacing: 0.5 },
  navTextActive: { color: COLORS.accentRed },
  navBadge: { position: 'absolute', top: -4, right: -10, backgroundColor: COLORS.accentRed, borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
});
