import { useEffect, useMemo, useState } from 'react'
import type { ReplyTemplate, TemplateDraft } from '../types/template'
import { loadUserTemplates, saveUserTemplates } from '../utils/storage'

const createTemplateId = () =>
  `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export const useUserTemplates = () => {
  const [userTemplates, setUserTemplates] = useState<ReplyTemplate[]>(() =>
    loadUserTemplates(),
  )

  useEffect(() => {
    saveUserTemplates(userTemplates)
  }, [userTemplates])

  const actions = useMemo(
    () => ({
      addTemplate: (draft: TemplateDraft) => {
        const now = new Date().toISOString()
        const template: ReplyTemplate = {
          ...draft,
          id: createTemplateId(),
          source: 'user',
          createdAt: now,
          updatedAt: now,
        }

        setUserTemplates((current) => [template, ...current])
        return template
      },
      updateTemplate: (templateId: string, draft: TemplateDraft) => {
        const now = new Date().toISOString()

        setUserTemplates((current) =>
          current.map((template) =>
            template.id === templateId
              ? {
                  ...template,
                  ...draft,
                  updatedAt: now,
                }
              : template,
          ),
        )
      },
      deleteTemplate: (templateId: string) => {
        setUserTemplates((current) =>
          current.filter((template) => template.id !== templateId),
        )
      },
    }),
    [],
  )

  return {
    userTemplates,
    ...actions,
  }
}
