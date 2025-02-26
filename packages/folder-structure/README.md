# Folder Structure

## CRA
> Create React App 구조
```
my-app/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── package.json
  └── ...
```
👍 간단한 프로젝트에서 효율적

## 조금 더 체계적인 분리 위해 layer 별로 분리
```
my-app/
  ├── src/
  │   ├── components/
  │   ├── hooks/
  │   ├── utils/
  │   ├── views/ (or pages/)
  │   ├── App.js
  │   └── index.js
  └── ...
```

- layer 별 분리의 한계점
  - 파일 탐색의 비효율성
    - 특정 페이지에 관련된 작업을 할 때, views 폴더에서 페이지 컴포넌트를, hooks 폴더에서 관련 훅을, utils 폴더에서 유틸리티 함수를 찾아야함 -> 개발 흐름을 방해, 생산성 저하
  - 관련 코드의 분산
     - 논리적으로 함께 묶여야 할 코드들이 서로 다른 폴더에 분산되어 있어, 코드 간의 관계를 파악하기 어려움
  - 확장성 문제
     - 프로젝트 규모가 커질수록 각 폴더 내 파일이 증가하여 관리가 어려워짐
