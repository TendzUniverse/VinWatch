import { useRouter } from 'expo-router';
import VinScanner from '../../components/common/VinScanner';

export default function OfficialVinScanner() {
  const router = useRouter();
  const toCheck = () => router.replace('/(official)/check-vin');
  return (
    <VinScanner
      onBack={() => (router.canGoBack() ? router.back() : toCheck())}
      onManual={toCheck}
      onVin={(vin) =>
        router.replace({ pathname: '/(official)/vehicle-details', params: { vin } })
      }
    />
  );
}
