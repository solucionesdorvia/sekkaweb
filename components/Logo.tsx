import { SekkaEmblem } from "./SekkaEmblem";

type Props = {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
  withFlankingRules?: boolean;
};

/**
 * SEKKA wordmark composition — replicates the package label:
 *   S E K [K-mirrored] A
 *   ——— [citrus emblem] ———
 *   DESHIDRATADOS ARTESANALES
 */
export function Logo({
  size = "md",
  showTagline = false,
  className,
  withFlankingRules = false,
}: Props) {
  const config = {
    sm: {
      emblem: 18,
      wordmark: "text-[1.05rem] tracking-[0.18em]",
      tagline: "text-[0.55rem] tracking-[0.4em]",
      gap: "gap-2",
      stroke: 1.1,
      ruleWidth: "w-10",
    },
    md: {
      emblem: 36,
      wordmark: "text-3xl md:text-4xl tracking-[0.18em]",
      tagline: "text-[0.7rem] tracking-[0.5em]",
      gap: "gap-4",
      stroke: 1.1,
      ruleWidth: "w-20",
    },
    lg: {
      emblem: 56,
      wordmark:
        "text-6xl md:text-7xl lg:text-[6rem] tracking-[0.16em] md:tracking-[0.18em]",
      tagline: "text-[0.7rem] md:text-xs tracking-[0.55em] md:tracking-[0.65em]",
      gap: "gap-7 md:gap-9",
      stroke: 1,
      ruleWidth: "w-28 md:w-36",
    },
  }[size];

  return (
    <div
      className={`flex flex-col items-center text-gold ${config.gap} ${
        className ?? ""
      }`}
    >
      <Wordmark className={`${config.wordmark} text-gold-light`} />

      {/* emblem with optional flanking rules */}
      <div className="flex items-center gap-4 md:gap-5">
        {withFlankingRules && (
          <span
            aria-hidden
            className={`block h-px ${config.ruleWidth} bg-gold/70`}
          />
        )}
        <SekkaEmblem
          size={config.emblem}
          strokeWidth={config.stroke}
          className="text-gold"
        />
        {withFlankingRules && (
          <span
            aria-hidden
            className={`block h-px ${config.ruleWidth} bg-gold/70`}
          />
        )}
      </div>

      {showTagline && (
        <span
          className={`caps text-gold/85 font-sans font-light ${config.tagline}`}
        >
          Deshidratados Artesanales
        </span>
      )}
    </div>
  );
}

/**
 * The actual wordmark — Cormorant Garamond light, with the second K horizontally
 * mirrored to match the package logotype. Each letter is wrapped so we can apply
 * scaleX(-1) without tilting the optical baseline.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-serif font-light leading-none select-none ${
        className ?? ""
      }`}
      aria-label="SEKKA"
    >
      <span aria-hidden className="inline-block">
        S
      </span>
      <span aria-hidden className="inline-block">
        E
      </span>
      <span aria-hidden className="inline-block">
        K
      </span>
      <span
        aria-hidden
        className="inline-block"
        style={{ transform: "scaleX(-1)" }}
      >
        K
      </span>
      <span aria-hidden className="inline-block">
        A
      </span>
    </span>
  );
}
