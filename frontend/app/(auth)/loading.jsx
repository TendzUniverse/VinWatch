import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function LoadingScreen() {
  const router = useRouter();
  const progressAnim = useRef(new Animated.Value(0)).current;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const listenerId = progressAnim.addListener(({ value }) => {
      setPercent(Math.floor(value));
    });

    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 3500,
      useNativeDriver: false,
    }).start(() => {
      router.replace('/(auth)/onboarding');
    });

    return () => {
      progressAnim.removeListener(listenerId);
    };
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const statusItems = [
    { label: 'GPS Location Active', active: percent >= 25 },
    { label: 'VIN Database Connected', active: percent >= 50 },
    { label: 'Community Network Online', active: percent >= 75 },
    { label: 'Alert System Ready', active: percent >= 95 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Wireframe Background Lines */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine1} />
        <View style={styles.diagonalLine2} />
        <View style={styles.diagonalLine3} />
      </View>

      <View style={styles.contentContainer}>
        {/* Shield Emblem */}
        <View style={styles.shieldWrapper}>
          <View style={styles.glowEffect} />
          <Image
            source={require('../../assets/Glossy Red Shield Tech Emblem (1).png')}
            style={styles.shieldImage}
            resizeMode="contain"
          />
        </View>

        {/* Title & Subtitle */}
        <Text style={styles.mainTitle}>VINWatch SA</Text>
        <Text style={styles.subtitle}>SECURING YOUR JOURNEY...</Text>

        {/* Dynamic Animated Progress Bar */}
        <View style={styles.progressSection}>
          <View style={styles.progressTrack}>
            <Animated.View style={[styles.fillBar, { width: progressWidth }]} />
          </View>
          <View style={styles.progressInfoRow}>
            <Text style={styles.progressLabel}>INITIALIZING</Text>
            <Text style={styles.progressPercent}>{percent}%</Text>
          </View>
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationRow}>
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotActive} />
          <View style={styles.dotInactive} />
          <View style={styles.dotInactive} />
        </View>

        {/* Status Checklist */}
        <View style={styles.checklistContainer}>
          {statusItems.map((item, index) => (
            <View key={index} style={styles.checkRow}>
              <View style={styles.radioOuter}>
                <View
                  style={[
                    styles.radioInner,
                    item.active ? styles.radioActive : styles.radioInactive,
                  ]}
                />
              </View>
              <Text
                style={[
                  styles.checkLabel,
                  item.active ? styles.textActive : styles.textInactive,
                ]}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer Skip */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => router.replace('/(auth)/onboarding')}
      >
        <Text style={styles.skipText}>SKIP →</Text>
      </TouchableOpacity>
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
  diagonalLine1: {
    position: 'absolute',
    top: '12%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#1E0E12',
    transform: [{ rotate: '5deg' }],
  },
  diagonalLine2: {
    position: 'absolute',
    top: '48%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#16181C',
    transform: [{ rotate: '-18deg' }],
  },
  diagonalLine3: {
    position: 'absolute',
    bottom: '25%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#14161A',
    transform: [{ rotate: '28deg' }],
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  shieldWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  glowEffect: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#DC2626',
    opacity: 0.2,
  },
  shieldImage: {
    width: 80,
    height: 95,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 6,
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 35,
  },
  progressSection: {
    width: '100%',
    marginBottom: 20,
  },
  progressTrack: {
    width: '100%',
    height: 3,
    backgroundColor: '#1F2937',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 8,
  },
  fillBar: {
    height: '100%',
    backgroundColor: '#DC2626',
  },
  progressInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    color: '#4B5563',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },
  progressPercent: {
    color: '#DC2626',
    fontSize: 11,
    fontWeight: '800',
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 35,
  },
  dotInactive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#374151',
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DC2626',
  },
  checklistContainer: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 16,
    paddingLeft: 10,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  radioActive: {
    backgroundColor: '#10B981',
  },
  radioInactive: {
    backgroundColor: 'transparent',
  },
  checkLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  textActive: {
    color: '#E5E7EB',
  },
  textInactive: {
    color: '#4B5563',
  },
  skipButton: {
    alignSelf: 'center',
    paddingBottom: 30,
  },
  skipText: {
    color: '#6B7280',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
