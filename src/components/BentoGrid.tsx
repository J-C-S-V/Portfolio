import type { ReactNode } from 'react';
import './BentoGrid.css';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  rowSpan?: number;
  colSpan?: number;
}

export const BentoItem = ({ 
  children, 
  className = '', 
  rowSpan = 1, 
  colSpan = 1 
}: BentoItemProps) => {
  return (
    <div 
      className={`bento-item ${className}`}
      style={{
        '--row-span': rowSpan,
        '--col-span': colSpan,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
