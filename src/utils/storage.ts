import type { ReplyTemplate } from '../types/template'

const USER_TEMPLATES_KEY = 'talkio:user-templates'

const isReplyTemplate = (value: unknown): value is ReplyTemplate => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const template = value as Record<string, unknown>

  return (
    typeof template.id === 'string' &&
    typeof template.title === 'string' &&
    typeof template.category === 'string' &&
    typeof template.description === 'string' &&
    typeof template.subject === 'string' &&
    typeof template.body === 'string' &&
    template.source === 'user'
  )
}

export const loadUserTemplates = (): ReplyTemplate[] => {
  try {
    const stored = localStorage.getItem(USER_TEMPLATES_KEY)

    if (!stored) {
      return []
    }

    const parsed: unknown = JSON.parse(stored)

    return Array.isArray(parsed) ? parsed.filter(isReplyTemplate) : []
  } catch {
    return []
  }
}

export const saveUserTemplates = (templates: ReplyTemplate[]) => {
  localStorage.setItem(USER_TEMPLATES_KEY, JSON.stringify(templates))
}
