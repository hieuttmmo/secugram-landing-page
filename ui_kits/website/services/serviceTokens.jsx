const SG_SERVICE_TOKENS = Object.freeze({
  surface: '#fbfdfe',
  sectionMist: '#f9fafb',
  mintSurface: '#f0fdf9',
  architectureSurface: '#eff6ff',
  borderCloud: '#e5e7eb',
  headingNavy: '#1e3a5f',
  bodySlate: '#4b5563',
  mutedSlate: '#6b7280',
  mutedReadable: '#64748b',
  deepCommand: '#0d1b2e',
  commandInk: '#061726',
  securityTeal: '#0b6f66',
  securityTealHover: '#095e57',
  signalTeal: '#14b8a6',
  signalReadable: '#087568',
  signalSubtle: 'rgba(11,111,102,0.14)',
  alertBlue: '#1e6fa5',
  alertBlueReadable: '#2563eb',
  textOnDark: '#f8fbff',
  softTextOnDark: 'rgba(255,255,255,0.72)',
  mutedTextOnDark: 'rgba(255,255,255,0.64)',
});

const SG_SERVICE_ICON_ROOT = '../assets/service-icons/';

const SG_SERVICE_ICONS = Object.freeze({
  activity: '151_log_monitoring.png',
  alert: '041_warning.png',
  arrow: null,
  bug: '017_bug.png',
  check: '021_shield_check.png',
  clipboard: '053_checklist.png',
  clock: '093_time.png',
  cloud: '194_cloud_security.png',
  cpu: '177_server_security.png',
  database: '152_siem.png',
  eye: '130_visibility.png',
  globe: '198_threat_intelligence.png',
  layers: '058_structure.png',
  lock: '187_access_control.png',
  map: '199_security_playbook.png',
  network: '171_network_security.png',
  patch: '154_patch.png',
  repeat: '026_sync.png',
  search: '036_threat_scan.png',
  server: '177_server_security.png',
  shield: '001_shield.png',
  target: '037_target.png',
  terminal: '067_cli.png',
  users: '057_team.png',
  zap: '196_incident_response.png',
  zeroTrust: '200_zero_trust.png',
});

const SGServiceIcon = ({ name, size = 24, alt = '', style = {} }) => {
  const file = SG_SERVICE_ICONS[name];
  if (!file) {
    return (
      <span aria-hidden="true" style={{
        display: 'inline-flex',
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'currentColor',
        fontSize: size,
        lineHeight: 1,
        ...style,
      }}>→</span>
    );
  }

  return (
    <img
      src={SG_SERVICE_ICON_ROOT + file}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        borderRadius: Math.max(4, Math.round(size * 0.18)),
        ...style,
      }}
    />
  );
};
