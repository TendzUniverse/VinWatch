import { ScrollView, View, Text, Pressable, useWindowDimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import Svg, { Rect, Line, Circle, Polygon } from 'react-native-svg';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#070A12',
  card: '#0F131D',
  cardBorder: '#1C2230',
  mapBg: '#0A0D16',
  block: '#0F1420',
  street: '#141A28',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  brightRed: '#FF2D1F',
  orange: '#F97316',
  yellow: '#FBBF24',
  pink: '#F43F5E',
};

// ---- Placeholder data: replace with real tracking data from the backend ----
const VEHICLE = { name: 'Toyota Corolla', vin: '****456' };
const SCORE = 87;
const SIGHTINGS_COUNT = 3;
const WINDOW_MINUTES = 65;

// Positions are fractions of the map area (0 to 1) because this is a schematic map
const POINTS = [
  { name: 'Sandton', time: '10:00', fx: 0.16, fy: 0.08, color: C.red },
  { name: 'Rosebank', time: '10:15', fx: 0.36, fy: 0.3, color: C.orange },
  { name: 'Parktown', time: '10:42', fx: 0.54, fy: 0.58, color: C.yellow },
  { name: 'Auckland Park', time: '11:05', fx: 0.68, fy: 0.8, color: C.brightRed, latest: true },
];

// Faint city blocks for the map background (x, y, width, height as fractions)
const BLOCKS = [
  [0.02, 0.0, 0.2, 0.16], [0.28, 0.02, 0.18, 0.12], [0.62, 0.0, 0.2, 0.14],
  [0.04, 0.3, 0.22, 0.2], [0.44, 0.34, 0.14, 0.14], [0.74, 0.26, 0.2, 0.18],
  [0.06, 0.62, 0.18, 0.2], [0.3, 0.7, 0.2, 0.16], [0.84, 0.58, 0.14, 0.22],
];

const LEGEND = [
  ['Incident', C.red],
  ['Previous', C.orange],
  ['Recent', C.yellow],
  ['Latest', C.brightRed],
];

const MAP_HEIGHT = 340;

