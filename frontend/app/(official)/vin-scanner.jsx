import { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  Easing,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#0A0D16',
  overlay: 'rgba(10, 13, 22, 0.55)',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  orange: '#F97316',
  circle: '#1A1D27',
  circleBorder: '#2A2E3A',
};

// A valid VIN is 17 characters: letters and digits, never I, O or Q
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/;

// VIN barcodes are usually Code 39, Code 128 or Data Matrix
const BARCODE_TYPES = ['code39', 'code128', 'datamatrix', 'qr', 'pdf417'];

const FRAME_HEIGHT = 150;
const ARM = 28;

// Turns raw barcode text into a VIN, or null if it isn't one
function extractVin(raw) {
  let value = String(raw).toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Some North American barcodes add a leading "I" in front of the VIN
  if (value.length === 18 && value.startsWith('I')) value = value.slice(1);
  return VIN_PATTERN.test(value) ? value : null;
}

export default function VinScanner() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const frameWidth = width - 64;

  const [permission, requestPermission] = useCameraPermissions();
  const [torch, setTorch] = useState(false);
  const [hint, setHint] = useState('Position the VIN inside the frame');
  const handled = useRef(false);
  const sweep = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  // The red scan line sweeps up and down inside the frame
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(sweep, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(sweep, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [sweep]);

  if (!fontsLoaded || !permission) return null;

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/(official)/check-vin');
  };

  const onScanned = ({ data }) => {
    if (handled.current) return;
    const vin = extractVin(data);
    if (!vin) {
      setHint("That barcode isn't a VIN. Try the VIN plate or door sticker.");
      return;
    }
    handled.current = true;
    router.replace({ pathname: '/(official)/vehicle-details', params: { vin } });
  };

  // Camera permission not granted yet
  if (!permission.granted) {
    return (
      <SafeAreaView style={[styles.safe, styles.center]}>
        <Icon name="camera" size={48} color={C.red} />
        <Text style={styles.permTitle}>CAMERA ACCESS NEEDED</Text>
        <Text style={styles.permText}>
          VINWatch needs your camera to scan the VIN barcode on a vehicle.
        </Text>
        <Pressable style={styles.permBtn} onPress={requestPermission}>
          <Text style={styles.permBtnText}>ALLOW CAMERA</Text>
        </Pressable>
        <Pressable style={styles.manualBtn} onPress={goBack}>
          <Text style={styles.manualText}>ENTER MANUALLY</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const lineY = sweep.interpolate({
    inputRange: [0, 1],
    outputRange: [6, FRAME_HEIGHT - 8],
  });

  return (
    <View style={styles.safe}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        enableTorch={torch}
        barcodeScannerSettings={{ barcodeTypes: BARCODE_TYPES }}
        onBarcodeScanned={onScanned}
      />
      <View style={styles.tint} pointerEvents="none" />

      <SafeAreaView style={styles.flex}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Pressable style={styles.circleBtn} onPress={goBack}>
            <Icon name="chevronLeft" size={22} color={C.text} />
          </Pressable>
          <Text style={styles.title}>VIN SCANNER</Text>
          <Pressable style={styles.circleBtn} onPress={() => setTorch((t) => !t)}>
            <Icon name="zap"
              size={20}
              color={torch ? '#FFFFFF' : C.orange} />
          </Pressable>
        </View>

        {/* Scan frame */}
        <View style={styles.middle}>
          <View style={[styles.frame, { width: frameWidth, height: FRAME_HEIGHT }]}>
            <View style={[styles.corner, styles.tl]} />
            <View style={[styles.corner, styles.tr]} />
            <View style={[styles.corner, styles.bl]} />
            <View style={[styles.corner, styles.br]} />
            <Animated.View
              style={[styles.scanLine, { transform: [{ translateY: lineY }] }]}
            />
            <Text style={styles.frameLabel}>VIN BARCODE AREA</Text>
          </View>
        </View>

        {/* Bottom */}
        <View style={styles.bottom}>
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>SCANNING VIN...</Text>
          </View>
          <Text style={styles.hint}>{hint}</Text>

          <Pressable style={styles.manualBtn} onPress={goBack}>
            <Icon name="keyboard" size={18} color={C.text} />
            <Text style={styles.manualText}>ENTER MANUALLY</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  flex: { flex: 1 },
  center: { alignItems: 'center', justifyContent: 'center', padding: 28 },
  tint: { ...StyleSheet.absoluteFillObject, backgroundColor: C.overlay },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  circleBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: C.circle,
    borderWidth: 1,
    borderColor: C.circleBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 26,
    letterSpacing: 1.5,
    color: C.text,
  },

  middle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  frame: { alignItems: 'center', justifyContent: 'center' },
  frameLabel: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 22,
    letterSpacing: 4,
    color: C.faint,
    marginTop: 30,
  },
  corner: {
    position: 'absolute',
    width: ARM,
    height: ARM,
    borderColor: C.red,
  },
  tl: { top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2 },
  tr: { top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2 },
  bl: { bottom: 0, left: 0, borderBottomWidth: 2, borderLeftWidth: 2 },
  br: { bottom: 0, right: 0, borderBottomWidth: 2, borderRightWidth: 2 },
  scanLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: C.red,
    shadowColor: C.red,
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
  },

  bottom: { paddingHorizontal: 28, paddingBottom: 24, alignItems: 'center' },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.red,
  },
  statusText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 2,
    color: C.red,
  },
  hint: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 26,
  },

  manualBtn: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: C.circleBorder,
    borderRadius: 20,
    paddingVertical: 22,
    marginTop: 4,
  },
  manualText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    letterSpacing: 1.5,
    color: C.text,
  },

  // Permission screen
  permTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 30,
    letterSpacing: 1,
    color: C.text,
    marginTop: 16,
  },
  permText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 22,
    color: C.muted,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },
  permBtn: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 12,
  },
  permBtnText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    letterSpacing: 1.5,
    color: C.text,
  },
});
