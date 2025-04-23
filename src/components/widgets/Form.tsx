'use client';

import Button from '@/components/ui/Button';
import type { Field } from '@/types/form';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';

export default function Form({
  fields,
  endpoint,
  submitLabel = 'Submit',
  className = '',
  onSuccess,
  onError,
}: {
  fields: Field[];
  endpoint: string;
  submitLabel?: string;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}) {
  const { form, loading, error, success, handleChange, handleSubmit } = useFeedbackForm(endpoint);

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map(field => (
        <div key={field.name}>
          {field.label && <label className="block mb-1 font-medium">{field.label}</label>}
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.name] || ''}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
            />
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.name] || ''}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          )}
        </div>
      ))}

      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : submitLabel}
      </Button>

      {success && <p className="text-green-600 text-sm">Submitted successfully!</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
