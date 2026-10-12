import { useState } from 'react';
import { ScrollView, View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

// ---- Placeholder data: replace with API data when the backend is ready ----
const OFFICIAL_NAME_GREETING = 'Good morning';
const STATS = {
  reportsAwaiting: 12,
  newSightings: 8,
  activeVehicles: 24,
};
const URGENT = {
  title: 'New hijacking report submitted',
  detail: 'Toyota Corolla · Johannesburg · 10 minutes ago',
};

// Screens listed in the menu: [label, route inside (official)]
const MENU = [
  ['Check VIN', 'check-vin'],
  ['Report Verification', 'report-verification'],
  ['Sightings', 'sightings'],
  ['Recovery Map', 'recovery-intelligence'],
  ['Vehicle Status', 'vehicle-status'],
  ['Alerts', 'alerts'],
  ['Report Protection', 'report-protection'],
  ['Security & Privacy', 'security'],
  ['Profile', 'profile'],
];

// ---- Colors (taken from the prototype) ----
const C = {
  bg: '#0B0B0B',
  card: '#141414',
  text: '#FFFFFF',
  muted: '#8A8F98',
  red: '#E50914',
  yellow: '#FBBF24',
  blue: '#38BDF8',
  green: '#22C55E',
};

export default function OfficialDashboard() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  // Always include the (official) group so it never opens an admin screen
  const go = (path) => router.push(`/(official)/${path}`);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <View style={styles.brandRow}>
            <Pressable onPress={() => setMenuOpen(true)} hitSlop={12}>
              <Icon name="menu" size={26} color={C.red} />
            </Pressable>
            <Text style={styles.brandText}>VINWatch Official</Text>
          </View>
          <View style={styles.badge}>
            <Icon name="shieldCheck" size={14} color={C.red} />
            <Text style={styles.badgeText}>VERIFIED OFFICIAL</Text>
          </View>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroWhite}>VINWATCH</Text>
          <Text style={styles.heroRed}>OFFICIAL</Text>
          <Text style={styles.greeting}>
            {OFFICIAL_NAME_GREETING} — 3 reports require urgent attention.
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard
            icon="clipboard"
            value={STATS.reportsAwaiting}
            label={'Reports Awaiting\nReview'}
            color={C.yellow}
            onPress={() => go('report-verification')}
          />
          <StatCard
            icon="eye"
            value={STATS.newSightings}
            label="New Sightings"
            color={C.blue}
            onPress={() => go('sightings')}
          />
          <StatCard
            icon="alert"
            value={STATS.activeVehicles}
            label="Active Vehicles"
            color={C.red}
            onPress={() => go('vehicle-status')}
          />
        </View>

        {/* Urgent */}
        <View style={styles.urgentCard}>
          <View style={styles.urgentHeader}>
            <View style={styles.urgentDot} />
            <Text style={styles.urgentLabel}>URGENT — REQUIRES ACTION</Text>
          </View>
          <View style={styles.urgentBody}>
            <View style={styles.urgentIcon}>
              <Icon name="alert" size={22} color={C.red} />
            </View>
            <View style={styles.urgentText}>
              <Text style={styles.urgentTitle}>{URGENT.title}</Text>
              <Text style={styles.urgentDetail}>{URGENT.detail}</Text>
            </View>
            <Pressable
              style={styles.reviewBtn}
              onPress={() => go('report-verification')}
            >
              <Text style={styles.reviewBtnText}>REVIEW</Text>
            </Pressable>
          </View>
        </View>

        {/* Official actions */}
        <Text style={styles.sectionLabel}>OFFICIAL ACTIONS</Text>
        <View style={styles.grid}>
          <ActionCard
            icon="checkCircle"
            title="VERIFY REPORTS"
            subtitle={`${STATS.reportsAwaiting} awaiting your review`}
            color={C.red}
            onPress={() => go('report-verification')}
          />
          <ActionCard
            icon="eye"
            title="REVIEW SIGHTINGS"
            subtitle={`${STATS.newSightings} new community sightings`}
            color={C.blue}
            onPress={() => go('sightings')}
          />
          <ActionCard
            icon="car"
            title="UPDATE VEHICLE STATUS"
            subtitle="Change vehicle report status"
            color={C.yellow}
            onPress={() => go('vehicle-status')}
          />
          <ActionCard
            icon="map"
            title="RECOVERY ACTIVITY"
            subtitle="View intelligence map"
            color={C.green}
            onPress={() => go('recovery-intelligence')}
          />
        </View>

        {/* Report protection */}
        <Pressable
          style={styles.protectionRow}
          onPress={() => go('report-protection')}
        >
          <View style={styles.protectionIcon}>
            <Icon name="shield" size={20} color={C.blue} />
          </View>
          <View>
            <Text style={styles.protectionTitle}>Report Protection System</Text>
            <Text style={styles.protectionSub}>Anti-abuse controls & audit logs</Text>
          </View>
        </Pressable>
      </ScrollView>

      {/* Menu */}
      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setMenuOpen(false)}>
          <View style={styles.menu}>
            {MENU.map(([label, path], i) => (
              <Pressable
                key={path}
                style={[
                  styles.menuItem,
                  i < MENU.length - 1 && styles.menuDivider,
                ]}
                onPress={() => {
                  setMenuOpen(false);
                  go(path);
                }}
              >
                <Text style={styles.menuText}>{label}</Text>
                <Icon name="chevronRight" size={16} color={C.muted} />
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

function StatCard({ icon, value, label, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.statCard, { borderColor: color + '55' }]}
    >
      <Icon name={icon} size={26} color={color} style={{ marginBottom: 6 }} />
      <Text
        style={[
          styles.statValue,
          { color, textShadowColor: color + '99' },
        ]}
      >
        {value}
      </Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Pressable>
  );
}

function ActionCard({ icon, title, subtitle, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.actionCard, { borderColor: color + '44' }]}
    >
      <View
        style={[
          styles.actionIcon,
          { backgroundColor: color + '22', borderColor: color + '44' },
        ]}
      >
        <Icon name={icon} size={22} color={color} />
      </View>
      <Text style={[styles.actionTitle, { color }]}>{title}</Text>
      <Text style={styles.actionSub}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingBottom: 40 },

  // Top bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 20,
    letterSpacing: 0.5,
    color: C.text,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: C.red + '88',
    backgroundColor: C.red + '18',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.2,
    color: C.red,
  },

  // Hero
  hero: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 20 },
  heroWhite: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 54,
    lineHeight: 56,
    color: C.text,
  },
  heroRed: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 54,
    lineHeight: 56,
    color: C.red,
  },
  greeting: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: C.muted,
    marginTop: 8,
  },

  // Stats
  statsRow: { flexDirection: 'row', gap: 10, paddingHorizontal: 16 },
  statCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: C.card,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  statEmoji: { fontSize: 24, marginBottom: 6 },
  statValue: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 40,
    lineHeight: 44,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: C.muted,
    textAlign: 'center',
    marginTop: 4,
  },

  // Urgent
  urgentCard: {
    marginHorizontal: 16,
    marginTop: 18,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.red + '55',
    borderRadius: 20,
    overflow: 'hidden',
  },
  urgentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1A1A1A',
  },
  urgentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.red,
  },
  urgentLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    color: C.red,
  },
  urgentBody: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
  },
  urgentIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: C.red + '22',
    borderWidth: 1,
    borderColor: C.red + '44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  urgentEmoji: { fontSize: 22 },
  urgentText: { flex: 1 },
  urgentTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: C.text,
  },
  urgentDetail: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 3,
  },
  reviewBtn: {
    backgroundColor: C.red,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },
  reviewBtnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1,
    color: C.text,
  },

  // Official actions
  sectionLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.8,
    color: C.muted,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
  },
  actionCard: {
    width: '47.8%',
    backgroundColor: C.card,
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  actionEmoji: { fontSize: 22 },
  actionTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  actionSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 4,
  },

  // Report protection
  protectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: '#242424',
    borderRadius: 16,
    padding: 14,
  },
  protectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  protectionEmoji: { fontSize: 20 },
  protectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: C.text,
  },
  protectionSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.muted,
    marginTop: 2,
  },

  // Menu
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingTop: 90,
    paddingHorizontal: 16,
  },
  menu: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: '#242424',
    borderRadius: 18,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuDivider: { borderBottomWidth: 1, borderBottomColor: '#242424' },
  menuText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: C.text,
  },
});
