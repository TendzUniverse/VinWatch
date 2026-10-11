import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline,Polygon } from 'react-native-svg';
import { COLORS } from '../theme';

export default function ProfileScreen({ onNavigate }) {
  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        
        <View style={styles.userHeaderCard}>
          <View style={styles.userAvatarBox}>
            <Text style={styles.userAvatarText}>JS</Text>
            <View style={styles.onlineDot} />
          </View>
          <View style={{ marginLeft: 14, flex: 1 }}>
            <Text style={styles.profileName}>John Smith</Text>
            <View style={styles.verifiedRow}>
              <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
                <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></Path>
              </Svg>
              <Text style={styles.verifiedText}>VERIFIED USER</Text>
            </View>
            <Text style={styles.profileEmail}>john.smith@example.com</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statValRed}>94%</Text>
            <Text style={styles.statLabel}>Trust Score</Text>
            <Text style={styles.statSubLabel}>Community</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValRed}>12</Text>
            <Text style={styles.statLabel}>Reports</Text>
            <Text style={styles.statSubLabel}>Submitted</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValRed}>7</Text>
            <Text style={styles.statLabel}>Sightings</Text>
            <Text style={styles.statSubLabel}>Verified</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValRed}>2</Text>
            <Text style={styles.statLabel}>Vehicles</Text>
            <Text style={styles.statSubLabel}>Registered</Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionHeader}>ACTIVE VEHICLE</Text>
          <TouchableOpacity onPress={() => onNavigate(6)}>
            <Text style={styles.viewAllText}>VIEW ALL →</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.activeVehicleCard} onPress={() => onNavigate(8)}>
          <View style={styles.vehicleRow}>
            <View style={styles.carIconBox}>
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <Path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.3-.9-1.1-1.5-2-1.5H7.6c-.9 0-1.7.6-2 1.5L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></Path>
                <Circle cx="7" cy="17" r="2"></Circle>
                <Circle cx="17" cy="17" r="2"></Circle>
              </Svg>
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.vehicleTitle}>Toyota Fortuner GR Sport</Text>
              <Text style={styles.vehicleDetail}>GP 123-456 · VIN ············2024</Text>
            </View>
            <View style={styles.activeBadge}>
              <View style={styles.greenDot} />
              <Text style={styles.activeBadgeText}>ACTIVE</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => onNavigate(6)}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.3-.9-1.1-1.5-2-1.5H7.6c-.9 0-1.7.6-2 1.5L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></Path>
              <Circle cx="7" cy="17" r="2"></Circle>
              <Circle cx="17" cy="17" r="2"></Circle>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>MY VEHICLES</Text>
            <Text style={styles.menuSub}>Manage 2 registered vehicles</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></Path>
              <Path d="M13.73 21a2 2 0 0 1-3.46 0"></Path>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>NOTIFICATION SETTINGS</Text>
            <Text style={styles.menuSub}>Alerts, radius, preferences</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => onNavigate(12)}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Rect x="3" y="11" width="18" height="11" rx="2" ry="2"></Rect>
              <Path d="M7 11V7a5 5 0 0 1 10 0v4"></Path>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>PRIVACY & SECURITY</Text>
            <Text style={styles.menuSub}>Control your data & access</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => onNavigate(9)}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></Polygon>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>COMMUNITY CONTRIBUTION</Text>
            <Text style={styles.menuSub}>Score: 87/100 · Verified</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => onNavigate(11)}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
              <Circle cx="12" cy="7" r="4"></Circle>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>ACCOUNT TYPE</Text>
            <Text style={styles.menuSub}>Normal User · Vehicle Owner</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow}>
          <View style={styles.menuIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></Path>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.menuTitle}>HELP & SUPPORT</Text>
            <Text style={styles.menuSub}>FAQs, contact, feedback</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutCard} onPress={() => onNavigate(1)}>
          <View style={styles.signOutIconBox}>
            <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></Path>
              <Polyline points="16 17 21 12 16 7"></Polyline>
              <Line x1="21" y1="12" x2="9" y2="12"></Line>
            </Svg>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.signOutTitle}>SIGN OUT</Text>
            <Text style={styles.signOutSub}>Securely end your session</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate(1)}>
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></Path>
            <Polyline points="9 22 9 12 15 12 15 22"></Polyline>
          </Svg>
          <Text style={styles.navText}>HOME</Text>
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
          <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
            <Circle cx="12" cy="7" r="4"></Circle>
          </Svg>
          <Text style={[styles.navText, styles.navTextActive]}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  userHeaderCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  userAvatarBox: { width: 64, height: 64, borderRadius: 16, backgroundColor: '#1C1517', borderWidth: 1.5, borderColor: COLORS.accentRed, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  userAvatarText: { color: COLORS.textPrimary, fontSize: 20, fontWeight: '900', letterSpacing: 1 },
  onlineDot: { position: 'absolute', bottom: -2, right: -2, width: 12, height: 12, borderRadius: 6, backgroundColor: COLORS.accentGreen, borderWidth: 2, borderColor: COLORS.background },
  profileName: { color: COLORS.textPrimary, fontSize: 20, fontWeight: '900', letterSpacing: 0.5 },
  verifiedRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  verifiedText: { color: COLORS.accentRed, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  profileEmail: { color: COLORS.textMuted, fontSize: 12, marginTop: 2 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  statBox: { width: '23.5%', backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 6, alignItems: 'center' },
  statValRed: { color: COLORS.accentRed, fontSize: 16, fontWeight: '900' },
  statLabel: { color: COLORS.textPrimary, fontSize: 10, fontWeight: 'bold', marginTop: 4 },
  statSubLabel: { color: COLORS.textMuted, fontSize: 8, marginTop: 1 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  sectionHeader: { color: COLORS.textMuted, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  viewAllText: { color: COLORS.accentRed, fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  activeVehicleCard: { backgroundColor: '#161114', borderColor: COLORS.accentRed, borderWidth: 1, borderRadius: 14, padding: 14, marginBottom: 20 },
  vehicleRow: { flexDirection: 'row', alignItems: 'center' },
  carIconBox: { width: 38, height: 38, borderRadius: 10, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.surfaceBorder },
  vehicleTitle: { color: COLORS.textPrimary, fontSize: 13, fontWeight: 'bold' },
  vehicleDetail: { color: COLORS.textMuted, fontSize: 10, marginTop: 2 },
  activeBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  greenDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: COLORS.accentGreen, marginRight: 4 },
  activeBadgeText: { color: COLORS.accentGreen, fontSize: 9, fontWeight: '900', letterSpacing: 0.5 },
  menuRow: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, padding: 14, borderRadius: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  menuIconBox: { width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.03)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: COLORS.surfaceBorder },
  menuTitle: { color: COLORS.textPrimary, fontSize: 12, fontWeight: '900', letterSpacing: 0.5 },
  menuSub: { color: COLORS.textMuted, fontSize: 11, marginTop: 1 },
  menuArrow: { color: COLORS.textMuted, fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  signOutCard: { backgroundColor: '#1C0E11', borderColor: 'rgba(255, 42, 66, 0.3)', borderWidth: 1, padding: 14, borderRadius: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  signOutIconBox: { width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255, 42, 66, 0.1)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255, 42, 66, 0.2)' },
  signOutTitle: { color: COLORS.accentRed, fontSize: 12, fontWeight: '900', letterSpacing: 0.5 },
  signOutSub: { color: COLORS.textSecondary, fontSize: 11, marginTop: 1 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#121316', borderTopWidth: 1, borderTopColor: COLORS.surfaceBorder, height: 60, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: COLORS.textMuted, fontSize: 10, marginTop: 3, fontWeight: '600', letterSpacing: 0.5 },
  navTextActive: { color: COLORS.accentRed },
  navBadge: { position: 'absolute', top: -4, right: -10, backgroundColor: COLORS.accentRed, borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
});
