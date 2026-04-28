type Props = {
  size?: number;
  className?: string;
  strokeWidth?: number;
  withRules?: boolean;
};

/**
 * Citrus cross-section — matches the SEKKA package emblem.
 * Single thin ring, eight radiating segments with vesicle wedges, central pith.
 * Optional flanking horizontal rules ("—— [emblem] ——") for the package layout.
 */
export function SekkaEmblem({
  size = 64,
  className,
  strokeWidth = 1,
  withRules = false,
}: Props) {
  const ringR = 30;
  const innerR = 26;
  const segments = 8;

  if (withRules) {
    return (
      <svg
        width={size * 4}
        height={size}
        viewBox="0 0 400 100"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className={className}
        aria-hidden
      >
        <line x1="0" y1="50" x2="148" y2="50" opacity="0.7" />
        <line x1="252" y1="50" x2="400" y2="50" opacity="0.7" />
        <g transform="translate(150 0)">
          <Citrus
            ringR={ringR}
            innerR={innerR}
            segments={segments}
            strokeWidth={strokeWidth}
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <Citrus
        ringR={ringR}
        innerR={innerR}
        segments={segments}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

function Citrus({
  ringR,
  innerR,
  segments,
  strokeWidth,
}: {
  ringR: number;
  innerR: number;
  segments: number;
  strokeWidth: number;
}) {
  return (
    <g>
      {/* outer rind */}
      <circle cx="50" cy="50" r={ringR} />
      {/* faint inner pith */}
      <circle cx="50" cy="50" r={innerR} opacity="0.45" />

      {/* radial segment dividers */}
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i * 2 * Math.PI) / segments;
        const x = 50 + Math.cos(angle) * innerR;
        const y = 50 + Math.sin(angle) * innerR;
        return <line key={`spoke-${i}`} x1="50" y1="50" x2={x} y2={y} />;
      })}

      {/* small vesicle wedges nesting inside each segment */}
      {Array.from({ length: segments }).map((_, i) => {
        const a = ((i + 0.5) * 2 * Math.PI) / segments;
        const r1 = innerR - 4;
        const r2 = innerR - 11;
        const x1 = 50 + Math.cos(a) * r1;
        const y1 = 50 + Math.sin(a) * r1;
        const x2 = 50 + Math.cos(a) * r2;
        const y2 = 50 + Math.sin(a) * r2;
        return (
          <ellipse
            key={`wedge-${i}`}
            cx={(x1 + x2) / 2}
            cy={(y1 + y2) / 2}
            rx="2"
            ry="3.5"
            transform={`rotate(${(a * 180) / Math.PI + 90} ${
              (x1 + x2) / 2
            } ${(y1 + y2) / 2})`}
            opacity="0.65"
            strokeWidth={strokeWidth * 0.7}
          />
        );
      })}

      {/* tiny central seed */}
      <circle cx="50" cy="50" r="1.4" fill="currentColor" stroke="none" />
    </g>
  );
}
