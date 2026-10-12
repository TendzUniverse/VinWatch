import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { ShieldAlert, BarChart2, MapPin } from 'lucide-react-native';

export default function AdminDashboardScreen() {
  const chartBars = [
    { day: 'M', height: '40%', active: false },
    { day: 'T', height: '65%', active: false },
    { day: 'W', height: '30%', active: false },
    { day: 'T', height: '90%', active: false },
    { day: 'F', height: '55%', active: false },
    { day: 'S', height: '75%', active: false },
    { day: 'S', height: '100%', active: true },
  ];

  const areas = [
    { name: 'Johannesburg', count: 32, percentage: '65%' },
    { name: 'Cape Town', count: 18, percentage: '45%' },
    { name: 'Pretoria', count: 12, percentage: '30%' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* TOP HEADER */}
        <View style={styles.headerRow}>
          <View style={styles.headerTitleContainer}>
            <ShieldAlert color="#E53935" size={20} style={{ marginRight: 8 }} />
            <Text style={styles.appTitle}>VINWatch SA</Text>
          </View>
          <View style={styles.adminBadge}>
            <View style={styles.blueDot} />
            <Text style={styles.adminBadgeText}>ADMINISTRATOR</Text>
          </View>
        </View>

        {/* TITLE SECTION */}
        <View style={styles.titleSection}>
          <Text style={styles.headerTitle}>
            VINWATCH <Text style={styles.headerTitleRed}>COMMAND CENTRE</Text>
          </Text>
          <Text style={styles.systemOverviewText}>
            System overview · 13 Sep 2026 · 09:42
          </Text>
        </View>

        {/* MAIN STAT CARD - REGISTERED VEHICLES */}
        <View style={styles.registeredVehiclesCard}>
          <Text style={styles.registeredCount}>1,245</Text>
          <Text style={styles.registeredLabel}>REGISTERED VEHICLES</Text>
          <Text style={styles.registeredSubtext}>+12 this week</Text>
        </View>

        {/* GRID OF 4 STAT CARDS */}
        <View style={styles.statsGrid}>
          {/* ACTIVE STOLEN */}
          <View style={[styles.statCard, styles.cardRedBorder]}>
            <Text style={styles.statNumberRed}>87</Text>
            <Text style={styles.statLabel}>ACTIVE STOLEN</Text>
            <Text style={styles.statSubtextRed}>2 added today</Text>
          </View>

          {/* REPORTS TODAY */}
          <View style={[styles.statCard, styles.cardYellowBorder]}>
            <Text style={styles.statNumberYellow}>14</Text>
            <Text style={styles.statLabel}>REPORTS TODAY</Text>
            <Text style={styles.statSubtextYellow}>↑ 2 from yesterday</Text>
          </View>
        </View>

        <View style={styles.statsGrid}>
          {/* RECOVERED */}
          <View style={[styles.statCard, styles.cardGreenBorder]}>
            <Text style={styles.statNumberGreen}>36</Text>
            <Text style={styles.statLabel}>RECOVERED</Text>
            <Text style={styles.statSubtextGreen}>All time</Text>
          </View>

          {/* COMMUNITY SIGHTINGS */}
          <View style={[styles.statCard, styles.cardBlueBorder]}>
            <Text style={styles.statNumberBlue}>218</Text>
            <Text style={styles.statLabel}>COMMUNITY SIGHTINGS</Text>
            <Text style={styles.statSubtextBlue}>Last 30 days</Text>
          </View>
        </View>

        {/* ANALYTICS SECTION HEADER */}
        <View style={styles.sectionHeaderRow}>
          <BarChart2 color="#29B6F6" size={16} style={{ marginRight: 6 }} />
          <Text style={styles.sectionHeaderText}>ANALYTICS</Text>
        </View>

        {/* REPORTS OVER TIME CHART CARD */}
        <View style={styles.analyticsCard}>
          <View style={styles.analyticsCardHeader}>
            <Text style={styles.chartTitle}>Reports Over Time</Text>
            <Text style={styles.chartTimeframe}>Last 7 days</Text>
          </View>

          {/* BAR CHART */}
          <View style={styles.chartContainer}>
            {chartBars.map((bar, index) => (
              <View key={index} style={styles.barColumn}>
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      { height: bar.height },
                      bar.active ? styles.barActive : styles.barInactive,
                    ]}
                  />
                </View>
                <Text style={[styles.barLabel, bar.active && styles.barLabelActive]}>
                  {bar.day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* REPORTS BY AREA CARD */}
        <View style={styles.analyticsCard}>
          <View style={styles.analyticsCardHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MapPin color="#E53935" size={14} style={{ marginRight: 6 }} />
              <Text style={styles.chartTitle}>Reports by Area</Text>
            </View>
          </View>

          <View style={styles.areaList}>
            {areas.map((area, index) => (
              <View key={index} style={styles.areaRow}>
                <View style={styles.areaInfo}>
                  <Text style={styles.areaName}>{area.name}</Text>
                  <Text style={styles.areaCount}>{area.count}</Text>
                </View>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: area.percentage }]} />
                </View>
              </View>
            ))}
          </View>
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
  appTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  adminBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(41, 182, 246, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(41, 182, 246, 0.4)',
  },
  blueDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#29B6F6',
    marginRight: 6,
  },
  adminBadgeText: {
    color: '#29B6F6',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  titleSection: {
    marginBottom: 18,
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
  systemOverviewText: {
    color: '#666666',
    fontSize: 12,
    marginTop: 4,
  },
  registeredVehiclesCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#222222',
  },
  registeredCount: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 1,
  },
  registeredLabel: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 2,
  },
  registeredSubtext: {
    color: '#555555',
    fontSize: 11,
    marginTop: 6,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
  },
  cardRedBorder: {
    borderColor: 'rgba(229, 57, 53, 0.3)',
    backgroundColor: '#181212',
  },
  cardYellowBorder: {
    borderColor: 'rgba(255, 179, 0, 0.3)',
  },
  cardGreenBorder: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  cardBlueBorder: {
    borderColor: 'rgba(41, 182, 246, 0.3)',
  },
  statNumberRed: {
    color: '#E53935',
    fontSize: 26,
    fontWeight: '900',
  },
  statNumberYellow: {
    color: '#FFB300',
    fontSize: 26,
    fontWeight: '900',
  },
  statNumberGreen: {
    color: '#4CAF50',
    fontSize: 26,
    fontWeight: '900',
  },
  statNumberBlue: {
    color: '#29B6F6',
    fontSize: 26,
    fontWeight: '900',
  },
  statLabel: {
    color: '#888888',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginTop: 4,
  },
  statSubtextRed: {
    color: '#E53935',
    fontSize: 10,
    marginTop: 4,
  },
  statSubtextYellow: {
    color: '#777777',
    fontSize: 10,
    marginTop: 4,
  },
  statSubtextGreen: {
    color: '#4CAF50',
    fontSize: 10,
    marginTop: 4,
  },
  statSubtextBlue: {
    color: '#777777',
    fontSize: 10,
    marginTop: 4,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  sectionHeaderText: {
    color: '#777777',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  analyticsCard: {
    backgroundColor: '#141414',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#222222',
  },
  analyticsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  chartTimeframe: {
    color: '#555555',
    fontSize: 11,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    paddingTop: 10,
  },
  barColumn: {
    alignItems: 'center',
    flex: 1,
  },
  barTrack: {
    height: 80,
    width: 24,
    justifyContent: 'flex-end',
  },
  barFill: {
    width: '100%',
    borderRadius: 4,
  },
  barInactive: {
    backgroundColor: '#8B0000',
  },
  barActive: {
    backgroundColor: '#FF0000',
  },
  barLabel: {
    color: '#555555',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 6,
  },
  barLabelActive: {
    color: '#E53935',
  },
  areaList: {
    gap: 12,
  },
  areaRow: {
    marginBottom: 4,
  },
  areaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  areaName: {
    color: '#CCCCCC',
    fontSize: 12,
    fontWeight: '600',
  },
  areaCount: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '800',
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#222222',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E53935',
    borderRadius: 2,
  },
});
