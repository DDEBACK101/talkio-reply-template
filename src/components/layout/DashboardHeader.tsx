type DashboardHeaderProps = {
  totalTemplates: number
  userTemplateCount: number
}

export function DashboardHeader({
  totalTemplates,
  userTemplateCount,
}: DashboardHeaderProps) {
  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">Talkio AI 지원센터</p>
        <h1>문의 답변 템플릿 생성기</h1>
      </div>
      <dl className="header-stats" aria-label="템플릿 현황">
        <div>
          <dt>전체</dt>
          <dd>{totalTemplates}</dd>
        </div>
        <div>
          <dt>사용자</dt>
          <dd>{userTemplateCount}</dd>
        </div>
      </dl>
    </header>
  )
}
