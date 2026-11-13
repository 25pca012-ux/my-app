import { useId } from 'react';

/* A single flower drawn as SVG shapes, centred on (0,0). */
export function FlowerShape({ petals = 8, outer = '#f4a6c0', inner = '#e8588a', center = '#ffd166', dots = '#c98a00', round = false, uid = 'f' }) {
  const step = 360 / petals;
  const angles = Array.from({ length: petals }, (_, i) => i * step);
  const rx = round ? 9 : 11;
  const ry = round ? 17 : 24;
  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-p`} cx="50%" cy="85%" r="90%">
          <stop offset="0%" stopColor={inner} />
          <stop offset="100%" stopColor={outer} />
        </radialGradient>
      </defs>
      {angles.map((a) => (
        <ellipse key={'o' + a} cx="0" cy={-ry} rx={rx} ry={ry} fill={`url(#${uid}-p)`} transform={`rotate(${a})`} />
      ))}
      {angles.map((a) => (
        <ellipse key={'i' + a} cx="0" cy={-ry * 0.62} rx={rx * 0.62} ry={ry * 0.62} fill={inner} opacity="0.55" transform={`rotate(${a + step / 2})`} />
      ))}
      <circle r="9" fill={center} />
      <circle r="9" fill="none" stroke={dots} strokeWidth="1" opacity="0.35" />
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="0" cy="-4.5" r="1.1" fill={dots} transform={`rotate(${a})`} />
      ))}
    </g>
  );
}

export default function Flower({ size = 120, className = '', style, ...props }) {
  const uid = useId().replace(/:/g, '');
  return (
    <svg viewBox="-50 -50 100 100" width={size} height={size} className={className} style={style} aria-hidden="true">
      <FlowerShape uid={uid} {...props} />
    </svg>
  );
}
