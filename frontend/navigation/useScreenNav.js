import { Alert } from 'react-native';
import { useRouter } from 'expo-router';

// Member 2's screens call onNavigate(1), onNavigate(10) and so on.
// This table says which real screen each number means.
// Add a line here whenever a new number turns up.
const SCREEN_ROUTES = {
  1: '/(user)/home',
  2: '/(user)/vin/check',
  3: '/(user)/sightings/report-sighting',
  4: '/(user)/alerts',
  6: '/(user)/vehicles',
  10: '/(user)/profile',
  // 9: ???  (the menu row on the Security & Privacy screen, still to confirm)

  // Named targets, for places where a number was used twice
  report: '/(user)/reports/hijacking',
    history: '/(user)/reports/history',
};

export function useScreenNav() {
  const router = useRouter();

  return (target) => {
    const route = SCREEN_ROUTES[target];
    if (!route) {
      console.warn(`onNavigate(${target}) has no route yet. Add it to navigation/useScreenNav.js`);
      Alert.alert('Not connected yet', 'This button has no screen to open yet.');
      return;
    }
    router.navigate(route);
  };
}
