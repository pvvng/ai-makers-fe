# 2025 AI_MAKERS_PROJECT - Frontend

## 컨벤션

### 브랜치

| 브랜치  | 용도                    | 기준 브랜치 | 병합 대상     | 이름 형식 예시       |
| ------- | ----------------------- | ----------- | ------------- | -------------------- |
| main    | 최종 배포 버전          | -           | -             | main                 |
| develop | 개발 작업의 중심 브랜치 | -           | main          | develop              |
| feature | 새로운 기능 개발        | develop     | develop       | feature/login-page   |
| release | 배포 준비 (QA, 테스트)  | develop     | main, develop | release/v1.0.0       |
| hotfix  | 긴급 버그 수정          | main        | main, develop | hotfix/fix-login-bug |

### 커밋 메시지

| 구분자   | 작업 유형                  | 예시                                               |
| -------- | -------------------------- | -------------------------------------------------- |
| feat     | 새로운 기능 구현           | feat: 로그인 화면 UI 생성                          |
| fix      | 버그 수정                  | fix: 로그인 실패 시 발생하는 Exception 에러 핸들링 |
| design   | 사용자 UI 디자인 변경      | design: 로그인 화면 Container 크기 10px 조정       |
| style    | 코드 포맷 변경             | style: 세미 콜론 누락 수정                         |
| refactor | 코드 리팩토링              | refactor: 유효성 검사 커스텀 훅으로 분리           |
| docs     | 문서 (또는 주석) 관련 작업 | docs: 로그인 API 주석 추가                         |
| chore    | 기타 작업                  | chore: 소스맵 제거                                 |
| test     | 테스트 코드 추가 및 수정   | test: 로그인 테스트 코드 추가                      |
| branch   | 브랜치 추가 및 병합        | branch: 로그인 UI 브런치 추가 (#branchID)          |

### PR 작성

#### 구현 및 변경 사항

- ex) 로그인 시, 구글 소셜 로그인 기능을 추가했습니다.

#### 기타

- ex) 페이지 디자인이 깨지는 현상이 있습니다. 검토해주시면 감사하겠습니다.

#### 테스트 결과

- ex) 결과물에 대한 스크린샷, GIF, 혹은 라이브 데모가 가능하도록 샘플API를 첨부 등.

#### 2025-01-25 

- 목업 데이터 및 api 명세서 필요