# 프로젝트 생성

```bash
npx @react-native-community/cli init
```

```bash
How would you like to name the app? ... 영어소문자 프로젝트명
```

- `/프로젝트명` 폴더 자동 생성됨.
- 폴더 내부로 이동

```bash
 cd 프로젝트명
```

- `Web View` 설치

```bash
npm install react-native-webview
```

- 코드 정리(`/프로젝트명/android` 폴더로 이동)

```bash
cd android
./gradlew clean
```

- `상위 프로젝트 폴더`로 이동

```bash
cd ..
```

- `Adnroid Virtual Machine`을 먼저 실행 해 줌.
- 아래 명령은 `최초는 5~10분 걸림`

```bash
npx react-native run-android
```

- `Build Fail 발생시` 아래를 반복해서 실행해 봄.

```bash
cd android
./gradlew clean
```

```bash
cd ..
npx react-native run-android
```

- `Adnroid Virtual Machine 오류`라면
- 새로운 기기를 등록해서 테스트 해보자.

## 1. 기본 WebView 살펴보기

- `/App.tsx`

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
// 컴포넌트 JS 자리
const App = () => {
  const webViewUrl = 'https://bab-mu.vercel.app/member';
  return (
    <SafeAreaView style={style.container}>
      <WebView style={style.webview} source={{ uri: webViewUrl }} />
    </SafeAreaView>
  );
};
// 컴포넌트 CSS 오브젝트자리
const style = StyleSheet.create({
  // 전체 컨테이너 영역
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  // 웹뷰영역
  webview: {
    flex: 1,
  },
});

export default App;
```

## 2. 웹뷰에 로딩중인 상태를 표현하자.

- https://velog.io/@ttoottie/RN-데이터-로딩-UI를-자연스럽게-구성해보자

```bash
npm install @react-native-masked-view/masked-view react-native-linear-gradient --save
```
