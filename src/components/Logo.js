import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo.png';
const Logo = () => {
  return <Image source={logo} style={logostyles.logo} />;
};

const logostyles = StyleSheet.create({
  logo: {
    marginTop: 40,
    width: 250,
    resizeMode: 'contain',
  },
});

export default Logo;
