import { useState } from 'react';
import { ScrollView, View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

// ---- Placeholder data: replace with the report passed in from the backend ----
const REPORT = {
  vehicle: 'Toyota Corolla',
  vin: '****456',
  type: 'Stolen Vehicle',
  location: 'Johannesburg, GP',
  submitted: '10 minutes ago',
  submitter: 'Verified User',
  previousReports: 0,
  notes:
    'Vehicle was taken at gunpoint outside Sandton City. Perpetrators fled south on West Street. Vehicle was running with keys inside.',
};

const C = {
  bg: '#0B0B0B',
  card: '#141414',
  rowAlt: '#191919',
  border: '#242424',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  yellow: '#FBBF24',
  green: '#22C55E',
};

const STATUS = {
  review: { label: 'UNDER REVIEW', color: C.yellow },
  verified: { label: 'VERIFIED', color: C.green },
  rejected: { label: 'REJECTED', color: C.red },
};

export default function ReportVerification() {
  const router = useRouter();
  const [status, setStatus] = useState('review');
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const decided = status !== 'review';
  const s = STATUS[status];

  // Ask for confirmation first, because this action is logged for audit
  const decide = (result) => {
    const verifying = result === 'verified';
    Alert.alert(
      verifying ? 'Verify this report?' : 'Reject this report?',
      verifying
        ? 'The report will be marked as confirmed. This action is logged.'
        : 'The report will be flagged as invalid. This action is logged.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: verifying ? 'Verify' : 'Reject',
          style: verifying ? 'default' : 'destructive',
          onPress: () => {
            // TODO: send the decision to the backend (services/reportService.js)
            setStatus(result);
          },
        },
      ]
    );
  };

  const rows = [
    ['VEHICLE', REPORT.vehicle],
    ['VIN', REPORT.vin],
    ['REPORT TYPE', REPORT.type],
    ['LOCATION', REPORT.location],
    ['SUBMITTED', REPORT.submitted],
    ['SUBMITTER', REPORT.submitter],
    ['PREVIOUS REPORTS', String(REPORT.previousReports)],
  ];

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
          <View style={styles.titleBar} />
          <Text style={styles.title}>
            VERIFY <Text style={styles.titleRed}>REPORT</Text>
          </Text>
        </View>

        {/* Status pill */}
        <View
          style={[
            styles.pill,
            { borderColor: s.color + '66', backgroundColor: s.color + '1A' },
          ]}
        >
          <View style={[styles.pillDot, { backgroundColor: s.color }]} />
          <Text style={[styles.pillText, { color: s.color }]}>{s.label}</Text>
        </View>

        {/* Details table */}
        <View style={styles.table}>
          {rows.map(([label, value], i) => (
            <View
              key={label}
              style={[styles.row, i % 2 === 1 && { backgroundColor: C.rowAlt }]}
            >
              <Text style={styles.rowLabel}>{label}</Text>
              <Text style={styles.rowValue}>{value}</Text>
            </View>
          ))}
        </View>

        {/* Notes */}
        <View style={styles.notes}>
          <Text style={styles.rowLabel}>SUBMITTER NOTES</Text>
          <Text style={styles.notesText}>{REPORT.notes}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable
            disabled={decided}
            onPress={() => decide('verified')}
            style={[
              styles.actionBtn,
              styles.verifyBtn,
              decided && styles.disabled,
            ]}
          >
            <View style={styles.actionTop}>
              <Icon name="check" size={24} color={C.green} />
              <Text style={[styles.actionTitle, { color: C.green }]}>VERIFY</Text>
            </View>
            <Text style={[styles.actionSub, { color: C.green }]}>
              Mark as confirmed
            </Text>
          </Pressable>

          <Pressable
            disabled={decided}
            onPress={() => decide('rejected')}
            style={[
              styles.actionBtn,
              styles.rejectBtn,
              decided && styles.disabled,
            ]}
          >
            <View style={styles.actionTop}>
              <Icon name="x" size={24} color={C.red} />
              <Text style={[styles.actionTitle, { color: C.red }]}>REJECT</Text>
            </View>
            <Text style={[styles.actionSub, { color: C.red }]}>
              Flag as invalid
            </Text>
          </Pressable>
        </View>

        {/* Audit note */}
        <View style={styles.audit}>
          <Icon name="shield" size={20} color="#38BDF8" />
          <Text style={styles.auditText}>
            All verification actions are logged for audit purposes.
          </Text>
        </View>
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

  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  titleBar: { width: 4, height: 30, backgroundColor: C.red },
  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 46,
    lineHeight: 50,
    color: C.text,
  },
  titleRed: { color: C.red },

  pill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 12,
    marginBottom: 20,
  },
  pillDot: { width: 8, height: 8, borderRadius: 4 },
  pillText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
  },

  table: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 17,
  },
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

  notes: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 18,
    padding: 18,
    marginTop: 14,
  },
  notesText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 23,
    color: C.muted,
    marginTop: 10,
  },

  actions: { flexDirection: 'row', gap: 14, marginTop: 18 },
  actionBtn: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 20,
  },
  verifyBtn: {
    backgroundColor: C.green + '14',
    borderColor: C.green + '66',
    shadowColor: C.green,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },
  rejectBtn: {
    backgroundColor: C.red + '14',
    borderColor: C.red + '66',
    shadowColor: C.red,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 4,
  },
  disabled: { opacity: 0.35 },
  actionTop: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  actionTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 28,
    letterSpacing: 1,
  },
  actionSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    marginTop: 4,
  },

  audit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
  },
  auditIcon: { fontSize: 20 },
  auditText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
  },
});
