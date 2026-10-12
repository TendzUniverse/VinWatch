import { useState } from 'react';
import { ScrollView, View, Text, Pressable, Switch, Alert, StyleSheet } from 'react-native';
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
  green: '#4ADE80',
};

const RADII = [1, 5, 10, 25];

const OPTIONS = [
  {
    key: 'stolen',
    icon: 'alert',
    title: 'Nearby Stolen Vehicles',
    sub: 'Active stolen vehicle alerts in your area',
  },
  {
    key: 'sightings',
    icon: 'eye',
    title: 'Possible Vehicle Sightings',
    sub: 'Community sighting reports near you',
  },
  {
    key: 'recovery',
    icon: 'checkCircle',
    title: 'Vehicle Recovery Updates',
    sub: 'When stolen vehicles are recovered',
  },
  {
    key: 'location',
    icon: 'pin',
    title: 'Location-Based Alerts',
    sub: 'Alerts triggered by your real-time location',
  },
];

export default function AlertSettings() {
  const router = useRouter();
  const [radius, setRadius] = useState(5);
  const [enabled, setEnabled] = useState({
    stolen: true,
    sightings: true,
    recovery: false,
    location: true,
  });
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const toggle = (key) => setEnabled((prev) => ({ ...prev, [key]: !prev[key] }));

  const save = () => {
    // TODO: save the radius and switches through services/alertService.js
    Alert.alert('Settings saved', 'Your alert settings have been updated.', [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

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
            ALERT <Text style={styles.titleRed}>SETTINGS</Text>
          </Text>
        </View>

        <View style={styles.body}>
          {/* Radius */}
          <Text style={styles.label}>ALERT RADIUS</Text>
          <View style={styles.radiusRow}>
            {RADII.map((r) => {
              const active = radius === r;
              return (
                <Pressable
                  key={r}
                  onPress={() => setRadius(r)}
                  style={[styles.radiusChip, active && styles.radiusActive]}
                >
                  <Text style={[styles.radiusText, active && styles.radiusTextActive]}>
                    {r} km
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Notification types */}
          <Text style={[styles.label, { marginTop: 28 }]}>NOTIFICATION TYPES</Text>
          {OPTIONS.map((o) => (
            <View key={o.key} style={styles.option}>
              <View style={{ width: 30, alignItems: 'center' }}><Icon name={o.icon} size={24} color={o.key === 'recovery' ? '#4ADE80' : C.red} /></View>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{o.title}</Text>
                <Text style={styles.optionSub}>{o.sub}</Text>
              </View>
              <Switch
                value={enabled[o.key]}
                onValueChange={() => toggle(o.key)}
                trackColor={{ false: '#262626', true: C.red }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#262626"
              />
            </View>
          ))}

          {/* Save */}
          <Pressable style={styles.saveBtn} onPress={save}>
            <Text style={styles.saveText}>SAVE SETTINGS</Text>
          </Pressable>
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
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 44,
    lineHeight: 48,
    color: C.text,
  },
  titleRed: { color: C.red },

  body: { paddingHorizontal: 20, paddingTop: 24 },
  label: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.muted,
    marginBottom: 14,
  },

  radiusRow: { flexDirection: 'row', gap: 10 },
  radiusChip: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: C.chip,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    paddingVertical: 18,
  },
  radiusActive: {
    backgroundColor: C.red,
    borderColor: C.red,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  radiusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: C.muted,
  },
  radiusTextActive: { color: C.text },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    marginBottom: 12,
  },
  optionEmoji: { fontSize: 24, width: 30, textAlign: 'center' },
  optionText: { flex: 1 },
  optionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: C.text,
  },
  optionSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 3,
  },

  saveBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 22,
    paddingVertical: 24,
    marginTop: 12,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  saveText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    letterSpacing: 2,
    color: C.text,
  },
});
