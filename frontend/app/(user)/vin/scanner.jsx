import { useRouter } from 'expo-router';
import VinScanner from '../../../components/common/VinScanner';
import { useScreenNav } from '../../../navigation/useScreenNav';

export default function VINScannerScreen() {
  const router = useRouter();
  const onNavigate = useScreenNav();
  return (
    <VinScanner
      onBack={() => onNavigate(1)}
      onManual={() => onNavigate('check')}
      onVin={(vin) =>
        router.replace({ pathname: '/(user)/vin/check', params: { vin } })
      }
    />
  );
}
