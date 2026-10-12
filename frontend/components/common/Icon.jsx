import * as Lucide from 'lucide-react-native';

// One place for every icon in the app. These are Lucide icons, the successor
// to the Feather set Member 2's user screens use, so the shapes match.
// Some Lucide icons were renamed over time, so each entry lists the new
// name first and the old name second; whichever exists is used.
const NAMES = {
  alert: ['TriangleAlert', 'AlertTriangle'],
  arrowRight: ['ArrowRight'],
  ban: ['Ban'],
  bell: ['Bell'],
  camera: ['Camera'],
  car: ['Car'],
  check: ['Check'],
  checkCircle: ['CircleCheck', 'CheckCircle', 'CheckCircle2'],
  chevronLeft: ['ChevronLeft'],
  chevronRight: ['ChevronRight'],
  clipboard: ['ClipboardList'],
  clipboardCheck: ['ClipboardCheck'],
  clock: ['Clock'],
  compass: ['Compass'],
  eye: ['Eye'],
  fileText: ['FileText'],
  help: ['CircleHelp', 'HelpCircle'],
  info: ['Info'],
  keyboard: ['Keyboard'],
  lock: ['Lock'],
  map: ['Map'],
  menu: ['Menu'],
  pin: ['MapPin'],
  scan: ['Scan'],
  settings: ['Settings'],
  shield: ['Shield'],
  shieldCheck: ['ShieldCheck'],
  star: ['Star'],
  user: ['User'],
  users: ['Users'],
  x: ['X'],
  zap: ['Zap'],
};

export default function Icon({
  name,
  size = 22,
  color = '#FFFFFF',
  strokeWidth = 2.2,
  style,
}) {
  const Component = (NAMES[name] || []).map((n) => Lucide[n]).find(Boolean);
  if (!Component) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <Component size={size} color={color} strokeWidth={strokeWidth} style={style} />;
}