export default function RecoveryIntelligence() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const W = width;
  const H = MAP_HEIGHT;
  const pts = POINTS.map((p) => ({ ...p, x: p.fx * W, y: p.fy * H }));
  const last = pts[pts.length - 1];

  // One arrowhead at the middle of each route segment
  const arrows = pts.slice(0, -1).map((a, i) => {
    const b = pts[i + 1];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const ux = (b.x - a.x) / len;
    const uy = (b.y - a.y) / len;
    const nx = -uy;
    const ny = ux;
    return [
      `${mx + ux * 7},${my + uy * 7}`,
      `${mx - ux * 5 + nx * 5},${my - uy * 5 + ny * 5}`,
      `${mx - ux * 5 - nx * 5},${my - uy * 5 - ny * 5}`,
    ].join(' ');
  });

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Top row */}
        <View style={styles.topRow}>
          <Pressable style={styles.back} onPress={() => router.back()}>
            <Icon name="chevronLeft" size={18} color={C.muted} />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <View style={styles.liveRow}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE TRACKING</Text>
          </View>
        </View>

        <Text style={styles.title}>
          RECOVERY <Text style={styles.titleRed}>INTELLIGENCE MAP</Text>
        </Text>

        {/* Active alert */}
        <View style={styles.alertCard}>
          <View style={styles.alertDot} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <Icon name="alert" size={12} color={C.red} />
              <Text style={[styles.alertLabel, { marginBottom: 0 }]}>ACTIVE VEHICLE ALERT</Text>
            </View>
            <Text style={styles.alertVehicle}>
              {VEHICLE.name} <Text style={styles.alertVin}>· VIN {VEHICLE.vin}</Text>
            </Text>
          </View>
        </View>

        {/* Last sighting + score */}
        <View style={styles.statRow}>
          <View style={styles.lastCard}>
            <Text style={styles.smallLabel}>LAST CONFIRMED SIGHTING</Text>
            <Text style={styles.lastText}>
              {last.time} · {last.name}
            </Text>
          </View>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreLabel}>SCORE</Text>
            <Text style={styles.scoreValue}>{SCORE}</Text>
          </View>
        </View>

        {/* Schematic map */}
        <View style={[styles.map, { height: H }]}>
          <Svg width={W} height={H}>
            <Rect x={0} y={0} width={W} height={H} fill={C.mapBg} />
            {/* Streets */}
            {[0.25, 0.5, 0.75].map((f) => (
              <Line key={`v${f}`} x1={f * W} y1={0} x2={f * W} y2={H} stroke={C.street} strokeWidth={3} />
            ))}
            {[0.33, 0.66].map((f) => (
              <Line key={`h${f}`} x1={0} y1={f * H} x2={W} y2={f * H} stroke={C.street} strokeWidth={3} />
            ))}
            {/* Blocks */}
            {BLOCKS.map(([fx, fy, fw, fh], i) => (
              <Rect
                key={i}
                x={fx * W}
                y={fy * H}
                width={fw * W}
                height={fh * H}
                rx={6}
                fill={C.block}
              />
            ))}

            {/* High priority zone */}
            <Circle
              cx={last.x}
              cy={last.y}
              r={52}
              fill={C.red}
              fillOpacity={0.12}
              stroke={C.red}
              strokeOpacity={0.6}
              strokeWidth={1.5}
              strokeDasharray="5 4"
            />

            {/* Route */}
            {pts.slice(0, -1).map((a, i) => (
              <Line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={pts[i + 1].x}
                y2={pts[i + 1].y}
                stroke={C.red}
                strokeWidth={2}
                strokeDasharray="6 5"
              />
            ))}
            {arrows.map((points, i) => (
              <Polygon key={i} points={points} fill={C.red} />
            ))}

            {/* Markers */}
            {pts.map((p) =>
              p.latest ? (
                <Circle key={p.name} cx={p.x} cy={p.y} r={22} fill={p.color} fillOpacity={0.25} />
              ) : null
            )}
            {pts.map((p) => (
              <Circle
                key={`${p.name}-ring`}
                cx={p.x}
                cy={p.y}
                r={p.latest ? 13 : 9}
                fill={C.mapBg}
                stroke={p.color}
                strokeWidth={2}
              />
            ))}
            {pts.map((p) => (
              <Circle key={`${p.name}-dot`} cx={p.x} cy={p.y} r={p.latest ? 6 : 4} fill={p.color} />
            ))}
          </Svg>

          {/* Place labels */}
          {pts.map((p) =>
            p.latest ? null : (
              <Text key={p.name} style={[styles.mapLabel, { left: p.x + 16, top: p.y - 7 }]}>
                {p.name.toUpperCase()}
              </Text>
            )
          )}
          <Text style={[styles.zoneLabel, { left: last.x - 70, top: last.y - 42 }]}>
            HIGH PRIORITY ZONE
          </Text>
          <Text style={[styles.zoneName, { left: last.x - 70, top: last.y + 26 }]}>
            AUCKLAND PARK
          </Text>

          {/* Legend */}
          <View style={styles.legend}>
            {LEGEND.map(([label, color]) => (
              <View key={label} style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: color }]} />
                <Text style={styles.legendText}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Intelligence panel */}
        <View style={styles.panel}>
          <View style={styles.panelTop}>
            <View>
              <Text style={styles.smallLabel}>RECOVERY INTELLIGENCE</Text>
              <View style={styles.zoneRow}>
                <Text style={styles.panelScore}>{SCORE}/100</Text>
                <View style={styles.zoneDot} />
                <Text style={styles.zoneText}>HIGH PRIORITY ZONE</Text>
              </View>
            </View>
            <Pressable
              style={styles.howBtn}
              onPress={() => router.push('/(official)/recovery-details')}
            >
              <Text style={styles.howText}>HOW?</Text>
            </Pressable>
          </View>

          <Text style={styles.panelBody}>
            {SIGHTINGS_COUNT} independent sightings detected in the last {WINDOW_MINUTES} minutes.
          </Text>
          <Text style={styles.panelNote}>
            Based on recent verified sightings, this area has a higher probability of current vehicle activity.
          </Text>

          {/* Movement pattern */}
          <View style={styles.pattern}>
            <Text style={styles.smallLabel}>MOVEMENT PATTERN</Text>
            <View style={styles.patternRow}>
              {pts.map((p, i) => (
                <View key={p.name} style={styles.patternItem}>
                  <Text
                    style={[
                      styles.patternName,
                      p.latest && { color: C.brightRed },
                    ]}
                  >
                    {p.name}
                  </Text>
                  {i < pts.length - 1 && (
                    <Icon name="arrowRight" size={13} color={C.red} />
                  )}
                </View>
              ))}
            </View>
          </View>

          <Pressable
            style={styles.viewBtn}
            onPress={() => router.push('/(official)/sightings')}
          >
            <Text style={styles.viewText}>VIEW SIGHTINGS</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingBottom: 30 },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  back: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  backText: { fontFamily: 'Inter_400Regular', fontSize: 14, color: C.muted },
  liveRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.red },
  liveText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    color: C.red,
  },

  title: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 34,
    lineHeight: 38,
    color: C.text,
    paddingHorizontal: 20,
    marginTop: 8,
    marginBottom: 18,
  },
  titleRed: { color: C.red },

  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginHorizontal: 20,
    backgroundColor: '#1F0D0F',
    borderWidth: 1,
    borderColor: C.red + '66',
    borderRadius: 18,
    padding: 18,
  },
  alertDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: C.red,
    shadowColor: C.red,
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  alertLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    letterSpacing: 1.5,
    color: C.red,
    marginBottom: 6,
  },
  alertVehicle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 24,
    color: C.text,
  },
  alertVin: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: C.muted,
  },

  statRow: {
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 18,
  },
  lastCard: {
    flex: 1,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.cardBorder,
    borderRadius: 18,
    padding: 16,
  },
  smallLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    letterSpacing: 1.6,
    color: C.faint,
  },
  lastText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    color: C.text,
    marginTop: 8,
  },
  scoreCard: {
    width: 96,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F0D0F',
    borderWidth: 1,
    borderColor: C.red + '66',
    borderRadius: 18,
  },
  scoreLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.5,
    color: C.red,
  },
  scoreValue: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 32,
    lineHeight: 34,
    color: C.red,
  },

  // Map
  map: { width: '100%', overflow: 'hidden' },
  mapLabel: {
    position: 'absolute',
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 12,
    letterSpacing: 1,
    color: '#C4C8CF',
  },
  zoneLabel: {
    position: 'absolute',
    width: 140,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 8,
    letterSpacing: 1.2,
    color: C.red,
  },
  zoneName: {
    position: 'absolute',
    width: 140,
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 9,
    letterSpacing: 1.2,
    color: C.red,
  },
  legend: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#0A0D16E6',
    borderWidth: 1,
    borderColor: C.cardBorder,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
  },
  legendRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  legendDot: { width: 12, height: 12, borderRadius: 6 },
  legendText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#D1D5DB',
  },

  // Panel
  panel: {
    backgroundColor: '#05070D',
    borderTopWidth: 1,
    borderTopColor: C.red + '55',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  panelTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  zoneRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8 },
  panelScore: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 34,
    lineHeight: 36,
    color: C.red,
  },
  zoneDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: C.pink,
  },
  zoneText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.4,
    color: C.red,
  },
  howBtn: {
    backgroundColor: '#1F0D0F',
    borderWidth: 1,
    borderColor: C.red + '66',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  howText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.2,
    color: C.red,
  },
  panelBody: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#D1D5DB',
    marginTop: 18,
  },
  panelNote: {
    fontFamily: 'Inter_400Regular',
    fontStyle: 'italic',
    fontSize: 13,
    lineHeight: 20,
    color: C.faint,
    marginTop: 10,
  },
  pattern: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.cardBorder,
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
  },
  patternRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  patternItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  patternName: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 18,
    color: '#C4C8CF',
  },
  viewBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 20,
    paddingVertical: 22,
    marginTop: 18,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  viewText: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    letterSpacing: 2,
    color: C.text,
  },
});
