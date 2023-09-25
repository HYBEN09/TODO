# 📝 TODOLIST

## [원티드 프리온보딩 프론트엔드 인턴쉽 사전과제](https://github.com/walking-sunset/selection-task) 리팩토링

### 1. 과제 소개

- 목표 : 사전에 만들었던 '투두리스트' 리펙토링
- 작업 기간 : 2023.09.21 ~2023.09.25

### 2. 배포
- 배포 링크 `vercel` : https://todo-hyben09.vercel.app/

### 3. 기술 스택
`Vite` `React` `HTML5` `Tailwind CSS` `Javascript` `React Router` 

### 4. 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다. Node.js v19.0.0

(1) 다음 명령어를 사용하여 프로젝트를 clone 하거나,<br/>
   우측 상단의 Code 버튼 -> Download ZIP 를 눌러 프로젝트를 다운로드 하실 수 있습니다.
   ```
   git clone https://github.com/HYBEN09/TODO.git
   ```
(2) 프로젝트 실행에 필요한 패키지를 설치합니다.
   ```
   npm install
   ```

(3) 패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행합니다.
    ```
    npm start
    ```

### 5. 데모 영상

|     회원가입                         |      
| -------------------------------- |
| <img width="600" alt="image" src="https://github.com/HYBEN09/TODO/assets/104710243/196f96e2-a14a-4c1d-83ad-183c151a0b86">|


|          로그인              |
|-----------------------------------------------------|
|<img width="700" alt="image" src="https://github.com/HYBEN09/TODO/assets/104710243/d87e0a51-2e4f-4915-9dea-c104998831e2"> |

|         투두리스트              |
|-----------------------------------------------------|
|<img width="600" alt="image" src="https://github.com/HYBEN09/TODO/assets/104710243/2fe75b61-2867-4068-9f33-7ae6ebaef836"> |

|         다크모드            |
|-----------------------------------------------------|
|<img width="600" alt="image" src="https://github.com/HYBEN09/TODO/assets/104710243/5187c41f-6b23-4065-854b-0b87f92ec915"> |





### 🌲 프로젝트 구조
```bash
.
├── README.md
├── craco.config.js
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
│   ├── assets
│   │   ├── logo.svg
│   │   └── pre-oneboarding.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── components
│   │   ├── Auth
│   │   │   ├── SigninForm.jsx
│   │   │   └── SignupForm.jsx
│   │   ├── Todo
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.jsx
│   │   └── UI
│   │       ├── Button.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       └── Input.jsx
│   ├── context
│   │   ├── AuthContext.js
│   │   └── TodoContext.js
│   ├── hooks
│   │   ├── index.js
│   │   ├── useDarkMode.js
│   │   ├── useDocumentTitle.js
│   │   ├── useNavigation.js
│   │   └── useValidation.js
│   ├── httpClient
│   │   └── httpClient.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   ├── NotFound.jsx
│   │   ├── Signin.jsx
│   │   ├── Signup.jsx
│   │   └── Todo.jsx
│   ├── services
│   │   ├── AuthService.js
│   │   └── TodoService.js
│   └── storage
│       └── LocalStorage.js
└── tailwind.config.js
```
