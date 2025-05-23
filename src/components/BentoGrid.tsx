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
}

export const BentoItem = ({ 
  children,
  className = '',
}: BentoItemProps) => {
  return (
    <div 
      className={`bento-item ${className}`}
    >
      {children}
    </div>
  );
};
