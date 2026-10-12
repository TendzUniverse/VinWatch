import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ChevronLeft, Eye, Siren } from 'lucide-react-native';

export default function ReportHistoryScreen() {
  const [activeTab, setActiveTab] = useState('ALL');

  const reports = [
    {
      id: '1',
      type: 'Community Sighting',
      vehicle: 'Toyota Corolla',
      time: 'Submitted Today',
      status: 'PENDING',
      icon: 'sighting',
    },
    {
      id: '2',
      type: 'Hijacking Report',
      vehicle: 'Toyota Corolla',
      time: 'Submitted 2 days ago',
      status: 'VERIFIED',
      icon: 'hijack',
    },
    {
      id: '3',
      type: 'Community Sighting',
      vehicle: 'VW Polo',
      time: 'Submitted 3 days ago',
      status: 'VERIFIED',
      icon: 'sighting',
    },
    {
      id: '4',
      type: 'Community Sighting',
      vehicle: 'Unknown Vehicle',
      time: 'Submitted 1 week ago',
      status: 'REJECTED',
      icon: 'sighting',
    },
  ];

  const filteredReports = reports.filter((item) => {
    if (activeTab === 'ALL') return true;
    return item.status === activeTab;
  });

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'PENDING':
        return {
          badge: styles.badgePending,
          text: styles.badgeTextPending,
        };
      case 'VERIFIED':
        return {
          badge: styles.badgeVerified,
          text: styles.badgeTextVerified,
        };
      case 'REJECTED':
        return {
          badge: styles.badgeRejected,
          text: styles.badgeTextRejected,
        };
      default:
        return {
          badge: styles.badgePending,
          text: styles.badgeTextPending,
        };
    }
  };

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
            MY <Text style={styles.headerTitleRed}>REPORTS</Text>
          </Text>
          <Text style={styles.totalText}>{reports.length} total</Text>
        </View>

        {/* FILTER TABS */}
        <View style={styles.tabContainer}>
          {['ALL', 'PENDING', 'VERIFIED', 'REJECTED'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.tabButtonActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* REPORTS LIST */}
        <View style={styles.listContainer}>
          {filteredReports.map((item) => {
            const statusStyle = getStatusBadgeStyle(item.status);

            return (
              <TouchableOpacity key={item.id} style={styles.reportCard}>
                <View style={styles.iconBox}>
                  {item.icon === 'hijack' ? (
                    <Siren color="#E53935" size={20} />
                  ) : (
                    <Eye color="#29B6F6" size={20} />
                  )}
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.reportType}>{item.type}</Text>
                  <Text style={styles.vehicleText}>{item.vehicle}</Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>

                <View style={[styles.badge, statusStyle.badge]}>
                  <Text style={[styles.badgeText, statusStyle.text]}>
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 16,
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
  totalText: {
    color: '#777777',
    fontSize: 12,
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#222222',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabButtonActive: {
    backgroundColor: '#E53935',
  },
  tabText: {
    color: '#777777',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    gap: 12,
  },
  reportCard: {
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#222222',
  },
  iconBox: {
    backgroundColor: '#1E1E1E',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  reportType: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  vehicleText: {
    color: '#888888',
    fontSize: 12,
    marginTop: 2,
  },
  timeText: {
    color: '#555555',
    fontSize: 11,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  badgePending: {
    backgroundColor: 'rgba(255, 179, 0, 0.1)',
    borderColor: 'rgba(255, 179, 0, 0.4)',
  },
  badgeTextPending: {
    color: '#FFB300',
  },
  badgeVerified: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderColor: 'rgba(76, 175, 80, 0.4)',
  },
  badgeTextVerified: {
    color: '#4CAF50',
  },
  badgeRejected: {
    backgroundColor: 'rgba(229, 57, 53, 0.1)',
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  badgeTextRejected: {
    color: '#E53935',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
});


