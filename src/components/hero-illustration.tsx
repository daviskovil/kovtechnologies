import { Cpu, Code2, Cloud, Settings, ShieldCheck } from "lucide-react";

const NODES = [
  { x: 260, y: 96, icon: Cpu, color: "#1e22b4", ring: "#1e22b4", delay: 0 },
  { x: 428, y: 190, icon: Code2, color: "#ff5a00", ring: "#ff5a00", delay: 0.8 },
  { x: 392, y: 392, icon: Cloud, color: "#1e22b4", ring: "#1e22b4", delay: 1.6 },
  { x: 150, y: 404, icon: Settings, color: "#ff5a00", ring: "#ff5a00", delay: 2.4 },
  { x: 100, y: 196, icon: ShieldCheck, color: "#1e22b4", ring: "#1e22b4", delay: 3.2 },
];

/**
 * Original brand hero illustration — a dotted globe with the KOV mark at the hub
 * and orbiting hardware / software / solutions / services / security nodes.
 */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="h-full w-full"
      role="img"
      aria-label="KOV Technologies connecting hardware, software, solutions, services and security across a global network."
    >
      <defs>
        <radialGradient id="kov-glow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#c9ccff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c9ccff" stopOpacity="0" />
        </radialGradient>
        <pattern id="kov-dots" width="17" height="17" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#1e22b4" fillOpacity="0.16" />
        </pattern>
        <clipPath id="kov-globe">
          <circle cx="260" cy="260" r="196" />
        </clipPath>
        <filter id="kov-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1e22b4" floodOpacity="0.18" />
        </filter>
        <linearGradient id="kov-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e22b4" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* soft glow */}
      <circle cx="260" cy="230" r="240" fill="url(#kov-glow)" />

      {/* globe */}
      <g clipPath="url(#kov-globe)">
        <rect x="64" y="64" width="392" height="392" fill="url(#kov-dots)" />
        <g stroke="#1e22b4" strokeOpacity="0.14" fill="none" strokeWidth="1.2">
          <ellipse cx="260" cy="260" rx="196" ry="196" />
          <ellipse cx="260" cy="260" rx="130" ry="196" />
          <ellipse cx="260" cy="260" rx="66" ry="196" />
          <ellipse cx="260" cy="260" rx="196" ry="130" />
          <ellipse cx="260" cy="260" rx="196" ry="66" />
        </g>
      </g>
      <circle cx="260" cy="260" r="196" fill="none" stroke="#1e22b4" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* orbit rings */}
      <circle className="kov-pulse" cx="260" cy="260" r="150" fill="none" stroke="#1e22b4" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 7" />
      <circle cx="260" cy="260" r="212" fill="none" stroke="#ff5a00" strokeOpacity="0.18" strokeWidth="1.2" strokeDasharray="2 9" />

      {/* connecting lines */}
      <g stroke="url(#kov-line)" strokeOpacity="0.4" strokeWidth="1.6">
        {NODES.map((n, i) => (
          <line key={i} x1="260" y1="260" x2={n.x} y2={n.y} />
        ))}
      </g>
      {/* animated data-flow overlay on two links */}
      <g stroke="#ff5a00" strokeOpacity="0.8" strokeWidth="1.6" className="kov-flow">
        <line x1="260" y1="260" x2={NODES[1].x} y2={NODES[1].y} />
        <line x1="260" y1="260" x2={NODES[3].x} y2={NODES[3].y} />
      </g>

      {/* orbiting nodes */}
      {NODES.map((n, i) => {
        const Icon = n.icon;
        return (
          <g key={i} className="kov-float" style={{ animationDelay: `${n.delay}s` }}>
            <circle cx={n.x} cy={n.y} r="34" fill="#ffffff" filter="url(#kov-soft)" />
            <circle cx={n.x} cy={n.y} r="34" fill="none" stroke={n.ring} strokeOpacity="0.35" strokeWidth="1.5" />
            <g transform={`translate(${n.x - 15}, ${n.y - 15})`}>
              <Icon width={30} height={30} color={n.color} strokeWidth={1.9} />
            </g>
          </g>
        );
      })}

      {/* small accent particles */}
      <circle cx="440" cy="300" r="4" fill="#ff5a00" className="kov-float" style={{ animationDelay: "1.2s" }} />
      <circle cx="86" cy="320" r="3.5" fill="#1e22b4" className="kov-float" style={{ animationDelay: "2.1s" }} />
      <circle cx="330" cy="70" r="3" fill="#6366f1" className="kov-float" style={{ animationDelay: "0.4s" }} />

      {/* center hub with logo mark */}
      <circle cx="260" cy="260" r="54" fill="#ffffff" filter="url(#kov-soft)" />
      <circle cx="260" cy="260" r="54" fill="none" stroke="#1e22b4" strokeOpacity="0.15" strokeWidth="1.5" />
      <image href="/logo-mark.png" x="219" y="219" width="82" height="82" />
    </svg>
  );
}
