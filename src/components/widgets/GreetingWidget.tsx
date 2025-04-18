import React from 'react';

export type GreetingWidgetProps = {
  greeting?: string;
};

export const GreetingWidget: React.FC<GreetingWidgetProps> = ({
  greeting = 'Hello, world!',
}) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <p className="text-lg font-medium">{greeting}</p>
  </div>
);
