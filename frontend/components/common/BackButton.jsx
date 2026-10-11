import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton({ label = 'Back', onPress }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onPress || (() => router.back())}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Ionicons name="chevron-back" size={18} color="#D1D5DB" />
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 2,
  },
});