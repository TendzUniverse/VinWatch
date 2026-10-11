import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  ChevronLeft,
  ShieldCheck,
  BadgeCheck,
  CheckSquare,
  FileText,
  Award,
} from 'lucide-react-native';

export default function OfficialDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft color="#FFFFFF" size={24} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* OFFICIAL PROFILE HERO */}
        <View style={styles.profileCard}>
          <View style={styles.avatarBox}>
            <ShieldCheck color="#E53935" size={32} />
          </View>
          <Text style={styles.officialName}>Officer Johan Pretorius</Text>
          <Text style={styles.officialBadgeId}>BADGE ID: #SA-89412</Text>
          <View style={styles.verifiedBadge}>
            <BadgeCheck color="#E53935" size={12} style={{ marginRight: 4 }} />
            <Text style={styles.verifiedText}>VERIFIED LAW ENFORCEMENT</Text>
          </View>
        </View>

        {/* METRICS ROW */}
        <View style={styles.metricsRow}>
          <View style={styles.metricCard}>
            <CheckSquare color="#4CAF50" size={18} />
            <Text style={styles.metricNumber}>142</Text>
            <Text style={styles.metricLabel}>VERIFIED REPORTS</Text>
          </View>

          <View style={styles.metricCard}>
            <FileText color="#29B6F6" size={18} />
            <Text style={styles.metricNumber}>98.4%</Text>
            <Text style={styles.metricLabel}>ACCURACY SCORE</Text>
          </View>
        </View>

        {/* OFFICIAL ASSIGNMENT & JURISDICTION */}
        <Text style={styles.sectionTitle}>JURISDICTION DETAILS</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>STATION / UNIT</Text>
            <Text style={styles.infoValue}>SAPS Sandton Central</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ASSIGNED PROVINCE</Text>
            <Text style={styles.infoValue}>Gauteng, South Africa</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>CLEARANCE LEVEL</Text>
            <Text style={styles.infoValue}>Level 3 — Escalation Officer</Text>
          </View>
        </View>

        {/* ACTION BUTTONS */}
        <TouchableOpacity style={styles.primaryButton}>
          <Award color="#FFFFFF" size={16} style={{ marginRight: 8 }} />
          <Text style={styles.primaryButtonText}>UPDATE CLEARANCE LEVEL</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0D0D' },
  header: { paddingHorizontal: 16, paddingVertical: 12 },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backText: { color: '#FFFFFF', fontSize: 16, marginLeft: 4 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 32 },
  profileCard: {
    backgroundColor: '#181212',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  avatarBox: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    padding: 16,
    borderRadius: 50,
    marginBottom: 12,
  },
  officialName: { color: '#FFFFFF', fontSize: 20, fontWeight: '900' },
  officialBadgeId: { color: '#888888', fontSize: 12, marginTop: 4, letterSpacing: 0.5 },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.3)',
  },
  verifiedText: { color: '#E53935', fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  metricsRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  metricCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222222',
  },
  metricNumber: { color: '#FFFFFF', fontSize: 22, fontWeight: '900', marginTop: 6 },
  metricLabel: { color: '#777777', fontSize: 9, fontWeight: '800', letterSpacing: 0.8, marginTop: 2 },
  sectionTitle: { color: '#666666', fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 10 },
  infoCard: { backgroundColor: '#141414', borderRadius: 14, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#222222' },
  infoRow: { paddingVertical: 4 },
  infoLabel: { color: '#666666', fontSize: 9, fontWeight: '800', letterSpacing: 0.8 },
  infoValue: { color: '#FFFFFF', fontSize: 14, fontWeight: '700', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#222222', marginVertical: 10 },
  primaryButton: { backgroundColor: '#E53935', borderRadius: 12, paddingVertical: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  primaryButtonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
});


