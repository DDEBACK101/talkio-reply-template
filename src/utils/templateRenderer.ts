import type {
  GeneratedReply,
  ReplyInput,
  ReplyTemplate,
} from '../types/template'

const fallbackValue = {
  learnerName: '학습자',
  details: '상세 상황이 입력되지 않았습니다.',
}

const applyTokens = (content: string, input: ReplyInput) => {
  const learnerName = input.learnerName.trim() || fallbackValue.learnerName
  const details = input.details.trim() || fallbackValue.details

  return content
    .replaceAll('{learnerName}', learnerName)
    .replaceAll('{details}', details)
}

export const renderReply = (
  template: ReplyTemplate,
  input: ReplyInput,
): GeneratedReply => ({
  subject: applyTokens(template.subject, input),
  body: applyTokens(template.body, input),
})
