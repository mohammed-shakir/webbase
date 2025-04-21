'use client';

import { useEffect, useState } from 'react';
import { Announcement } from '@/types/announcement';

export function AnnouncementList() {
  const [items, setItems] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch('/api/announcements')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  if (!items.length) return <p>Loading announcements…</p>;

  return (
    <ul className="space-y-4">
      {items.map(a => (
        <li key={a.id} className="p-4 bg-gray-900 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold">{a.title}</h3>
          <p className="mt-1 text-sm text-gray-100">{a.body}</p>
          <time className="block mt-2 text-xs text-gray-500">
            {new Date(a.createdAt).toLocaleString()}
          </time>
        </li>
      ))}
    </ul>
  );
}
