
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

export default function OnboardingScreen() {
  const router = useRouter();

  const handleNext = () => {
    // Navigate to sign-in or next onboarding step
    router.replace('/(auth)/privacy-policy');
  };

  const handleSkip = () => {
    router.replace('/(auth)/privacy-policy');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Wireframe Background Line */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine} />
      </View>

      {/* Header Skip Button */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>

      {/* Center Content */}
      <View style={styles.contentContainer}>
        {/* Shield Icon Box */}
        <View style={styles.iconContainer}>
          <Ionicons name="shield-checkmark-outline" size={48} color="#DC2626" />
        </View>

        {/* Section Label */}
        <Text style={styles.categoryLabel}>PROTECT</Text>

        {/* Main Title */}
        <Text style={styles.mainTitle}>Stay Protected</Text>

        {/* Description Body */}
        <Text style={styles.description}>
          Receive real-time alerts about vehicle crime happening near you. Know before danger reaches you.
        </Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerContainer}>
        {/* Pagination Indicators */}
        <View style={styles.paginationRow}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
        </View>

        {/* Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
    justifyContent: 'space-between',
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: '#4B5563',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 24,
    backgroundColor: '#14161B',
    borderWidth: 1,
    borderColor: '#262930',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  categoryLabel: {
    color: '#DC2626',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 4,
    marginBottom: 10,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    color: '#8E95A2',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '400',
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: 'center',
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 28,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#DC2626',
  },
  dotInactive: {
    width: 6,
    backgroundColor: '#262930',
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
    letterSpacing: 2,
  },
});