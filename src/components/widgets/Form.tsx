'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import type { FormProps } from '@/types/form';

export default function Form({
  fields,
  endpoint,
  submitLabel = 'Submit',
  className = '',
  onSuccess,
  onError,
}: FormProps) {
  const initialState = fields.reduce(
    (acc, field) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        onError?.(data.error || 'Submission failed');
      } else {
        setSuccess(true);
        onSuccess?.();
        setForm(initialState);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      const msg = 'Unexpected error';
      setError(msg);
      onError?.(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map(field => {
        const shared = {
          name: field.name,
          placeholder: field.placeholder,
          required: field.required,
          value: form[field.name],
          onChange: handleChange,
          className: 'w-full border rounded px-3 py-2',
        };

        return (
          <div key={field.name}>
            {field.label && <label className="block mb-1 font-medium">{field.label}</label>}
            {field.type === 'textarea' ? (
              <textarea {...shared} rows={4} />
            ) : (
              <input type={field.type || 'text'} {...shared} />
            )}
          </div>
        );
      })}

      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : submitLabel}
      </Button>

      {success && <p className="text-green-600 text-sm">Submitted successfully!</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </form>
  );
}
