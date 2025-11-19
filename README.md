# React Native

## 1. 기본 상식

- Android App 개발시 `Native 로 개발` : Java, Kotlin 등 (윈도우, Mac, Linux)
- IOS App 개발시 `Native 로 개발` : Object-C, Swift 등 (윈도우 X, Mac, Linux X)
- Hybrid 앱 : `웹 앱 + Native 의 일반 기능` (앱 마켓에 등록 가능)
- 웹 앱 : `HTML, CSS, JavaScript` (앱 마켓에 등록 불가)

## 2. 정보 전달 및 마켓등록을 위한 추천 솔루션

- 공통적으로 IOS, Android 개발 가능
- `Flutter` : 구글의 `Dart` 언어로 개발
- `React Native` : `React, html, css, ts, 자체 컴포넌트` 로 개발 (개념상 하이브리드)

## 3. RN 제작 도구 종류

- Expo : 자료정리 및 활용이 쉽다.
- `React Native Cli`

## 4. choco 환경 설정

- 최신 버전은 절대로 배제하고, 안정화 버전을 사용함.
- https://velog.io/@it-ju/React-native-cli-개발환경-세팅하기
- https://reactnative.dev/docs/set-up-your-environment

### 4.1. choco 설치 및 환경 확인

- 윈도우 검색 > `Power Shell` 관리자 모드로 실행
- https://chocolatey.org/install
- 아래 문장을 Power Shell 에 입력후 엔터

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

- 설치 후 확인

```bash
choco 엔터
```

- 결과 확인 : 버전 출력 꼭 확인

```bash
Chocolatey v2.5.1
Please run 'choco --help' or 'choco <command> --help' for help menu.
```

- JDK 설치 : Java Development Kit
- nodejs 가 없으면 아래 실행

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

- nodejs 가 있으면 아래를 실행함.

```bash
choco install -y microsoft-openjdk17
```

## 5. Android Studio 설치

### 5.1. 다운로드

- https://developer.android.com/studio?hl=ko
- 설치파일 다운로드 후 exe 를 실행함.
- 기본 설정 변경하지 말고 설치하자.

### 5.2. Android SDK 및 버전별 설치

- 최초 설치 이후 설정 화면 > `Welcome to Android` > 아래의 `More Action 메뉴` 선택
- `SDK Manager` 메뉴 진입

### 5.3. SDK Manger 관련

- `Show Package Details 체크` 활성

- Android API 35("VanillaIceCream")

```
  Android SDK Platform 35
  Intel x86_64 Atom System Image
  Google APIs Intel x86_64 Atom System Image
  Google Play Intel x86_64 Atom System Image
```

- Android 14.0("UpsideDownCake")

```
Android SDK Platform 34
Intel x86_64 Atom System Image
Google APIs Intel x86_64 Atom System Image
Google Play Intel x86_64 Atom System Image
```

- Android 13.0("Tiramisu")

```
Android SDK Platform 33
Intel x86_64 Atom System Image
Google APIs Intel x86_64 Atom System Image
Google Play Intel x86_64 Atom System Image
```

#### 2.4. SDK Tools 세팅

- Android SDK Buil-Tools 36-rc5
- NDK
- CMake
- Android Emulator
- Android Emulator hypervisor driver
- Android SDK Platform-Tools
- Google Play Service

### 5.4. Android SDK Location 를 복사해 둠.

```
C:\Users\user\AppData\Local\Android\Sdk
```

### 5.5. Android Virtual Device 설정

- 가상 안드로이드 기기를 테스트 하기 위한 에뮬레이터
- `시작화면 > More Action > Virtual Machine Manager 실행` 후 `기기 추가`
- `Pixcel 7` 선택 > 이름 적당히 줌. > Play 버튼 실행

## 6. Window 에서 JDK 를 인식하도록 `Path` 를 설정

### 6.1. `환경변수설정` 진입

- 윈도우 하단 툴바에서 `시스템 환경 변수 편집` 입력 후 검색(띄워쓰기)
- `시스템 환경 윈도우` 하단 > `환경변수...` 버튼 클릭
- `시스템 변수` 목록 > `새로만들기...` 버튼 클릭
- `변수이름` 항목 : `ANDROID_HOME` 정확히 타이핑
- `변수값` 항목 : `C:\Users\user\AppData\Local\Android\Sdk` 정확히 타이핑
- 확인 버튼으로 등록하기

### 6.2. `path` 추가 및 수정

- `시스템 변수` 목록 > `Path` 항목 선택 수정 또는 더블 클릭
- `환경 변수 편집` 윈도우가 출력됨.
- `새로만들기` 버튼 클릭.
- `%ANDROID_HOME%\platform-tools` 입력
- 확인 버튼 선택
- 여러 번의 확인 버튼으로 완료함.

### 6.3. 환경 설정 내용 확인

```bash
Get-ChildItem -Path Env:\     엔터
```

```bash
adb --version     엔터
```

### 6.4. PC 재부팅하기

## 7. React Native 프로젝트 생성

### 7.1. 절대로 한글 폴더 사용 금지

### 7.2. 절대로 특수문자가 포함된 앱 이름은 배제함.

### 7.3. 프로젝트 생성 명령

```bash
npx react-native@0.72.6 init 앱이름 --version 0.72.6
```

### 7.4. 프로젝트 실행 전 `Android Studio 실행` 후 `Device Virtual Machine 실행`하고 진행
