import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function AccountCreatedScreen() {
  const router = useRouter();

  const handleContinue = () => {
    // Navigate into the main user app flow
    router.replace('/(user)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Wireframe Background Line Overlay */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine} />
      </View>

      <View style={styles.contentContainer}>
        {/* Shield Emblem with Glow */}
        <View style={styles.shieldWrapper}>
          <View style={styles.glowEffect} />
          <Image
            source={require('../../assets/Glossy Red Shield Tech Emblem (1).png')}
            style={styles.shieldImage}
            resizeMode="contain"
          />
        </View>

        {/* Success Title */}
        <Text style={styles.mainTitle}>YOU'RE IN.</Text>

        {/* Subtitle Description */}
        <Text style={styles.description}>
          Your VINWatch SA account has been created successfully. Welcome to the
          network.
        </Text>

        {/* Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>CONTINUE TO APP</Text>
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
    top: '25%',
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
  shieldWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifycontent: 'center',
    marginBottom: 28,
  },
  glowEffect: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DC2626',
    opacity: 0.22,
  },
  shieldImage: {
    width: 90,
    height: 110,
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: '#8E95A2',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 36,
    paddingHorizontal: 10,
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
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
});
