'use client';

import { useAnnouncements } from '@/hooks/useAnnouncements';

export function AnnouncementList() {
  const { items, loading, error } = useAnnouncements();

  if (loading) return <p className="text-gray-500 dark:text-gray-400">Loading announcements…</p>;
  if (error) return <p className="text-red-500">Failed to load: {error}</p>;

  return (
    <ul className="space-y-4">
      {items.map(a => (
        <li key={a.id} className="rounded-md bg-gray-100 p-4 shadow-sm dark:bg-gray-900">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{a.title}</h3>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{a.body}</p>
          <time className="mt-2 block text-xs text-gray-500 dark:text-gray-400">
            {new Date(a.createdAt).toLocaleString()}
          </time>
        </li>
      ))}
    </ul>
  );
}
