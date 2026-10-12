import { useScreenNav } from '../../../navigation/useScreenNav';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { COLORS } from '../../../styles/theme';

export default function AccountTypeScreen() {
  const onNavigate = useScreenNav();
  return (
    <View style={styles.screenWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(10)}>
          <Text style={styles.backButtonText}>‹ Back</Text>
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>
            ACCOUNT <Text style={{ color: COLORS.accentRed }}>TYPE</Text>
          </Text>
          <Text style={styles.subtitle}>Your account capabilities and access level.</Text>
        </View>

        <View style={styles.activePlanCard}>
          <View style={styles.planHeaderRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentBlue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
                <Circle cx="12" cy="7" r="4"></Circle>
              </Svg>
              <Text style={styles.planTitleBlue}>NORMAL USER</Text>
            </View>
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeText}>ACTIVE</Text>
            </View>
          </View>

          <View style={styles.featureList}>
            <View style={styles.featureRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.featureText}>Check VINs against the national database</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.featureText}>Receive nearby vehicle crime alerts</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.featureText}>Submit community sighting reports</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.featureText}>View the recovery intelligence map</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text style={styles.featureText}>Manage your profile and settings</Text>
            </View>
          </View>
        </View>

        <View style={styles.lockedPlanCard}>
          <View style={styles.planHeaderRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <Path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.3-.9-1.1-1.5-2-1.5H7.6c-.9 0-1.7.6-2 1.5L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></Path>
                <Circle cx="7" cy="17" r="2"></Circle>
                <Circle cx="17" cy="17" r="2"></Circle>
              </Svg>
              <Text style={styles.planTitleRed}>VEHICLE OWNER</Text>
            </View>
          </View>
          <Text style={styles.lockedSub}>Activated when you register a vehicle.</Text>

          <View style={styles.featureList}>
            <View style={styles.featureRow}>
              <Text style={styles.checkIconRed}>✓</Text>
              <Text style={styles.featureTextMuted}>Register and manage your vehicles</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIconRed}>✓</Text>
              <Text style={styles.featureTextMuted}>Store VIN and registration information</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIconRed}>✓</Text>
              <Text style={styles.featureTextMuted}>Receive vehicle-specific security alerts</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIconRed}>✓</Text>
              <Text style={styles.featureTextMuted}>Monitor individual vehicle status</Text>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.checkIconRed}>✓</Text>
              <Text style={styles.featureTextMuted}>Update vehicle recovery status</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textSecondary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
            <Circle cx="12" cy="12" r="10"></Circle>
            <Line x1="12" y1="16" x2="12" y2="12"></Line>
            <Line x1="12" y1="8" x2="12.01" y2="8"></Line>
          </Svg>
          <Text style={styles.infoText}>
            Account types are assigned based on your registration and usage. Additional capabilities are activated automatically when applicable.
          </Text>
        </View>

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
  backButton: { marginBottom: 8 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  headerContainer: { marginBottom: 20 },
  title: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '900', letterSpacing: 1 },
  subtitle: { color: COLORS.textSecondary, fontSize: 12, marginTop: 2 },
  activePlanCard: { backgroundColor: '#0F161C', borderColor: '#3B82F6', borderWidth: 1.5, borderRadius: 16, padding: 16, marginBottom: 16, shadowColor: COLORS.accentBlue, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 3 },
  lockedPlanCard: { backgroundColor: '#161114', borderColor: 'rgba(255, 42, 66, 0.4)', borderWidth: 1.5, borderRadius: 16, padding: 16, marginBottom: 16 },
  planHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  planTitleBlue: { color: COLORS.accentBlue, fontSize: 13, fontWeight: '900', letterSpacing: 1 },
  planTitleRed: { color: COLORS.accentRed, fontSize: 13, fontWeight: '900', letterSpacing: 1 },
  activeBadge: { backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: COLORS.accentBlue, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  activeBadgeText: { color: COLORS.accentBlue, fontSize: 9, fontWeight: '900', letterSpacing: 1 },
  lockedSub: { color: COLORS.textMuted, fontSize: 11, marginBottom: 14 },
  featureList: { marginTop: 10 },
  featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkIcon: { color: COLORS.accentBlue, fontSize: 12, fontWeight: 'bold', marginRight: 10 },
  checkIconRed: { color: COLORS.accentRed, fontSize: 12, fontWeight: 'bold', marginRight: 10 },
  featureText: { color: COLORS.textPrimary, fontSize: 12, fontWeight: '500' },
  featureTextMuted: { color: COLORS.textSecondary, fontSize: 12 },
  infoBox: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  infoText: { color: COLORS.textSecondary, fontSize: 11, flex: 1, lineHeight: 16 },
  bottomNav: { flexDirection: 'row', backgroundColor: '#121316', borderTopWidth: 1, borderTopColor: COLORS.surfaceBorder, height: 60, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  navItem: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  navText: { color: COLORS.textMuted, fontSize: 10, marginTop: 3, fontWeight: '600', letterSpacing: 0.5 },
  navTextActive: { color: COLORS.accentRed },
  navBadge: { position: 'absolute', top: -4, right: -10, backgroundColor: COLORS.accentRed, borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center' },
  navBadgeText: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
});
