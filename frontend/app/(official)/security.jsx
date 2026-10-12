import { ScrollView, View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#141414',
  header: '#0B0B0B',
  card: '#181818',
  rowAlt: '#1D1D1D',
  border: '#262626',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#6B7280',
  red: '#E50914',
  green: '#22C55E',
};

// ---- Placeholder data: replace with the official's real account settings ----
const SECTIONS = [
  {
    icon: 'lock',
    title: 'ACCOUNT SECURITY',
    items: [
      { title: 'Change Password', sub: 'Update your account password' },
      {
        title: 'Two-Factor Authentication',
        sub: 'Not enabled',
        badge: 'OFF',
      },
    ],
  },
  {
    icon: 'shield',
    title: 'DATA & PRIVACY',
    items: [
      {
        title: 'Location Permissions',
        sub: 'Always on — used for alerts',
        badge: 'ON',
      },
      { title: 'Privacy Settings', sub: 'Control what you share' },
      { title: 'Data Access', sub: 'Manage app data permissions' },
    ],
  },
  {
    icon: 'fileText',
    title: 'ACCOUNT ACTIVITY',
    items: [
      { title: 'Login Activity', sub: 'Last login: Today at 08:12' },
      { title: 'Report Activity', sub: '12 reports submitted' },
      { title: 'Audit History', sub: 'View all account actions' },
    ],
  },
];

export default function Security() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  // TODO: open a real screen for each item once those screens are designed
  const open = (item) =>
    Alert.alert(item.title, 'This screen is not available yet.');

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
            SECURITY <Text style={styles.titleRed}>& PRIVACY</Text>
          </Text>
        </View>

        <View style={styles.body}>
          {SECTIONS.map((section) => (
            <View key={section.title} style={styles.section}>
              <View style={styles.sectionHead}>
                <Icon name={section.icon} size={14} color={C.muted} />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>

              <View style={styles.group}>
                {section.items.map((item, i) => (
                  <Pressable
                    key={item.title}
                    onPress={() => open(item)}
                    style={[
                      styles.row,
                      i % 2 === 1 && { backgroundColor: C.rowAlt },
                      i < section.items.length - 1 && styles.rowDivider,
                    ]}
                  >
                    <View style={styles.rowText}>
                      <Text style={styles.rowTitle}>{item.title}</Text>
                      <Text style={styles.rowSub}>{item.sub}</Text>
                    </View>
                    {item.badge && (
                      <View
                        style={[
                          styles.badge,
                          item.badge === 'ON' ? styles.badgeOn : styles.badgeOff,
                        ]}
                      >
                        <Text
                          style={[
                            styles.badgeText,
                            { color: item.badge === 'ON' ? C.green : C.red },
                          ]}
                        >
                          {item.badge}
                        </Text>
                      </View>
                    )}
                    <Icon name="chevronRight" size={18} color={C.faint} />
                  </Pressable>
                ))}
              </View>
            </View>
          ))}

          {/* POPIA note */}
          <View style={styles.note}>
            <Icon name="shield" size={22} color={C.red} />
            <Text style={styles.noteText}>
              VINWatch SA is POPIA compliant. Your data is protected and only
              used for the purposes stated in our Privacy Policy.
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
    fontSize: 42,
    lineHeight: 46,
    color: C.text,
  },
  titleRed: { color: C.red },

  body: { paddingHorizontal: 20, paddingTop: 22 },

  section: { marginBottom: 22 },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionEmoji: { fontSize: 12 },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.muted,
  },

  group: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 20,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: C.border },
  rowText: { flex: 1 },
  rowTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: C.text,
  },
  rowSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    marginTop: 4,
  },

  badge: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  badgeOn: { backgroundColor: C.green + '1A', borderColor: C.green + '55' },
  badgeOff: { backgroundColor: C.red + '1A', borderColor: C.red + '55' },
  badgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1,
  },

  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    padding: 20,
  },
  noteText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: C.muted,
  },
});
