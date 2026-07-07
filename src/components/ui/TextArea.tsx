import type { TextareaHTMLAttributes } from 'react'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export function TextArea({ id, label, ...props }: TextAreaProps) {
  const fieldId = id ?? props.name

  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      <textarea id={fieldId} {...props} />
    </label>
  )
}
