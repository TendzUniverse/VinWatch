import { ScrollView, View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#141414',
  header: '#0B0B0B',
  card: '#1A1A1A',
  cardHead: '#1F1F1F',
  border: '#262626',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  green: '#22C55E',
};

// ---- Placeholder data: replace with a lookup by VIN (services/vehicleService.js) ----
const VEHICLE = {
  make: 'Toyota',
  model: 'Corolla',
  year: '2022',
  colour: 'White',
  registration: 'ABC 123 GP',
  vin: '****456',
  status: 'clear', // 'clear' or 'stolen'
  lastChecked: 'just now',
  alerts: [], // e.g. [{ title: 'Reported stolen', when: '2 hours ago' }]
  reports: [
    { icon: 'eye', title: 'Community Sighting', meta: 'Submitted 3 days ago · Verified' },
  ],
};

const STATUS = {
  clear: {
    label: 'CLEAR',
    color: C.green,
    text: (v) => `No active stolen vehicle report. Last checked ${v.lastChecked}.`,
  },
  stolen: {
    label: 'STOLEN',
    color: C.red,
    text: () => 'This vehicle has an active stolen vehicle report.',
  },
};

export default function VehicleDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  // Show only the last 3 characters of a VIN passed in from Check VIN or the scanner
  const vinParam = typeof params.vin === 'string' ? params.vin : '';
  const vehicle = {
    ...VEHICLE,
    vin: vinParam ? `****${vinParam.slice(-3)}` : VEHICLE.vin,
  };
  const s = STATUS[vehicle.status];

  const rows = [
    ['MAKE', vehicle.make],
    ['MODEL', vehicle.model],
    ['YEAR', vehicle.year],
    ['COLOUR', vehicle.colour],
    ['REGISTRATION', vehicle.registration],
    ['VIN', vehicle.vin],
  ];

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable style={styles.back} onPress={() => router.back()}>
            <Icon name="chevronLeft" size={18} color={C.muted} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <View style={styles.titleRow}>
            <View style={styles.titleText}>
              <Text style={styles.title}>
                {vehicle.make} {vehicle.model}
              </Text>
              <Text style={styles.subtitle}>
                {vehicle.year} · {vehicle.registration}
              </Text>
            </View>
            <View
              style={[
                styles.pill,
                { borderColor: s.color + '66', backgroundColor: s.color + '1A' },
              ]}
            >
              <View style={[styles.pillDot, { backgroundColor: s.color }]} />
              <Text style={[styles.pillText, { color: s.color }]}>{s.label}</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* Vehicle information */}
          <Section title="VEHICLE INFORMATION">
            {rows.map(([label, value], i) => (
              <View
                key={label}
                style={[styles.row, i < rows.length - 1 && styles.rowDivider]}
              >
                <Text style={styles.rowLabel}>{label}</Text>
                <Text style={styles.rowValue}>{value}</Text>
              </View>
            ))}
          </Section>

          {/* Security status */}
          <Section title="SECURITY STATUS">
            <View style={styles.padded}>
              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: s.color, shadowColor: s.color },
                  ]}
                />
                <Text style={[styles.statusLabel, { color: s.color }]}>
                  {s.label}
                </Text>
              </View>
              <Text style={styles.statusText}>{s.text(vehicle)}</Text>
            </View>
          </Section>

          {/* Alert history */}
          <Section title="ALERT HISTORY">
            {vehicle.alerts.length === 0 ? (
              <Text style={styles.empty}>No alerts for this vehicle.</Text>
            ) : (
              vehicle.alerts.map((a, i) => (
                <View
                  key={i}
                  style={[
                    styles.listItem,
                    i < vehicle.alerts.length - 1 && styles.rowDivider,
                  ]}
                >
                  <View style={styles.listText}>
                    <Text style={styles.listTitle}>{a.title}</Text>
                    <Text style={styles.listMeta}>{a.when}</Text>
                  </View>
                </View>
              ))
            )}
          </Section>

          {/* Report history */}
          <Section title="REPORT HISTORY">
            {vehicle.reports.map((r, i) => (
              <View
                key={i}
                style={[
                  styles.listItem,
                  i < vehicle.reports.length - 1 && styles.rowDivider,
                ]}
              >
                <View style={styles.listIcon}>
                  <Icon name={r.icon} size={22} color={C.red} />
                </View>
                <View style={styles.listText}>
                  <Text style={styles.listTitle}>{r.title}</Text>
                  <Text style={styles.listMeta}>{r.meta}</Text>
                </View>
              </View>
            ))}
          </Section>

          {/* Actions */}
          <View style={styles.actions}>
            <Pressable
              style={styles.editBtn}
              onPress={() =>
                // TODO: open the edit form once it is designed
                Alert.alert('Edit vehicle', 'Editing is not available yet.')
              }
            >
              <Text style={styles.editText}>EDIT VEHICLE</Text>
            </Pressable>
            <Pressable
              style={styles.activityBtn}
              onPress={() => router.push('/(official)/sightings')}
            >
              <Text style={styles.activityText}>VIEW ACTIVITY</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <View style={styles.sectionBar} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.header },
  scroll: { backgroundColor: C.bg, paddingBottom: 30 },

  header: {
    backgroundColor: C.header,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  titleText: { flex: 1 },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 38,
    lineHeight: 42,
    color: C.text,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    letterSpacing: 0.5,
    color: C.faint,
    marginTop: 2,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  pillDot: { width: 8, height: 8, borderRadius: 4 },
  pillText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
  },

  body: { paddingHorizontal: 20, paddingTop: 20 },

  section: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 14,
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: C.cardHead,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  sectionBar: { width: 4, height: 16, backgroundColor: C.red },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.muted,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: C.border },
  rowLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    letterSpacing: 1.4,
    color: C.faint,
  },
  rowValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: C.text,
  },

  padded: { padding: 20 },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  statusLabel: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 28,
    letterSpacing: 1,
  },
  statusText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    marginTop: 10,
  },

  empty: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: C.faint,
    textAlign: 'center',
    paddingVertical: 22,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  listIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: C.cardHead,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmoji: { fontSize: 22 },
  listText: { flex: 1 },
  listTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: C.text,
  },
  listMeta: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.faint,
    marginTop: 3,
  },

  actions: { flexDirection: 'row', gap: 14, marginTop: 6 },
  editBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 20,
    paddingVertical: 22,
  },
  editText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    letterSpacing: 1.5,
    color: C.text,
  },
  activityBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.red,
    borderRadius: 20,
    paddingVertical: 22,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  activityText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    letterSpacing: 1.5,
    color: C.text,
  },
});
