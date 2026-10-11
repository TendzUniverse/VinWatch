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
  Ban,
  Clock,
  FileText,
  ShieldAlert,
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
        {/* TITLE SECTION */}
        <View style={styles.titleSection}>
          <View style={styles.titleRow}>
            <ShieldCheck color="#E53935" size={26} style={styles.titleIcon} />
            <Text style={styles.headerTitle}>
              REPORT <Text style={styles.headerTitleRed}>PROTECTION</Text>
            </Text>
          </View>
        </View>

        {/* HERO BANNER CARD */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroBannerText}>
            VINWatch SA uses security controls to help reduce false reports and misuse of the community reporting system.
          </Text>
        </View>

        {/* FEATURE CARDS LIST */}
        <View style={styles.cardsContainer}>
          {/* REPORT LIMITS (RED) */}
          <View style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(229, 57, 53, 0.15)' }]}>
              <Ban color="#E53935" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleRed}>REPORT LIMITS</Text>
              <Text style={styles.descriptionText}>
                Users may only submit a limited number of reports within a set time period to help prevent spam and misuse.
              </Text>
            </View>
          </View>

          {/* REPORT REVIEW (GOLD/YELLOW) */}
          <View style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 179, 0, 0.15)' }]}>
              <Clock color="#FFB300" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleYellow}>REPORT REVIEW</Text>
              <Text style={styles.descriptionText}>
                Reports may be held under review before verification. Unverified reports are clearly labelled in the system.
              </Text>
            </View>
          </View>

          {/* AUDIT LOGS (BLUE) */}
          <View style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(41, 182, 246, 0.15)' }]}>
              <FileText color="#29B6F6" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleBlue}>AUDIT LOGS</Text>
              <Text style={styles.descriptionText}>
                All important actions — including report submissions, verifications, and rejections — are recorded for accountability.
              </Text>
            </View>
          </View>

          {/* VERIFIED OFFICIALS (GREEN) */}
          <View style={styles.featureCard}>
            <View style={[styles.iconBox, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
              <ShieldAlert color="#4CAF50" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleGreen}>VERIFIED OFFICIALS</Text>
              <Text style={styles.descriptionText}>
                Only authorised officials with verified accounts can confirm, reject, or escalate vehicle reports in the database.
              </Text>
            </View>
          </View>
        </View>

        {/* BOTTOM INFO FOOTER */}
        <View style={styles.infoBox}>
          <Info color="#29B6F6" size={18} style={styles.infoIcon} />
          <Text style={styles.infoText}>
            These controls work together to keep the VINWatch SA ecosystem secure and reliable.
          </Text>
        </View>
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
  titleSection: {
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginRight: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
  },
  headerTitleRed: {
    color: '#E53935',
  },
  heroBanner: {
    backgroundColor: '#181212',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  heroBannerText: {
    color: '#D0D0D0',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
  },
  cardsContainer: {
    gap: 14,
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#222222',
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  titleRed: {
    color: '#E53935',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  titleYellow: {
    color: '#FFB300',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  titleBlue: {
    color: '#29B6F6',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  titleGreen: {
    color: '#4CAF50',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  descriptionText: {
    color: '#888888',
    fontSize: 12,
    lineHeight: 17,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#222222',
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    color: '#777777',
    fontSize: 12,
    lineHeight: 17,
    flex: 1,
  },
});


