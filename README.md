# You Dont Know Fe Yet : @ydkfe

> Frontend Study Monorepo

frontend 학습을 위한 monorepo project입니다.<br/>
`yarn berry Workspaes` 를 사용하여 여러 frontend project를 효율적으로 관리합니다.

## Project 구조

```plaintext
root/
├── .vscode/
├── .yarn/                 # yarn berry 관련 파일들
├── node_modules
├── packages/              # project들이 위치하는 디렉토리
│   ├── daily-fe/          # fe TIL
│   │   ├── src/
│   │   ├── package.json
│   │   └── vite.config.ts
│   └── [향후 추가될 project들]
├── .gitignore
├── .yarnrc.yml
├── package.json           # root package.json
└── yarn.lock
```

## 기술 스택

- **Package Manager**: yarn berry

## monorepo 설정 방법

1. yarn berry 설정

```bash
# 전역으로 yarn 설치
npm install -g yarn

# yarn berry로 업그레이드
yarn set version berry

# nodeLinker를 node_modules 모드로 설정
echo "nodeLinker: node-modules" > .yarnrc.yml
```

2. monorepo 초기화

```bash
# package.json 생성
yarn init -y

# package.json 수정 - workspaces 설정 추가
{
  "name": "@ydkfe/monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}

# packages 디렉토리 생성
mkdir packages
```

3. Vite project 추가

```bash
# packages 디렉토리로 이동
cd packages

# Vite project 생성
yarn create vite daily-fe --template react-ts

# project의 package.json name 수정
# packages/daily-fe/package.json
{
  "name": "@ydkfe/daily-fe",
  ...
}
```

4. 의존성 설치

```bash
# 루트 디렉토리로 이동
cd ..

# 모든 워크스페이스의 의존성 설치
yarn install
```

5. VSCode 개발 환경 설정

```bash
# VSCode용 SDK 설치 (TypeScript, ESLint 등의 도구 지원)
yarn dlx @yarnpkg/sdks vscode
```

> VSCode를 사용하는 경우, TypeScript 파일을 열 때 "Allow" 또는 "Allow Workspace" 버튼을 클릭하여 project의 TypeScript 버전을 사용하도록 설정하세요.<br/>
> -> 정확한 타입 체크와 자동완성을 제공합니다

## 시작하기

1. 저장소 클론

```bash
git clone [your-repository-url]
cd [repository-name]
```

2. 의존성 설치

```bash
yarn install
```

3. project 실행

```bash
# daily-fe project 실행
yarn workspace @ydkfe/daily-fe dev
```

## 새 project 추가하기

1. packages 디렉토리 안에 새 project 생성 (vite 사용할 경우)

```bash
cd packages
yarn create vite [project-name] --template react-ts
```

2. 해당 project의 package.json에서 name 수정

```json
{
  "name": "@ydkfe/[project-name]"
}
```

3. 루트 디렉토리에서 의존성 설치

```bash
yarn install
```

## yarn berry 사용 이유

- 효율적인 의존성 관리
- 빠른 설치 속도
- 일관된 개발 환경
- 작업 공간(workspace) 기능을 통한 project 간 코드 공유 용이

## 디렉토리 구조 설명

### `.yarn/`

- `releases/`: yarn berry 실행 파일
- `plugins/`: yarn 플러그인
- `cache/`: 의존성 캐시

### `packages/`

각각의 frontend project가 위치하는 디렉토리입니다.<br/>
각 project는 독립적으로 실행될 수 있으며, 공통 의존성은 루트에서 관리됩니다.

## 워크스페이스 명령어

```bash
# 특정 project 의존성 추가
yarn workspace @ydkfe/[project-name] add [package-name]

# 특정 project 개발 서버 실행
yarn workspace @ydkfe/[project-name] dev

# 특정 project 빌드
yarn workspace @ydkfe/[project-name] build
```

## 주의사항

- 각 project의 package.json name 필드는 `@ydkfe/[project-name]` 형식을 따릅니다.
- 공통으로 사용되는 의존성은 루트 package.json에 추가합니다.
- 이 project는 다음과 같은 이유로 Zero-Installs 대신 전통적인 node_modules 방식을 사용합니다:

  - **빠른 시작과 간편한 설정**: frontend 학습이 주 목적이므로, 추가적인 설정 없이 바로 시작할 수 있는 환경이 필요합니다.
  - **더 나은 호환성**: Vite와 같은 빌드 도구 및 다양한 frontend 라이브러리들과의 호환성이 보장됩니다.

따라서 node_modules와 .pnp.\* 파일은 .gitignore에 포함되어 있습니다.
