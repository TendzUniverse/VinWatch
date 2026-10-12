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
  Car,
  CheckCircle2,
  Info,
} from 'lucide-react-native';

export default function AccountTypeScreen() {
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
          <Text style={styles.headerTitle}>
            ACCOUNT <Text style={styles.headerTitleRed}>TYPE</Text>
          </Text>
          <Text style={styles.descriptionText}>
            Your account capabilities and access level.
          </Text>
        </View>

        {/* NORMAL USER CARD */}
        <View style={styles.blueCard}>
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.blueIconContainer}>
                <User color="#29B6F6" size={20} />
              </View>
              <Text style={styles.blueTitle}>NORMAL USER</Text>
            </View>
            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </View>

          <View style={styles.featureList}>
            {[
              'Check VINs against the national database',
              'Receive nearby vehicle crime alerts',
              'Submit community sighting reports',
              'View the recovery intelligence map',
              'Manage your profile and settings',
            ].map((item, index) => (
              <View key={index} style={styles.featureRow}>
                <CheckCircle2 color="#29B6F6" size={16} style={styles.checkIcon} />
                <Text style={styles.featureText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* VEHICLE OWNER CARD */}
        <View style={styles.redCard}>
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              <View style={styles.redIconContainer}>
                <Car color="#E53935" size={20} />
              </View>
              <View>
                <Text style={styles.redTitle}>VEHICLE OWNER</Text>
                <Text style={styles.redSubtext}>Activated when you register a vehicle.</Text>
              </View>
            </View>
          </View>

          <View style={styles.featureList}>
            {[
              'Register and manage your vehicles',
              'Store VIN and registration information',
              'Receive vehicle-specific security alerts',
              'Monitor individual vehicle status',
              'Update vehicle recovery status',
            ].map((item, index) => (
              <View key={index} style={styles.featureRow}>
                <CheckCircle2 color="#E53935" size={16} style={styles.checkIcon} />
                <Text style={styles.featureText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* FOOTER INFO BOX */}
        <View style={styles.infoBox}>
          <Info color="#29B6F6" size={18} style={styles.infoIcon} />
          <Text style={styles.infoText}>
            Account types are assigned based on your registration and usage. Additional capabilities are activated automatically when applicable.
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
    marginBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
  },
  headerTitleRed: {
    color: '#E53935',
  },
  descriptionText: {
    color: '#888888',
    fontSize: 14,
    marginTop: 4,
  },
  blueCard: {
    backgroundColor: '#10171D',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(41, 182, 246, 0.4)',
  },
  redCard: {
    backgroundColor: '#1A1212',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  blueIconContainer: {
    backgroundColor: 'rgba(41, 182, 246, 0.15)',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  redIconContainer: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  blueTitle: {
    color: '#29B6F6',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  redTitle: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  redSubtext: {
    color: '#777777',
    fontSize: 11,
    marginTop: 2,
  },
  activeBadge: {
    backgroundColor: 'rgba(41, 182, 246, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(41, 182, 246, 0.5)',
  },
  activeText: {
    color: '#29B6F6',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  featureList: {
    gap: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginRight: 10,
  },
  featureText: {
    color: '#CCCCCC',
    fontSize: 13,
    fontWeight: '500',
    flex: 1,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#141414',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#222222',
  },
  infoIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  infoText: {
    color: '#777777',
    fontSize: 12,
    lineHeight: 17,
    flex: 1,
  },
});


