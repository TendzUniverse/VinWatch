import { useState } from 'react';
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
  chip: '#1E1E1E',
  border: '#262626',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  orange: '#F97316',
  green: '#22C55E',
};

// ---- Placeholder data: replace with alerts from the backend (services/alertService.js) ----
const AREA = { name: 'Johannesburg', radius: '5 km' };

const TYPES = {
  stolen: { label: 'STOLEN VEHICLE', color: C.red },
  activity: { label: 'RECENT ACTIVITY', color: C.orange },
  recovered: { label: 'RECOVERED', color: C.green },
};

const ALERTS = [
  { id: '1', type: 'stolen', vehicle: 'Toyota Corolla', meta: 'White · 2.4 km away · 15 min ago' },
  { id: '2', type: 'activity', vehicle: 'VW Polo', meta: 'Silver · 5.7 km away · 42 min ago' },
  { id: '3', type: 'stolen', vehicle: 'BMW 3 Series', meta: 'Black · 8.1 km away · 1 hr ago' },
  { id: '4', type: 'recovered', vehicle: 'Ford Ranger', meta: 'White · 12.4 km away · 2 hrs ago' },
];

const FILTERS = [
  { key: 'all', label: 'ALL' },
  { key: 'stolen', label: 'STOLEN' },
  { key: 'activity', label: 'ACTIVITY' },
  { key: 'recovered', label: 'RECOVERED' },
];

export default function Alerts() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const visible =
    filter === 'all' ? ALERTS : ALERTS.filter((a) => a.type === filter);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>ALERTS</Text>
            <Pressable
              style={styles.settingsBtn}
              onPress={() => router.push('/(official)/alert-settings')}
            >
              <Icon name="settings" size={14} color={C.muted} />
              <Text style={styles.settingsText}>SETTINGS</Text>
            </Pressable>
          </View>

          {/* Alert area */}
          <View style={styles.area}>
            <Icon name="pin" size={18} color={C.red} />
            <View style={styles.areaText}>
              <Text style={styles.areaLabel}>YOUR ALERT AREA</Text>
              <Text style={styles.areaName}>{AREA.name}</Text>
            </View>
            <View style={styles.radius}>
              <Text style={styles.areaLabel}>RADIUS</Text>
              <Text style={styles.radiusValue}>{AREA.radius}</Text>
            </View>
          </View>

          {/* Filters */}
          <View style={styles.filters}>
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <Pressable
                  key={f.key}
                  onPress={() => setFilter(f.key)}
                  style={[styles.chip, active && styles.chipActive]}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>
                    {f.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Alert list */}
        <View style={styles.list}>
          {visible.length === 0 ? (
            <Text style={styles.empty}>No alerts in this category.</Text>
          ) : (
            visible.map((a) => {
              const t = TYPES[a.type];
              return (
                <View
                  key={a.id}
                  style={[styles.card, { borderTopColor: t.color }]}
                >
                  <View style={[styles.dot, { backgroundColor: t.color }]} />
                  <View style={styles.cardText}>
                    <Text style={[styles.type, { color: t.color }]}>{t.label}</Text>
                    <Text style={styles.vehicle}>{a.vehicle}</Text>
                    <Text style={styles.meta}>{a.meta}</Text>
                  </View>
                  <Pressable
                    style={[
                      styles.viewBtn,
                      {
                        backgroundColor: t.color + '1F',
                        borderColor: t.color + '33',
                      },
                    ]}
                    onPress={() => router.push('/(official)/vehicle-details')}
                  >
                    <Text style={[styles.viewText, { color: t.color }]}>VIEW</Text>
                  </Pressable>
                </View>
              );
            })
          )}
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
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 44,
    lineHeight: 48,
    color: C.text,
  },
  settingsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: C.chip,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  settingsText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.5,
    color: C.muted,
  },

  area: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: C.chip,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  pin: { fontSize: 18 },
  areaText: { flex: 1 },
  areaLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    letterSpacing: 1.5,
    color: C.faint,
  },
  areaName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: C.text,
    marginTop: 2,
  },
  radius: { alignItems: 'flex-end' },
  radiusValue: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    color: C.red,
    marginTop: 2,
  },

  filters: { flexDirection: 'row', gap: 10, marginTop: 16 },
  chip: {
    backgroundColor: C.chip,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  chipActive: {
    backgroundColor: C.red,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  chipText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.3,
    color: C.muted,
  },
  chipTextActive: { color: C.text },

  list: { paddingHorizontal: 20, paddingTop: 22 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderTopWidth: 4,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 14,
  },
  dot: { width: 12, height: 12, borderRadius: 6 },
  cardText: { flex: 1 },
  type: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    letterSpacing: 1.5,
  },
  vehicle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 17,
    color: C.text,
    marginTop: 4,
  },
  meta: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 4,
  },
  viewBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  viewText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
  },

  empty: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: C.faint,
    textAlign: 'center',
    paddingVertical: 40,
  },
});
