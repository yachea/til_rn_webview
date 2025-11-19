# Splash Screen (시작화면)

- 마켓 등록시 필수 요소
- https://til-choonham.tistory.com/530
- https://github.com/crazycodeboy/react-native-splash-screen
- https://www.npmjs.com/package/react-native-splash-screen

## 1. 설치

```bash
npm i react-native-splash-screen
```

## 2. android (MainActivity.java) 수정

- `/android/app/src/main/java/com/MainActivity.kt`
- `Kotlin 버전`

```txt
package com.demo

// 추가
import android.os.Bundle

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

// 추가
import org.devio.rn.splashscreen.SplashScreen


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "demo"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  // 추가
  override fun onCreate(savedInstanceState: Bundle?) {
      SplashScreen.show(this)
      super.onCreate(savedInstanceState)
  }
}

```

- `/android/app/src/main/java/com/앱이름/MainActivity.java`
- `java 버전`

```java
package com.rntil;

// 추가된 소스
import android.os.Bundle; // here

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitecgittureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

// 추가된 소스
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rntil";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }

  // 추가된 소스
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
  }

}
```

## 3. Splash Screen 용 이미지

- `900 * 900 png` 파일 추천

### 3.1. 배치장소(resource 폴더)

- `/android/app/src/main/res/layout 폴더` 생성
- `/android/app/src/main/res/layout/launch_screen.xml 파일` 생성

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent">
    <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
</RelativeLayout>
```

### 3.2. colors.xml 파일 생성 배치

- `/android/app/src/main/res/values/colors.xml 파일` 생성

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_dark">#000000</color>
</resources>
```

### 3.3. launch_screen.png 배치함

- `/android/app/src/main/res/drawable/` 붙여넣기

## 4. 적용해보기

- `App.tsx`적용

```tsx
// SplashScreen 적용하기
onLoadEnd={() => {
  console.log('로딩완료');
  setTimeout(() => {
    SplashScreen.hide();
  }, 1000);
}}
```

## 5. 최신 버전에 반영함.

### 5.1. 다른 버전은 대응 필요. (지금 프로젝트에만 맞춤 진행)

- `/android/gradle.properties` 수정 진행

```txt
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
# org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the
# Android operating system, and which are packaged with your app's APK
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true
# 옛날 npm 라이브러리 때문에 추가함.
android.enableJetifier=true

# Use this property to specify which architecture you want to build.
# You can also override it from the CLI using
# ./gradlew <task> -PreactNativeArchitectures=x86_64
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.
# This will allow you to use TurboModules and the Fabric render in
# your application. You should enable this flag either if you want
# to write custom TurboModules/Fabric components OR use libraries that
# are providing them.
newArchEnabled=true

# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true

# Use this property to enable edge-to-edge display support.
# This allows your app to draw behind system bars for an immersive UI.
# Note: Only works with ReactActivity and should not be used with custom Activity.
edgeToEdgeEnabled=false
```

- 반드시 청소해요.
- 다시 실행

# Icon 배치

- https://icon.kitchen
- https://www.appicon.co

## 1. 아이콘 파일 배치

- `/android/app/src/res/ `붙여줌
- android 관련 파일을 폴더 로 덮어씌워줌.

# Back 키 처리

- `App.tsx`

```tsx
// back키 처리
useEffect(() => {
  const backAction = () => {
    Alert.alert("앱 종료", "앱을 종료하시겠습니까?", [
      { text: "취소", onPress: () => null, style: "cancel" },
      { text: "종료", onPress: () => BackHandler.exitApp() },
    ]);
    return true; // 기본 뒤로가기 방지
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  // 컴포넌트 클린업 함수
  return () => backHandler.remove(); // 앱 종료시 리스너 정리
}, []);
```

# 파일명.apk 추출하기

- 마켓등록은 파일명.aab 파일이 있어야 합니다.
- 테스트용 파일은 파일명.apk 로 생성함.

```bash
cd android
./gradlew assembleRelease
```

- 생성되는 파일의 경로
- `/android/app/build/outputs/apk/debug/app-debug.apk` 활용가능
- `/android/app/build/outputs/apk/release/app-release.apk` 활용가능
- QR 생성하기(https://me-qr.com/ko/qr-code-generator/link)
