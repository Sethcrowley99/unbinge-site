type Props = {
  id: string;
  colors: string[];
  glow?: string;
};

export default function AnimatedOrb({ id, colors, glow }: Props) {
  const isRainbow = colors.length > 2;
  const light = colors[0];
  const dark = colors[colors.length - 1];
  const gradId = `orbGrad-${id}`;
  const clipId = `orbClip-${id}`;

  const blobs = isRainbow
    ? colors.map((c, i) => ({ color: c, slot: (i % 6) + 1 }))
    : [
        { color: light, slot: 1 },
        { color: dark, slot: 2 },
        { color: light, slot: 3 },
      ];

  const glowColor = glow ?? `${dark}66`;

  return (
    <div
      className={`stage-orb animated-orb${isRainbow ? " rainbow-orb" : ""}`}
      style={{
        boxShadow: `0 0 14px ${glowColor}, 0 6px 16px rgba(27, 77, 98, 0.18)`,
      }}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id={gradId} cx="30%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="25%" stopColor={light} />
            <stop offset="70%" stopColor={dark} />
            <stop offset="100%" stopColor={dark} stopOpacity="0.92" />
          </radialGradient>
          <clipPath id={clipId}>
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="50" fill={`url(#${gradId})`} />
        <g clipPath={`url(#${clipId})`} className="orb-blobs">
          {blobs.map((b, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r="22"
              fill={b.color}
              className={`orb-blob orb-blob-${b.slot}`}
            />
          ))}
        </g>
        <ellipse cx="32" cy="28" rx="18" ry="10" fill="#ffffff" opacity="0.22" />
      </svg>
    </div>
  );
}
