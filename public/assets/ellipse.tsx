import type React from 'react';

interface IEllipseProps {
  width: number;
  extraClasses?: string;
}
const Ellipse: React.FC<IEllipseProps> = ({ width, extraClasses }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${(width / 100) * 13.5}%`}
      viewBox="0 0 353 48"
      fill="none"
      className={extraClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="176.514" cy="23.853" rx="176.112" ry="23.853" fill="black" />
    </svg>
  );
};

export default Ellipse;
