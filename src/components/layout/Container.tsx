import React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => (
  <div className={`container mx-auto px-4 ${className}`.trim()}>
    {children}
  </div>
);
