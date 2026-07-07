import type { ReplyTemplate } from '../../types/template'

type TemplateListProps = {
  selectedTemplateId: string
  templates: ReplyTemplate[]
  onSelect: (templateId: string) => void
}

export function TemplateList({
  selectedTemplateId,
  templates,
  onSelect,
}: TemplateListProps) {
  return (
    <aside className="panel template-list-panel">
      <div className="panel-heading">
        <p className="eyebrow">문의 유형</p>
        <h2>템플릿 선택</h2>
      </div>
      <div className="template-list" role="list">
        {templates.map((template) => (
          <button
            className={`template-item ${
              selectedTemplateId === template.id ? 'is-selected' : ''
            }`}
            key={template.id}
            onClick={() => onSelect(template.id)}
            type="button"
          >
            <span className="template-item-topline">
              <span>{template.category}</span>
              <span>{template.source === 'default' ? '기본' : '사용자'}</span>
            </span>
            <strong>{template.title}</strong>
            <small>{template.description}</small>
          </button>
        ))}
      </div>
    </aside>
  )
}
