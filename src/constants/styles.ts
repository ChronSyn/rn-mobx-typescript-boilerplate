import {StyleSheet} from 'react-native';
import {colors} from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND.PRIMARY,
    margin: 10
  },
  welcome: {
    color: colors.CONTENT.PRIMARY,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.CONTENT.PRIMARY,
    marginBottom: 5,
  },
  button: {
    backgroundColor: colors.BACKGROUND.SECONDARY,
    borderRadius: 8
  },
  buttonText: {
    color: colors.CONTENT.SECONDARY,
    fontSize: 12,
    margin: 10
  },
});

export default styles;