import { AnnouncementList } from '@/components/widgets/AnnouncementList';

export const metadata = {
  title: 'Announcements',
  description: 'View the latest announcements',
};

export default function AnnouncementsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Announcements</h1>
      <AnnouncementList />
    </section>
  );
}
