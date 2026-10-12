import { useScreenNav } from '../../../navigation/useScreenNav';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline,Polygon } from 'react-native-svg';
import { COLORS } from '../../../styles/theme';

export default function CommunityTrustScoreScreen() {
  const onNavigate = useScreenNav();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(10)}>
        <Text style={styles.backButtonText}>‹ Back</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        COMMUNITY <Text style={{ color: COLORS.accentRed }}>CONTRIBUTION</Text>
      </Text>

      <View style={styles.scoreCard}>
        <Text style={styles.cardHeaderLabel}>COMMUNITY SCORE</Text>
        
        <View style={styles.scoreTopRow}>
          <View style={styles.gaugeCircle}>
            <Text style={styles.gaugeScore}>87</Text>
            <Text style={styles.gaugeMax}>/100</Text>
          </View>

          <View style={{ flex: 1, marginLeft: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Svg width="16" height="16" viewBox="0 0 24 24" fill={COLORS.accentYellow} stroke={COLORS.accentYellow} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></Polygon>
              </Svg>
              <Text style={styles.badgeTitle}>VERIFIED CONTRIBUTOR</Text>
            </View>

            <View style={styles.statsRow}>
              <View>
                <Text style={styles.statValueGreen}>12</Text>
                <Text style={styles.statLabel}>Valid</Text>
              </View>
              <View style={{ marginLeft: 24 }}>
                <Text style={styles.statValueRed}>1</Text>
                <Text style={styles.statLabel}>Rejected</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.memberBadgeCard}>
        <Svg width="18" height="18" viewBox="0 0 24 24" fill={COLORS.accentYellow} stroke={COLORS.accentYellow} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 10 }}>
          <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></Polygon>
        </Svg>
        <View>
          <Text style={styles.memberBadgeTitle}>VERIFIED CONTRIBUTOR</Text>
          <Text style={styles.memberBadgeSub}>Active member since January 2026</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>CONTRIBUTION BREAKDOWN</Text>

      <View style={styles.breakdownCard}>
        <View style={styles.breakdownHeaderRow}>
          <Text style={styles.breakdownTitle}>Valid Reports</Text>
          <Text style={styles.breakdownScoreGreen}>12/20</Text>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFillGreen, { width: '60%' }]} />
        </View>
      </View>

      <View style={styles.breakdownCard}>
        <View style={styles.breakdownHeaderRow}>
          <Text style={styles.breakdownTitle}>Verified Sightings</Text>
          <Text style={styles.breakdownScoreBlue}>7/10</Text>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFillBlue, { width: '70%' }]} />
        </View>
      </View>

      <View style={styles.breakdownCard}>
        <View style={styles.breakdownHeaderRow}>
          <Text style={styles.breakdownTitle}>Response Rate</Text>
          <Text style={styles.breakdownScoreRed}>94%</Text>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFillRed, { width: '94%' }]} />
        </View>
      </View>

      <Text style={styles.footnoteText}>
        Your score reflects your report history and contribution quality.
      </Text>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('history')}>
        <Text style={styles.primaryBtnText}>REPORT HISTORY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={() => onNavigate(1)}>
        <Text style={styles.secondaryBtnText}>VIEW CONTRIBUTIONS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  backButton: { marginBottom: 8 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  headerTitle: { color: COLORS.textPrimary, fontSize: 22, fontWeight: '900', letterSpacing: 1, marginBottom: 20 },
  scoreCard: { backgroundColor: '#161214', borderColor: 'rgba(255, 42, 66, 0.3)', borderWidth: 1.5, borderRadius: 16, padding: 16, marginBottom: 16, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 4 },
  cardHeaderLabel: { color: COLORS.textMuted, fontSize: 9, fontWeight: 'bold', letterSpacing: 1, textAlign: 'center', marginBottom: 12 },
  scoreTopRow: { flexDirection: 'row', alignItems: 'center' },
  gaugeCircle: { width: 76, height: 76, borderRadius: 38, borderWidth: 3.5, borderColor: COLORS.accentRed, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 42, 66, 0.05)' },
  gaugeScore: { color: COLORS.textPrimary, fontSize: 20, fontWeight: '900', lineHeight: 22 },
  gaugeMax: { color: COLORS.textMuted, fontSize: 9, fontWeight: 'bold' },
  badgeTitle: { color: COLORS.textPrimary, fontSize: 12, fontWeight: '900', letterSpacing: 0.5 },
  statsRow: { flexDirection: 'row', marginTop: 10 },
  statValueGreen: { color: COLORS.accentGreen, fontSize: 16, fontWeight: '900' },
  statValueRed: { color: COLORS.accentRed, fontSize: 16, fontWeight: '900' },
  statLabel: { color: COLORS.textMuted, fontSize: 10, fontWeight: '600' },
  memberBadgeCard: { backgroundColor: COLORS.surface, borderColor: 'rgba(245, 158, 11, 0.4)', borderWidth: 1, borderRadius: 14, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  memberBadgeTitle: { color: COLORS.accentYellow, fontSize: 12, fontWeight: '900', letterSpacing: 0.8 },
  memberBadgeSub: { color: COLORS.textSecondary, fontSize: 11, marginTop: 2 },
  sectionHeader: { color: COLORS.textMuted, fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 12 },
  breakdownCard: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 14, marginBottom: 10 },
  breakdownHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  breakdownTitle: { color: COLORS.textPrimary, fontSize: 13, fontWeight: 'bold' },
  breakdownScoreGreen: { color: COLORS.accentGreen, fontSize: 13, fontWeight: '900' },
  breakdownScoreBlue: { color: COLORS.accentBlue, fontSize: 13, fontWeight: '900' },
  breakdownScoreRed: { color: COLORS.accentRed, fontSize: 13, fontWeight: '900' },
  progressBarTrack: { height: 4, backgroundColor: '#232529', borderRadius: 2, overflow: 'hidden' },
  progressBarFillGreen: { height: '100%', backgroundColor: COLORS.accentGreen, borderRadius: 2 },
  progressBarFillBlue: { height: '100%', backgroundColor: COLORS.accentBlue, borderRadius: 2 },
  progressBarFillRed: { height: '100%', backgroundColor: COLORS.accentRed, borderRadius: 2 },
  footnoteText: { color: COLORS.textMuted, fontSize: 11, textAlign: 'center', marginVertical: 16, fontStyle: 'italic' },
  primaryBtn: { backgroundColor: COLORS.accentRed, borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 12, shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, elevation: 6 },
  primaryBtnText: { color: COLORS.textPrimary, fontWeight: '900', fontSize: 14, letterSpacing: 1 },
  secondaryBtn: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1.5, borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  secondaryBtnText: { color: COLORS.textPrimary, fontWeight: 'bold', fontSize: 13, letterSpacing: 1 },
});
