import { Dimensions } from 'react-native'

export default class Size {

  static toDp(px) {
    return px * Dimensions.get('window').width / 750;
  }
}


if (typeof window.$Size === 'undefined') window.$Size = Size;

console.log(window.$Size);
