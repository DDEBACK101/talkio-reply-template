import { useMemo, useState } from 'react'
import './App.css'
import { DashboardHeader } from './components/layout/DashboardHeader'
import { GeneratedReply } from './components/templates/GeneratedReply'
import { ReplyComposer } from './components/templates/ReplyComposer'
import { TemplateList } from './components/templates/TemplateList'
import { TemplateManager } from './components/templates/TemplateManager'
import { defaultTemplates } from './data/defaultTemplates'
import { useUserTemplates } from './hooks/useUserTemplates'
import type { ReplyInput } from './types/template'
import { renderReply } from './utils/templateRenderer'

function App() {
  const {
    addTemplate,
    deleteTemplate,
    updateTemplate,
    userTemplates,
  } = useUserTemplates()
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    defaultTemplates[0].id,
  )
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(
    null,
  )
  const [replyInput, setReplyInput] = useState<ReplyInput>({
    learnerName: '',
    details: '',
  })

  const templates = useMemo(
    () => [...defaultTemplates, ...userTemplates],
    [userTemplates],
  )
  const selectedTemplate =
    templates.find((template) => template.id === selectedTemplateId) ??
    templates[0]
  const generatedReply = renderReply(selectedTemplate, replyInput)

  const handleDeleteTemplate = (templateId: string) => {
    deleteTemplate(templateId)

    if (selectedTemplateId === templateId) {
      setSelectedTemplateId(defaultTemplates[0].id)
    }

    if (editingTemplateId === templateId) {
      setEditingTemplateId(null)
    }
  }

  return (
    <main className="app-shell">
      <DashboardHeader
        totalTemplates={templates.length}
        userTemplateCount={userTemplates.length}
      />
      <div className="workspace-grid">
        <TemplateList
          onSelect={setSelectedTemplateId}
          selectedTemplateId={selectedTemplate.id}
          templates={templates}
        />
        <div className="main-stack">
          <ReplyComposer
            input={replyInput}
            onInputChange={setReplyInput}
            selectedTemplate={selectedTemplate}
          />
          <GeneratedReply reply={generatedReply} />
          <TemplateManager
            editingTemplateId={editingTemplateId}
            onAddTemplate={addTemplate}
            onCancelEdit={() => setEditingTemplateId(null)}
            onDeleteTemplate={handleDeleteTemplate}
            onEditTemplate={setEditingTemplateId}
            onSelectTemplate={setSelectedTemplateId}
            onUpdateTemplate={updateTemplate}
            userTemplates={userTemplates}
          />
        </div>
      </div>
    </main>
  )
}

export default App
