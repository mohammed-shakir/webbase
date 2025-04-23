import { useEffect, useState } from 'react';
import { Announcement } from '@/types/announcement';

export function useAnnouncements() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/announcements');
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Announcement[] = await res.json();
        setItems(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { items, loading, error };
}
