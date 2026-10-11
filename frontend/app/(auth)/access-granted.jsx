import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AccessGrantedScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to user app layout / dashboard
    router.replace('/(user)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Wireframe Background Line */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine} />
      </View>

      <View style={styles.contentContainer}>
        {/* Radar Check Circle Badge */}
        <View style={styles.radarWrapper}>
          <View style={styles.radarRing3} />
          <View style={styles.radarRing2} />
          <View style={styles.radarRing1}>
            <Ionicons name="checkmark" size={28} color="#DC2626" />
          </View>
        </View>

        <Text style={styles.categoryLabel}>AUTHENTICATION COMPLETE</Text>

        <Text style={styles.mainTitleWhite}>ACCESS</Text>
        <Text style={styles.mainTitleRed}>GRANTED</Text>

        <Text style={styles.description}>Welcome back to VINWatch SA.</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
  },
  backgroundGraphics: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  diagonalLine: {
    position: 'absolute',
    top: '22%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#1E0E12',
    transform: [{ rotate: '-8deg' }],
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  radarWrapper: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  radarRing3: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#1E0E12',
  },
  radarRing2: {
    position: 'absolute',
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 1,
    borderColor: '#3D1419',
  },
  radarRing1: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#180B0D',
    borderWidth: 1.5,
    borderColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    color: '#3B82F6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 12,
  },
  mainTitleWhite: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 1,
  },
  mainTitleRed: {
    color: '#DC2626',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
  },
  description: {
    color: '#8E95A2',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 36,
  },
  primaryButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#E50914',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
});
