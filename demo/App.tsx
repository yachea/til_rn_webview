import React, { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
// 컴포넌트 JS 자리
const App = () => {
  const webViewUrl = 'https://bab-mu.vercel.app/';

  // back 키 처리
  useEffect(() => {
    const backAction = () => {
      Alert.alert('앱 종료', '앱을 종료하시겠습니까?', [
        { text: '취소', onPress: () => null, style: 'cancel' },
        { text: '종료', onPress: () => BackHandler.exitApp() },
      ]);
      return true; // 기본 뒤로가기 방지
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    // 컴포넌트 클린업 함수
    return () => backHandler.remove(); // 앱 종료시 리스터 정리
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <WebView
        style={style.webview}
        source={{ uri: webViewUrl }} // 웹뷰에 보여줄 URL 주소
        startInLoadingState={true} // 웹뷰가 로딩중인 인디케이터 표시
        renderLoading={() => (
          // 웹뷰 로딩 중 표시될 로딩인디케이터 컴포넌트
          <View style={style.loadingContainer}>
            {/* 로딩 스피너 컴포넌트 : 내장되어있음. */}
            <ActivityIndicator size={'large'} color={'#0fe256c8'} />
          </View>
        )}
        // SplashScreen 적용하기
        onLoadEnd={() => {
          console.log('로딩완료');
          setTimeout(() => {
            SplashScreen.hide();
          }, 1000);
        }}
      />
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
  // 로딩영역
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default App;
