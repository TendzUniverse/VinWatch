import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#141414',
  header: '#0B0B0B',
  card: '#1A1A1A',
  border: '#262626',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  blue: '#38BDF8',
};

const STATUSES = [
  {
    label: 'CLEAR',
    color: '#22C55E',
    ball: '#4ADE80',
    bg: '#14231A',
    text: 'No active stolen or hijacking report found in the national database.',
  },
  {
    label: 'UNDER REVIEW',
    color: '#FBBF24',
    ball: '#FCD34D',
    bg: '#241F12',
    text: 'A suspicious or unverified report is currently being investigated.',
  },
  {
    label: 'STOLEN',
    color: '#E50914',
    ball: '#F43F5E',
    bg: '#241112',
    text: 'An active stolen vehicle or hijacking report exists in the database.',
  },
  {
    label: 'RECOVERED',
    color: '#38BDF8',
    ball: '#3B82F6',
    bg: '#13222A',
    text: 'The vehicle has been located and confirmed as recovered.',
  },
  {
    label: 'CLOSED',
    color: '#6B7280',
    ball: '#4B4553',
    bg: '#1A1A1A',
    text: 'The associated report or case has been formally closed.',
    muted: true,
  },
];

export default function VehicleStatus() {
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
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back} onPress={() => router.back()}>
            <Icon name="chevronLeft" size={18} color={C.muted} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <Text style={styles.title}>
            VEHICLE <Text style={styles.titleRed}>STATUS</Text>
          </Text>
          <Text style={styles.subtitle}>
            Possible status values for any vehicle in the system.
          </Text>
        </View>

        <View style={styles.body}>
          {STATUSES.map((s) => (
            <View
              key={s.label}
              style={[
                styles.card,
                {
                  backgroundColor: s.bg,
                  borderColor: s.muted ? C.border : s.color + '55',
                },
              ]}
            >
              {/* Glossy ball */}
              <View style={[styles.ball, { backgroundColor: s.ball }]}>
                <View style={styles.shine} />
              </View>

              <View style={styles.cardText}>
                <View style={styles.titleRow}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: s.color, shadowColor: s.color },
                      s.muted && { shadowOpacity: 0 },
                    ]}
                  />
                  <Text style={[styles.cardTitle, { color: s.color }]}>
                    {s.label}
                  </Text>
                </View>
                <Text style={styles.cardBody}>{s.text}</Text>
              </View>
            </View>
          ))}

          {/* Note */}
          <View style={styles.note}>
            <Icon name="info"
              size={20}
              color={C.blue}
              style={styles.noteIcon} />
            <Text style={styles.noteText}>
              Status is determined by reports verified in the national database.
              Community reports may be pending verification.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.header },
  scroll: { backgroundColor: C.bg, paddingBottom: 30 },

  header: {
    backgroundColor: C.header,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 12,
  },
  backText: { fontFamily: 'Inter_400Regular', fontSize: 14, color: C.muted },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 48,
    lineHeight: 52,
    color: C.text,
  },
  titleRed: { color: '#E50914' },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    marginTop: 6,
  },

  body: { paddingHorizontal: 20, paddingTop: 24 },

  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 18,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginBottom: 14,
  },
  ball: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginTop: 6,
    overflow: 'hidden',
  },
  shine: {
    position: 'absolute',
    top: 4,
    left: 6,
    width: 12,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    opacity: 0.35,
  },
  cardText: { flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  cardTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 24,
    letterSpacing: 1.5,
  },
  cardBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: C.muted,
    marginTop: 8,
  },

  note: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 18,
    marginTop: 4,
  },
  noteIcon: { marginTop: 1 },
  noteText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: C.muted,
  },
});
