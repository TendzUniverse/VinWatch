import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace('/(auth)/popia-info');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="chevron-back" size={18} color="#D1D5DB" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.mainTitle}>Privacy Policy</Text>
        <Text style={styles.metaText}>
          LAST UPDATED AUGUST 2025 • VINWATCH SA
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.introText}>
          VINWatch SA is committed to protecting your privacy and personal
          information in accordance with South African law.
        </Text>

        {/* Section 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Information We Collect</Text>
          </View>
          <Text style={styles.cardBody}>
            We collect information you provide directly such as your name, email,
            phone number, and vehicle details. We also collect usage
            information and location data where you grant permission.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>How Information Is Used</Text>
          </View>
          <Text style={styles.cardBody}>
            Your information is used to provide vehicle security alerts, VIN
            verification, community sighting reports, and to improve our
            services. We do not sell personal information to third parties.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Location Information</Text>
          </View>
          <Text style={styles.cardBody}>
            VINWatch SA collects location data to provide nearby crime alerts
            and sighting reports relevant to your area. Location is processed
            securely and used only for safety features.
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Vehicle Information</Text>
          </View>
          <Text style={styles.cardBody}>
            Vehicle registration numbers and VIN codes are stored securely to
            enable monitoring, verification, and recovery assistance. This
            information is only accessible to authorised parties.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Security</Text>
          </View>
          <Text style={styles.cardBody}>
            We implement industry-standard security measures including
            encryption in transit and at rest, secure servers, and strict access
            controls to protect your information.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Your Rights</Text>
          </View>
          <Text style={styles.cardBody}>
            You have the right to access, correct, or delete your personal
            information at any time. You may also opt out of non-essential
            communications.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.redBar} />
            <Text style={styles.cardTitle}>Contact Information</Text>
          </View>
          <Text style={styles.cardBody}>
            For privacy-related enquiries contact our Privacy Officer at
            privacy@vinwatchsa.co.za or call +27 (0)800 VIN WATCH.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Sticky Footer Button */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>I UNDERSTAND & CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 2,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  metaText: {
    color: '#4B5563',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  introText: {
    color: '#8E95A2',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#121418',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1F242D',
    padding: 16,
    marginBottom: 14,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  redBar: {
    width: 3,
    height: 14,
    backgroundColor: '#DC2626',
    borderRadius: 2,
    marginRight: 8,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  cardBody: {
    color: '#8E95A2',
    fontSize: 12,
    lineHeight: 18,
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: '#0A0B0D',
    borderTopWidth: 1,
    borderTopColor: '#121418',
  },
  primaryButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#E50914',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
});
