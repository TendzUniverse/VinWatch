
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
  Car,
  Bell,
  Lock,
  Star,
  UserCheck,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* PROFILE HEADER CARD */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>
            <View style={styles.onlineBadge} />
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>John Smith</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>VERIFIED USER</Text>
            </View>
            <Text style={styles.userEmail}>john.smith@example.com</Text>
          </View>
        </View>

        {/* METRICS ROW */}
        <View style={styles.metricsContainer}>
          <View style={styles.metricCard}>
            <Text style={styles.metricValueRed}>94%</Text>
            <Text style={styles.metricLabel}>Trust Score</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>12</Text>
            <Text style={styles.metricLabel}>Reports</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>7</Text>
            <Text style={styles.metricLabel}>Sightings</Text>
          </View>

          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>2</Text>
            <Text style={styles.metricLabel}>Vehicles</Text>
          </View>
        </View>

        {/* ACTIVE VEHICLE BANNER */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ACTIVE VEHICLE</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>VIEW ALL →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activeVehicleCard}>
          <View style={styles.vehicleIconContainer}>
            <Car color="#E53935" size={24} />
          </View>
          <View style={styles.vehicleDetails}>
            <Text style={styles.vehicleName}>Toyota Fortuner GR Sport</Text>
            <Text style={styles.vehicleMeta}>
              GP 123-456 · VIN ·····················2024
            </Text>
          </View>
          <View style={styles.activeBadge}>
            <View style={styles.greenDot} />
            <Text style={styles.activeText}>ACTIVE</Text>
          </View>
        </View>

        {/* MENU OPTIONS LIST */}
        <TouchableOpacity style={styles.menuCard}>
          <Car color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>MY VEHICLES</Text>
            <Text style={styles.menuSubtitle}>Manage 2 registered vehicles</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <Bell color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>NOTIFICATION SETTINGS</Text>
            <Text style={styles.menuSubtitle}>Alerts, radius, preferences</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <Lock color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>PRIVACY & SECURITY</Text>
            <Text style={styles.menuSubtitle}>Control your data & access</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <Star color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>COMMUNITY CONTRIBUTION</Text>
            <Text style={styles.menuSubtitle}>Score: 87/100 · Verified</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <UserCheck color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>ACCOUNT TYPE</Text>
            <Text style={styles.menuSubtitle}>Normal User · Vehicle Owner</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <HelpCircle color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>HELP & SUPPORT</Text>
            <Text style={styles.menuSubtitle}>FAQs, contact, feedback</Text>
          </View>
          <ChevronRight color="#666666" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <LogOut color="#E53935" size={22} style={styles.menuIcon} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>SIGN OUT</Text>
            <Text style={styles.menuSubtitle}>Securely end your session</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#261111',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#262626',
    borderWidth: 2,
    borderColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  onlineBadge: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderWidth: 2,
    borderColor: '#181818',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  verifiedBadge: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  verifiedText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  userEmail: {
    color: '#777777',
    fontSize: 12,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#222222',
  },
  metricValueRed: {
    color: '#E53935',
    fontSize: 18,
    fontWeight: '800',
  },
  metricValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  metricLabel: {
    color: '#777777',
    fontSize: 10,
    marginTop: 2,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#777777',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  viewAllText: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '700',
  },
  activeVehicleCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E53935',
  },
  vehicleIconContainer: {
    backgroundColor: '#262626',
    padding: 10,
    borderRadius: 10,
    marginRight: 12,
  },
  vehicleDetails: {
    flex: 1,
  },
  vehicleName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  vehicleMeta: {
    color: '#777777',
    fontSize: 11,
    marginTop: 2,
  },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4CAF50',
    marginRight: 4,
  },
  activeText: {
    color: '#4CAF50',
    fontSize: 10,
    fontWeight: '800',
  },
  menuCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222222',
  },
  menuIcon: {
    marginRight: 14,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  menuSubtitle: {
    color: '#777777',
    fontSize: 12,
  },
});

