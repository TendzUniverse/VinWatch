import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#0B0B0B',
  card: '#141414',
  border: '#242424',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  brightRed: '#FF2D1F',
  orange: '#F97316',
  yellow: '#FBBF24',
};

// ---- Placeholder data: replace with the vehicle's real activity from the backend ----
const VEHICLE = { name: 'Toyota Corolla', vin: '****456', status: 'STOLEN' };

const EVENTS = [
  {
    time: '10:00',
    tag: 'INCIDENT REPORTED',
    emoji: '🚨',
    color: C.red,
    place: 'Sandton',
    street: 'Rivonia Road & West St',
    text: 'Vehicle reported stolen by owner.',
  },
  {
    time: '10:15',
    tag: 'POSSIBLE SIGHTING',
    emoji: '👀',
    color: C.orange,
    place: 'Rosebank',
    street: 'Oxford Road',
    text: 'Community member reported matching vehicle heading south.',
  },
  {
    time: '10:42',
    tag: 'COMMUNITY SIGHTING',
    emoji: '👀',
    color: C.yellow,
    place: 'Parktown',
    street: 'Jan Smuts Avenue',
    text: 'Second independent sighting. Vehicle observed stationary briefly before moving west.',
  },
  {
    time: '11:05',
    tag: 'RECENT VERIFIED SIGHTING',
    emoji: '🛡️',
    color: C.brightRed,
    place: 'Auckland Park',
    street: 'Empire Road',
    text: 'Verified sighting from trusted reporter. Vehicle identified in the Auckland Park area.',
    latest: true,
  },
];

export default function Sightings() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Back */}
        <Pressable style={styles.back} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={18} color={C.muted} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        {/* Title */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            VEHICLE <Text style={styles.titleRed}>ACTIVITY</Text>
          </Text>
          <View style={styles.countRow}>
            <View style={styles.countDot} />
            <Text style={styles.countText}>{EVENTS.length} EVENTS</Text>
          </View>
        </View>

        {/* Vehicle bar */}
        <View style={styles.vehicleBar}>
          <View style={styles.vehicleDot} />
          <Text style={styles.vehicleName}>{VEHICLE.name}</Text>
          <Text style={styles.vehicleVin}>· {VEHICLE.vin}</Text>
          <Text style={styles.vehicleStatus}>{VEHICLE.status}</Text>
        </View>

        {/* Timeline */}
        <View style={styles.timeline}>
          {EVENTS.map((e) => (
            <View key={e.time} style={styles.eventRow}>
              {/* Time + dot + line */}
              <View style={styles.rail}>
                <View
                  style={[
                    styles.line,
                    e.latest && { opacity: 0.45, bottom: 40 },
                  ]}
                />
                <Text
                  style={[
                    styles.time,
                    e.latest && { color: C.red },
                  ]}
                >
                  {e.time}
                </Text>
                {e.latest ? (
                  <View style={styles.latestDot} />
                ) : (
                  <View style={[styles.ring, { borderColor: e.color }]}>
                    <View style={[styles.ringInner, { backgroundColor: e.color }]} />
                  </View>
                )}
              </View>

              {/* Card */}
              <View
                style={[
                  styles.card,
                  e.latest && styles.cardLatest,
                ]}
              >
                <View
                  style={[
                    styles.tag,
                    {
                      backgroundColor: e.color + '22',
                      borderColor: e.color + '55',
                    },
                  ]}
                >
                  <Text style={styles.tagEmoji}>{e.emoji}</Text>
                  <Text style={[styles.tagText, { color: e.color }]}>{e.tag}</Text>
                </View>

                <View style={styles.placeRow}>
                  <Ionicons
                    name="location-sharp"
                    size={14}
                    color={e.latest ? C.red : C.muted}
                  />
                  <Text style={[styles.place, e.latest && { color: C.red }]}>
                    {e.place}
                  </Text>
                  <Text style={styles.street}>· {e.street}</Text>
                </View>

                <Text style={[styles.body, e.latest && styles.bodyLatest]}>
                  {e.text}
                </Text>

                {e.latest && (
                  <View style={styles.latestRow}>
                    <View style={styles.countDot} />
                    <Text style={styles.latestText}>MOST RECENT EVENT</Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* View on map */}
        <Pressable
          style={styles.mapBtn}
          onPress={() => router.push('/(official)/recovery-intelligence')}
        >
          <Text style={styles.mapBtnText}>VIEW ON MAP</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const RAIL_WIDTH = 64;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingBottom: 40 },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backText: { fontFamily: 'Inter_400Regular', fontSize: 14, color: C.muted },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 40,
    lineHeight: 44,
    color: C.text,
  },
  titleRed: { color: C.red },
  countRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  countDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.red,
  },
  countText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
    color: C.red,
  },

  vehicleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  vehicleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: C.red,
  },
  vehicleName: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 20,
    color: C.text,
  },
  vehicleVin: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.faint,
  },
  vehicleStatus: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
    color: C.red,
  },

  // Timeline
  timeline: { marginTop: 24, paddingHorizontal: 16 },
  eventRow: { flexDirection: 'row', marginBottom: 18 },
  rail: { width: RAIL_WIDTH, alignItems: 'center' },
  line: {
    position: 'absolute',
    top: 0,
    bottom: -18,
    width: 3,
    backgroundColor: C.red,
    alignSelf: 'center',
  },
  time: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: C.faint,
    backgroundColor: C.bg,
    paddingVertical: 2,
    marginTop: 4,
  },
  ring: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  ringInner: { width: 10, height: 10, borderRadius: 5 },
  latestDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: C.brightRed,
    marginTop: 14,
    shadowColor: C.brightRed,
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },

  card: {
    flex: 1,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    padding: 16,
  },
  cardLatest: {
    backgroundColor: '#2A1413',
    borderColor: C.red + '66',
    borderTopWidth: 4,
    borderTopColor: C.red,
  },
  tag: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagEmoji: { fontSize: 12 },
  tagText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
  },
  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 14,
  },
  place: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    color: C.text,
  },
  street: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: C.faint,
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: C.muted,
    marginTop: 8,
  },
  bodyLatest: { color: '#E5E7EB', fontFamily: 'Inter_600SemiBold' },
  latestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 12,
  },
  latestText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    letterSpacing: 1,
    color: C.red,
  },

  mapBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 18,
    paddingVertical: 20,
    marginHorizontal: 16,
    marginTop: 8,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  mapBtnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    letterSpacing: 1.5,
    color: C.text,
  },
});

