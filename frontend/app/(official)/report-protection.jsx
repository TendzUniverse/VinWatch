import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#0B0B0B',
  card: '#141414',
  border: '#242424',
  text: '#FFFFFF',
  muted: '#8A8F98',
  red: '#E50914',
  yellow: '#FBBF24',
  blue: '#38BDF8',
  green: '#22C55E',
};

const CONTROLS = [
  {
    icon: 'ban',
    title: 'REPORT LIMITS',
    color: C.red,
    body: 'Users may only submit a limited number of reports within a set time period to help prevent spam and misuse.',
  },
  {
    icon: 'clipboardCheck',
    title: 'REPORT REVIEW',
    color: C.yellow,
    body: 'Reports may be held under review before verification. Unverified reports are clearly labelled in the system.',
  },
  {
    icon: 'fileText',
    title: 'AUDIT LOGS',
    color: C.blue,
    body: 'All important actions — including report submissions, verifications, and rejections — are recorded for accountability.',
  },
  {
    icon: 'shield',
    title: 'VERIFIED OFFICIALS',
    color: C.green,
    body: 'Only authorised officials with verified accounts can confirm, reject, or escalate vehicle reports in the database.',
  },
];

export default function ReportProtection() {
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
          <Icon name="chevronLeft" size={18} color={C.muted} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>

        {/* Title */}
        <View style={styles.titleRow}>
          <Icon name="shieldCheck" size={34} color={C.red} />
          <Text style={styles.title}>
            REPORT <Text style={styles.titleRed}>PROTECTION</Text>
          </Text>
        </View>

        {/* Intro */}
        <View style={styles.intro}>
          <Text style={styles.introText}>
            VINWatch SA uses security controls to help reduce false reports and
            misuse of the community reporting system.
          </Text>
        </View>

        {/* Controls */}
        {CONTROLS.map((item) => (
          <View key={item.title} style={styles.card}>
            <View
              style={[
                styles.iconBox,
                {
                  backgroundColor: item.color + '22',
                  borderColor: item.color + '44',
                },
              ]}
            >
              <Icon name={item.icon} size={24} color={item.color} />
            </View>
            <View style={styles.cardText}>
              <Text style={[styles.cardTitle, { color: item.color }]}>
                {item.title}
              </Text>
              <Text style={styles.cardBody}>{item.body}</Text>
            </View>
          </View>
        ))}

        {/* Footer note */}
        <View style={styles.note}>
          <Icon name="info"
            size={20}
            color={C.blue}
            style={styles.noteIcon} />
          <Text style={styles.noteText}>
            These controls work together to keep the VINWatch SA database
            accurate and trustworthy for the community and law enforcement.
          </Text>
        </View>

        {/* Return button */}
        <Pressable
          style={styles.returnBtn}
          onPress={() => router.replace('/(official)/dashboard')}
        >
          <Text style={styles.returnText}>RETURN TO DASHBOARD</Text>
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

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 42,
    lineHeight: 46,
    color: C.text,
  },
  titleRed: { color: C.red },

  intro: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.red + '44',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  introText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: '#D1D5DB',
  },

  card: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: { fontSize: 24 },
  cardText: { flex: 1 },
  cardTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    letterSpacing: 1,
    marginBottom: 6,
  },
  cardBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: C.muted,
  },

  note: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
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

  returnBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 18,
    paddingVertical: 20,
    marginTop: 18,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  returnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    letterSpacing: 1.5,
    color: C.text,
  },
});
