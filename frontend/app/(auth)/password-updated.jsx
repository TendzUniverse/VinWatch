
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

export default function PasswordUpdatedScreen() {
  const router = useRouter();

  const handleBackToSignIn = () => {
    router.replace('/(auth)/sign-in');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      {/* Wireframe Background Line */}
      <View style={styles.backgroundGraphics} pointerEvents="none">
        <View style={styles.diagonalLine} />
      </View>

      <View style={styles.contentContainer}>
        {/* Lock Shield Box */}
        <View style={styles.iconContainer}>
          <Ionicons name="lock-closed" size={42} color="#DC2626" />
        </View>

        {/* Header Text */}
        <Text style={styles.mainTitleWhite}>PASSWORD</Text>
        <Text style={styles.mainTitleRed}>UPDATED</Text>

        <Text style={styles.description}>
          Your new password has been successfully created. You can now sign in
          securely.
        </Text>

        {/* Back Action Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleBackToSignIn}
        >
          <Text style={styles.buttonText}>BACK TO SIGN IN</Text>
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
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: '#121418',
    borderWidth: 1,
    borderColor: '#262930',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  mainTitleWhite: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
  },
  mainTitleRed: {
    color: '#DC2626',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    color: '#8E95A2',
    fontSize: 13,
    lineHeight: 20,
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
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
});