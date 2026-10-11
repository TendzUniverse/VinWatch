import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function AuthHeader() {
  return (
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
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 10,
  },
  logoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoImage: {
    width: 22,
    height: 26,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },
});