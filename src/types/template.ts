export type TemplateSource = 'default' | 'user'

export type ReplyTemplate = {
  id: string
  title: string
  category: string
  description: string
  subject: string
  body: string
  source: TemplateSource
  createdAt?: string
  updatedAt?: string
}

export type TemplateDraft = Pick<
  ReplyTemplate,
  'title' | 'category' | 'description' | 'subject' | 'body'
>

export type ReplyInput = {
  learnerName: string
  details: string
}

export type GeneratedReply = {
  subject: string
  body: string
}
