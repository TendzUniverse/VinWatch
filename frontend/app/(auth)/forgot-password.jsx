import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [resetInput, setResetInput] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = () => {
    const input = resetInput.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;

    if (!input) {
      setError('Please enter your email or phone number.');
      return;
    }

    const isEmail = input.includes('@');
    const isPhone = /^[0-9+ ]+$/.test(input);

    if (isEmail && !emailRegex.test(input)) {
      setError('Enter a valid email address containing "@".');
      return;
    }

    if (isPhone && !phoneRegex.test(input.replace(/\s+/g, ''))) {
      setError('Enter a valid SA phone number (e.g. +27 82 000 0000).');
      return;
    }

    if (!isEmail && !isPhone) {
      setError('Invalid format. Enter a valid email or phone number.');
      return;
    }

    setError('');
    // Navigate to password updated confirmation screen
    router.replace('/(auth)/password-updated');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      <View style={styles.contentContainer}>
        <Text style={styles.mainTitleWhite}>RESET</Text>
        <Text style={styles.mainTitleRed}>PASSWORD</Text>

        {/* Lock Shield Emblem Box */}
        <View style={styles.iconContainer}>
          <Ionicons name="lock-closed-outline" size={36} color="#DC2626" />
        </View>

        <Text style={styles.description}>
          Enter your email address or phone number and we'll send you a secure
          code to regain access.
        </Text>

        {/* Input Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>EMAIL / PHONE NUMBER</Text>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            placeholder="Enter your email or +27 number"
            placeholderTextColor="#4B5563"
            autoCapitalize="none"
            value={resetInput}
            onChangeText={(text) => {
              setResetInput(text);
              setError('');
            }}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* Send Code Action */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.primaryButton}
          onPress={handleSendCode}
        >
          <Text style={styles.buttonText}>SEND RESET CODE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => router.back()}
        >
          <Text style={styles.returnText}>Return to Sign In</Text>
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitleWhite: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
  },
  mainTitleRed: {
    color: '#DC2626',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 28,
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
    marginBottom: 24,
  },
  description: {
    color: '#8E95A2',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 12,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24,
  },
  inputLabel: {
    color: '#8E95A2',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#121418',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F242D',
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 14,
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 11,
    marginTop: 6,
  },
  primaryButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#E50914',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
  returnButton: {
    padding: 8,
  },
  returnText: {
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '600',
  },
});
