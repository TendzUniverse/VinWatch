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
  Car,
  Plus,
  ArrowRight,
} from 'lucide-react-native';

export default function MyVehiclesScreen() {
  const vehicles = [
    {
      id: '1',
      model: 'Toyota Fortuner GR Sport',
      year: '2024',
      status: 'CLEAR',
      registration: 'GP 123-456',
      vin: '*****2024',
    },
    {
      id: '2',
      model: 'Toyota Corolla',
      year: '2022',
      status: 'CLEAR',
      registration: 'ABC 123 GP',
      vin: '****456',
    },
  ];

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
            MY <Text style={styles.headerTitleRed}>VEHICLES</Text>
          </Text>
          <Text style={styles.descriptionText}>2 registered vehicles</Text>
        </View>

        {/* VEHICLES LIST */}
        {vehicles.map((item) => (
          <View key={item.id} style={styles.vehicleCard}>
            {/* GREEN ACCENT TOP LINE */}
            <View style={styles.topAccentBar} />

            {/* CARD HEADER */}
            <View style={styles.cardHeader}>
              <View style={styles.carIconBox}>
                <Car color="#E53935" size={22} />
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.vehicleModelText}>{item.model}</Text>
                <Text style={styles.vehicleYearText}>{item.year}</Text>
              </View>
              <View style={styles.clearBadge}>
                <View style={styles.greenDot} />
                <Text style={styles.clearBadgeText}>{item.status}</Text>
              </View>
            </View>

            {/* DETAILS ROW */}
            <View style={styles.detailsRow}>
              <View style={styles.detailBox}>
                <Text style={styles.detailLabel}>REGISTRATION</Text>
                <Text style={styles.detailValue}>{item.registration}</Text>
              </View>

              <View style={styles.detailBox}>
                <Text style={styles.detailLabel}>VIN</Text>
                <Text style={styles.detailValue}>{item.vin}</Text>
              </View>
            </View>

            {/* VIEW VEHICLE BUTTON */}
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>VIEW VEHICLE</Text>
              <ArrowRight color="#E53935" size={16} style={{ marginLeft: 6 }} />
            </TouchableOpacity>
          </View>
        ))}

        {/* ADD VEHICLE CARD */}
        <TouchableOpacity style={styles.addCard}>
          <View style={styles.plusIconBox}>
            <Plus color="#E53935" size={20} />
          </View>
          <View style={styles.addTextContainer}>
            <Text style={styles.addTitle}>ADD VEHICLE</Text>
            <Text style={styles.addSubtitle}>Register a new vehicle</Text>
          </View>
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
    fontSize: 13,
    marginTop: 4,
  },
  vehicleCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#222222',
    position: 'relative',
    overflow: 'hidden',
  },
  topAccentBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#4CAF50',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 4,
  },
  carIconBox: {
    backgroundColor: '#1E1414',
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  vehicleModelText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  vehicleYearText: {
    color: '#777777',
    fontSize: 12,
    marginTop: 2,
  },
  clearBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  clearBadgeText: {
    color: '#4CAF50',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  detailsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  detailBox: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  detailLabel: {
    color: '#666666',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  viewButton: {
    backgroundColor: '#1E1212',
    borderRadius: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.3)',
  },
  viewButtonText: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  addCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
    borderStyle: 'dashed',
    marginTop: 4,
  },
  plusIconBox: {
    backgroundColor: '#1E1212',
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  addTextContainer: {
    flex: 1,
  },
  addTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  addSubtitle: {
    color: '#777777',
    fontSize: 12,
    marginTop: 2,
  },
});

