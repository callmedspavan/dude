import {DefaultTheme} from '@react-navigation/native';
import defaultStyles from '../Config/defaultStyles';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.colors.primary,
    background: defaultStyles.colors.white,
  },
};
