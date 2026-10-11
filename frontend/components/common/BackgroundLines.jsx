import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function BackgroundLines() {
  return (
    <View style={styles.backgroundGraphics} pointerEvents="none">
      <View style={styles.diagonalLine1} />
      <View style={styles.diagonalLine2} />
      <View style={styles.diagonalLine3} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundGraphics: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: 0,
  },
  diagonalLine1: {
    position: 'absolute',
    top: '15%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#1E0E12',
    transform: [{ rotate: '6deg' }],
  },
  diagonalLine2: {
    position: 'absolute',
    top: '45%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#16181C',
    transform: [{ rotate: '-20deg' }],
  },
  diagonalLine3: {
    position: 'absolute',
    bottom: '22%',
    left: -100,
    width: width * 2,
    height: 1,
    backgroundColor: '#14161A',
    transform: [{ rotate: '30deg' }],
  },
});