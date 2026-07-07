import { useEffect, useMemo, useState } from 'react'
import type { ReplyTemplate, TemplateDraft } from '../../types/template'
import { Button } from '../ui/Button'
import { TextArea } from '../ui/TextArea'
import { TextField } from '../ui/TextField'

type TemplateManagerProps = {
  editingTemplateId: string | null
  userTemplates: ReplyTemplate[]
  onAddTemplate: (draft: TemplateDraft) => ReplyTemplate
  onCancelEdit: () => void
  onDeleteTemplate: (templateId: string) => void
  onEditTemplate: (templateId: string) => void
  onSelectTemplate: (templateId: string) => void
  onUpdateTemplate: (templateId: string, draft: TemplateDraft) => void
}

const emptyDraft: TemplateDraft = {
  title: '',
  category: '',
  description: '',
  subject: '',
  body: '',
}

export function TemplateManager({
  editingTemplateId,
  userTemplates,
  onAddTemplate,
  onCancelEdit,
  onDeleteTemplate,
  onEditTemplate,
  onSelectTemplate,
  onUpdateTemplate,
}: TemplateManagerProps) {
  const editingTemplate = useMemo(
    () =>
      editingTemplateId
        ? userTemplates.find((template) => template.id === editingTemplateId)
        : undefined,
    [editingTemplateId, userTemplates],
  )
  const [draft, setDraft] = useState<TemplateDraft>(emptyDraft)

  useEffect(() => {
    setDraft(
      editingTemplate
        ? {
            title: editingTemplate.title,
            category: editingTemplate.category,
            description: editingTemplate.description,
            subject: editingTemplate.subject,
            body: editingTemplate.body,
          }
        : emptyDraft,
    )
  }, [editingTemplate])

  const updateDraft =
    (field: keyof TemplateDraft) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setDraft((current) => ({
        ...current,
        [field]: event.target.value,
      }))
    }

  const submitTemplate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const cleanDraft = {
      title: draft.title.trim(),
      category: draft.category.trim(),
      description: draft.description.trim(),
      subject: draft.subject.trim(),
      body: draft.body.trim(),
    }

    if (Object.values(cleanDraft).some((value) => value.length === 0)) {
      return
    }

    if (editingTemplate) {
      onUpdateTemplate(editingTemplate.id, cleanDraft)
      onCancelEdit()
      onSelectTemplate(editingTemplate.id)
      return
    }

    const template = onAddTemplate(cleanDraft)
    setDraft(emptyDraft)
    onSelectTemplate(template.id)
  }

  return (
    <section className="panel manager-panel">
      <div className="panel-heading">
        <p className="eyebrow">사용자 템플릿</p>
        <h2>{editingTemplate ? '템플릿 수정' : '템플릿 추가'}</h2>
      </div>

      <form className="manager-form" onSubmit={submitTemplate}>
        <div className="form-row">
          <TextField
            label="템플릿명"
            name="templateTitle"
            onChange={updateDraft('title')}
            placeholder="예: 결제 확인 요청"
            value={draft.title}
          />
          <TextField
            label="카테고리"
            name="templateCategory"
            onChange={updateDraft('category')}
            placeholder="예: 결제"
            value={draft.category}
          />
        </div>
        <TextField
          label="설명"
          name="templateDescription"
          onChange={updateDraft('description')}
          placeholder="목록에서 보일 짧은 설명"
          value={draft.description}
        />
        <TextField
          label="메일 제목"
          name="templateSubject"
          onChange={updateDraft('subject')}
          placeholder="[Talkio] {learnerName}님 문의 답변드립니다"
          value={draft.subject}
        />
        <TextArea
          label="메일 본문"
          name="templateBody"
          onChange={updateDraft('body')}
          placeholder="{learnerName}, {details} 토큰을 사용할 수 있습니다."
          rows={9}
          value={draft.body}
        />
        <div className="form-actions">
          <Button type="submit" variant="primary">
            {editingTemplate ? '수정 저장' : '템플릿 추가'}
          </Button>
          {editingTemplate ? (
            <Button onClick={onCancelEdit} type="button" variant="ghost">
              취소
            </Button>
          ) : null}
        </div>
      </form>

      <div className="user-template-stack">
        {userTemplates.length === 0 ? (
          <p className="empty-state">저장된 사용자 템플릿이 없습니다.</p>
        ) : (
          userTemplates.map((template) => (
            <div className="user-template-row" key={template.id}>
              <button onClick={() => onSelectTemplate(template.id)} type="button">
                <strong>{template.title}</strong>
                <span>{template.category}</span>
              </button>
              <div>
                <Button
                  onClick={() => onEditTemplate(template.id)}
                  type="button"
                  variant="ghost"
                >
                  수정
                </Button>
                <Button
                  onClick={() => onDeleteTemplate(template.id)}
                  type="button"
                  variant="danger"
                >
                  삭제
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
