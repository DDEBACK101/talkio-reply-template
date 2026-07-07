import type { ChangeEvent } from 'react'
import type { ReplyInput, ReplyTemplate } from '../../types/template'
import { TextArea } from '../ui/TextArea'
import { TextField } from '../ui/TextField'

type ReplyComposerProps = {
  input: ReplyInput
  selectedTemplate: ReplyTemplate
  onInputChange: (input: ReplyInput) => void
}

export function ReplyComposer({
  input,
  selectedTemplate,
  onInputChange,
}: ReplyComposerProps) {
  const updateField =
    (field: keyof ReplyInput) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onInputChange({
        ...input,
        [field]: event.target.value,
      })
    }

  return (
    <section className="panel composer-panel">
      <div className="panel-heading">
        <p className="eyebrow">답변 생성</p>
        <h2>{selectedTemplate.title}</h2>
        <p>{selectedTemplate.description}</p>
      </div>
      <div className="form-grid">
        <TextField
          label="학습자명"
          name="learnerName"
          onChange={updateField('learnerName')}
          placeholder="예: 김토키"
          value={input.learnerName}
        />
        <TextArea
          label="상세 상황"
          name="details"
          onChange={updateField('details')}
          placeholder="문의 내용을 요약해서 입력하세요."
          rows={8}
          value={input.details}
        />
      </div>
    </section>
  )
}
