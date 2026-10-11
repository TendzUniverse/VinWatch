import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ShieldBadge({ size = 80 }) {
  return (
    <View style={[styles.shieldWrapper, { width: size, height: size * 1.2 }]}>
      <View
        style={[
          styles.glowEffect,
          { width: size * 1.2, height: size * 1.2, borderRadius: (size * 1.2) / 2 },
        ]}
      />
      <Image
        source={require('../../assets/Glossy Red Shield Tech Emblem (1).png')}
        style={{ width: size, height: size * 1.18 }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shieldWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowEffect: {
    position: 'absolute',
    backgroundColor: '#DC2626',
    opacity: 0.2,
  },
});