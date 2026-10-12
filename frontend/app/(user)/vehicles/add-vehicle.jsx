import { useScreenNav } from '../../../navigation/useScreenNav';
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect, Line, Polyline } from 'react-native-svg';
import { COLORS } from '../../../styles/theme';

export default function AddVehicleScreen() {
  const onNavigate = useScreenNav();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [colour, setColour] = useState('');
  const [reg, setReg] = useState('');
  const [vin, setVin] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate(6)}>
        <Text style={styles.backButtonText}>‹ Back</Text>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>ADD VEHICLE</Text>
        <Text style={styles.subtitle}>Register a vehicle to enable monitoring and alerts.</Text>
      </View>

      <Text style={styles.sectionHeader}>VEHICLE DETAILS</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>VEHICLE MAKE</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Toyota, BMW, VW"
          placeholderTextColor={COLORS.textMuted}
          value={make}
          onChangeText={setMake}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>VEHICLE MODEL</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Corolla, 3 Series, Polo"
          placeholderTextColor={COLORS.textMuted}
          value={model}
          onChangeText={setModel}
        />
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, { flex: 1, marginRight: 10 }]}>
          <Text style={styles.inputLabel}>YEAR</Text>
          <TextInput
            style={styles.textInput}
            placeholder="2024"
            placeholderTextColor={COLORS.textMuted}
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />
        </View>

        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text style={styles.inputLabel}>COLOUR</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. White"
            placeholderTextColor={COLORS.textMuted}
            value={colour}
            onChangeText={setColour}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>REGISTRATION NUMBER</Text>
        <TextInput
          style={styles.textInput}
          placeholder="ABC 123 GP"
          placeholderTextColor={COLORS.textMuted}
          value={reg}
          onChangeText={setReg}
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>VIN NUMBER</Text>
        <TextInput
          style={styles.vinInputBox}
          placeholder="ENTER VIN NUMBER"
          placeholderTextColor={COLORS.textMuted}
          value={vin}
          onChangeText={setVin}
          autoCapitalize="characters"
        />
      </View>

      <TouchableOpacity style={styles.scanButtonCard} onPress={() => onNavigate(3)}>
        <View style={styles.scanIconBox}>
          <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentRed} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></Path>
            <Circle cx="12" cy="13" r="4"></Circle>
          </Svg>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.scanButtonTitle}>SCAN VIN INSTEAD</Text>
          <Text style={styles.scanButtonSub}>Use camera to scan the VIN plate</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.securityInfoBox}>
        <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLORS.accentGreen} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
          <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></Path>
        </Svg>
        <Text style={styles.securityInfoText}>
          Your vehicle will be checked against the national database upon registration.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate(6)}>
        <Text style={styles.primaryBtnText}>REGISTER VEHICLE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.background },
  backButton: { marginBottom: 8 },
  backButtonText: { color: COLORS.textSecondary, fontSize: 14, fontWeight: '500' },
  headerContainer: { marginBottom: 20 },
  title: { color: COLORS.accentRed, fontSize: 22, fontWeight: '900', letterSpacing: 1 },
  subtitle: { color: COLORS.textSecondary, fontSize: 12, marginTop: 2 },
  sectionHeader: { color: COLORS.textMuted, fontSize: 10, fontWeight: 'bold', letterSpacing: 1, marginBottom: 10 },
  inputContainer: { marginBottom: 14 },
  rowContainer: { flexDirection: 'row' },
  inputLabel: { color: COLORS.textSecondary, fontSize: 10, fontWeight: 'bold', letterSpacing: 0.8, marginBottom: 6 },
  textInput: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, color: COLORS.textPrimary, fontSize: 13 },
  vinInputBox: { backgroundColor: COLORS.surface, borderColor: COLORS.accentRed, borderWidth: 1.5, borderRadius: 14, paddingVertical: 14, paddingHorizontal: 16, color: COLORS.textPrimary, fontSize: 14, fontWeight: 'bold', letterSpacing: 1, textAlign: 'center' },
  scanButtonCard: { backgroundColor: '#1E0E12', borderColor: 'rgba(255, 42, 66, 0.4)', borderWidth: 1, borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  scanIconBox: { width: 38, height: 38, borderRadius: 10, backgroundColor: 'rgba(255, 42, 66, 0.2)', borderWidth: 1, borderColor: COLORS.accentRed, justifyContent: 'center', alignItems: 'center' },
  scanButtonTitle: { color: COLORS.accentRed, fontSize: 12, fontWeight: '900', letterSpacing: 0.8 },
  scanButtonSub: { color: COLORS.textSecondary, fontSize: 11, marginTop: 2 },
  securityInfoBox: { backgroundColor: COLORS.surface, borderColor: COLORS.surfaceBorder, borderWidth: 1, borderRadius: 12, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  securityInfoText: { color: COLORS.textSecondary, fontSize: 12, flex: 1, lineHeight: 16 },
  primaryBtn: { backgroundColor: COLORS.accentRed, borderRadius: 14, paddingVertical: 16, alignItems: 'center', shadowColor: COLORS.accentRed, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, elevation: 6, marginBottom: 20 },
  primaryBtnText: { color: COLORS.textPrimary, fontWeight: '900', fontSize: 14, letterSpacing: 1 },
});
