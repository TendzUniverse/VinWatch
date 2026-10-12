import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const validate = () => {
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    const cleanId = identifier.replace(/\s+/g, '');

    if (!identifier.trim() || (!emailRegex.test(identifier) && !saPhoneRegex.test(cleanId))) {
      newErrors.identifier = 'Enter a valid email address or SA phone number (+27...)';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = () => {
  if (!validate()) return;
  const result = signIn(identifier, password);
  if (!result.ok) {
    setErrors((prev) => ({ ...prev, password: result.error }));
    return;
  }
  router.replace('/(auth)/access-granted');
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B0D" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
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

          {/* Title Header */}
          <View style={styles.titleSection}>
            <Text style={styles.titleWhite}>WELCOME</Text>
            <Text style={styles.titleRed}>BACK</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>EMAIL / PHONE NUMBER</Text>
              <TextInput
                style={[styles.input, errors.identifier && styles.inputError]}
                placeholder="Enter your email or +27 number"
                placeholderTextColor="#4B5563"
                value={identifier}
                onChangeText={(text) => {
                  setIdentifier(text);
                  setErrors((prev) => ({ ...prev, identifier: null }));
                }}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.identifier && (
                <Text style={styles.errorText}>{errors.identifier}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>PASSWORD</Text>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Enter your password"
                placeholderTextColor="#4B5563"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setErrors((prev) => ({ ...prev, password: null }));
                }}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            {/* Forgot Password Link */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.primaryButton}
              onPress={handleSignIn}
            >
              <Text style={styles.primaryButtonText}>SIGN IN</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/sign-up')}>
                <Text style={styles.linkText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0B0D',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  header: {
    paddingTop: 12,
    marginBottom: 32,
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
  titleSection: {
    marginBottom: 36,
  },
  titleWhite: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0.5,
    lineHeight: 38,
  },
  titleRed: {
    color: '#DC2626',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0.5,
    lineHeight: 38,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#D1D5DB',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#16181C',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#262930',
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
    marginTop: 4,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 28,
  },
  forgotPasswordText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '700',
  },
  primaryButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#DC2626',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#DC2626',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#8E95A2',
    fontSize: 12,
  },
  linkText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '700',
  },
});