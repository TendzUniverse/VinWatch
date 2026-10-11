import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { COLORS } from '../theme';

export default function ResultStolenScreen({ onNavigate }) {
  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(2)}>
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>VEHICLE STATUS</Text>

        <View style={styles.stolenCard}>
          <View style={styles.statusHeaderRow}>
            <View style={styles.redDot} />
            <Text style={styles.statusBadgeText}>STOLEN VEHICLE</Text>
          </View>

          <Text style={styles.vehicleTitle}>Toyota Corolla</Text>

          <View style={styles.gridContainer}>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>VIN</Text>
              <Text style={styles.gridValue}>****456</Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>REPORTED</Text>
              <Text style={styles.gridValue}>24 Aug 2026</Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>REPORTS</Text>
              <Text style={styles.gridValue}>2</Text>
            </View>
            <View style={styles.gridItem}>
              <Text style={styles.gridLabel}>LAST AREA</Text>
              <Text style={styles.gridValue}>Johannesburg</Text>
            </View>
          </View>
        </View>

        <View style={styles.warningCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <Path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></Path>
              <Line x1="12" y1="9" x2="12" y2="13"></Line>
              <Line x1="12" y1="17" x2="12.01" y2="17"></Line>
            </Svg>
            <Text style={styles.warningTitle}>DO NOT PURCHASE THIS VEHICLE</Text>
          </View>
          <Text style={styles.warningSub}>
            This vehicle has an active stolen report. If you believe you have seen this vehicle, submit a sighting report.
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate(3)}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></Path>
              <Circle cx="12" cy="12" r="3"></Circle>
            </Svg>
            <Text style={styles.primaryBtnText}>REPORT SIGHTING</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <Path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></Path>
              <Polyline points="14 2 14 8 20 8"></Polyline>
              <Line x1="16" y1="13" x2="8" y2="13"></Line>
              <Line x1="16" y1="17" x2="8" y2="17"></Line>
              <Polyline points="10 9 9 9 8 9"></Polyline>
            </Svg>
            <Text style={styles.secondaryBtnText}>GENERATE VEHICLE REPORT</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

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
  backButton: { marginBottom: 8 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  headerTitle: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '900', letterSpacing: 0.5, marginBottom: 20 },
  stolenCard: { backgroundColor: '#141114', borderColor: COLORS.accentRed, borderWidth: 1.5, borderRadius: 16, padding: 18, marginBottom: 16, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.25, shadowRadius: 10, elevation: 4 },
  statusHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  redDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.accentRed, marginRight: 8 },
  statusBadgeText: { color: COLORS.accentRed, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  vehicleTitle: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '900', marginBottom: 18 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 12 },
  gridItem: { width: '48%', backgroundColor: COLORS.surface, borderRadius: 10, padding: 12, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.04)' },
  gridLabel: { color: COLORS.textMuted, fontSize: 9, fontWeight: 'bold', letterSpacing: 0.8, marginBottom: 4 },
  gridValue: { color: COLORS.textPrimary, fontSize: 14, fontWeight: 'bold' },
  warningCard: { backgroundColor: '#1A0E10', borderColor: 'rgba(239, 68, 68, 0.4)', borderWidth: 1, borderRadius: 14, padding: 16, marginBottom: 20 },
  warningTitle: { color: COLORS.accentRed, fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
  warningSub: { color: COLORS.textSecondary, fontSize: 12, lineHeight: 18 },
  primaryBtn: { backgroundColor: COLORS.accentRed, borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 12, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, elevation: 6 },
  primaryBtnText: { color: COLORS.textPrimary, fontWeight: '900', fontSize: 14, letterSpacing: 1 },
  secondaryBtn: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  secondaryBtnText: { color: COLORS.textPrimary, fontWeight: 'bold', fontSize: 13, letterSpacing: 0.8 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#121316', borderTopWidth: 1, borderTopColor: COLORS.surfaceBorder, height: 60, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: COLORS.textMuted, fontSize: 10, marginTop: 3, fontWeight: '600', letterSpacing: 0.5 },
  navTextActive: { color: COLORS.accentRed },
  navBadge: { position: 'absolute', top: -4, right: -10, backgroundColor: COLORS.accentRed, borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
});
