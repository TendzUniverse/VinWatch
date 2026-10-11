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
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function PopiaInfoScreen() {
  const router = useRouter();

  const handleAccept = () => {
    router.replace('/(auth)/welcome');
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

        <View style={styles.titleRow}>
          <View style={styles.shieldBadge}>
            <Ionicons name="shield-checkmark" size={20} color="#DC2626" />
          </View>
          <View>
            <Text style={styles.mainTitle}>Your Privacy Matters</Text>
            <Text style={styles.metaText}>POPIA COMPLIANCE</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro Banner */}
        <View style={styles.introBox}>
          <Text style={styles.introText}>
            VINWatch SA complies with the Protection of Personal Information Act
            (POPIA) of South Africa. We are committed to responsible and lawful
            processing of all personal information.
          </Text>
        </View>

        {/* Card 1: Personal Information */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="person" size={20} color="#A855F7" style={styles.iconStyle} />
            <Text style={styles.cardTitle}>Personal Information</Text>
          </View>
          <Text style={styles.cardBody}>
            Your name, contact details, and identity information are processed
            lawfully and only for the stated purposes of this application.
          </Text>
        </View>

        {/* Card 2: Location Data */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="location" size={20} color="#EC4899" style={styles.iconStyle} />
            <Text style={styles.cardTitle}>Location Data</Text>
          </View>
          <Text style={styles.cardBody}>
            GPS and location data is collected only when needed for safety
            alerts and sighting reports. You control when location is shared.
          </Text>
        </View>

        {/* Card 3: Vehicle Information */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="car" size={20} color="#EF4444" style={styles.iconStyle} />
            <Text style={styles.cardTitle}>Vehicle Information</Text>
          </View>
          <Text style={styles.cardBody}>
            VIN numbers and registration data are stored securely and used
            exclusively for vehicle security, monitoring, and recovery purposes.
          </Text>
        </View>

        {/* Card 4: Data Security */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Ionicons name="lock-closed" size={20} color="#F59E0B" style={styles.iconStyle} />
            <Text style={styles.cardTitle}>Data Security</Text>
          </View>
          <Text style={styles.cardBody}>
            All data is encrypted in transit and at rest. We maintain strict
            access controls and conduct regular security assessments.
          </Text>
        </View>

        {/* Card 5: Your Rights Under POPIA */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <FontAwesome5 name="balance-scale" size={18} color="#FACC15" style={styles.iconStyle} />
            <Text style={styles.cardTitle}>Your Rights Under POPIA</Text>
          </View>
          <Text style={styles.cardBody}>
            You have the right to access, correct, delete, and object to the
            processing of your personal information at any time.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Sticky Footer Button */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleAccept}
        >
          <Text style={styles.buttonText}>I UNDERSTAND & ACCEPT</Text>
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  shieldBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#1E0E12',
    borderWidth: 1,
    borderColor: '#3D1419',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  metaText: {
    color: '#4B5563',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  introBox: {
    backgroundColor: '#121418',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3D1419',
    padding: 16,
    marginBottom: 16,
  },
  introText: {
    color: '#8E95A2',
    fontSize: 12,
    lineHeight: 18,
  },
  card: {
    backgroundColor: '#121418',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1F242D',
    padding: 16,
    marginBottom: 12,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconStyle: {
    marginRight: 12,
    width: 22,
    textAlign: 'center',
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
    paddingLeft: 34,
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
