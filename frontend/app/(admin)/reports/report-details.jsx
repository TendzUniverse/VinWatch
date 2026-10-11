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
  Siren,
  MapPin,
  Clock,
  User,
  CheckCircle2,
  XCircle,
} from 'lucide-react-native';

export default function ReportDetailsScreen() {
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
        {/* REPORT HEADER CARD */}
        <View style={styles.reportHeaderCard}>
          <View style={styles.titleRow}>
            <Siren color="#E53935" size={22} style={{ marginRight: 8 }} />
            <Text style={styles.reportTitle}>HIJACKING REPORT</Text>
          </View>
          <Text style={styles.reportId}>CASE REF: #REP-2026-9081</Text>
          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>PENDING OFFICIAL VERIFICATION</Text>
          </View>
        </View>

        {/* VEHICLE DETAILS */}
        <Text style={styles.sectionTitle}>REPORTED VEHICLE</Text>
        <View style={styles.detailCard}>
          <Text style={styles.vehicleName}>Toyota Corolla (2022)</Text>
          <Text style={styles.vehicleVin}>VIN: AHTK1239840192841</Text>
          <Text style={styles.vehicleReg}>REG: GP 123-456</Text>
        </View>

        {/* INCIDENT INFORMATION */}
        <Text style={styles.sectionTitle}>INCIDENT DETAILS</Text>
        <View style={styles.detailCard}>
          <View style={styles.row}>
            <MapPin color="#888888" size={16} style={styles.icon} />
            <Text style={styles.rowText}>Johannesburg CBD (Corner Market St)</Text>
          </View>
          <View style={styles.row}>
            <Clock color="#888888" size={16} style={styles.icon} />
            <Text style={styles.rowText}>Submitted 10 minutes ago (09:32 AM)</Text>
          </View>
          <View style={styles.row}>
            <User color="#888888" size={16} style={styles.icon} />
            <Text style={styles.rowText}>Reported by Verified Owner</Text>
          </View>
        </View>

        {/* OFFICIAL ACTION BUTTONS */}
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.verifyButton}>
            <CheckCircle2 color="#FFFFFF" size={18} style={{ marginRight: 6 }} />
            <Text style={styles.buttonText}>VERIFY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rejectButton}>
            <XCircle color="#E53935" size={18} style={{ marginRight: 6 }} />
            <Text style={styles.rejectText}>REJECT</Text>
          </TouchableOpacity>
        </View>
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
  reportHeaderCard: {
    backgroundColor: '#181212',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  reportTitle: { color: '#E53935', fontSize: 18, fontWeight: '900', letterSpacing: 0.5 },
  reportId: { color: '#888888', fontSize: 12, marginTop: 4, fontWeight: '600' },
  pendingBadge: {
    backgroundColor: 'rgba(255, 179, 0, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 179, 0, 0.3)',
  },
  pendingText: { color: '#FFB300', fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  sectionTitle: { color: '#666666', fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 8 },
  detailCard: { backgroundColor: '#141414', borderRadius: 14, padding: 14, marginBottom: 20, borderWidth: 1, borderColor: '#222222', gap: 6 },
  vehicleName: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  vehicleVin: { color: '#888888', fontSize: 12, marginTop: 2 },
  vehicleReg: { color: '#29B6F6', fontSize: 12, fontWeight: '700', marginTop: 2 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 4 },
  icon: { marginRight: 10 },
  rowText: { color: '#CCCCCC', fontSize: 13 },
  actionGrid: { flexDirection: 'row', gap: 12, marginTop: 10 },
  verifyButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#1A1010',
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '900', letterSpacing: 0.8 },
  rejectText: { color: '#E53935', fontSize: 12, fontWeight: '900', letterSpacing: 0.8 },
});


