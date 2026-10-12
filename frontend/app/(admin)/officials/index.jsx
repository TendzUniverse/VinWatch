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
  ShieldCheck,
  FileText,
  Eye,
  Siren,
  CheckSquare,
  Car,
  MapPin,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react-native';

export default function VerifiedOfficialDashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* TOP HEADER */}
        <View style={styles.headerRow}>
          <View style={styles.headerTitleContainer}>
            <ShieldAlert color="#E53935" size={22} style={styles.headerIcon} />
            <Text style={styles.appTitle}>VINWatch Official</Text>
          </View>
          <View style={styles.officialBadge}>
            <ShieldCheck color="#E53935" size={12} style={{ marginRight: 4 }} />
            <Text style={styles.officialBadgeText}>VERIFIED OFFICIAL</Text>
          </View>
        </View>

        {/* HERO TITLE & SUBTITLE */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            VINWATCH <Text style={styles.heroTitleRed}>OFFICIAL</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Good morning — 3 reports require urgent attention.
          </Text>
        </View>

        {/* TOP METRICS ROW */}
        <View style={styles.metricsRow}>
          <View style={[styles.metricCard, styles.cardYellowBorder]}>
            <View style={styles.metricIconContainer}>
              <FileText color="#FFB300" size={18} />
            </View>
            <Text style={styles.metricValueYellow}>12</Text>
            <Text style={styles.metricLabel}>Reports Awaiting Review</Text>
          </View>

          <View style={[styles.metricCard, styles.cardBlueBorder]}>
            <View style={styles.metricIconContainer}>
              <Eye color="#29B6F6" size={18} />
            </View>
            <Text style={styles.metricValueBlue}>8</Text>
            <Text style={styles.metricLabel}>New Sightings</Text>
          </View>

          <View style={[styles.metricCard, styles.cardRedBorder]}>
            <View style={styles.metricIconContainer}>
              <Siren color="#E53935" size={18} />
            </View>
            <Text style={styles.metricValueRed}>24</Text>
            <Text style={styles.metricLabel}>Active Vehicles</Text>
          </View>
        </View>

        {/* URGENT ACTION BANNER */}
        <View style={styles.urgentBanner}>
          <View style={styles.urgentHeader}>
            <View style={styles.urgentDot} />
            <Text style={styles.urgentHeaderText}>URGENT — REQUIRES ACTION</Text>
          </View>

          <View style={styles.urgentContent}>
            <View style={styles.urgentIconBox}>
              <Siren color="#E53935" size={20} />
            </View>
            <View style={styles.urgentTextContainer}>
              <Text style={styles.urgentTitle}>New hijacking report submitted</Text>
              <Text style={styles.urgentSubtext}>Toyota Corolla - Johannesburg - 10 minutes ago</Text>
            </View>
            <TouchableOpacity style={styles.reviewButton}>
              <Text style={styles.reviewButtonText}>REVIEW</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OFFICIAL ACTIONS SECTION */}
        <Text style={styles.sectionHeader}>OFFICIAL ACTIONS</Text>

        <View style={styles.actionsGrid}>
          {/* VERIFY REPORTS */}
          <TouchableOpacity style={[styles.actionCard, styles.cardRedBorder]}>
            <View style={[styles.actionIconBox, { backgroundColor: 'rgba(229, 57, 53, 0.15)' }]}>
              <CheckSquare color="#E53935" size={20} />
            </View>
            <Text style={styles.actionTitleRed}>VERIFY REPORTS</Text>
            <Text style={styles.actionSubtext}>12 awaiting your review</Text>
          </TouchableOpacity>

          {/* REVIEW SIGHTINGS */}
          <TouchableOpacity style={[styles.actionCard, styles.cardBlueBorder]}>
            <View style={[styles.actionIconBox, { backgroundColor: 'rgba(41, 182, 246, 0.15)' }]}>
              <Eye color="#29B6F6" size={20} />
            </View>
            <Text style={styles.actionTitleBlue}>REVIEW SIGHTINGS</Text>
            <Text style={styles.actionSubtext}>8 new community sightings</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsGrid}>
          {/* UPDATE VEHICLE STATUS */}
          <TouchableOpacity style={[styles.actionCard, styles.cardYellowBorder]}>
            <View style={[styles.actionIconBox, { backgroundColor: 'rgba(255, 179, 0, 0.15)' }]}>
              <Car color="#FFB300" size={20} />
            </View>
            <Text style={styles.actionTitleYellow}>UPDATE VEHICLE STATUS</Text>
            <Text style={styles.actionSubtext}>Change vehicle report status</Text>
          </TouchableOpacity>

          {/* RECOVERY ACTIVITY */}
          <TouchableOpacity style={[styles.actionCard, styles.cardGreenBorder]}>
            <View style={[styles.actionIconBox, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
              <MapPin color="#4CAF50" size={20} />
            </View>
            <Text style={styles.actionTitleGreen}>RECOVERY ACTIVITY</Text>
            <Text style={styles.actionSubtext}>View intelligence map</Text>
          </TouchableOpacity>
        </View>

        {/* REPORT PROTECTION SYSTEM BOTTOM CARD */}
        <TouchableOpacity style={styles.protectionCard}>
          <View style={styles.protectionIconBox}>
            <ShieldCheck color="#29B6F6" size={20} />
          </View>
          <View style={styles.protectionTextContainer}>
            <Text style={styles.protectionTitle}>Report Protection System</Text>
            <Text style={styles.protectionSubtext}>Anti-abuse controls & audit logs</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 8,
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  officialBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  officialBadgeText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  heroSection: {
    marginBottom: 20,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroTitleRed: {
    color: '#E53935',
  },
  heroSubtitle: {
    color: '#777777',
    fontSize: 13,
    marginTop: 4,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  cardYellowBorder: {
    borderColor: 'rgba(255, 179, 0, 0.3)',
  },
  cardBlueBorder: {
    borderColor: 'rgba(41, 182, 246, 0.3)',
  },
  cardRedBorder: {
    borderColor: 'rgba(229, 57, 53, 0.3)',
  },
  cardGreenBorder: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  metricIconContainer: {
    marginBottom: 6,
  },
  metricValueYellow: {
    color: '#FFB300',
    fontSize: 22,
    fontWeight: '900',
  },
  metricValueBlue: {
    color: '#29B6F6',
    fontSize: 22,
    fontWeight: '900',
  },
  metricValueRed: {
    color: '#E53935',
    fontSize: 22,
    fontWeight: '900',
  },
  metricLabel: {
    color: '#888888',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 4,
  },
  urgentBanner: {
    backgroundColor: '#181212',
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  urgentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  urgentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E53935',
    marginRight: 8,
  },
  urgentHeaderText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  urgentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  urgentIconBox: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  urgentTextContainer: {
    flex: 1,
  },
  urgentTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  urgentSubtext: {
    color: '#777777',
    fontSize: 11,
    marginTop: 2,
  },
  reviewButton: {
    backgroundColor: '#E53935',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  reviewButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionHeader: {
    color: '#777777',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
  },
  actionIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  actionTitleRed: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  actionTitleBlue: {
    color: '#29B6F6',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  actionTitleYellow: {
    color: '#FFB300',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  actionTitleGreen: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  actionSubtext: {
    color: '#777777',
    fontSize: 10,
    marginTop: 4,
  },
  protectionCard: {
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222222',
  },
  protectionIconBox: {
    backgroundColor: 'rgba(41, 182, 246, 0.15)',
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  protectionTextContainer: {
    flex: 1,
  },
  protectionTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  protectionSubtext: {
    color: '#777777',
    fontSize: 11,
    marginTop: 2,
  },
});


