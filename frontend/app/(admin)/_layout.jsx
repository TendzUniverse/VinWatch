import React from 'react';
import { Stack } from 'expo-router';

export default function AdminLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0D0D0D' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="users/index" />
      <Stack.Screen name="users/user-details" />
      <Stack.Screen name="officials/index" />
      <Stack.Screen name="officials/official-details" />
      <Stack.Screen name="vehicles/index" />
      <Stack.Screen name="vehicles/vehicle-details" />
      <Stack.Screen name="reports/index" />
      <Stack.Screen name="reports/report-details" />
      <Stack.Screen name="sightings/index" />
      <Stack.Screen name="recovery-intelligence" />
      <Stack.Screen name="map" />
      <Stack.Screen name="vehicle-status" />
      <Stack.Screen name="report-protection" />
      <Stack.Screen name="statistics" />
      <Stack.Screen name="audit-logs" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="security" />
    </Stack>
  );
}


