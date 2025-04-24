'use client';

import Button from '@/components/ui/Button';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';
import type { Field } from '@/types/form';

export default function Form({
  fields,
  endpoint,
  submitLabel = 'Submit',
  className = '',
}: {
  fields: Field[];
  endpoint: string;
  submitLabel?: string;
  className?: string;
}) {
  const { form, loading, error, success, handleChange, handleSubmit } = useFeedbackForm(endpoint);

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map(field => (
        <div key={field.name}>
          {field.label && (
            <label className="mb-1 block font-medium text-gray-800 dark:text-gray-200">
              {field.label}
            </label>
          )}
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.name] || ''}
              onChange={handleChange}
              rows={4}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.name] || ''}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            />
          )}
        </div>
      ))}

      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : submitLabel}
      </Button>

      {success && (
        <p className="text-sm text-green-600 dark:text-green-400">Submitted successfully!</p>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
