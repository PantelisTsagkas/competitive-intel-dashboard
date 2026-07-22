/**
 * A tile-sized trend line. Deliberately not Recharts: these are 48x16px and sit
 * next to counters that tick every frame, so a full chart runtime would be a
 * poor trade. The report pages still use the Recharts wrappers.
 */
export function Sparkline({
  points,
  className,
  width = 48,
  height = 16,
}: {
  /** Values already normalised to 0-1. */
  points: number[];
  className?: string;
  width?: number;
  height?: number;
}) {
  if (points.length < 2) return null;

  const step = width / (points.length - 1);
  const path = points
    .map((value, i) => {
      const x = i * step;
      const y = height - value * (height - 2) - 1;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
