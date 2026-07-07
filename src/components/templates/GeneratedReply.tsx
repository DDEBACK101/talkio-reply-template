import { useState } from 'react'
import type { GeneratedReply as GeneratedReplyType } from '../../types/template'
import { Button } from '../ui/Button'

type GeneratedReplyProps = {
  reply: GeneratedReplyType
}

export function GeneratedReply({ reply }: GeneratedReplyProps) {
  const [copied, setCopied] = useState(false)

  const copyReply = async () => {
    const text = `제목: ${reply.subject}\n\n${reply.body}`

    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="panel generated-panel">
      <div className="panel-heading generated-heading">
        <div>
          <p className="eyebrow">생성 결과</p>
          <h2>답변 메일</h2>
        </div>
        <Button onClick={copyReply} type="button" variant="primary">
          {copied ? '복사됨' : '답변 복사'}
        </Button>
      </div>
      <div className="reply-preview">
        <div>
          <span>제목</span>
          <p>{reply.subject}</p>
        </div>
        <div>
          <span>본문</span>
          <pre>{reply.body}</pre>
        </div>
      </div>
    </section>
  )
}
