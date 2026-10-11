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
  MapPin,
  Eye,
  ShieldCheck,
  Radio,
} from 'lucide-react-native';

export default function VehicleActivityScreen() {
  const events = [
    {
      id: '1',
      time: '09:30',
      type: 'INITIAL REPORT',
      location: 'Sandton',
      street: 'Rivonia Road & West St',
      description: 'Vehicle reported stolen by owner.',
      statusColor: '#E53935',
      badgeBg: 'rgba(229, 57, 53, 0.1)',
      badgeBorder: 'rgba(229, 57, 53, 0.3)',
      badgeText: '#E53935',
      icon: 'report',
      isRecent: false,
    },
    {
      id: '2',
      time: '10:15',
      type: 'POSSIBLE SIGHTING',
      location: 'Rosebank',
      street: 'Oxford Road',
      description: 'Community member reported matching vehicle heading south.',
      statusColor: '#FF9800',
      badgeBg: 'rgba(255, 152, 0, 0.1)',
      badgeBorder: 'rgba(255, 152, 0, 0.3)',
      badgeText: '#FF9800',
      icon: 'eye',
      isRecent: false,
    },
    {
      id: '3',
      time: '10:42',
      type: 'COMMUNITY SIGHTING',
      location: 'Parktown',
      street: 'Jan Smuts Avenue',
      description:
        'Second independent sighting. Vehicle observed stationary briefly before moving west.',
      statusColor: '#FFC107',
      badgeBg: 'rgba(255, 193, 7, 0.1)',
      badgeBorder: 'rgba(255, 193, 7, 0.3)',
      badgeText: '#FFC107',
      icon: 'eye',
      isRecent: false,
    },
    {
      id: '4',
      time: '11:05',
      type: 'RECENT VERIFIED SIGHTING',
      location: 'Auckland Park',
      street: 'Empire Road',
      description:
        'Verified sighting from trusted reporter. Vehicle identified in the Auckland Park area.',
      statusColor: '#E53935',
      badgeBg: 'rgba(229, 57, 53, 0.15)',
      badgeBorder: '#E53935',
      badgeText: '#E53935',
      icon: 'shield',
      isRecent: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />

      {/* HEADER SECTION */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ChevronLeft color="#FFFFFF" size={24} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.titleRow}>
          <Text style={styles.headerTitle}>
            VEHICLE <Text style={styles.headerTitleRed}>ACTIVITY</Text>
          </Text>
          <View style={styles.eventCountBadge}>
            <View style={styles.redDot} />
            <Text style={styles.eventCountText}>4 EVENTS</Text>
          </View>
        </View>

        {/* VEHICLE CARD */}
        <View style={styles.vehicleSummaryCard}>
          <View style={styles.summaryLeft}>
            <View style={styles.redStatusDot} />
            <Text style={styles.vehicleModel}>Toyota Corolla</Text>
            <Text style={styles.vehicleVin}>*****456</Text>
          </View>
          <View style={styles.stolenTag}>
            <Text style={styles.stolenTagText}>STOLEN</Text>
          </View>
        </View>
      </View>

      {/* TIMELINE LIST */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.timelineWrapper}>
          {/* VERTICAL RED TRACK */}
          <View style={styles.timelineLine} />

          {events.map((item) => (
            <View key={item.id} style={styles.timelineRow}>
              {/* TIMELINE NODE & TIME */}
              <View style={styles.timeColumn}>
                <Text style={styles.timeText}>{item.time}</Text>
                <View
                  style={[
                    styles.timelineDot,
                    { borderColor: item.statusColor },
                    item.isRecent && styles.timelineDotActive,
                  ]}
                >
                  <View
                    style={[
                      styles.timelineInnerDot,
                      { backgroundColor: item.statusColor },
                    ]}
                  />
                </View>
              </View>

              {/* CARD DETAILS */}
              <View
                style={[
                  styles.eventCard,
                  item.isRecent && styles.eventCardRecent,
                ]}
              >
                <View
                  style={[
                    styles.typeBadge,
                    {
                      backgroundColor: item.badgeBg,
                      borderColor: item.badgeBorder,
                    },
                  ]}
                >
                  {item.icon === 'shield' ? (
                    <ShieldCheck color={item.badgeText} size={12} style={{ marginRight: 4 }} />
                  ) : item.icon === 'eye' ? (
                    <Eye color={item.badgeText} size={12} style={{ marginRight: 4 }} />
                  ) : (
                    <Radio color={item.badgeText} size={12} style={{ marginRight: 4 }} />
                  )}
                  <Text style={[styles.typeBadgeText, { color: item.badgeText }]}>
                    {item.type}
                  </Text>
                </View>

                <View style={styles.locationRow}>
                  <MapPin
                    color={item.isRecent ? '#E53935' : '#888888'}
                    size={14}
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.locationName,
                      item.isRecent && styles.locationNameRed,
                    ]}
                  >
                    {item.location}
                  </Text>
                  <Text style={styles.streetName}> · {item.street}</Text>
                </View>

                <Text style={styles.descriptionText}>{item.description}</Text>

                {item.isRecent && (
                  <View style={styles.mostRecentFooter}>
                    <View style={styles.redDotSmall} />
                    <Text style={styles.mostRecentText}>MOST RECENT EVENT</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* FIXED BOTTOM ACTION BUTTON */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>VIEW ON MAP</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 12,
    paddingBottom: 8,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 12,
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
  eventCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E53935',
    marginRight: 6,
  },
  eventCountText: {
    color: '#E53935',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  vehicleSummaryCard: {
    backgroundColor: '#161616',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#222222',
  },
  summaryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E53935',
    marginRight: 10,
  },
  vehicleModel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginRight: 8,
  },
  vehicleVin: {
    color: '#555555',
    fontSize: 13,
  },
  stolenTag: {
    backgroundColor: 'rgba(229, 57, 53, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  stolenTagText: {
    color: '#E53935',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 90,
  },
  timelineWrapper: {
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 48,
    top: 10,
    bottom: 20,
    width: 2,
    backgroundColor: '#E53935',
  },
  timelineRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeColumn: {
    width: 58,
    alignItems: 'center',
  },
  timeText: {
    color: '#666666',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 6,
  },
  timelineDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineDotActive: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(229, 57, 53, 0.3)',
  },
  timelineInnerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  eventCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: 14,
    padding: 14,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#222222',
  },
  eventCardRecent: {
    backgroundColor: '#1A1010',
    borderColor: 'rgba(229, 57, 53, 0.6)',
  },
  typeBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 10,
  },
  typeBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  locationName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  locationNameRed: {
    color: '#E53935',
  },
  streetName: {
    color: '#666666',
    fontSize: 12,
  },
  descriptionText: {
    color: '#AAAAAA',
    fontSize: 12,
    lineHeight: 17,
  },
  mostRecentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  redDotSmall: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#E53935',
    marginRight: 6,
  },
  mostRecentText: {
    color: '#E53935',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
  },
  mapButton: {
    backgroundColor: '#E53935',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },
});


