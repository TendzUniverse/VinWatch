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
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* 1. Background Car Graphic (Reduced height so buttons fit) */}
      <View style={styles.carContainer}>
        <Image
          source={require('../../assets/images/car-bg.png')}
          style={styles.carImage}
          resizeMode="cover"
        />
        <View style={styles.topOverlay} />
        <View style={styles.bottomOverlay} />
      </View>

      {/* 2. Diagonal Wireframe Lines */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine} />
      </View>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Badge */}
          <View style={styles.header}>
            <View style={styles.logoBadge}>
              <Image
                source={require('../../assets/Glossy Red Shield Tech Emblem (1).png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
              <Text style={styles.logoText}>VINWatch SA</Text>
            </View>
          </View>

          {/* Main Content Area */}
          <View style={styles.contentContainer}>
            <View style={styles.categoryRow}>
              <View style={styles.redAccentBar} />
              <Text style={styles.categoryLabel}>COMMUNITY VEHICLE SECURITY</Text>
            </View>

            <Text style={styles.titleWhite}>YOUR VEHICLE.</Text>
            <Text style={styles.titleRed}>YOUR SECURITY.</Text>

            <Text style={styles.description}>
              Stay informed. Report faster. Help recover vehicles.
            </Text>

            {/* Navigation Action Buttons */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.primaryButton}
              onPress={() => router.push('/(auth)/sign-in')}
            >
              <Text style={styles.primaryButtonText}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.secondaryButton}
              onPress={() => router.push('/(auth)/sign-up')}
            >
              <Text style={styles.secondaryButtonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimerText}>
              By continuing you agree to our Terms of Service & Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  carContainer: {
    ...StyleSheet.absoluteFillObject,
    height: height * 0.48, // Reduced from 0.65 to leave room for buttons
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(10, 11, 13, 0.4)',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: '#0A0B0D',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  logoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoImage: {
    width: 24,
    height: 28,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
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
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  redAccentBar: {
    width: 28,
    height: 2,
    backgroundColor: '#DC2626',
    marginRight: 8,
  },
  categoryLabel: {
    color: '#DC2626',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2.5,
  },
  titleWhite: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0.5,
    lineHeight: 38,
  },
  titleRed: {
    color: '#DC2626',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0.5,
    lineHeight: 38,
    marginBottom: 10,
  },
  description: {
    color: '#8E95A2',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 24,
  },
  primaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#E50914',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#E50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#262930',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  disclaimerText: {
    color: '#4B5563',
    fontSize: 10,
    textAlign: 'center',
  },
});