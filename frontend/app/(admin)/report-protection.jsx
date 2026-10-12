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
  Shield,
  ShieldAlert,
  Clock,
  FileText,
  UserCheck,
  Info,
} from 'lucide-react-native';

export default function ReportProtectionScreen() {
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
        {/* TITLE BANNER */}
        <View style={styles.titleContainer}>
          <Shield color="#E53935" size={28} style={styles.titleIcon} />
          <Text style={styles.headerTitle}>REPORT PROTECTION</Text>
        </View>

        <Text style={styles.descriptionText}>
          VINWatch SA uses security controls to help reduce false reports and misuse of the community reporting system.
        </Text>

        {/* FEATURE CARDS */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <ShieldAlert color="#E53935" size={22} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitleRed}>REPORT LIMITS</Text>
            <Text style={styles.cardBody}>
              Users may only submit a limited number of reports within a set time period to help prevent spam and misuse.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Clock color="#E53935" size={22} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitleYellow}>REPORT REVIEW</Text>
            <Text style={styles.cardBody}>
              Reports may be held under review before verification. Unverified reports are clearly labelled in the system.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <FileText color="#E53935" size={22} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitleBlue}>AUDIT LOGS</Text>
            <Text style={styles.cardBody}>
              All important actions — including report submissions, verifications, and rejections — are recorded for accountability.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <UserCheck color="#E53935" size={22} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitleGreen}>VERIFIED OFFICIALS</Text>
            <Text style={styles.cardBody}>
              Only authorised officials with verified accounts can confirm, reject, or escalate vehicle reports in the database.
            </Text>
          </View>
        </View>

        {/* INFO FOOTER NOTE */}
        <View style={styles.infoBox}>
          <Info color="#29B6F6" size={18} style={styles.infoIcon} />
          <Text style={styles.infoText}>
            These controls work together to keep the VINWatch SA database accurate and trustworthy for the community and law enforcement.
          </Text>
        </View>

        {/* ACTION BUTTON */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>RETURN TO DASHBOARD</Text>
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#E53935',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  descriptionText: {
    color: '#A0A0A0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#222222',
  },
  iconContainer: {
    backgroundColor: '#262626',
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitleRed: {
    color: '#E53935',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardTitleYellow: {
    color: '#FFB300',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardTitleBlue: {
    color: '#29B6F6',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardTitleGreen: {
    color: '#66BB6A',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardBody: {
    color: '#888888',
    fontSize: 13,
    lineHeight: 18,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(41, 182, 246, 0.08)',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(41, 182, 246, 0.2)',
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  infoText: {
    color: '#78909C',
    fontSize: 12,
    lineHeight: 17,
    flex: 1,
  },
  actionButton: {
    backgroundColor: '#E53935',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1,
  },
});


