// Pencil-style diagram of the pitch as the game design document describes it:
// three lanes, one outfielder per lane and a keeper on each side.
const LANES = [
  { name: 'Top lane', y: 70 },
  { name: 'Middle lane', y: 160 },
  { name: 'Bottom lane', y: 250 },
]

export function Court() {
  return (
    <svg
      className="court"
      viewBox="0 0 600 320"
      role="img"
      aria-label="Diagram of the Typing Soccer pitch. Three horizontal lanes: top, middle and bottom. Each team has one outfield player in every lane and a goalkeeper in front of its goal."
    >
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <rect x="30" y="20" width="540" height="280" />
        <line x1="300" y1="20" x2="300" y2="300" />
        <circle cx="300" cy="160" r="34" />
        <rect x="30" y="90" width="70" height="140" />
        <rect x="500" y="90" width="70" height="140" />
        <rect x="14" y="130" width="16" height="60" />
        <rect x="570" y="130" width="16" height="60" />
        <g strokeDasharray="5 7" strokeWidth="1.5">
          <line x1="30" y1="115" x2="570" y2="115" />
          <line x1="30" y1="205" x2="570" y2="205" />
        </g>
      </g>
      {LANES.map((lane) => (
        <g key={lane.name}>
          <text x="112" y={lane.y - 26} className="court-label">
            {lane.name}
          </text>
          <circle cx="215" cy={lane.y} r="11" fill="currentColor" />
          <circle cx="385" cy={lane.y} r="11" fill="var(--sheet)" stroke="currentColor" strokeWidth="2.5" />
        </g>
      ))}
      <circle cx="62" cy="160" r="11" fill="currentColor" />
      <circle cx="538" cy="160" r="11" fill="var(--sheet)" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="238" cy="160" r="6" fill="var(--accent)" />
    </svg>
  )
}
