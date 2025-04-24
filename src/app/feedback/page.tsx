import Form from '@/components/widgets/Form';

export const metadata = {
  title: 'Feedback',
  description: 'Send us your feedback',
};

export default function FeedbackPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-semibold">Send Us Feedback</h1>

      <Form
        endpoint="/api/feedback"
        submitLabel="Send Feedback"
        fields={[
          { name: 'name', label: 'Your Name' },
          { name: 'email', label: 'Your Email', type: 'email', required: true },
          {
            name: 'message',
            label: 'Message',
            type: 'textarea',
            required: true,
          },
        ]}
      />
    </div>
  );
}
