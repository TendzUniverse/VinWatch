import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline } from 'react-native-svg';
import { COLORS } from '../theme';

export default function SecurityPrivacyScreen({ onNavigate }) {
  const [twoFactor, setTwoFactor] = useState(false);
  const [locationPerm, setLocationPerm] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Top Back Navigation */}
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(10)}>
        <Text style={styles.backButtonText}>‹ Back</Text>
      </TouchableOpacity>

      {/* Header Title */}
      <Text style={styles.headerTitle}>
        SECURITY <Text style={{ color: COLORS.accentRed }}>& PRIVACY</Text>
      </Text>

      {/* Category 1: Account Security */}
      <View style={styles.sectionHeaderRow}>
        <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
          <Rect x="3" y="11" width="18" height="11" rx="2" ry="2"></Rect>
          <Path d="M7 11V7a5 5 0 0 1 10 0v4"></Path>
        </Svg>
        <Text style={styles.sectionHeader}>ACCOUNT SECURITY</Text>
      </View>

      <TouchableOpacity style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Change Password</Text>
          <Text style={styles.menuSub}>Update your account password</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      <View style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Two-Factor Authentication</Text>
          <Text style={styles.menuSub}>Not enabled</Text>
        </View>
        <TouchableOpacity
          style={[styles.toggleBadge, twoFactor ? styles.toggleOn : styles.toggleOff]}
          onPress={() => setTwoFactor(!twoFactor)}
        >
          <Text style={[styles.toggleText, twoFactor ? styles.toggleTextOn : styles.toggleTextOff]}>
            {twoFactor ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Category 2: Data & Privacy */}
      <View style={[styles.sectionHeaderRow, { marginTop: 16 }]}>
        <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
          <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></Path>
        </Svg>
        <Text style={styles.sectionHeader}>DATA & PRIVACY</Text>
      </View>

      <View style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Location Permissions</Text>
          <Text style={styles.menuSub}>Always on — used for alerts</Text>
        </View>
        <TouchableOpacity
          style={[styles.toggleBadge, locationPerm ? styles.toggleOn : styles.toggleOff]}
          onPress={() => setLocationPerm(!locationPerm)}
        >
          <Text style={[styles.toggleText, locationPerm ? styles.toggleTextOn : styles.toggleTextOff]}>
            {locationPerm ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Privacy Settings</Text>
          <Text style={styles.menuSub}>Control what you share</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Data Access</Text>
          <Text style={styles.menuSub}>Manage app data permissions</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      {/* Category 3: Account Activity */}
      <View style={[styles.sectionHeaderRow, { marginTop: 16 }]}>
        <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
          <Path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></Path>
          <Polyline points="14 2 14 8 20 8"></Polyline>
          <Line x1="16" y1="13" x2="8" y2="13"></Line>
          <Line x1="16" y1="17" x2="8" y2="17"></Line>
          <Polyline points="10 9 9 9 8 9"></Polyline>
        </Svg>
        <Text style={styles.sectionHeader}>ACCOUNT ACTIVITY</Text>
      </View>

      <TouchableOpacity style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Login Activity</Text>
          <Text style={styles.menuSub}>Last login: Today at 08:12</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuRow} onPress={() => onNavigate(9)}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Report Activity</Text>
          <Text style={styles.menuSub}>12 reports submitted</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.menuTitle}>Audit History</Text>
          <Text style={styles.menuSub}>View all account actions</Text>
        </View>
        <Text style={styles.menuArrow}>›</Text>
      </TouchableOpacity>

      {/* Compliance Notice */}
      <View style={styles.complianceBox}>
        <View style={styles.complianceDot} />
        <Text style={styles.complianceText}>
          VINWatch SA is POPIA compliant. Your data is protected.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  headerTitle: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionHeader: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  menuRow: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.surfaceBorder,
    borderWidth: 1,
    padding: 14,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuTitle: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: 'bold',
  },
  menuSub: {
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
  menuArrow: {
    color: COLORS.textMuted,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  toggleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  toggleOn: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: COLORS.accentGreen,
  },
  toggleOff: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderColor: COLORS.accentRed,
  },
  toggleText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  toggleTextOn: {
    color: COLORS.accentGreen,
  },
  toggleTextOff: {
    color: COLORS.accentRed,
  },
  complianceBox: {
    backgroundColor: COLORS.surface,
    borderColor: COLORS.surfaceBorder,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  complianceDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accentRed,
    marginRight: 10,
  },
  complianceText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    flex: 1,
  },
});
