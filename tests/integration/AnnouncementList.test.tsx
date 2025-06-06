import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import { AnnouncementList } from '@/components/widgets/AnnouncementList';

describe('AnnouncementList (integration)', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: '1', title: 'Hello', body: 'World', createdAt: new Date().toISOString() },
            { id: '2', title: 'Foo', body: 'Bar', createdAt: new Date().toISOString() },
          ]),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches and displays announcements', async () => {
    render(<AnnouncementList />);
    expect(await screen.findByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });
});
