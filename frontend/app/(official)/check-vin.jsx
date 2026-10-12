import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from '../../components/common/Icon';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const C = {
  bg: '#141414',
  header: '#0B0B0B',
  card: '#1A1A1A',
  input: '#1F1F1F',
  border: '#242424',
  text: '#FFFFFF',
  muted: '#8A8F98',
  faint: '#4B5058',
  red: '#E50914',
  green: '#22C55E',
};

// A valid VIN is 17 characters: letters and digits, never I, O or Q
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/;

export default function CheckVin() {
  const router = useRouter();
  const [vin, setVin] = useState('');
  const [error, setError] = useState('');
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) return null;

  const onChange = (text) => {
    // Keep only letters and digits, in capitals
    setVin(text.replace(/[^a-zA-Z0-9]/g, '').toUpperCase());
    if (error) setError('');
  };

  const checkVehicle = () => {
    if (!VIN_PATTERN.test(vin)) {
      setError(
        vin.length === 0
          ? 'Enter a VIN number or scan one with your camera.'
          : 'A VIN has 17 letters and numbers, and never includes I, O or Q.'
      );
      return;
    }
    // TODO: look the VIN up through services/vehicleService.js
    router.push({ pathname: '/(official)/vehicle-details', params: { vin } });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            {/* Header */}
            <View style={styles.header}>
              <Pressable style={styles.back} onPress={() => router.back()}>
                <Icon name="chevronLeft" size={18} color={C.muted} />
                <Text style={styles.backText}>Back</Text>
              </Pressable>
              <Text style={styles.title}>CHECK BEFORE</Text>
              <Text style={[styles.title, styles.titleRed]}>YOU BUY</Text>
              <Text style={styles.subtitle}>
                Verify a vehicle before you buy or interact with it.
              </Text>
            </View>

            <View style={styles.body}>
              {/* VIN input */}
              <Text style={styles.label}>VIN NUMBER</Text>
              <TextInput
                value={vin}
                onChangeText={onChange}
                placeholder="ENTER VIN NUMBER"
                placeholderTextColor={C.muted}
                maxLength={17}
                autoCapitalize="characters"
                autoCorrect={false}
                style={styles.input}
              />
              {error ? (
                <Text style={styles.error}>{error}</Text>
              ) : (
                <Text style={styles.example}>Example: ABC123456789DE456</Text>
              )}

              {/* Divider */}
              <View style={styles.orRow}>
                <View style={styles.orLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.orLine} />
              </View>

              {/* Scan VIN */}
              <Pressable
                style={styles.scanCard}
                onPress={() => router.push('/(official)/vin-scanner')}
              >
                <View style={styles.scanIcon}>
                  <Icon name="scan" size={32} color={C.red} />
                </View>
                <View style={styles.scanText}>
                  <View style={styles.scanTitleRow}>
                    <Icon name="camera" size={18} color={C.red} />
                    <Text style={styles.scanTitle}>SCAN VIN</Text>
                  </View>
                  <Text style={styles.scanSub}>Use camera to scan VIN plate</Text>
                </View>
              </Pressable>

              {/* Info note */}
              <View style={styles.note}>
                <Icon name="shieldCheck" size={22} color={C.green} />
                <Text style={styles.noteText}>
                  VIN information is checked securely against national records.
                </Text>
              </View>
            </View>
          </View>

          {/* Check button */}
          <View style={styles.footer}>
            <Pressable style={styles.checkBtn} onPress={checkVehicle}>
              <Text style={styles.checkText}>CHECK VEHICLE</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.header },
  flex: { flex: 1, backgroundColor: C.bg },
  scroll: { flexGrow: 1, justifyContent: 'space-between' },

  header: {
    backgroundColor: C.header,
    paddingHorizontal: 20,
    paddingBottom: 22,
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
    fontSize: 48,
    lineHeight: 50,
    color: C.text,
  },
  titleRed: { color: C.red },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: C.muted,
    marginTop: 10,
  },

  body: { paddingHorizontal: 20, paddingTop: 28 },
  label: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 2,
    color: '#C4C8CF',
    marginBottom: 12,
  },
  input: {
    height: 80,
    backgroundColor: C.input,
    borderWidth: 2,
    borderColor: C.red,
    borderRadius: 22,
    textAlign: 'center',
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 24,
    letterSpacing: 3,
    color: C.text,
  },
  example: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: C.faint,
    textAlign: 'center',
    marginTop: 12,
  },
  error: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.red,
    textAlign: 'center',
    marginTop: 12,
  },

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 26,
  },
  orLine: { flex: 1, height: 1, backgroundColor: C.border },
  orText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    letterSpacing: 1.5,
    color: C.faint,
  },

  scanCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    backgroundColor: '#251413',
    borderWidth: 2,
    borderColor: C.red,
    borderRadius: 22,
    padding: 22,
  },
  scanIcon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: C.red + '30',
    borderWidth: 1,
    borderColor: C.red + '66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanText: { flex: 1 },
  scanTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  scanEmoji: { fontSize: 18 },
  scanTitle: {
    fontFamily: 'BebasNeue_400Regular',
    fontSize: 26,
    letterSpacing: 1,
    color: C.red,
  },
  scanSub: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: C.muted,
    marginTop: 4,
  },

  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 18,
    marginTop: 20,
  },
  noteText: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 20,
    color: C.muted,
  },

  footer: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 28 },
  checkBtn: {
    alignItems: 'center',
    backgroundColor: C.red,
    borderRadius: 20,
    paddingVertical: 22,
    shadowColor: C.red,
    shadowOpacity: 0.6,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  checkText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    letterSpacing: 1.5,
    color: C.text,
  },
});
