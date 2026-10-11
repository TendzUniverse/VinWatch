import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();

  const handlePress = () => {
    // Navigates only when tapped
    router.replace('/(auth)/welcome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.touchableArea}
        onPress={handlePress}
      >
        {/* Background Overlay */}
        <View style={styles.backgroundGraphics} pointerEvents="none">
          <View style={styles.diagonalLine1} />
          <View style={styles.diagonalLine2} />
          <View style={styles.diagonalLine3} />
        </View>

        {/* Center Content */}
        <View style={styles.contentContainer}>
          {/* Shield Emblem with Red Glow */}
          <View style={styles.shieldWrapper}>
            <View style={styles.glowEffect} />
            <Image
              source={require('../../assets/Glossy Red Shield Tech Emblem (1).png')}
              style={styles.shieldImage}
              resizeMode="contain"
            />
          </View>

          {/* Titles */}
          <Text style={styles.subHeader}>SOUTH AFRICAN</Text>
          <Text style={styles.mainTitle}>VINWatch</Text>
          <Text style={styles.saTitle}>S A</Text>

          {/* Divider Line with Tagline */}
          <View style={styles.dividerContainer}>
            <View style={styles.redGradientLineLeft} />
            <Text style={styles.tagline}>
              PROTECT <Text style={styles.dot}>•</Text> VERIFY <Text style={styles.dot}>•</Text> RECOVER
            </Text>
            <View style={styles.redGradientLineRight} />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.tapToContinue}>TAP TO CONTINUE</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
  },
  touchableArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundGraphics: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  diagonalLine1: {
    position: 'absolute',
    top: '18%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#1E0E12',
    transform: [{ rotate: '6deg' }],
  },
  diagonalLine2: {
    position: 'absolute',
    top: '42%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#16181C',
    transform: [{ rotate: '-22deg' }],
  },
  diagonalLine3: {
    position: 'absolute',
    bottom: '22%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#14161A',
    transform: [{ rotate: '32deg' }],
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  shieldWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  glowEffect: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#DC2626',
    opacity: 0.18,
  },
  shieldImage: {
    width: 120,
    height: 140,
  },
  subHeader: {
    color: '#DC2626',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 4,
    marginBottom: 2,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'center',
    lineHeight: 52,
  },
  saTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 8,
    marginTop: 2,
    marginBottom: 40,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  redGradientLineLeft: {
    width: 40,
    height: 2,
    backgroundColor: '#DC2626',
    marginRight: 10,
  },
  redGradientLineRight: {
    width: 40,
    height: 2,
    backgroundColor: '#DC2626',
    marginLeft: 10,
  },
  tagline: {
    color: '#D1D5DB',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
  },
  dot: {
    color: '#DC2626',
    fontSize: 10,
  },
  footerContainer: {
    paddingBottom: 35,
  },
  tapToContinue: {
    color: '#4B5563',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 3,
  },
});