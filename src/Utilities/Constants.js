import {Dimensions, Platform} from 'react-native';
export const FONT_SIZE = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 18,
  xLarge: 25,
};
export const windowWidth = Dimensions.get('window').width;
export const IS_IOS = Platform.OS === 'ios';
