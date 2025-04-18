'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface InteractiveSectionProps {
  greeting: string;
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({ greeting }) => {
  return (
    <Container className="flex flex-col items-center space-y-6">
      <Button onClick={() => alert(`Greeting: ${greeting}`)}>
        Show Greeting
      </Button>
    </Container>
  );
};

export default InteractiveSection;
