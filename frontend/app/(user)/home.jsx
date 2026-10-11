import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { COLORS } from '../theme';

const { width } = Dimensions.get('window');

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.shieldIcon} />
              <Text style={styles.brandTitle}>VINWatch SA</Text>
            </View>
            <Text style={styles.brandSubtitle}>PROTECT · VERIFY · RECOVER</Text>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></Path>
              <Path d="M13.73 21a2 2 0 0 1-3.46 0"></Path>
            </Svg>
            <View style={styles.badgeDot} />
          </TouchableOpacity>
        </View>

        <Text style={styles.greetingText}>Good morning, <Text style={styles.boldText}>John 👋</Text></Text>

        {/* Emergency Card */}
        <TouchableOpacity style={styles.emergencyCard} onPress={() => onNavigate(4)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.alertIconBg}>
              <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <Path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></Path>
                <Path d="M12 9v4"></Path>
                <Path d="M12 17h.01"></Path>
              </Svg>
            </View>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.emergencyLabel}>EMERGENCY ACTION</Text>
              <Text style={styles.emergencyTitle}>REPORT HIJACKING</Text>
              <Text style={styles.emergencySub}>Tap to start emergency report</Text>
            </View>
            <Text style={{ color: COLORS.textPrimary, fontSize: 18 }}>›</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <Text style={styles.sectionHeader}>QUICK ACTIONS</Text>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.gridCard} onPress={() => onNavigate(2)}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Circle cx="11" cy="11" r="8"></Circle>
              <Path d="m21 21-4.35-4.35"></Path>
            </Svg>
            <Text style={styles.gridCardTitle}>CHECK VIN</Text>
            <Text style={styles.gridCardSub}>Verify a vehicle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard} onPress={() => onNavigate(3)}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></Path>
              <Circle cx="12" cy="12" r="3"></Circle>
            </Svg>
            <Text style={styles.gridCardTitle}>REPORT SIGHTING</Text>
            <Text style={styles.gridCardSub}>You saw it?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.gridCard}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></Polygon>
              <Line x1="8" y1="2" x2="8" y2="18"></Line>
              <Line x1="16" y1="6" x2="16" y2="22"></Line>
            </Svg>
            <Text style={styles.gridCardTitle}>RECOVERY MAP</Text>
            <Text style={styles.gridCardSub}>Live map view</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard} onPress={() => onNavigate(6)}>
            <Svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.3-.9-1.1-1.5-2-1.5H7.6c-.9 0-1.7.6-2 1.5L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></Path>
              <Circle cx="7" cy="17" r="2"></Circle>
              <Circle cx="17" cy="17" r="2"></Circle>
            </Svg>
            <Text style={styles.gridCardTitle}>MY VEHICLES</Text>
            <Text style={styles.gridCardSub}>2 registered</Text>
          </TouchableOpacity>
        </View>

        {/* Nearby Alerts */}
        <View style={[styles.headerRow, { marginTop: 24 }]}>
          <Text style={styles.sectionHeader}>NEARBY ALERTS</Text>
          <TouchableOpacity><Text style={styles.linkText}>VIEW ALL →</Text></TouchableOpacity>
        </View>

        <View style={styles.alertCard}>
          <View style={styles.alertTopRow}>
            <View style={styles.statusBadgeRed}>
              <Text style={styles.statusBadgeText}>STOLEN VEHICLE</Text>
            </View>
            <Text style={styles.distanceText}>2.4 km</Text>
          </View>
          <View style={styles.alertContentRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.redDot} />
              <Text style={styles.alertTitle}>Toyota Corolla</Text>
            </View>
            <Text style={styles.timeText}>15 min ago</Text>
          </View>
          <Text style={styles.alertDetail}>Reported stolen</Text>
        </View>

        <View style={styles.alertCard}>
          <View style={styles.alertTopRow}>
            <View style={styles.statusBadgeYellow}>
              <Text style={styles.statusBadgeTextYellow}>RECENT ACTIVITY</Text>
            </View>
            <Text style={styles.distanceText}>5.7 km</Text>
          </View>
          <View style={styles.alertContentRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.orangeDot} />
              <Text style={styles.alertTitle}>VW Polo</Text>
            </View>
            <Text style={styles.timeText}>42 min ago</Text>
          </View>
          <Text style={styles.alertDetail}>Community sighting</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
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
  container: { flex: 1, padding: 16, backgroundColor: COLORS.background },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  shieldIcon: { width: 16, height: 16, backgroundColor: COLORS.accentRed, marginRight: 6, borderRadius: 3 },
  brandTitle: { color: COLORS.textPrimary, fontSize: 18, fontWeight: 'bold', letterSpacing: 0.5 },
  brandSubtitle: { color: COLORS.accentRed, fontSize: 10, fontWeight: '700', marginTop: 2, letterSpacing: 1 },
  bellButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.surfaceBorder },
  badgeDot: { position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.accentRed },
  greetingText: { color: COLORS.textSecondary, fontSize: 16, marginBottom: 16 },
  boldText: { color: COLORS.textPrimary, fontWeight: 'bold' },
  emergencyCard: { backgroundColor: COLORS.accentRedDark, borderColor: COLORS.accentRed, borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 20 },
  alertIconBg: { width: 44, height: 44, borderRadius: 22, backgroundColor: COLORS.accentRed, justifyContent: 'center', alignItems: 'center' },
  emergencyLabel: { color: COLORS.accentRed, fontSize: 10, fontWeight: 'bold', letterSpacing: 0.8 },
  emergencyTitle: { color: COLORS.textPrimary, fontSize: 18, fontWeight: '900' },
  emergencySub: { color: COLORS.textSecondary, fontSize: 12 },
  sectionHeader: { color: COLORS.textSecondary, fontSize: 12, fontWeight: '700', marginBottom: 12, letterSpacing: 0.5 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  gridCard: { width: (width - 44) / 2, backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 16 },
  gridCardTitle: { color: COLORS.textPrimary, fontWeight: 'bold', marginTop: 8, fontSize: 13 },
  gridCardSub: { color: COLORS.textMuted, fontSize: 11, marginTop: 2 },
  linkText: { color: COLORS.accentRed, fontSize: 12, fontWeight: 'bold' },
  alertCard: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 14, marginBottom: 10 },
  alertTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  alertContentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },
  statusBadgeRed: { backgroundColor: 'rgba(239, 68, 68, 0.2)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  statusBadgeText: { color: COLORS.stolenBadge, fontSize: 9, fontWeight: 'bold' },
  statusBadgeYellow: { backgroundColor: 'rgba(245, 158, 11, 0.2)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  statusBadgeTextYellow: { color: COLORS.accentYellow, fontSize: 9, fontWeight: 'bold' },
  distanceText: { color: COLORS.textSecondary, fontSize: 12, fontWeight: '600' },
  timeText: { color: COLORS.textMuted, fontSize: 11 },
  redDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.accentRed, marginRight: 8 },
  orangeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.accentYellow, marginRight: 8 },
  alertTitle: { color: COLORS.textPrimary, fontSize: 15, fontWeight: 'bold' },
  alertDetail: { color: COLORS.textSecondary, fontSize: 12, marginTop: 4 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#121316', borderTopWidth: 1, borderTopColor: COLORS.surfaceBorder, height: 60, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: COLORS.textMuted, fontSize: 10, marginTop: 3, fontWeight: '600', letterSpacing: 0.5 },
  navTextActive: { color: COLORS.accentRed },
  navBadge: { position: 'absolute', top: -4, right: -10, backgroundColor: COLORS.accentRed, borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
});

