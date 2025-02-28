import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Logo from './components/Logo';
import Navigation from './navigations/Navigation';
import SettingScreen from './screens/SettingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignUpScreen /> */}
      {/* <StatusBar style="dark" /> */}
      <Navigation>
        <SignInScreen />
      </Navigation>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
});
