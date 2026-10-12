import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#0B0B0B',
  card: '#141414',
  rowDark: '#121212',
  rowLight: '#1A1A1A',
  border: '#242424',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  orange: '#F97316',
  yellow: '#FBBF24',
  blue: '#38BDF8',
};

// ---- Placeholder data: replace with the real score from the backend ----
const VEHICLE = 'Toyota Corolla · ****456';
const MAX_POINTS = 30; // the largest a single factor can contribute (full bar)

const FACTORS = [
  {
    icon: 'clock',
    title: 'RECENCY',
    points: 30,
    color: C.red,
    text: 'Recent sightings receive greater importance than older reports in scoring.',
    row: 'Recent Activity',
  },
  {
    icon: 'users',
    title: 'SIGHTINGS',
    points: 25,
    color: C.orange,
    text: 'Multiple independent community sightings increase confidence in the data.',
    row: 'Verified Sighting',
  },
  {
    icon: 'shield',
    title: 'VERIFICATION',
    points: 20,
    color: C.yellow,
    text: 'Verified sightings from trusted reporters increase reliability of the score.',
    row: 'Multiple Sightings',
  },
  {
    icon: 'compass',
    title: 'MOVEMENT',
    points: 12,
    color: C.blue,
    text: 'Consistent geographic movement may indicate a possible direction of travel.',
    row: 'Movement Consistency',
  },
];

const TOTAL = FACTORS.reduce((sum, f) => sum + f.points, 0);

export default function RecoveryDetails() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const backToMap = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/(official)/recovery-intelligence');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Back */}
        <Pressable style={styles.back} onPress={() => router.back()}>
          <Icon name="chevronLeft" size={18} color={C.muted} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        {/* Title */}
        <Text style={styles.title}>
          RECOVERY <Text style={styles.titleRed}>INTELLIGENCE</Text>
        </Text>
        <Text style={styles.subtitle}>HOW THE SCORE IS CALCULATED</Text>

        {/* Score card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreLeft}>
            <Text style={styles.scoreNumber}>{TOTAL}</Text>
            <Text style={styles.scoreMax}>/100</Text>
          </View>
          <View style={styles.scoreRight}>
            <View style={styles.track}>
              <View
                style={[
                  styles.fill,
                  { width: `${TOTAL}%`, backgroundColor: C.red },
                ]}
              />
            </View>
            <View style={styles.zoneRow}>
              <View style={styles.zoneDot} />
              <Text style={styles.zoneText}>HIGH PRIORITY ZONE</Text>
            </View>
            <Text style={styles.vehicle}>{VEHICLE}</Text>
          </View>
        </View>

        {/* Factor cards */}
        {FACTORS.map((f) => (
          <View
            key={f.title}
            style={[styles.factor, { borderTopColor: f.color }]}
          >
            <View style={styles.factorTop}>
              <Icon name={f.icon} size={28} color={f.color} style={{ marginTop: 2 }} />
              <View style={styles.factorText}>
                <Text style={styles.factorTitle}>{f.title}</Text>
                <Text style={styles.factorBody}>{f.text}</Text>
              </View>
              <Text style={[styles.factorPoints, { color: f.color }]}>
                +{f.points}
              </Text>
            </View>
            <View style={styles.track}>
              <View
                style={[
                  styles.fill,
                  {
                    width: `${(f.points / MAX_POINTS) * 100}%`,
                    backgroundColor: f.color,
                    opacity: 0.8,
                  },
                ]}
              />
            </View>
          </View>
        ))}

        {/* Score breakdown */}
        <View style={styles.breakdown}>
          <Text style={styles.breakdownHeader}>SCORE BREAKDOWN</Text>
          {FACTORS.map((f, i) => (
            <View
              key={f.row}
              style={[
                styles.breakRow,
                { backgroundColor: i % 2 === 0 ? C.rowDark : C.rowLight },
              ]}
            >
              <Text style={styles.breakLabel}>{f.row}</Text>
              <Text style={[styles.breakPoints, { color: f.color }]}>
                +{f.points}
              </Text>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.totalValue}>{TOTAL}/100</Text>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.note}>
          <Icon name="info"
            size={20}
            color={C.blue}
            style={styles.noteIcon} />
          <Text style={styles.noteText}>
            This score provides recovery intelligence and does not guarantee the
            current location of a vehicle. All information is based on
            community-submitted reports.
          </Text>
        </View>

        {/* Back to map */}
        <Pressable style={styles.mapBtn} onPress={backToMap}>
          <Text style={styles.mapBtnText}>BACK TO MAP</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingHorizontal: 16, paddingBottom: 40 },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 12,
  },
  backText: { fontFamily: 'Inter_400Regular', fontSize: 14, color: C.muted },

  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 40,
    lineHeight: 44,
    color: C.text,
  },
  titleRed: { color: C.red },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    letterSpacing: 2,
    color: C.faint,
    marginTop: 2,
    marginBottom: 16,
  },

  // Score card
  scoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#2A1010',
    borderWidth: 1,
    borderColor: C.red + '66',
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
  },
  scoreLeft: { alignItems: 'center' },
  scoreNumber: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 72,
    lineHeight: 76,
    color: C.red,
    textShadowColor: C.red + '99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  scoreMax: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: C.faint,
  },
  scoreRight: { flex: 1 },
  zoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  zoneDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F43F5E',
  },
  zoneText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    color: C.red,
  },
  vehicle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 6,
  },

  // Progress bars
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#242424',
    overflow: 'hidden',
  },
  fill: { height: 10, borderRadius: 5 },

  // Factor cards
  factor: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderTopWidth: 3,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  factorTop: { flexDirection: 'row', gap: 14, marginBottom: 16 },
  factorEmoji: { fontSize: 28, marginTop: 2 },
  factorText: { flex: 1 },
  factorTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    letterSpacing: 1,
    color: C.text,
  },
  factorBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: C.muted,
    marginTop: 4,
  },
  factorPoints: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 30,
    lineHeight: 32,
  },

  // Breakdown
  breakdown: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.red + '44',
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 4,
  },
  breakdownHeader: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.muted,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  breakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  breakLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: '#D1D5DB',
  },
  breakPoints: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 18,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A1010',
    borderTopWidth: 1,
    borderTopColor: C.red + '44',
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
  totalLabel: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    letterSpacing: 1,
    color: C.text,
  },
  totalValue: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 28,
    color: C.red,
  },

  // Note
  note: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    padding: 18,
    marginTop: 16,
  },
  noteIcon: { marginTop: 1 },
  noteText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontStyle: 'italic',
    fontSize: 13,
    lineHeight: 20,
    color: C.muted,
  },

  mapBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 18,
    paddingVertical: 20,
    marginTop: 16,
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
