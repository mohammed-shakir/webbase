export type Field = {
    name: string
    label?: string
    type?: 'text' | 'email' | 'textarea' | 'password'
    placeholder?: string
    required?: boolean
    defaultValue?: string
  }
  
  export type FormProps = {
    fields: Field[]
    endpoint: string
    submitLabel?: string
    className?: string
    onSuccess?: () => void
    onError?: (error: string) => void
  }
  