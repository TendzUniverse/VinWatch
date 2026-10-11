import { ScrollView, View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#141414',
  header: '#0E0B0B',
  card: '#1A1A1A',
  tile: '#1E1E1E',
  border: '#262626',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  green: '#22C55E',
};

// ---- Placeholder data: replace with the signed-in user from context/AuthContext ----
const USER = {
  name: 'John Smith',
  initials: 'JS',
  email: 'john.smith@example.com',
  roleLabel: 'VERIFIED USER',
};

const STATS = [
  { value: '94%', label: 'Trust Score', sub: 'Community' },
  { value: '12', label: 'Reports', sub: 'Submitted' },
  { value: '7', label: 'Sightings', sub: 'Verified' },
  { value: '2', label: 'Vehicles', sub: 'Registered' },
];

const ACTIVE_VEHICLE = {
  name: 'Toyota Fortuner GR Sport',
  detail: 'GP 123-456 · VIN ·····················2024',
  status: 'ACTIVE',
};

const MENU = [
  { emoji: '🚘', title: 'MY VEHICLES', sub: 'Manage 2 registered vehicles' },
  { emoji: '🔔', title: 'NOTIFICATION SETTINGS', sub: 'Alerts, radius, preferences' },
  {
    emoji: '🔒',
    title: 'PRIVACY & SECURITY',
    sub: 'Control your data & access',
    route: '/(official)/security',
  },
  { emoji: '⭐', title: 'COMMUNITY CONTRIBUTION', sub: 'Score: 87/100 · Verified' },
  { emoji: '👤', title: 'ACCOUNT TYPE', sub: 'Normal User · Vehicle Owner' },
  { emoji: '❓', title: 'HELP & SUPPORT', sub: 'Get help with VINWatch' },
];

export default function Profile() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  // Items without a route show a message until their screens exist
  const open = (item) => {
    if (item.route) router.push(item.route);
    else Alert.alert(item.title, 'This screen is not available yet.');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{USER.initials}</Text>
              <View style={styles.onlineDot} />
            </View>
            <View style={styles.userText}>
              <Text style={styles.name}>{USER.name}</Text>
              <View style={styles.roleRow}>
                <Ionicons name="shield-checkmark-outline" size={14} color={C.red} />
                <Text style={styles.role}>{USER.roleLabel}</Text>
              </View>
              <Text style={styles.email}>{USER.email}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            {STATS.map((s) => (
              <View key={s.label} style={styles.stat}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
                <Text style={styles.statSub}>{s.sub}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.body}>
          {/* Active vehicle */}
          <View style={styles.activeCard}>
            <View style={styles.activeHead}>
              <Text style={styles.activeLabel}>ACTIVE VEHICLE</Text>
              <Pressable onPress={() => open({ title: 'MY VEHICLES' })}>
                <Text style={styles.viewAll}>VIEW ALL →</Text>
              </Pressable>
            </View>
            <View style={styles.activeRow}>
              <View style={styles.iconBox}>
                <Text style={styles.iconEmoji}>🚘</Text>
              </View>
              <View style={styles.activeText}>
                <Text style={styles.vehicleName}>{ACTIVE_VEHICLE.name}</Text>
                <Text style={styles.vehicleDetail} numberOfLines={1}>
                  {ACTIVE_VEHICLE.detail}
                </Text>
              </View>
              <View style={styles.activeStatus}>
                <View style={styles.activeDot} />
                <Text style={styles.activeStatusText}>{ACTIVE_VEHICLE.status}</Text>
              </View>
            </View>
          </View>

          {/* Menu */}
          {MENU.map((item) => (
            <Pressable key={item.title} style={styles.menuRow} onPress={() => open(item)}>
              <View style={styles.iconBox}>
                <Text style={styles.iconEmoji}>{item.emoji}</Text>
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSub}>{item.sub}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={C.faint} />
            </Pressable>
          ))}
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
    paddingTop: 16,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  userRow: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 22,
    backgroundColor: '#231416',
    borderWidth: 2,
    borderColor: C.red + '88',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 30,
    color: C.text,
  },
  onlineDot: {
    position: 'absolute',
    right: -6,
    bottom: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: C.green,
    borderWidth: 3,
    borderColor: C.header,
  },
  userText: { flex: 1 },
  name: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 32,
    lineHeight: 36,
    color: C.text,
  },
  roleRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 },
  role: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    color: C.red,
  },
  email: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.faint,
    marginTop: 4,
  },

  statsRow: { flexDirection: 'row', gap: 8, marginTop: 20 },
  stat: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: C.tile,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    paddingVertical: 14,
  },
  statValue: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 30,
    lineHeight: 32,
    color: C.red,
  },
  statLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: C.text,
    marginTop: 2,
  },
  statSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 9,
    color: C.faint,
    marginTop: 1,
  },

  body: { paddingHorizontal: 20, paddingTop: 20 },

  activeCard: {
    backgroundColor: '#1B1415',
    borderWidth: 1,
    borderColor: C.red + '55',
    borderRadius: 20,
    padding: 20,
    marginBottom: 14,
  },
  activeHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activeLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.muted,
  },
  viewAll: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1,
    color: C.red,
  },
  activeRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  activeText: { flex: 1 },
  vehicleName: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 19,
    letterSpacing: 0.5,
    color: C.text,
  },
  vehicleDetail: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: C.faint,
    marginTop: 3,
  },
  activeStatus: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.green,
  },
  activeStatusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    letterSpacing: 1,
    color: C.green,
  },

  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: { fontSize: 24 },
  menuText: { flex: 1 },
  menuTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 20,
    letterSpacing: 1,
    color: C.text,
  },
  menuSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    marginTop: 3,
  },
});

