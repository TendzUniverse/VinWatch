import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline } from 'react-native-svg';
import { COLORS } from '../theme';

export default function VehicleDetailsScreen({ onNavigate }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(6)}>
        <Text style={styles.backButtonText}>‹ Back</Text>
      </TouchableOpacity>

      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Toyota Corolla</Text>
          <Text style={styles.subtitle}>2022 · ABC 123 GP</Text>
        </View>
        <View style={styles.statusBadgeGreen}>
          <View style={styles.greenDot} />
          <Text style={styles.statusBadgeTextGreen}>CLEAR</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.redIndicator} />
          <Text style={styles.sectionTitle}>VEHICLE INFORMATION</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>MAKE</Text>
          <Text style={styles.infoValue}>Toyota</Text>
        </View>
        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>MODEL</Text>
          <Text style={styles.infoValue}>Corolla</Text>
        </View>
        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>YEAR</Text>
          <Text style={styles.infoValue}>2022</Text>
        </View>
        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>COLOUR</Text>
          <Text style={styles.infoValue}>White</Text>
        </View>
        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>REGISTRATION</Text>
          <Text style={styles.infoValue}>ABC 123 GP</Text>
        </View>
        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>VIN</Text>
          <Text style={styles.infoValue}>****456</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.redIndicator} />
          <Text style={styles.sectionTitle}>SECURITY STATUS</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <View style={styles.greenDot} />
          <Text style={styles.securityStatusText}>CLEAR</Text>
        </View>
        <Text style={styles.securityDesc}>No active stolen vehicle report. Last checked just now.</Text>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.redIndicator} />
          <Text style={styles.sectionTitle}>ALERT HISTORY</Text>
        </View>
        <Text style={styles.historyEmptyText}>No alerts for this vehicle.</Text>
      </View>

      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <View style={styles.redIndicator} />
          <Text style={styles.sectionTitle}>REPORT HISTORY</Text>
        </View>
        <View style={styles.reportRow}>
          <View style={styles.reportIconBox}>
            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textPrimary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></Path>
              <Circle cx="12" cy="12" r="3"></Circle>
            </Svg>
          </View>
          <View>
            <Text style={styles.reportTitle}>Community Sighting</Text>
            <Text style={styles.reportSub}>Submitted 3 days ago · Verified</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.secondaryBtn} onPress={() => onNavigate(7)}>
          <Text style={styles.secondaryBtnText}>EDIT VEHICLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate(1)}>
          <Text style={styles.primaryBtnText}>VIEW ACTIVITY</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  backButton: { marginBottom: 8 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  title: { color: COLORS.textPrimary, fontSize: 24, fontWeight: '900', letterSpacing: 0.5 },
  subtitle: { color: COLORS.textSecondary, fontSize: 12, marginTop: 2 },
  statusBadgeGreen: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(16, 185, 129, 0.3)' },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.accentGreen, marginRight: 6 },
  statusBadgeTextGreen: { color: COLORS.accentGreen, fontSize: 11, fontWeight: '900', letterSpacing: 1 },
  sectionCard: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 14, padding: 16, marginBottom: 16 },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  redIndicator: { width: 3, height: 12, backgroundColor: COLORS.accentRed, borderRadius: 2, marginRight: 8 },
  sectionTitle: { color: COLORS.textSecondary, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 6 },
  infoLabel: { color: COLORS.textMuted, fontSize: 11, fontWeight: 'bold', letterSpacing: 0.5 },
  infoValue: { color: COLORS.textPrimary, fontSize: 13, fontWeight: 'bold', letterSpacing: 0.5 },
  infoDivider: { height: 1, backgroundColor: 'rgba(255, 255, 255, 0.03)', marginVertical: 4 },
  securityStatusText: { color: COLORS.accentGreen, fontSize: 14, fontWeight: '900', letterSpacing: 1 },
  securityDesc: { color: COLORS.textSecondary, fontSize: 12, lineHeight: 16 },
  historyEmptyText: { color: COLORS.textMuted, fontSize: 12, fontStyle: 'italic' },
  reportRow: { flexDirection: 'row', alignItems: 'center' },
  reportIconBox: { width: 32, height: 32, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.05)', justifyContent: 'center', alignItems: 'center', marginRight: 10, borderWidth: 1, borderColor: COLORS.surfaceBorder },
  reportTitle: { color: COLORS.textPrimary, fontSize: 13, fontWeight: 'bold' },
  reportSub: { color: COLORS.textMuted, fontSize: 11, marginTop: 2 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 20 },
  secondaryBtn: { flex: 1, backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1.5, borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginRight: 8 },
  secondaryBtnText: { color: COLORS.textPrimary, fontWeight: 'bold', fontSize: 12, letterSpacing: 0.8 },
  primaryBtn: { flex: 1, backgroundColor: COLORS.accentRed, borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginLeft: 8, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, elevation: 6 },
  primaryBtnText: { color: COLORS.textPrimary, fontWeight: '900', fontSize: 12, letterSpacing: 0.8 },
});
