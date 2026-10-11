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
  AlertTriangle,
  Radio,
  MapPin,
  HelpCircle,
  Activity,
  ChevronRight,
} from 'lucide-react-native';

export default function RecoveryIntelligenceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft color="#FFFFFF" size={24} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.liveBadge}>
          <Radio color="#E53935" size={14} style={styles.radioIcon} />
          <Text style={styles.liveText}>LIVE TRACKING</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* PAGE TITLE */}
        <Text style={styles.headerTitle}>
          RECOVERY <Text style={styles.headerTitleRed}>INTELLIGENCE MAP</Text>
        </Text>

        {/* ACTIVE VEHICLE ALERT CARD */}
        <View style={styles.alertCard}>
          <View style={styles.alertHeader}>
            <AlertTriangle color="#E53935" size={16} />
            <Text style={styles.alertTitle}>ACTIVE VEHICLE ALERT</Text>
          </View>
          <Text style={styles.vehicleName}>
            Toyota Corolla <Text style={styles.vinText}>· VIN ****456</Text>
          </Text>

          <View style={styles.alertMetaRow}>
            <View style={styles.metaLeft}>
              <Text style={styles.metaLabel}>LAST CONFIRMED SIGHTING</Text>
              <Text style={styles.metaValue}>11:05 · Auckland Park</Text>
            </View>

            <View style={styles.scoreContainer}>
              <Text style={styles.scoreLabel}>SCORE</Text>
              <Text style={styles.scoreValue}>87</Text>
            </View>
          </View>
        </View>

        {/* MAP CONTAINER / MOCK UI */}
        <View style={styles.mapContainer}>
          {/* Map Legend Overlay */}
          <View style={styles.mapLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#E53935' }]} />
              <Text style={styles.legendText}>Incident</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#FFB300' }]} />
              <Text style={styles.legendText}>Previous</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#FFD54F' }]} />
              <Text style={styles.legendText}>Recent</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#FFFFFF' }]} />
              <Text style={styles.legendText}>Latest</Text>
            </View>
          </View>

          {/* Simulated Map Nodes */}
          <View style={styles.mapGraphic}>
            <View style={styles.routeLine} />

            <View style={[styles.nodePoint, { top: '15%', left: '20%' }]}>
              <Text style={styles.nodeLabel}>SANDTON</Text>
            </View>

            <View style={[styles.nodePoint, { top: '35%', left: '40%' }]}>
              <Text style={styles.nodeLabel}>ROSEBANK</Text>
            </View>

            <View style={[styles.nodePoint, { top: '55%', left: '55%' }]}>
              <Text style={styles.nodeLabel}>PARKTOWN</Text>
            </View>

            {/* High Priority Target Zone */}
            <View style={[styles.targetZone, { top: '70%', left: '60%' }]}>
              <View style={styles.pulseCircle} />
              <MapPin color="#FFFFFF" size={20} />
              <Text style={styles.targetLabel}>AUCKLAND PARK</Text>
              <Text style={styles.zoneTag}>HIGH PRIORITY ZONE</Text>
            </View>
          </View>
        </View>

        {/* RECOVERY INTELLIGENCE METRICS */}
        <View style={styles.intelCard}>
          <View style={styles.intelHeader}>
            <View style={styles.intelHeaderLeft}>
              <Text style={styles.intelTitle}>RECOVERY INTELLIGENCE</Text>
              <View style={styles.scoreRow}>
                <Text style={styles.bigScoreRed}>87/100</Text>
                <View style={styles.priorityTag}>
                  <View style={styles.redDot} />
                  <Text style={styles.priorityText}>HIGH PRIORITY ZONE</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.howButton}>
              <HelpCircle color="#E53935" size={14} style={{ marginRight: 4 }} />
              <Text style={styles.howText}>HOW?</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.intelBody}>
            3 independent sightings detected in the last 65 minutes.
          </Text>
          <Text style={styles.intelSubbody}>
            Based on recent verified sightings, this area has a higher probability of current vehicle activity.
          </Text>

          {/* MOVEMENT PATTERN */}
          <View style={styles.patternSection}>
            <Text style={styles.patternTitle}>MOVEMENT PATTERN</Text>
            <View style={styles.patternBreadcrumbs}>
              <Text style={styles.crumbText}>Sandton</Text>
              <ChevronRight color="#E53935" size={14} />
              <Text style={styles.crumbText}>Rosebank</Text>
              <ChevronRight color="#E53935" size={14} />
              <Text style={styles.crumbText}>Parktown</Text>
              <ChevronRight color="#E53935" size={14} />
              <Text style={styles.crumbActiveText}>Auckland Park</Text>
            </View>
          </View>
        </View>

        {/* ACTION BUTTON */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>VIEW SIGHTINGS</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.4)',
  },
  radioIcon: {
    marginRight: 6,
  },
  liveText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
  },
  headerTitleRed: {
    color: '#E53935',
  },
  alertCard: {
    backgroundColor: 'rgba(229, 57, 53, 0.08)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(229, 57, 53, 0.3)',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  alertTitle: {
    color: '#E53935',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    marginLeft: 6,
  },
  vehicleName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  vinText: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '400',
  },
  alertMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: 12,
    borderRadius: 10,
  },
  metaLeft: {
    flex: 1,
  },
  metaLabel: {
    color: '#777777',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  metaValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  scoreContainer: {
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E53935',
  },
  scoreLabel: {
    color: '#E53935',
    fontSize: 9,
    fontWeight: '900',
  },
  scoreValue: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: '900',
  },
  mapContainer: {
    height: 260,
    backgroundColor: '#12161A',
    borderRadius: 14,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#222222',
  },
  mapLegend: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(20, 20, 20, 0.85)',
    borderRadius: 8,
    padding: 8,
    zIndex: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    color: '#A0A0A0',
    fontSize: 10,
  },
  mapGraphic: {
    flex: 1,
    position: 'relative',
  },
  routeLine: {
    position: 'absolute',
    top: '20%',
    left: '25%',
    width: '45%',
    height: '55%',
    borderStyle: 'dashed',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#E53935',
    opacity: 0.6,
  },
  nodePoint: {
    position: 'absolute',
    alignItems: 'center',
  },
  nodeLabel: {
    color: '#888888',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  targetZone: {
    position: 'absolute',
    alignItems: 'center',
  },
  pulseCircle: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(229, 57, 53, 0.25)',
    top: -12,
  },
  targetLabel: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  zoneTag: {
    color: '#E53935',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  intelCard: {
    backgroundColor: '#181818',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#222222',
  },
  intelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  intelHeaderLeft: {
    flex: 1,
  },
  intelTitle: {
    color: '#777777',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  bigScoreRed: {
    color: '#E53935',
    fontSize: 22,
    fontWeight: '900',
    marginRight: 10,
  },
  priorityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E53935',
    marginRight: 6,
  },
  priorityText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  howButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E53935',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  howText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
  },
  intelBody: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  intelSubbody: {
    color: '#888888',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 16,
  },
  patternSection: {
    borderTopWidth: 1,
    borderTopColor: '#262626',
    paddingTop: 12,
  },
  patternTitle: {
    color: '#777777',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  patternBreadcrumbs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  crumbText: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
  },
  crumbActiveText: {
    color: '#E53935',
    fontSize: 12,
    fontWeight: '800',
  },
  actionButton: {
    backgroundColor: '#E53935',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1,
  },
});


