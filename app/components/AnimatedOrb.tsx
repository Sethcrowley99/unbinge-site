type Props = {
  id: string;
  colors: string[];
  glow?: string;
};

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function toHex(r: number, g: number, b: number): string {
  return `#${[r, g, b]
    .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function lighten(hex: string, amount: number): string {
  const [r, g, b] = parseHex(hex);
  return toHex(r + 255 * amount, g + 255 * amount, b + 255 * amount);
}

function mixBlack(hex: string, ratio: number): string {
  const [r, g, b] = parseHex(hex);
  const m = 1 - ratio;
  return toHex(r * m, g * m, b * m);
}

function toRgba(hex: string, a: number): string {
  const [r, g, b] = parseHex(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function brightness(hex: string): number {
  const [r, g, b] = parseHex(hex);
  return r + g + b;
}

export default function AnimatedOrb({ id, colors, glow }: Props) {
  const isMulti = colors.length >= 2;
  const first = colors[0];
  const last = colors[colors.length - 1];
  const mid = colors[Math.floor(colors.length / 2)];

  const lightStop = isMulti ? first : lighten(first, 0.28);
  const midStop = isMulti ? mid : first;
  const darkStop = mixBlack(last, 0.22);
  const terminator = mixBlack(last, 0.58);

  const blobColors = isMulti
    ? colors.slice(0, 6)
    : [lighten(first, 0.2), lighten(first, 0.35), lighten(first, 0.5)];

  const dominant = isMulti
    ? [...colors].sort((a, b) => brightness(b) - brightness(a))[0]
    : first;

  const glowShadow = glow ?? toRgba(dominant, 0.35);

  const gradId = `orbGrad-${id}`;
  const rimId = `orbRim-${id}`;
  const clipId = `orbClip-${id}`;

  return (
    <div
      className={`stage-orb animated-orb${isMulti ? " multi-orb" : ""}`}
      style={{
        boxShadow: `0 14px 22px -8px rgba(0, 0, 0, 0.38), 0 0 22px ${glowShadow}`,
      }}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id={gradId} cx="30%" cy="25%" r="85%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="20%" stopColor={lightStop} />
            <stop offset="55%" stopColor={midStop} />
            <stop offset="85%" stopColor={darkStop} />
            <stop offset="100%" stopColor={terminator} />
          </radialGradient>
          <radialGradient id={rimId} cx="72%" cy="72%" r="48%">
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="92%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <clipPath id={clipId}>
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>

        <circle cx="50" cy="50" r="50" fill={`url(#${gradId})`} />

        <g clipPath={`url(#${clipId})`} className="orb-blobs">
          {blobColors.map((c, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r="45"
              fill={c}
              opacity="0.6"
              className={`orb-blob orb-blob-${i + 1}`}
            />
          ))}
        </g>

        <circle cx="50" cy="50" r="50" fill={`url(#${rimId})`} />

        <ellipse cx="32" cy="22" rx="13" ry="8" fill="#ffffff" opacity="0.35" />
        <ellipse cx="32" cy="22" rx="8" ry="4.5" fill="#ffffff" opacity="0.9" />
      </svg>
    </div>
  );
}
