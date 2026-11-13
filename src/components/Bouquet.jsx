import { useId } from 'react';
import { FlowerShape } from './Flower.jsx';

/* Hand-wrapped bouquet drawn in SVG. `look` holds the flower colours. */
const SPOTS = [
  { x: 100, y: 62, s: 0.78 },
  { x: 58, y: 86, s: 0.62 },
  { x: 142, y: 86, s: 0.62 },
  { x: 80, y: 40, s: 0.5 },
  { x: 122, y: 38, s: 0.5 },
];

export default function Bouquet({ look, wrap = '#e9c9a0', ribbon = '#c2255c' }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 200 230" role="img" aria-label={look.label} className="bouquet">
      {SPOTS.map((p, i) => (
        <path key={i} d={`M100 150 Q ${(100 + p.x) / 2} ${(150 + p.y) / 2 + 10} ${p.x} ${p.y}`} stroke="#4f7a52" strokeWidth="3" fill="none" strokeLinecap="round" />
      ))}
      <path d="M100 140 C 70 120, 40 130, 34 108 C 62 106, 88 116, 100 140Z" fill="#6b9a6e" />
      <path d="M100 140 C 130 120, 160 130, 166 108 C 138 106, 112 116, 100 140Z" fill="#5a8a5e" />
      <path d="M100 130 C 92 100, 80 96, 76 78 C 92 84, 100 104, 100 130Z" fill="#7fae82" />
      {SPOTS.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) scale(${p.s}) rotate(${i * 17})`}>
          <FlowerShape uid={`${id}${i}`} {...look} />
        </g>
      ))}
      <path d="M38 118 L162 118 L112 222 Q100 228 88 222 Z" fill={wrap} />
      <path d="M38 118 L100 150 L88 222 Z" fill="#000" opacity="0.07" />
      <path d="M38 118 L162 118 L100 150 Z" fill="#fff" opacity="0.35" />
      <path d="M82 156 L118 156 L114 170 L86 170 Z" fill={ribbon} />
      <path d="M100 163 C 82 150, 70 164, 80 172 C 88 176, 96 170, 100 163 C 104 170, 112 176, 120 172 C 130 164, 118 150, 100 163Z" fill={ribbon} />
    </svg>
  );
}
