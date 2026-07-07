import type { ReplyTemplate } from '../types/template'

export const defaultTemplates: ReplyTemplate[] = [
  {
    id: "default-login-error",
    title: "로그인 오류",
    category: "계정",
    description: "비밀번호, 계정 상태, 소셜 로그인 등 로그인 문제 안내",
    subject: "[Talkio] {learnerName}님 로그인 오류 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

로그인 이용에 불편을 드려 죄송합니다.
문의해주신 상황은 아래 내용으로 확인했습니다.

{details}

먼저 앱을 완전히 종료한 뒤 다시 실행해주시고, 네트워크 연결 상태를 확인한 후 다시 로그인해주시기 바랍니다. 비밀번호 입력이 어려운 경우 로그인 화면의 비밀번호 재설정을 이용해주세요.

위 방법으로도 해결되지 않으면 사용 중인 기기명, 앱 버전, 오류 화면 캡처를 함께 보내주시면 추가로 확인하겠습니다.

감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
  {
    id: "default-speech-recognition-error",
    title: "음성 인식 오류",
    category: "학습 기능",
    description: "마이크 권한, 발화 인식 실패, 주변 소음 관련 안내",
    subject: "[Talkio] {learnerName}님 음성 인식 오류 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

음성 인식 기능 이용 중 불편을 겪으신 점 죄송합니다.
확인해주신 상황은 다음과 같습니다.

{details}

먼저 기기의 마이크 권한이 Talkio 앱에 허용되어 있는지 확인해주시기 바랍니다. 또한 주변 소음이 큰 환경에서는 인식 정확도가 낮아질 수 있어 조용한 장소에서 다시 시도해보시는 것을 권장드립니다.

앱을 최신 버전으로 업데이트한 뒤에도 동일한 문제가 반복된다면, 문제가 발생한 학습 단계와 오류 화면 또는 녹음 상황을 알려주세요. 담당 부서에서 추가 확인하겠습니다.

감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
  {
    id: "default-ai-voice-quality",
    title: "AI 음성 품질 오류",
    category: "AI 음성",
    description: "AI 음성이 끊기거나 어색하게 들리는 상황 안내",
    subject: "[Talkio] {learnerName}님 AI 음성 품질 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

AI 음성 품질로 인해 학습에 불편을 드려 죄송합니다.
말씀해주신 상황은 아래와 같이 접수했습니다.

{details}

AI 음성은 네트워크 상태와 기기 성능에 따라 일시적으로 끊기거나 재생 품질이 낮아질 수 있습니다. 우선 안정적인 Wi-Fi 환경에서 앱을 다시 실행한 뒤 동일 학습을 재생해주시기 바랍니다.

특정 문장이나 특정 학습 콘텐츠에서만 문제가 반복된다면 해당 화면명과 문장을 알려주세요. 콘텐츠와 음성 생성 상태를 확인해 개선하겠습니다.

감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
  {
    id: "default-app-install",
    title: "앱 설치 문의",
    category: "설치",
    description: "앱 다운로드, 설치 실패, 지원 기기 관련 안내",
    subject: "[Talkio] {learnerName}님 앱 설치 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

Talkio 앱 설치와 관련해 문의해주셔서 감사합니다.
확인해주신 상세 상황은 다음과 같습니다.

{details}

Talkio AI 는 브라우저에서 직접 사용하거나 휴대폰에 앱으로 설치하여 빠르게 액세스 할 수 있습니다.
Taklio AI는 웹 앱방식을 사용하기 때문에 학습자님의 사용 기종을 알려주시면 설치영상을 첨부하여 안내드리겠습니다.

감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
  {
    id: "default-learning-records",
    title: "학습 기록/수료율 문의",
    category: "학습 관리",
    description: "학습 이력, 피드백, 리포트 확인 방법 안내",
    subject: "[Talkio] {learnerName}님 학습 기록 및 피드백 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

학습 기록 및 피드백 확인과 관련해 문의해주셔서 감사합니다.
남겨주신 내용은 아래와 같이 확인했습니다.

{details}

학습 기록은 앱 내 진도 탭 과 예상 수료율은 로그인 화면 에서 확인하실 수 있습니다. 학습 완료 직후에는 기록 반영에 시간이 조금 걸릴 수 있으니 잠시 후 다시 확인해주시기 바랍니다.


감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
  {
    id: "default-sso-login",
    title: "sso 사용 문의 건",
    category: "설치",
    description: "sso 로그인 관련 안내",
    subject: "[Talkio] {learnerName}님 sso 로그인 문의 답변드립니다",
    body: `안녕하세요, {learnerName}님.
Talkio AI 지원센터입니다.

sso 로그인과 관련해 문의해주셔서 감사합니다.
남겨주신 내용은 아래와 같이 확인했습니다.

{details}

Talkio AI 는 SSO 연동 기반으로 제공되므로,
수강생 계정 정보가 암호화된 연동 방식으로 처리되어
Talkio AI 사이트에서 직접 로그인하는 것은 지원되지 않습니다.

또한 학습 이력 및 수료 데이터가 연동되는 방식으로 운영되고 있어,
반드시 LMS를 통하여 접속해 주셔야 합니다.

번거로우시더라도 정확한 학습 반영을 위해
LMS의 Talkio AI 과정을 선택하여 이용 부탁드립니다.


감사합니다.
Talkio AI 지원센터 드림`,
    source: "default",
  },
];
