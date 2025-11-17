# React Native

## 1. 기본상식

- Android App 개발시 `Native 로 개발` : Java, Kotlin 등 (윈도우, Mac, Linux)
- IOS App 개발시 `Native 로 개발` : Object-C, Swift 등 (윈도우 X, Mac, Linux X)
- Hybrid 앱 : `웹 앱 + Native 의 일반 기능` (앱 마켓에 등록 가능)
- 웹 앱 : `HTML, CSS, JavaScript` (앱 마켓에 등록 불가)

## 2. 정보 전달 및 마켓등록을 위한 추천 솔루션

- 공통적으로 IOS, Android 개발 가능
- `Flutter` : 구글의 `Dart` 언어로 개발
- `React Native` : `React, html, css, ts, 자체 컴포넌트` 로 개발 (개념상 하이브리드)

## 3. RN 은 제작 도구 종류

- Expo : 자료 정리 및 활용이 쉽다.
- `React Native Cli`

## 4. choco 환경 설정

- 최신 버전은 절대로 배제하고, 안정화 버전을 사용함.
- https://velog.io/@it-ju/React-native-cli-개발환경-세팅하기
- https://reactnative.dev/docs/set-up-your-environment

### 4.1. choco 설치 및 환경 확인

- 윈도우 검색 > `power shell` 관리자 모드로 실행
- https://chocolatey.org/install
- 아래 문장을 powerShell 에 입력후 엔터

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

### 4.2. 설치 오류 발생시

- 문제1

```bash
choco : 'choco' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 이름이 정확
한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.
위치 줄:1 문자:1
+ choco
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (choco:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

- 문제 해결1

```bash
Set-ExecutionPolicy RemoteSigned
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

### 5.4. SDK Tools 세팅

- Android SDK Buil-Tools 36-rc5
- NDK
- CMake
- Android Emulator
- Android Emulator hypervisor driver
- Android SDK Platform-Tools
- Google Play Service
