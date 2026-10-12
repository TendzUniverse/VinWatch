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
  User,
  Shield,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react-native';

export default function UserDetailsScreen() {
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
        {/* PROFILE SUMMARY CARD */}
        <View style={styles.profileCard}>
          <View style={styles.avatarBox}>
            <User color="#29B6F6" size={32} />
          </View>
          <Text style={styles.userName}>Sipho Nkosi</Text>
          <Text style={styles.userRole}>Normal User & Vehicle Owner</Text>
          <View style={styles.activeBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.activeText}>ACCOUNT ACTIVE</Text>
          </View>
        </View>

        {/* DETAILS SECTION */}
        <Text style={styles.sectionTitle}>USER INFORMATION</Text>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Mail color="#888888" size={16} style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>EMAIL ADDRESS</Text>
              <Text style={styles.infoValue}>sipho.nkosi@example.com</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Phone color="#888888" size={16} style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>PHONE NUMBER</Text>
              <Text style={styles.infoValue}>+27 82 123 4567</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Clock color="#888888" size={16} style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>REGISTERED DATE</Text>
              <Text style={styles.infoValue}>14 February 2026</Text>
            </View>
          </View>
        </View>

        {/* ACCOUNT CAPABILITIES */}
        <Text style={styles.sectionTitle}>PERMISSIONS & STATUS</Text>

        <View style={styles.capabilitiesCard}>
          <View style={styles.statusRow}>
            <CheckCircle2 color="#4CAF50" size={18} style={styles.statusIcon} />
            <Text style={styles.statusText}>Identity Verification Completed</Text>
          </View>
          <View style={styles.statusRow}>
            <CheckCircle2 color="#4CAF50" size={18} style={styles.statusIcon} />
            <Text style={styles.statusText}>1 Registered Vehicle Linked</Text>
          </View>
          <View style={styles.statusRow}>
            <CheckCircle2 color="#4CAF50" size={18} style={styles.statusIcon} />
            <Text style={styles.statusText}>Community Sighting Submission Access</Text>
          </View>
        </View>

        {/* ADMIN ACTIONS */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.suspendButton}>
            <AlertTriangle color="#E53935" size={16} style={{ marginRight: 6 }} />
            <Text style={styles.suspendText}>SUSPEND USER</Text>
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
  profileCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#222222',
  },
  avatarBox: {
    backgroundColor: 'rgba(41, 182, 246, 0.15)',
    padding: 16,
    borderRadius: 50,
    marginBottom: 12,
  },
  userName: { color: '#FFFFFF', fontSize: 20, fontWeight: '900' },
  userRole: { color: '#888888', fontSize: 13, marginTop: 4 },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 12,
  },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#4CAF50', marginRight: 6 },
  activeText: { color: '#4CAF50', fontSize: 10, fontWeight: '900', letterSpacing: 0.8 },
  sectionTitle: { color: '#666666', fontSize: 11, fontWeight: '800', letterSpacing: 1, marginBottom: 10 },
  infoCard: { backgroundColor: '#141414', borderRadius: 14, padding: 14, marginBottom: 20, borderWidth: 1, borderColor: '#222222' },
  infoRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  infoIcon: { marginRight: 12 },
  infoTextContainer: { flex: 1 },
  infoLabel: { color: '#666666', fontSize: 9, fontWeight: '800', letterSpacing: 0.8 },
  infoValue: { color: '#FFFFFF', fontSize: 13, fontWeight: '600', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#222222', marginVertical: 8 },
  capabilitiesCard: { backgroundColor: '#141414', borderRadius: 14, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#222222', gap: 12 },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusIcon: { marginRight: 10 },
  statusText: { color: '#CCCCCC', fontSize: 13, fontWeight: '500' },
  actionRow: { marginTop: 10 },
  suspendButton: { backgroundColor: '#1A1010', borderWidth: 1, borderColor: 'rgba(229, 57, 53, 0.4)', borderRadius: 12, paddingVertical: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  suspendText: { color: '#E53935', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
});


