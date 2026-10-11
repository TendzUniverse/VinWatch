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
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  CheckCheck,
  XCircle,
  Info,
} from 'lucide-react-native';

export default function VehicleStatusScreen() {
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
        <View style={styles.titleSection}>
          <Text style={styles.headerTitle}>
            VEHICLE <Text style={styles.headerTitleRed}>STATUS</Text>
          </Text>
          <Text style={styles.descriptionText}>
            Possible status values for any vehicle in the system.
          </Text>
        </View>

        {/* STATUS CARDS */}

        {/* CLEAR */}
        <View style={[styles.card, styles.cardGreen]}>
          <View style={styles.cardHeader}>
            <CheckCircle2 color="#4CAF50" size={20} style={styles.statusIcon} />
            <Text style={styles.titleGreen}>CLEAR</Text>
          </View>
          <Text style={styles.cardBody}>
            No active stolen or hijacking report found in the national database.
          </Text>
        </View>

        {/* UNDER REVIEW */}
        <View style={[styles.card, styles.cardYellow]}>
          <View style={styles.cardHeader}>
            <AlertCircle color="#FFB300" size={20} style={styles.statusIcon} />
            <Text style={styles.titleYellow}>UNDER REVIEW</Text>
          </View>
          <Text style={styles.cardBody}>
            A suspicious or unverified report is currently being investigated.
          </Text>
        </View>

        {/* STOLEN */}
        <View style={[styles.card, styles.cardRed]}>
          <View style={styles.cardHeader}>
            <ShieldAlert color="#E53935" size={20} style={styles.statusIcon} />
            <Text style={styles.titleRed}>STOLEN</Text>
          </View>
          <Text style={styles.cardBody}>
            An active stolen vehicle or hijacking report exists in the database.
          </Text>
        </View>

        {/* RECOVERED */}
        <View style={[styles.card, styles.cardBlue]}>
          <View style={styles.cardHeader}>
            <CheckCheck color="#29B6F6" size={20} style={styles.statusIcon} />
            <Text style={styles.titleBlue}>RECOVERED</Text>
          </View>
          <Text style={styles.cardBody}>
            The vehicle has been located and confirmed as recovered.
          </Text>
        </View>

        {/* CLOSED */}
        <View style={[styles.card, styles.cardGrey]}>
          <View style={styles.cardHeader}>
            <XCircle color="#888888" size={20} style={styles.statusIcon} />
            <Text style={styles.titleGrey}>CLOSED</Text>
          </View>
          <Text style={styles.cardBody}>
            The associated report or case has been formally closed.
          </Text>
        </View>

        {/* FOOTER NOTICE */}
        <View style={styles.infoBox}>
          <Info color="#777777" size={18} style={styles.infoIcon} />
          <Text style={styles.infoText}>
            Status is determined by reports verified in the national database. Community reports may be pending verification.
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
  card: {
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusIcon: {
    marginRight: 8,
  },
  /* Card Border Accents */
  cardGreen: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  cardYellow: {
    borderColor: 'rgba(255, 179, 0, 0.3)',
  },
  cardRed: {
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  cardBlue: {
    borderColor: 'rgba(41, 182, 246, 0.3)',
  },
  cardGrey: {
    borderColor: '#262626',
  },
  /* Status Titles */
  titleGreen: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleYellow: {
    color: '#FFB300',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleRed: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleBlue: {
    color: '#29B6F6',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleGrey: {
    color: '#888888',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
  cardBody: {
    color: '#A0A0A0',
    fontSize: 13,
    lineHeight: 19,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#141414',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
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


