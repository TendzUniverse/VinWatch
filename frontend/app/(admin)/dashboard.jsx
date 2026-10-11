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
  ShieldAlert,
  BarChart2,
  MapPin,
  Car,
  Clock,
  TrendingUp,
  CheckCircle2,
  Eye,
} from 'lucide-react-native';

export default function AdminDashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* TOP HEADER */}
        <View style={styles.headerRow}>
          <View style={styles.headerTitleContainer}>
            <ShieldAlert color="#E53935" size={24} style={styles.headerIcon} />
            <Text style={styles.appTitle}>VINWATCH SA</Text>
          </View>
          <View style={styles.adminBadge}>
            <Text style={styles.adminBadgeText}>ADMINISTRATOR</Text>
          </View>
        </View>

        {/* HERO TITLE & SUBTITLE */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>VINWATCH <Text style={styles.heroTitleRed}>COMMAND CENTRE</Text></Text>
          <Text style={styles.heroSubtitle}>
            System overview · 13 Sep 2026 · 09:42
          </Text>
        </View>

        {/* METRICS GRID */}
        <View style={styles.primaryMetricCard}>
          <Text style={styles.primaryValue}>1,245</Text>
          <Text style={styles.primaryLabel}>REGISTERED VEHICLES</Text>
          <Text style={styles.primarySubtext}>+12 this week</Text>
        </View>

        <View style={styles.metricsGrid}>
          <View style={[styles.gridCard, styles.gridCardRed]}>
            <Text style={styles.metricValueRed}>87</Text>
            <Text style={styles.metricLabel}>ACTIVE STOLEN</Text>
            <Text style={styles.metricSubtextRed}>3 added today</Text>
          </View>

          <View style={styles.gridCard}>
            <Text style={styles.metricValueYellow}>14</Text>
            <Text style={styles.metricLabel}>REPORTS TODAY</Text>
            <Text style={styles.metricSubtextYellow}>↑ 2 from yesterday</Text>
          </View>
        </View>

        <View style={styles.metricsGrid}>
          <View style={styles.gridCard}>
            <Text style={styles.metricValueGreen}>36</Text>
            <Text style={styles.metricLabel}>RECOVERED</Text>
            <Text style={styles.metricSubtext}>All time</Text>
          </View>

          <View style={styles.gridCard}>
            <Text style={styles.metricValueBlue}>218</Text>
            <Text style={styles.metricLabel}>COMMUNITY SIGHTINGS</Text>
            <Text style={styles.metricSubtext}>Last 30 days</Text>
          </View>
        </View>

        {/* ANALYTICS SECTION */}
        <View style={styles.sectionHeader}>
          <BarChart2 color="#E53935" size={16} />
          <Text style={styles.sectionTitle}>ANALYTICS</Text>
        </View>

        {/* CHART MOCKUP CARD */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Reports Over Time</Text>
            <Text style={styles.chartSubtext}>Last 7 days</Text>
          </View>

          <View style={styles.barChartContainer}>
            {[
              { day: 'M', height: 40 },
              { day: 'T', height: 65 },
              { day: 'W', height: 45 },
              { day: 'T', height: 90 },
              { day: 'F', height: 55 },
              { day: 'S', height: 80 },
              { day: 'S', height: 95, active: true },
            ].map((item, index) => (
              <View key={index} style={styles.barColumn}>
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      { height: `${item.height}%` },
                      item.active && styles.barFillActive,
                    ]}
                  />
                </View>
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* REPORTS BY AREA */}
        <View style={styles.listCard}>
          <View style={styles.listHeader}>
            <MapPin color="#E53935" size={16} />
            <Text style={styles.listTitle}>Reports by Area</Text>
          </View>

          {[
            { city: 'Johannesburg', count: 72, percent: 80 },
            { city: 'Cape Town', count: 51, percent: 55 },
            { city: 'Pretoria', count: 38, percent: 40 },
            { city: 'Durban', count: 24, percent: 25 },
          ].map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.listRow}>
                <Text style={styles.itemName}>{item.city}</Text>
                <Text style={styles.itemCount}>{item.count}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${item.percent}%` }]} />
              </View>
            </View>
          ))}
        </View>

        {/* MOST REPORTED VEHICLE MODELS */}
        <View style={styles.listCard}>
          <View style={styles.listHeader}>
            <Car color="#E53935" size={16} />
            <Text style={styles.listTitle}>Most Reported Vehicle Models</Text>
          </View>

          {[
            { rank: 1, model: 'Toyota Corolla', count: 85 },
            { rank: 2, model: 'VW Polo', count: 62 },
            { rank: 3, model: 'Toyota Fortuner', count: 48 },
            { rank: 4, model: 'BMW 3 Series', count: 35 },
          ].map((item, idx) => (
            <View key={idx} style={styles.rankRow}>
              <View style={styles.rankBadge}>
                <Text style={styles.rankText}>{item.rank}</Text>
              </View>
              <Text style={styles.rankModelText}>{item.model}</Text>
              <Text style={styles.rankCountText}>{item.count}</Text>
            </View>
          ))}
        </View>

        {/* RECOVERY TIME BANNER */}
        <View style={styles.timeBanner}>
          <Clock color="#E53935" size={24} style={styles.timeIcon} />
          <View style={styles.timeContent}>
            <Text style={styles.timeLabel}>Avg Report-to-Recovery Time</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeValue}>4.2 hrs</Text>
              <Text style={styles.timeImprovement}>↓ 18% improvement vs last month</Text>
            </View>
          </View>
        </View>

        {/* SWITCH VIEW BUTTON */}
        <TouchableOpacity style={styles.switchButton}>
          <Text style={styles.switchButtonText}>SWITCH TO OFFICIAL VIEW</Text>
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
  headerIcon: {
    marginRight: 8,
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  adminBadge: {
    backgroundColor: 'rgba(41, 182, 246, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(41, 182, 246, 0.4)',
  },
  adminBadgeText: {
    color: '#29B6F6',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  heroSection: {
    marginBottom: 20,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
  },
  heroTitleRed: {
    color: '#E53935',
  },
  heroSubtitle: {
    color: '#777777',
    fontSize: 12,
    marginTop: 4,
  },
  primaryMetricCard: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#222222',
  },
  primaryValue: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },
  primaryLabel: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 4,
  },
  primarySubtext: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridCard: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 14,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#222222',
  },
  gridCardRed: {
    backgroundColor: 'rgba(229, 57, 53, 0.08)',
    borderColor: 'rgba(229, 57, 53, 0.3)',
  },
  metricValueRed: {
    color: '#E53935',
    fontSize: 24,
    fontWeight: '900',
  },
  metricValueYellow: {
    color: '#FFB300',
    fontSize: 24,
    fontWeight: '900',
  },
  metricValueGreen: {
    color: '#4CAF50',
    fontSize: 24,
    fontWeight: '900',
  },
  metricValueBlue: {
    color: '#29B6F6',
    fontSize: 24,
    fontWeight: '900',
  },
  metricLabel: {
    color: '#888888',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginTop: 4,
  },
  metricSubtextRed: {
    color: '#E53935',
    fontSize: 11,
    marginTop: 2,
  },
  metricSubtextYellow: {
    color: '#FFB300',
    fontSize: 11,
    marginTop: 2,
  },
  metricSubtext: {
    color: '#666666',
    fontSize: 11,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginLeft: 8,
  },
  chartCard: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#222222',
  },
  chartHeader: {
    marginBottom: 16,
  },
  chartTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  chartSubtext: {
    color: '#777777',
    fontSize: 11,
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingTop: 10,
  },
  barColumn: {
    alignItems: 'center',
    flex: 1,
  },
  barTrack: {
    height: 90,
    width: 20,
    backgroundColor: '#262626',
    borderRadius: 4,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    backgroundColor: '#B71C1C',
    borderRadius: 4,
  },
  barFillActive: {
    backgroundColor: '#E53935',
  },
  barLabel: {
    color: '#888888',
    fontSize: 10,
    marginTop: 6,
    fontWeight: '700',
  },
  listCard: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#222222',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  listTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },
  listItem: {
    marginBottom: 12,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemName: {
    color: '#DDDDDD',
    fontSize: 13,
  },
  itemCount: {
    color: '#E53935',
    fontSize: 13,
    fontWeight: '800',
  },
  progressTrack: {
    height: 4,
    backgroundColor: '#262626',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E53935',
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  rankBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankText: {
    color: '#E53935',
    fontSize: 11,
    fontWeight: '800',
  },
  rankModelText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  rankCountText: {
    color: '#888888',
    fontSize: 13,
    fontWeight: '700',
  },
  timeBanner: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#222222',
  },
  timeIcon: {
    marginRight: 14,
  },
  timeContent: {
    flex: 1,
  },
  timeLabel: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '700',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 2,
  },
  timeValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginRight: 10,
  },
  timeImprovement: {
    color: '#4CAF50',
    fontSize: 11,
    fontWeight: '600',
  },
  switchButton: {
    backgroundColor: '#E53935',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
});


