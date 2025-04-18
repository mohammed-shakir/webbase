import Form from '@/components/widgets/Form'

export default function FeedbackPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Send Us Feedback</h1>

      <Form
        endpoint="/api/feedback"
        submitLabel="Send Feedback"
        fields={[
          { name: 'name', label: 'Your Name' },
          { name: 'email', label: 'Your Email', type: 'email', required: true },
          { name: 'message', label: 'Message', type: 'textarea', required: true },
        ]}
      />
    </div>
  )
}
